# Recipe App

This project is a full-stack Recipe App that allows users to browse, filter, and view detailed recipes. The application is built using:
- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Node.js, Express, TypeScript
- **Data Source**: TheMealDB API

## 1. Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository
```sh
git clone https://github.com/theantonyis/recipebook.git
cd recipebook
```

## 2. Backend Setup

### Navigate to the Backend Folder
```sh
cd backend
```

### Install Dependencies
```sh
npm install
```

### Configure Environment Variables
Create a `.env` file in the backend directory and add the following:
```env
API_URL=https://www.themealdb.com/api/json/v1/1
```

### Start the Backend Server
```sh
npm run dev
```

The backend server should now be running on `http://localhost:5000`.

## 3. Frontend Setup

### Navigate to the Frontend Folder
```sh
cd ../frontend
```

### Install Dependencies
```sh
npm install
```

### Start the Frontend Server
```sh
npm run dev
```

The frontend should now be running on `http://localhost:3000`.

## 4. API Endpoints

### 1. Get Recipes with Filters
```
GET /api/recipes?filter={category|ingredient|country}&value={value}
```
Example:
```
GET /api/recipes?filter=category&value=Seafood
```

### 2. Get Recipe Details by ID
```
GET /api/recipes/:id
```
Example:
```
GET /api/recipes/52772
```

## 5. Project Structure
```
recipebook/
│── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── recipe.controller.ts
│   │   ├── services/
│   │   │   ├── recipe.service.ts
│   │   ├── routes/
│   │   │   ├── recipe.routes.ts
│   ├── .env
│   ├── .gitignore
│   ├── .prettierrc
│   ├── .prettierignore
│   ├── server.ts
│   ├── package.json
│   ├── tsconfig.json
│── frontend/
│   ├── components/
│   │   ├── RecipeInfo.tsx
│   │   ├── RecipeList.tsx
│   ├── pages/
│   │   ├── recipe/
│   │   │   ├── [id].tsx
│   │   ├── index.tsx
│   ├── styles/
│   │   ├── globals.css
│   ├── types/
│   │   ├── recipe.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── eslint.config.mjs
│   ├── next.config.js
│   ├── next-env.d.ts
│   ├── tailwind.config.js
│   ├── postcss.config.mjs
│── README.md
```

---

