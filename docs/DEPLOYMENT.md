# Deployment Guide

## Deploy to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
  
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Update `vite.config.js` to set the base path:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/agentic-experience-layer/', // Replace with your repo name
  server: {
    port: 3000,
    open: true
  }
})
```

3. Push to GitHub:

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

4. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Save

### Option 2: Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the production build
# Upload the contents to your hosting provider
```

## Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to configure your project

## Deploy to Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

3. Or drag and drop the `dist` folder to Netlify's web interface

## Deploy to AWS S3 + CloudFront

1. Build the project:
```bash
npm run build
```

2. Upload to S3:
```bash
aws s3 sync dist/ s3://your-bucket-name
```

3. Invalidate CloudFront cache:
```bash
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## Environment Variables

For production deployments, you may want to configure:

Create `.env.production`:
```env
VITE_API_ENDPOINT=https://api.your-domain.com
VITE_ENABLE_ANALYTICS=true
```

Access in your code:
```javascript
const apiEndpoint = import.meta.env.VITE_API_ENDPOINT
```

## Build Optimization

For production builds, ensure:

1. Dependencies are optimized:
```bash
npm run build
```

2. Check bundle size:
```bash
npm run build -- --stats
```

3. Analyze bundle:
```bash
npx vite-bundle-visualizer
```

## Continuous Deployment

### GitHub Actions (All Platforms)

The workflow file above works for GitHub Pages. For other platforms, modify the deployment step:

**Vercel:**
```yaml
- name: Deploy to Vercel
  run: npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

**Netlify:**
```yaml
- name: Deploy to Netlify
  run: npx netlify-cli deploy --prod --auth=${{ secrets.NETLIFY_AUTH_TOKEN }}
```

## Post-Deployment Checklist

- [ ] Test all demo scenarios
- [ ] Verify responsive design on mobile
- [ ] Check browser console for errors
- [ ] Test across different browsers (Chrome, Firefox, Safari)
- [ ] Verify HTTPS is enabled
- [ ] Set up monitoring and analytics
- [ ] Configure custom domain (if applicable)

## Troubleshooting

**Build fails:**
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`
- Check Node version: `node -v` (should be 18+)

**Blank page after deployment:**
- Check base path in vite.config.js
- Verify build artifacts in dist/ folder
- Check browser console for errors

**Assets not loading:**
- Ensure base path matches your deployment URL
- Check CORS settings if using external API
- Verify asset paths are relative, not absolute
