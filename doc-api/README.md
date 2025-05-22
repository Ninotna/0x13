# 📘 ArgentBank - API Transactions (Phase 2)

Ce document décrit les endpoints RESTful pour la **gestion des transactions bancaires** dans l’application ArgentBank, selon la spécification **Swagger 2.0 (OpenAPI)**.

## 📂 Fichier Swagger

Le fichier principal de spécification est :
- [`swagger_transactions_final_regenerated.yaml`](./swagger_transactions_final_regenerated.yaml)

Il contient tous les endpoints actifs pour :
- Consulter les **transactions mensuelles groupées par compte**
- Accéder au **détail d'une transaction**
- **Modifier la catégorie ou les notes** d'une transaction

> 💡 Remarque : la création et la suppression de transactions ne sont pas autorisées dans cette version.

---

## 🔐 Authentification

Tous les endpoints liés aux transactions nécessitent une authentification via **JWT** (`Bearer token`).

Ajoutez l'en-tête suivant à vos requêtes :
```http
Authorization: Bearer <votre_token>
```

---

## 📘 Endpoints disponibles

### `GET /transactions`
Récupère les transactions du **mois en cours**, groupées par compte bancaire.

- 🔒 Authentification requise
- 📦 Réponse : liste des comptes avec leurs transactions
- 📤 Réponse 200 : JSON structuré par comptes
- ⚠️ Réponse 401 : accès non autorisé

### `GET /transactions/{transactionId}`
Retourne les détails d’une transaction spécifique.

- 🔒 Authentification requise
- 🔎 Paramètre requis : `transactionId`
- 📤 Réponse 200 : objet `Transaction`
- ⚠️ Réponse 404 : transaction non trouvée

### `PUT /transactions/{transactionId}`
Met à jour **exclusivement** la **catégorie** et les **notes** d’une transaction.

- 🔒 Authentification requise
- 🔎 Paramètre requis : `transactionId`
- 📥 Corps requis :
```json
{
  "category": "Loisirs",
  "notes": "Réservations concert"
}
```
- 📤 Réponse 200 : transaction mise à jour
- ⚠️ Réponse 404 : transaction introuvable

---

## 🧱 Modèle `Transaction`

Chaque transaction possède les champs suivants :

| Champ        | Type     | Description                                |
|--------------|----------|--------------------------------------------|
| `date`       | string   | Date de la transaction (`date-time`)       |
| `description`| string   | Libellé                                    |
| `amount`     | number   | Montant                                    |
| `balance`    | number   | Solde du compte après opération            |
| `type`       | string   | `"deposit"` ou `"withdrawal"`              |
| `category`   | string   | Catégorie personnalisée                    |
| `notes`      | string   | Notes complémentaires                      |

---

## 🧪 Tester l’API localement

### Option 1 — Swagger Editor (recommandé)
1. Rendez-vous sur [https://editor.swagger.io](https://editor.swagger.io)
2. Importez le fichier YAML
3. Utilisez l’interface pour explorer et tester les routes

### Option 2 — Swagger UI avec Docker
```bash
docker run -p 8080:8080 -e SWAGGER_JSON=/foo/swagger.yaml -v $(pwd)/swagger_transactions_final_regenerated.yaml:/foo/swagger.yaml swaggerapi/swagger-ui
```
➡️ Accédez à `http://localhost:8080`

---

## 📄 Licence

Ce projet est sous licence **MIT**, propriété d'ArgentBank (projet OpenClassrooms - développeur d'application Python / JS).