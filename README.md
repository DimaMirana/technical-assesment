# MetaTech Technical Assessment

A responsive full-stack implementation of the provided MetaTech design, built as part of a technical assessment.

The application recreates the supplied desktop and mobile designs and includes responsive layouts, API-driven content, interactive navigation, carousels, animations, and other UI interactions defined in the design specifications.

## Setup Instructions

### Prerequisites

Make sure the following are installed:

- Node.js 22+
- npm
- Git

### Clone the Repository

```bash
git clone git@github.com:DimaMirana/technical-assesment.git
cd technical-assesment
```

### Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```
Create a `config.env` file inside the `backend` directory:

```env
NODE_ENV = development
PORT = 3000
```

Start the development server:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:3000
```

### Frontend Setup

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `frontend` directory:

```env
VITE_API_BASE_URL=http://localhost:3000
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

## Project Structure

```text
technical-assesment/
│
├── backend/
│   ├── controllers/
│   ├── dev-data/
│   │   └── data/
│   ├── public/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── api/
│       │
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Header/
│       │   │   └── Footer/
│       │   │
│       │   └── ui/
│       │       ├── Container/
│       │       ├── Carousel/
│       │       ├── Marquee/
│       │       └── Modal/
|       |       |--SectionIntro/
│       │
│       ├── context/
│       │   ├── HomeContext.js
│       │   └── HomeProvider.jsx
│       │
│       ├── pages/
│       │   └── Home/
│       │
│       ├── sections/
│       │   ├── Hero/
│       │   ├── TrustedBy/
│       │   ├── Solutions/
│       │   ├── About/
│       │   ├── ProductShowcase/
│       │   └── TechStack/
│       │
│       ├── styles/
│       │   ├── _variables.scss
│       │   ├── _mixins.scss
│       │   └── global.scss
│       │
│       ├── App.jsx
│       └── main.jsx
│
├── .gitignore
└── README.md
```

### Frontend Architecture

The frontend is divided into several layers:

- **components/ui** — reusable UI primitives such as containers, carousels, marquees, and modals.
- **components/layout** — application-level layout components such as the header and footer.
- **sections** — larger page-specific sections such as Hero, Solutions, and Tech Stack.
- **pages** — page composition.
- **context** — shared React state and API-backed home-page data.
- **api** — API request logic.
- **styles** — global styles, SCSS variables, breakpoints, and reusable mixins.

### Backend Architecture

The backend uses a simple controller/router structure:

```text
Request
   ↓
Route
   ↓
Controller
   ↓
Data
   ↓
JSON Response
```

Content used by the frontend is served through API endpoints rather than being tightly coupled to individual React components.

---

## Technologies Used

### Frontend

- React
- Vite
- JavaScript
- SCSS / CSS Modules
- Embla Carousel

### Backend

- Node.js
- Express.js
- CORS

### Development

- Git
- npm
- ESLint

---

## Key Features

- Responsive desktop and mobile layouts
- API-driven page content
- Responsive navigation
- Mega menu interaction
- Interactive solution cards
- Image carousel with autoplay
- Horizontally scrolling technology marquee
- Video modal
- Reusable UI components
- SCSS variables and responsive mixins
- Component-based frontend architecture

---

## Responsive Design

The application follows a mobile-first approach.

Shared components are used for both mobile and desktop rather than maintaining separate implementations wherever possible. Layout and presentation changes are handled through responsive SCSS breakpoints.

For example:

```scss
.component {
  // Mobile styles

  @include desktop {
    // Desktop overrides
  }
}
```

This keeps the component hierarchy consistent while allowing the interface to closely follow the supplied designs at different viewport sizes.

---

## API Design

The frontend retrieves dynamic content from the Express backend.

Example endpoints include:

```text
GET /api/home
GET /api/navigation
```

The API layer is separated from presentation components so that UI components receive their data through props rather than performing network requests directly.

Conceptually:

```text
Express API
    ↓
API service
    ↓
Page / Context
    ↓
Section
    ↓
Reusable UI components
```

---

## Assumptions Made

The following assumptions were made while implementing the provided design:

- The supplied desktop and mobile designs represent the primary responsive targets.
- Intermediate screen sizes are derived responsively from those designs.
- Exact design measurements that were unavailable in viewer mode were approximated based on the supplied Figma layouts.
- Navigation and page content are treated as backend-driven data where appropriate.
- The project currently represents a single primary landing page, while the architecture allows additional pages to be introduced later.
- Navigation items that expose additional content are implemented as interactive menu content rather than separate routes where specified by the design.
- Technology/logo rows are treated as continuously scrolling marquees.
- Product showcase images may contain multiple slides and therefore use a reusable carousel.
- Clicking the hero play button opens the associated video in a modal.
- Desktop hover interactions are adapted appropriately for devices where hover is unavailable.

---

## Future Improvements

Given additional development time, the following improvements could be made:

- Add automated unit and integration tests.
- Add end-to-end testing for critical interactions.
- Improve keyboard navigation and accessibility for interactive components.
- Add focus trapping to the video modal.
- Further optimize image loading and responsive image sizes.
- Add lazy loading for below-the-fold sections.
- Introduce persistent data storage instead of development/static backend data.
- Add API validation and more comprehensive backend error handling.
- Add caching for API responses where appropriate.
- Add additional application routes and pages.
- Improve loading states with skeleton components.
- Add more extensive cross-browser and device testing.
- Add production deployment configuration and CI/CD.

---

## Build

To create a production frontend build:

```bash
cd frontend
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Notes

The implementation prioritizes reusable components, separation of concerns, responsive behavior, and maintainability while staying close to the provided Figma design and interaction specifications.