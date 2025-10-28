# 🧰 Tech Stack

This project is built using the following technologies and libraries:

## ⚙️ Core Dependencies

- **React 19** — Frontend library for building user interfaces  
- **React DOM** — DOM rendering for React components  
- **React Router DOM** — Client-side routing and navigation  
- **Tailwind CSS 4** — Utility-first CSS framework for fast UI development  
- **Formik** — Form handling and management  
- **Yup** — Schema-based form validation  
- **Firebase** — Backend-as-a-Service for authentication and data storage  
- **React-PDF** — To display and render PDF files in the browser  
- **pdfjs-dist** — Underlying PDF.js library used by React-PDF  

## 🛠️ Development Tools

- **@tailwindcss/vite** — Tailwind integration for Vite  
- **Vite** — Fast build tool and development server  

---

## 🗂️ Folder Structure

src/
├── assets/ # Images and static files
├── components/ # Reusable UI components
│ └── PDFUploadAndViewer.tsx
├── context/ # Context API for authentication
│ └── AuthContext.tsx
├── form/ # Form components
│ ├── Invoice_Form.tsx
│ ├── LoginForm.tsx
│ └── RegisterForm.tsx
├── hooks/ # Custom React hooks
│ └── useLocalStorage.ts
├── layout/ # Layout and header components
│ ├── Header.tsx
│ └── Layout.tsx
├── pages/ # Application pages
│ ├── auth/
│ │ ├── Login.tsx
│ │ └── Register.tsx
│ └── home/
│ └── HomePage.tsx
├── routes/ # Route configuration and guards
│ ├── ProtectedRoute.tsx
│ ├── Route.page.tsx
│ └── route.ts
├── types/ # TypeScript type definitions
│ └── index.ts
├── utils/ # Utility functions and validation
│ └── validationSchemas.ts
├── App.tsx # Main App component
├── main.tsx # Entry point
├── firebase.config.js # Firebase configuration
└── index.css # Global styles
