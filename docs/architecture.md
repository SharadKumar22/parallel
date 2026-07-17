# Parallel Architecture

## Vision

Parallel is an AI-powered possibility simulator that helps users explore multiple realistic outcomes before making important decisions.

Parallel does **not** predict the future.

Instead, it combines structured reasoning, simulation, and AI to present plausible possibilities.

---

# Technology Stack

## Frontend

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Motion
- Lucide Icons

## Backend (Planned)

- Next.js Route Handlers
- Prisma ORM
- PostgreSQL

## AI (Planned)

- OpenAI
- Gemini (when beneficial)

## Deployment

- Vercel

---

# Project Structure

app/
- Routing
- Layouts
- Pages

components/
- Shared UI
- Landing
- Dashboard
- Simulation

constants/
- Routes
- Animation timings
- Theme constants
- Scene definitions

hooks/
- Reusable React hooks

lib/
- Utilities
- Shared helpers

services/
- AI
- Database
- Authentication

styles/
- Global styling

types/
- Shared TypeScript types

docs/
- Architecture
- Roadmap
- Vision

---

# Engineering Principles

## Single Responsibility

Every component owns one responsibility.

Examples

LandingScene
- controls landing flow

IntroSequence
- controls intro animation

Hero
- controls hero content

DecisionNetwork
- controls background animation

---

## Local State First

Prefer local state.

Introduce global state only when multiple independent components require it.

---

## Reusability

Avoid duplicate UI.

Reusable components belong inside:

components/

---

## Configuration

Avoid magic numbers.

Timings, routes and configuration belong inside:

constants/

---

## Motion Philosophy

Animations should:

- guide attention
- improve usability
- reinforce product identity

Animations should never exist purely for decoration.

---

# Current Milestone

Landing Experience v1.1

Completed

- Decision Network
- Intro Sequence
- Hero
- Navbar
- Theme Toggle
- Motion Integration
- Light & Dark Theme