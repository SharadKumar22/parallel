# Parallel Architecture

## Technology Stack

### Frontend

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Motion
- Lucide Icons

### Backend (Planned)

- Next.js Route Handlers
- Prisma ORM
- PostgreSQL

### AI (Planned)

- OpenAI
- Gemini (when beneficial)

### Deployment

- Vercel

---

## Project Structure

app/
├── Routing
├── Layouts
└── Pages

components/
├── Shared UI
├── Landing
├── Questionnaire
├── Dashboard
└── Simulation

constants/
├── Routes
├── Animation Timings
├── Theme Constants
└── Scene Definitions

hooks/
├── Reusable React Hooks

lib/
├── Utilities
└── Shared Helpers

services/
├── AI
├── Database
└── Authentication

styles/
└── Global Styling

types/
└── Shared TypeScript Types

docs/
├── Architecture
├── Decisions
├── Roadmap
├── Backlog
└── Vision

---

## Engineering Principles

### Single Responsibility

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

### Local State First

Prefer local state.

Introduce global state only when multiple independent components require it.

---

### Reusability

Avoid duplicate UI.

Reusable components belong inside:

components/

---

### Configuration

Avoid magic numbers.

Timings, routes and configuration belong inside:

constants/

---

### Motion Philosophy

Animations should:

- guide attention
- improve usability
- reinforce product identity

Animations should never exist purely for decoration.

---

## Application Architecture

### Landing

Landing
├── Navbar
├── Hero
├── DecisionNetwork
├── ThemeProvider
└── Loader

### Questionnaire

Questionnaire
        │
        ▼
Questionnaire.tsx
        │
        ▼
QuestionRenderer.tsx
        │
   ┌────┴────┐
   ▼         ▼
Textarea   MultiSelect

## Future Architecture

The following modules are planned and will be documented as they are implemented.

- Simulation Engine
- AI Integration
- Timeline Visualization
- User History
- Authentication
- Analytics