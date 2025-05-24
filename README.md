# 💳 ArgentBank — Application bancaire front-end

[![Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)](https://reactjs.org)
[![Redux Toolkit](https://img.shields.io/badge/Redux--Toolkit-enabled-purple?logo=redux)](https://redux-toolkit.js.org)

Application React pour une plateforme bancaire fictive. Elle permet l’authentification des utilisateurs, la consultation de leurs comptes et la gestion de leurs transactions. Ce projet a été réalisé dans le cadre du parcours **Développeur d'application JavaScript** chez OpenClassrooms.

---

## 📚 Sommaire

- [🚀 Démarrer le projet](#-démarrer-le-projet)
- [📁 Structure du projet](#-structure-du-projet)
- [🛠 Stack technique](#-stack-technique)
- [✅ Fonctionnalités](#-fonctionnalités)
- [📘 Documentation API (Swagger)](#-documentation-api-swagger)
- [📦 Utilisation de Makefile](#-utilisation-de-makefile)
- [📝 Licence](#-licence)

---

## 🚀 Démarrer le projet

```bash
npm install
npm run dev
```

Créer un fichier `.env` si nécessaire :

```env
REACT_APP_API_URL=http://localhost:3001/api/v1
```

---

## 📁 Structure du projet

```
src/
├── components/
│   ├── Header.jsx
│   └── account/
│       ├── Account.jsx
│       └── items/Items.jsx
├── pages/
│   ├── Home.jsx
│   ├── SignIn.jsx
│   └── UserProfile.jsx
├── redux/
│   ├── store.js
│   ├── slices/authSlice.js
│   └── services/authService.js
├── styles/
│   ├── main.css
│   ├── main_.css
│   ├── App.css
│   └── index.css
├── assets/              # (à compléter si nécessaire)
└── utils/               # (répertoire détecté dans les dépendances, à confirmer)
```

---

## 🛠 Stack technique

- React 18
- Redux Toolkit
- React Router DOM
- CSS Modules / organisation manuelle
- JSDoc + PropTypes (à intégrer si non existants)
- ESLint
- Swagger YAML (API backend)
- Makefile (gestion simplifiée des scripts)

---

## ✅ Fonctionnalités

- Connexion via JWT
- Récupération du profil utilisateur
- Consultation des comptes bancaires
- Affichage des transactions groupées par compte
- Modification des transactions (catégorie, notes)
- Responsive et accessible

---

## 📘 Documentation API (Swagger)

La spécification API est disponible dans :

```bash
doc-api/swagger.yaml
```

Pour la visualiser :

1. Aller sur [https://editor.swagger.io](https://editor.swagger.io)
2. Importer le fichier YAML
3. Tester les endpoints en direct

---

## 📦 Utilisation de Makefile

Si présent à la racine, le `Makefile` permet de lancer facilement les commandes suivantes :

```bash
make install       # npm install
make dev           # npm run dev
make build         # npm run build
make lint          # npm run lint
make test          # npm test
make swagger       # docker swagger UI
make clean         # suppression du dossier build
```

---

## 📝 Licence

Ce projet est proposé sous licence MIT.
