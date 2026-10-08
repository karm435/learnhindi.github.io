# Learn Hindi website

Static site for https://learnhindi.karmafy.com.au: home page, privacy policy, support and acknowledgements. Plain HTML and CSS with no build step. App Store Connect uses `/privacy/` and `/support/`, and the app links to `/privacy/`, `/support/` and `/acknowledgements/` from Profile → Settings → About, so keep those paths.

## Publish on GitHub Pages

1. The site lives in https://github.com/karm435/learnhindi.github.io, with this folder as the repository root.
2. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
3. The `CNAME` file already sets the custom domain to `learnhindi.karmafy.com.au`. Confirm it under **Settings → Pages → Custom domain**.
4. At your DNS provider for `karmafy.com.au`, add a CNAME record: host `learnhindi`, value `<your-github-username>.github.io`.
5. Once the DNS check passes, tick **Enforce HTTPS**.
6. Optional: verify the domain under your GitHub account's **Settings → Pages** to stop anyone else claiming it.

`.nojekyll` makes GitHub serve the files exactly as they are.

## Preview locally

```bash
python3 -m http.server 4321 --directory Website
```

Then open http://127.0.0.1:4321. Pages use root-relative paths, so open them through a server rather than as files.

## Support email

The support address isn't written anywhere in the HTML. The **Show email address** button on the support and privacy pages builds it in the browser from the reversed `data-mail-user` and `data-mail-host` attributes, so crawlers reading the page source don't find it. To change the address, reverse the new user and host parts and update both pages.

## After the app is approved

- Replace the "Coming soon to the App Store" label in `index.html` with Apple's official Download on the App Store badge, from Apple's marketing resources, linked to the app's App Store URL.
- Add `<meta name="apple-itunes-app" content="app-id=YOUR_APP_ID">` to each page's head to show the Smart App Banner in Safari.

## Assets

- `assets/screens/*.jpg` are resized iPhone captures from `AppStore/Screenshots/source/raw/iphone`.
- `assets/audio/*.mp3` are the five approved Aarohi vowel recordings from `ui-preview/public/audio/hindi-vowels/`.
- `assets/og-image.png` is rendered from `AppStore/Screenshots/source/og-image.html` with `render-og.mjs`.
- Fonts: Tiro Devanagari Hindi and Mukta from Google Fonts. The privacy policy mentions this.
