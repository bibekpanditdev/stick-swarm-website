# Stick Swarm website - setup & ads guide

## 1. Replace placeholders (search all files)
- `https://bibekpandit.me`  -> your real domain (index.html, other pages, sitemap.xml, robots.txt)
- `your@email.com`         -> your real email (contact.html, privacy-policy.html)

## 2. Deploy (free options)
Upload the whole folder to Netlify, Cloudflare Pages, or Vercel (drag & drop). Add your custom domain (HTTPS is automatic).
Note: GitHub Pages also works. The game uses a non-threaded Godot export, so no special headers are required.

## 3. SEO checklist
1. Open https://search.google.com/search-console, add your domain, verify.
2. Submit `https://bibekpandit.me/sitemap.xml`.
3. Use "URL Inspection" -> Request indexing for the homepage.
4. Do the same in Bing Webmaster Tools.
5. Share the game on Reddit (r/WebGames, r/playmygame), itch.io, Newgrounds, Crazy Games / Poki submissions to get backlinks.
6. Keep adding content (tips, guides, update logs) - more useful text ranks better.

## 4. Ads (Google AdSense)
1. Publish the site first. Wait until it has a domain, the Privacy Policy, About, Contact pages (already included).
2. Apply at https://adsense.google.com and paste the verification snippet in the `<head>` of every page.
3. After approval: put your publisher line in `ads.txt`, and replace each `<!-- AD SLOT -->` div in index.html with the ad unit code from AdSense.
4. Do not put ads on top of the game or in the iframe; keep them above/below it. Never click your own ads.
5. Game-specific networks with better game RPM: Google AdSense for Games (H5 Games Ads), GameMonetize, Poki, CrazyGames (they host your game and pay revenue share).
6. EU/UK visitors need a cookie consent banner (Google's free Funding Choices CMP in AdSense).
