#!/usr/bin/env npx ts-node

/**
 * Agrello Image Generator
 *
 * Uses Google Gemini API (Imagen 3) to generate brand-compliant images.
 *
 * Usage:
 *   npx ts-node scripts/generate-image.ts --prompt "description" --type hero --aspect 16:9
 *
 * Requirements:
 *   - GEMINI_API_KEY in .env.local
 */

import * as fs from 'fs'
import * as path from 'path'

// Parse command line arguments
function parseArgs(): {
  prompt: string
  type: string
  aspect: string
  output: string
} {
  const args = process.argv.slice(2)
  const result = {
    prompt: '',
    type: 'custom',
    aspect: '16:9',
    output: ''
  }

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--prompt':
        result.prompt = args[++i]
        break
      case '--type':
        result.type = args[++i]
        break
      case '--aspect':
        result.aspect = args[++i]
        break
      case '--output':
        result.output = args[++i]
        break
    }
  }

  return result
}

// Get aspect ratio dimensions
function getAspectRatio(aspect: string): { width: number; height: number } {
  const ratios: Record<string, { width: number; height: number }> = {
    '1:1': { width: 1024, height: 1024 },
    '16:9': { width: 1536, height: 864 },
    '4:3': { width: 1024, height: 768 },
    '9:16': { width: 864, height: 1536 },
    '21:9': { width: 1536, height: 640 }
  }
  return ratios[aspect] || ratios['16:9']
}

// Enhance prompt with Agrello brand context
function enhancePrompt(prompt: string, type: string): string {
  const brandContext = `Professional business imagery, clean modern aesthetic, blue and white color scheme, trustworthy and secure atmosphere`

  const typeContext: Record<string, string> = {
    hero: 'wide cinematic composition, dramatic lighting',
    thumbnail: 'focused composition, clear subject',
    icon: 'simple iconic design, minimal elements',
    social: 'engaging composition, social media friendly',
    banner: 'horizontal panoramic view',
    custom: ''
  }

  return `${prompt}. ${brandContext}. ${typeContext[type] || ''}`
}

// Generate filename from prompt
function generateFilename(prompt: string, type: string): string {
  const slug = prompt
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .slice(0, 40)
    .replace(/-+$/, '')

  const timestamp = Date.now()
  return `${type}-${slug}-${timestamp}.png`
}

async function main() {
  const args = parseArgs()

  if (!args.prompt) {
    console.error('Error: --prompt is required')
    console.log('Usage: npx ts-node scripts/generate-image.ts --prompt "description" --type hero --aspect 16:9')
    process.exit(1)
  }

  // Load API key from .env.local
  const envPath = path.join(process.cwd(), '.env.local')
  let apiKey = process.env.GEMINI_API_KEY

  if (!apiKey && fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8')
    const match = envContent.match(/GEMINI_API_KEY=(.+)/)
    if (match) {
      apiKey = match[1].trim()
    }
  }

  if (!apiKey) {
    console.error('Error: GEMINI_API_KEY not found')
    console.log('Please add GEMINI_API_KEY to .env.local')
    process.exit(1)
  }

  const outputDir = path.join(process.cwd(), 'public', 'images', 'generated')
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  const filename = args.output || generateFilename(args.prompt, args.type)
  const outputPath = path.join(outputDir, filename)
  const metadataPath = outputPath.replace('.png', '.json')

  const enhancedPrompt = enhancePrompt(args.prompt, args.type)
  const dimensions = getAspectRatio(args.aspect)

  console.log('Generating image...')
  console.log(`  Prompt: ${args.prompt}`)
  console.log(`  Enhanced: ${enhancedPrompt}`)
  console.log(`  Type: ${args.type}`)
  console.log(`  Aspect: ${args.aspect} (${dimensions.width}x${dimensions.height})`)
  console.log(`  Output: ${outputPath}`)

  try {
    // Use Gemini Imagen API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          instances: [
            {
              prompt: enhancedPrompt
            }
          ],
          parameters: {
            sampleCount: 1,
            aspectRatio: args.aspect.replace(':', ':'),
            personGeneration: 'ALLOW_ADULT',
            safetySetting: 'BLOCK_MEDIUM_AND_ABOVE'
          }
        })
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`API error: ${response.status} - ${errorText}`)
    }

    const data = await response.json()

    if (!data.predictions || data.predictions.length === 0) {
      throw new Error('No image generated')
    }

    // Decode base64 image
    const imageData = data.predictions[0].bytesBase64Encoded
    const imageBuffer = Buffer.from(imageData, 'base64')

    // Save image
    fs.writeFileSync(outputPath, imageBuffer)

    // Save metadata
    const metadata = {
      prompt: args.prompt,
      enhancedPrompt,
      type: args.type,
      aspect: args.aspect,
      dimensions,
      filename,
      generatedAt: new Date().toISOString(),
      model: 'imagen-3.0-generate-002'
    }
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2))

    console.log('\nSuccess!')
    console.log(`  Image: ${outputPath}`)
    console.log(`  Metadata: ${metadataPath}`)

  } catch (error) {
    console.error('\nGeneration failed:', error instanceof Error ? error.message : error)
    process.exit(1)
  }
}

main()
