# 🔧 DNS Configuration Guide for ai-solutions-hub.com

## Step 1: Check Domain Status in Vercel

1. **Open Vercel Dashboard:**
   - Go to: https://vercel.com/erics-projects-b395e20f/ai-solutions-hub/settings/domains
   - Or: https://vercel.com/dashboard → Select "ai-solutions-hub" → Settings → Domains

2. **Find Your Domain:**
   - Look for `ai-solutions-hub.com` in the list
   - Check the status (should show what DNS records are needed)

## Step 2: Get DNS Records from Vercel

In the Vercel dashboard, you'll see DNS records like:

**Option A: CNAME Record (Recommended)**
```
Type: CNAME
Name: @ (or blank/root)
Value: cname.vercel-dns.com
TTL: Auto or 3600
```

**Option B: A Record**
```
Type: A
Name: @ (or blank/root)
Value: 76.76.21.21
TTL: Auto or 3600
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto or 3600
```

## Step 3: Add DNS Records at Your Domain Registrar

### Common Registrars:

**GoDaddy:**
1. Log in → My Products → DNS
2. Click "Add" to add new record
3. Enter the values from Vercel
4. Save

**Namecheap:**
1. Domain List → Manage → Advanced DNS
2. Add New Record
3. Enter values from Vercel
4. Save

**Google Domains:**
1. My Domains → DNS
2. Custom Records → Add
3. Enter values from Vercel
4. Save

**Cloudflare:**
1. Select domain → DNS → Records
2. Add record
3. Enter values from Vercel
4. Save

## Step 4: Verify DNS Propagation

**Check if DNS is working:**
```bash
# Check DNS records
dig ai-solutions-hub.com
nslookup ai-solutions-hub.com

# Or use online tools:
# - https://dnschecker.org
# - https://www.whatsmydns.net
```

**In Vercel Dashboard:**
- Go back to Settings → Domains
- Status should change from "Pending" to "Valid Configuration"
- Usually takes 5-60 minutes

## Step 5: Test the Domain

Once DNS propagates:
- Visit: https://ai-solutions-hub.com
- Should load your AISolutions Hub site
- No more "erics-projects" in URL! ✅

## Troubleshooting

**If domain shows "Invalid Configuration":**
- Double-check DNS records match exactly what Vercel shows
- Wait longer (can take up to 24 hours in rare cases)
- Check domain registrar for any errors

**If domain subscription expired:**
- Renew at your domain registrar first
- Then configure DNS

**Need help?**
- Vercel Support: https://vercel.com/support
- Check Vercel docs: https://vercel.com/docs/concepts/projects/domains

---

**Quick Link to Vercel Domain Settings:**
https://vercel.com/erics-projects-b395e20f/ai-solutions-hub/settings/domains

