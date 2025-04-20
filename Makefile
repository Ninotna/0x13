
# 🛠 Makefile – Projet React ArgentBank

install:
	npm install

dev:
	npm run dev

build:
	npm run build

lint:
	npx eslint .

test:
	npm test

start-api:
	cd ../argentbank-api && npm run dev:server

reset:
	rm -rf node_modules && npm install

env:
	echo "REACT_APP_API_URL=http://localhost:3001/api/v1" > .env

help:
	@echo "Commandes disponibles :"
	@echo "  make install     - Installation des dépendances"
	@echo "  make dev         - Lancer l'app en mode développement"
	@echo "  make build       - Créer le build de production"
	@echo "  make lint        - Lancer ESLint"
	@echo "  make test        - Lancer les tests"
	@echo "  make start-api   - Lancer l'API en local"
	@echo "  make env         - Générer un fichier .env"
	@echo "  make reset       - Réinstallation propre"
