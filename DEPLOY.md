# 🚀 Deploy AISolutions Hub to Vercel

## Quick Deploy Steps

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository OR drag & drop the `ai-solutions-hub` folder
4. Vercel will auto-detect it as a static site
5. Click "Deploy"
6. You'll get a URL like: `https://ai-solutions-hub-xxxxx.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Navigate to project
cd /Users/ericmasmela/digital-hermit/projects/ai-solutions-hub

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? ai-solutions-hub
# - Directory? ./
# - Override settings? No
```

### Option 3: Connect GitHub Repo

1. Push `ai-solutions-hub` to GitHub
2. In Vercel, click "Import Project"
3. Select your GitHub repo
4. Vercel will auto-deploy on every push

## After Deployment

You'll get a free Vercel URL like:
- `https://ai-solutions-hub.vercel.app` (or similar)

## Custom Domain (Optional)

If you want to use `ai-solutions-hub.com`:
1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add `ai-solutions-hub.com`
4. Update DNS records as instructed

## Files Needed

The project already has:
- ✅ `index.html` (main page)
- ✅ `styles.css` (styling)
- ✅ `script.js` (functionality)

No additional config needed - Vercel will serve it as a static site!

