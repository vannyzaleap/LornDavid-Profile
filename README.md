# LORN David — Professional Neo-Brutalist Portfolio

A creative Neo-Brutalist & Swiss Editorial personal portfolio for **LORN David** (Full Stack Developer & Systems Builder based in Phnom Penh, Cambodia).

Built with:
- **React 19 & TypeScript**
- **Vite 8**
- **Tailwind CSS v4**
- **Lucide Icons**
- **Google Gemini 3.8 Flash** (Serverless Project Scoper & Estimator)

---

## Deploy to Vercel

This repository is pre-configured for one-click deployment on **[Vercel](https://vercel.com)** with `vercel.json` and a native Vercel serverless function (`/api/gemini/brief.ts`).

### Option 1: Deploy via GitHub (Recommended)

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your repository.
4. Vercel will automatically detect:
   - **Framework Preset**: `Vite`
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`
5. *(Optional)* In **Environment Variables**, add:
   - `GEMINI_API_KEY`: Your Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey).
   *(If omitted, the portfolio automatically uses structured architectural fallbacks so the app never fails!)*
6. Click **Deploy**.

---

### Option 2: Deploy via Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run deployment:
   ```bash
   vercel
   ```
3. For production deployment:
   ```bash
   vercel --prod
   ```

---

## Local Development

```bash
# Install dependencies
npm install

# Run full-stack dev server
npm run dev

# Build for production
npm run build
```
