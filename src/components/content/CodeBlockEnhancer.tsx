'use client'

import { useEffect } from 'react'

export function CodeBlockEnhancer() {
  useEffect(() => {
    const article = document.querySelector('.article-prose')
    if (!article) return

    const codeBlocks = article.querySelectorAll('pre')

    codeBlocks.forEach((pre) => {
      if (pre.querySelector('.copy-btn')) return

      const wrapper = document.createElement('div')
      wrapper.className = 'code-block-wrapper'
      pre.parentNode?.insertBefore(wrapper, pre)
      wrapper.appendChild(pre)

      const btn = document.createElement('button')
      btn.className = 'copy-btn'
      btn.textContent = 'Copy'
      btn.setAttribute('aria-label', 'Copy code')

      btn.addEventListener('click', async () => {
        const code = pre.querySelector('code')?.textContent || pre.textContent || ''
        try {
          await navigator.clipboard.writeText(code)
          btn.textContent = 'Copied!'
          btn.classList.add('copied')
          setTimeout(() => {
            btn.textContent = 'Copy'
            btn.classList.remove('copied')
          }, 2000)
        } catch {
          btn.textContent = 'Failed'
          setTimeout(() => {
            btn.textContent = 'Copy'
          }, 2000)
        }
      })

      wrapper.appendChild(btn)
    })
  }, [])

  return null
}
