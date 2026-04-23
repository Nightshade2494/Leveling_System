# Reward-Based Task App (Gamified)

A full-stack, production-style gamified task manager where users complete tasks, earn XP, unlock badges, claim rewards, and compete on a live leaderboard.

> Note: The legacy Python `leveling_system/` prototype was removed; this repository now contains only the Next.js frontend and Express/Mongo backend.

## Tech Stack
- **Frontend:** Next.js (React) + TailwindCSS + Zustand + Framer Motion + Recharts
- **Backend:** Node.js + Express + Mongoose + JWT + Socket.IO
- **Database:** MongoDB

## Project Structure
```
/backend
  /src
    /config
    /controllers
    /middleware
    /models
    /routes
    /services
    /utils
  /seed
/frontend
  /app
  /components
  /lib
  /store
```

## Features
- JWT auth (register/login)
- CRUD tasks (daily/weekly/one-time)
- Task completion rewards with streak + level progression
- Badge unlocks based on milestones
- Leaderboard with Socket.IO refresh events
- Rewards center with claimable bonuses
- Mobile-first neon dark UI, smooth interactions, +XP animation

## Backend Setup
1. `cd backend`
2. `cp .env.example .env`
3. Update `.env` values
4. `npm install`
5. `npm run seed` (optional demo data)
6. `npm run dev`

Backend runs on `http://localhost:5000`.

### Backend API
- `POST /auth/register`
- `POST /auth/login`
- `GET /tasks`
- `POST /tasks`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`
- `PATCH /tasks/:id/complete`
- `GET /leaderboard`
- `GET /rewards`
- `POST /rewards/claim` (body: `{ "rewardId": "..." }`)
- `POST /rewards/:id/claim`
- `GET /profile`

## Frontend Setup
1. `cd frontend`
2. `cp .env.example .env.local`
3. `npm install`
4. `npm run dev`

Frontend runs on `http://localhost:3000`.

## Demo Seed Credentials
After running backend seed:
- `nova@example.com / password123`
- `blaze@example.com / password123`
- `echo@example.com / password123`

## Production Notes
- Expand request validation coverage across all endpoints.
- Add rate limiting and security middleware (helmet, express-rate-limit).
- Move from broadcast leaderboard refresh to room/user scoped events.
- Add refresh token rotation for hardened auth.
- Add unit/integration tests and CI.
