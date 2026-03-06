# agents.gesys.ai — Landing Page Sprint Comptable

Landing page publique pour l'offre Sprint Comptable Gesys (vertical CPA Québec).

## Stack

- **Next.js 14** (App Router, standalone output)
- **TypeScript**
- **Tailwind CSS**
- **Resend** (envoi d'emails)

## Démarrage local

```bash
npm install
cp .env.example .env.local
# Remplir RESEND_API_KEY dans .env.local
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Déploiement Vercel

### 1. Importer le repo dans Vercel

1. Aller sur [vercel.com](https://vercel.com) → **New Project**
2. Importer `gesys-solutions/agents-gesys-ai`
3. Framework : **Next.js** (détecté automatiquement)
4. Cliquer **Deploy**

### 2. Variables d'environnement

Dans les **Settings → Environment Variables** de votre projet Vercel :

| Variable | Description | Requis |
|----------|-------------|--------|
| `RESEND_API_KEY` | Clé API Resend pour l'envoi d'emails | Optionnel (sans clé: email non envoyé, log console) |

### 3. Domaine custom

1. Dans Vercel → **Settings → Domains**
2. Ajouter `agents.gesys.ai`
3. Configurer le DNS chez votre registraire :
   - Type `CNAME`, nom `agents`, valeur `cname.vercel-dns.com`

## API Route

`POST /api/contact` — Reçoit `{ nom, courriel, message }`, envoie email à `jim@gesys.ai` via Resend.

Si `RESEND_API_KEY` n'est pas défini, retourne `200` sans envoyer (avec log dans la console).

## Structure

```
app/
  page.tsx          # Page principale (hero / livrables / pricing / contact)
  layout.tsx        # Layout global + polices
  api/
    contact/
      route.ts      # API Route POST /api/contact
```
