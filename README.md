# 💳 Projet ArgentBank

Application front-end React pour la visualisation des comptes utilisateurs d'une banque fictive.

## 🚀 Démarrer le projet

### Prérequis

- Node.js >= 16.x
- npm ou yarn

### Installation

```bash
npm install
```

### Lancement en développement

```bash
npm run dev
```

### Variables d’environnement

Créer un fichier `.env` :

```bash
REACT_APP_API_URL=http://localhost:3001/api/v1
```

## 📁 Structure du projet

```
src/
├── components/     # Composants réutilisables (UI, cartes, boutons)
├── pages/          # Pages principales (SignIn, Profile, etc.)
├── redux/          # Store global + slices
├── services/       # Fonctions d'appel API
├── utils/          # Fonctions utilitaires (validation, token, etc.)
├── styles/         # CSS ou Tailwind
├── assets/         # Images, logos
```

## 🛠 Stack technique

- React
- Redux Toolkit
- React Router
- PropTypes
- JSDoc
- Tailwind CSS (ou CSS classique)
- ESLint / Prettier
- Jest + Testing Library

## ✅ Fonctionnalités clés

- Authentification par token
- Visualisation des comptes bancaires
- Édition du profil utilisateur
- Responsive design
- Sécurité des routes

## 📦 Scripts utiles

```bash
npm run dev      # Mode développement
npm run build    # Build production
npm run lint     # Analyse ESLint
npm test         # Tests unitaires
```

## 📝 Licence

MIT – Utilisation libre à des fins d'apprentissage
