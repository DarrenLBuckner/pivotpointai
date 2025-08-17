# Deployment Guide - PivotPoint AI Website

## 🚀 Quick Deployment Checklist

### Pre-Deployment Verification
- [ ] All environment variables configured
- [ ] Build passes locally: `npm run build`
- [ ] No TypeScript errors: `npm run lint`
- [ ] Mobile responsiveness tested
- [ ] Favicon files in place
- [ ] Database connections working

---

## Vercel Deployment (Recommended)

### Initial Setup
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel account
vercel login

# Deploy from project root
vercel

# Follow prompts to configure project
```

### Production Deployment
```bash
# Deploy to production domain
vercel --prod

# View deployment logs
vercel logs [deployment-url]
```

### Environment Variables Setup
Access Vercel dashboard → Project Settings → Environment Variables:

```env
# Required for Supabase integration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key

# Optional for analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS=your-ga-id
```

---

## Alternative Deployment Options

### Netlify
```bash
# Build command
npm run build

# Publish directory
out

# Environment variables in Netlify UI
```

### AWS Amplify
```bash
# Build settings
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

---

## Custom Server Deployment

### Docker Setup
```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

### PM2 Process Manager
```bash
# Install PM2
npm install -g pm2

# Create ecosystem file
touch ecosystem.config.js
```

```javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'pivotpoint-ai',
    script: 'npm',
    args: 'start',
    cwd: '/path/to/website',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    instances: 'max',
    exec_mode: 'cluster'
  }]
}

# Start with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

---

## Domain Configuration

### DNS Setup
```dns
# A Record
Type: A
Name: @
Value: [your-server-ip]

# CNAME Record  
Type: CNAME
Name: www
Value: pivotpointai.io

# For Vercel
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

### SSL Certificate
- **Vercel**: Automatic SSL via Let's Encrypt
- **Cloudflare**: Free SSL proxy
- **Let's Encrypt**: Manual setup for custom servers

---

## Performance Optimization

### Build Optimizations
```javascript
// next.config.ts
const nextConfig = {
  compress: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['your-domain.com'],
  },
  experimental: {
    optimizeCss: true,
  }
}
```

### CDN Configuration
```javascript
// For static assets
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://cdn.pivotpointai.io' 
    : '',
}
```

---

## Monitoring & Analytics

### Error Tracking
```bash
# Install Sentry
npm install @sentry/nextjs

# Configure in next.config.js
```

### Performance Monitoring
```javascript
// Web Vitals tracking
export function reportWebVitals(metric) {
  // Send to analytics service
  gtag('event', metric.name, {
    custom_map: { metric_id: metric.id },
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    event_category: 'Web Vitals',
    event_label: metric.label,
    non_interaction: true,
  })
}
```

---

## Database Deployment

### Supabase Production Setup
1. Create production project in Supabase
2. Run SQL files from `docs/database/`
3. Configure RLS policies
4. Update environment variables

### Migration Process
```sql
-- Run in order:
1. setup_ai_toolbox_database.sql
2. supabase-leads-table.sql  
3. fix_rls_policies.sql
4. update_ai_toolbox_categories.sql

-- Test connection
node docs/database/test-supabase.js
```

---

## Rollback Procedures

### Vercel Rollback
```bash
# List deployments
vercel list

# Promote previous deployment
vercel promote [deployment-url]
```

### Git-based Rollback
```bash
# Create rollback branch
git checkout -b rollback-to-stable
git reset --hard [stable-commit-hash]
git push origin rollback-to-stable

# Deploy rollback branch
```

---

## Security Checklist

### Pre-Deployment Security
- [ ] Environment variables secured (not in code)
- [ ] API keys rotated and restricted
- [ ] HTTPS enforced
- [ ] CSP headers configured
- [ ] Input validation implemented
- [ ] Database RLS policies active

### Post-Deployment Security
- [ ] SSL certificate valid
- [ ] Security headers present
- [ ] No sensitive data exposed in client
- [ ] Database access restricted
- [ ] Regular security scans scheduled

---

## Maintenance Schedule

### Daily
- [ ] Monitor error rates
- [ ] Check site availability
- [ ] Review performance metrics

### Weekly  
- [ ] Update dependencies
- [ ] Review security alerts
- [ ] Backup database

### Monthly
- [ ] Performance optimization review
- [ ] Security audit
- [ ] Content freshness check
- [ ] Analytics review

---

## Support Resources

### Documentation Links
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Deploy**: https://nextjs.org/docs/deployment
- **Supabase Docs**: https://supabase.com/docs

### Emergency Procedures
1. **Site Down**: Check Vercel status page
2. **Database Issues**: Supabase dashboard logs
3. **Build Failures**: Check deployment logs
4. **DNS Issues**: Contact domain registrar

### Backup Procedures
- **Code**: Git repository (GitHub)
- **Database**: Supabase automatic backups
- **Assets**: `public/` folder in repository
- **Environment**: Document all variables

---

**Deployment completed successfully when:**
- ✅ Site loads at production URL
- ✅ All pages render correctly
- ✅ Mobile responsiveness verified
- ✅ Forms submit successfully
- ✅ Database connections active
- ✅ Analytics tracking functional
