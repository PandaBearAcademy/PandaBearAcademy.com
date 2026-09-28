# Panda Bear Academy

Panda Bear Academy is a full-stack learning platform for accessible education. The project includes a React + Vite frontend and an Express + Prisma backend for course content, user accounts, and enrollment tracking.

## Overview

This repository is structured as a monorepo with two main apps:

- Frontend: a React interface for navigation, course browsing, sign-in, and sign-up flows
- Backend: an Express API that connects to PostgreSQL through Prisma and handles user registration and authentication logic

## Tech stack

- Frontend: React 19, Vite 8, React Router DOM 7, React Player
- Backend: Node.js, Express 5, Prisma ORM 8, PostgreSQL 15+
- Auth: bcryptjs and JWT-ready patterns for password hashing and secure session tokens
- Tooling: ESLint, Nodemon

## Requirements

- Node.js 20 or newer
- npm
- PostgreSQL 15 or newer
- A `.env` file for backend environment variables

## Project structure

```text
PandaBearAcademy.com/
├── Backend/
│   ├── controllers/
│   ├── src/
│   ├── index.js
│   ├── package.json
│   ├── prisma.config.ts
│   └── .env
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── README.md
└── .gitignore
```

## Local setup

### 1) Install dependencies

Open two terminals and run:

```bash
cd Frontend
npm install
```

```bash
cd Backend
npm install
```

### 2) Set up environment variables

Create a `Backend/.env` file and add a database connection string:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/pandabearacademy"
JWT_SECRET="replace-this-with-a-long-random-secret"
```

### 3) Start the apps

Frontend:

```bash
cd Frontend
npm run dev
```

Backend:

```bash
cd Backend
npm run dev
```

The frontend runs through Vite, usually at a localhost URL shown in the terminal. The backend currently listens on:

```text
http://localhost:3000
```

## Backend notes

The backend currently exposes user-related routes from `Backend/index.js`, including:

- `GET /users/v1`
- `POST /users/v1`

The auth flow is still being developed, and login logic is expected to live under a dedicated route such as:

```text
POST /users/v1/login
```

The Prisma schema defines the main app entities, including `User`, `Course`, `Enrollment`, `Lesson`, and `Problems` in:

```text
Backend/src/prisma/contract.prisma
```

## Data model highlights

- `User` stores the account identity and authentication data
- `Course` stores course metadata
- `Enrollment` links users to courses and tracks progress
- `Lesson` stores lesson information and associations to course content

## Frontend workflow

The frontend uses React Router and module-based styling. The app is organized around pages such as:

- landing page
- sign in
- sign up
- courses
- profile
- user home

## Useful commands

From the frontend:

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

From the backend:

```bash
npm run dev
npx prisma generate
```

If the Prisma schema changes, regenerate the contract artifacts as needed.

## Status

This project is actively under construction. The frontend and backend are set up, but authentication, enrollment logic, and additional lessons/course APIs are still being completed.

## License

ISC

