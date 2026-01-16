#!/bin/bash
images=(
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/5e73642ba2128c3459c6a635_logo.svg"
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/61ad55cc2fe0f2eac74fa9a5_facebook.svg"
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/61ad55cd915b0a7dba16ca3a_twitter.svg"
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/61ad55cd77ae9c31066ff372_linkdin.svg"
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/68ff3558955d9eb7d2d13bf3_agrello-dot-tile.svg"
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/659faf66ae659cfbaeb49828_price-block-3.svg"
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/6818b3327cbd80c4c58c7964_2025-hero-image.avif"
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/68f340200ab9bba821a3f205_faq_illustation_xs.webp"
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/643ffb1cd99b572cc276a6c0_Agrello_logo.svg"
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/66ac920a7652ab5eeba064b9_macbooks-screenshot-folders.webp"
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/68189ed4929d512ce7b43874_pointer-arrow.svg"
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/681898d06f67a0240e00fe09_agrello-zigzag.svg"
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/68189590d432b3fdc3811c18_signature-mock-agrello.svg"
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/6818929f7182e7d06f91c4c6_agrello-blobs.svg"
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/6818a47fba6492d11cdf244b_does-it-work-4-me.svg"
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/663b76202d5d68e927b0c786_bulk-creation-illustration.webp"
  "https://cdn.prod.website-files.com/5e6237b884b74554e9aef4df/6818b2cf2800ec4bcc1b3f70_agrello_customers_may25.webp"
  "https://cdn-cookieyes.com/assets/images/poweredbtcky.svg"
  "https://cdn-cookieyes.com/assets/images/revisit.svg"
  "https://cdn-cookieyes.com/assets/images/close.svg"
)

for url in "${images[@]}"; do
  filename=$(basename "$url")
  echo "Downloading: $filename"
  curl -s -o "$filename" "$url"
done

echo "Done! Downloaded $(ls -1 | wc -l) images"
