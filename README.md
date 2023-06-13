# Gugulashvili Art

Welcome to Gugulashvili Art, a React-based website that showcases the artwork of Gugulashvili.
The Gugulashvili Art website requires a backend API to fetch artwork data. You can find the backend implementation in the following repository:
- [Gugulashvili Art Backend](https://github.com/geo318/server-gugulashvili-art)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Project Structure](#project-structure)

## Installation

To get started with Gugulashvili Art, follow these steps:

1. Clone the repository to your local machine using `git clone <repository-url>`.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.

## Usage

Once you have installed the dependencies, you can start using the Gugulashvili Art website. Here are some available scripts:

- `npm run dev`: Starts the development server and opens the website in your default browser. It automatically reloads the website when you make changes to the source code.
- `npm run build`: Builds the website for production in the `build` folder. It optimizes the build for the best performance.

## Technologies

Gugulashvili Art is built using the following technologies and packages:

- [React](https://reactjs.org): A JavaScript library for building user interfaces.
- [TanStack React Query](https://react-query.tanstack.com): A data-fetching and caching library for React applications.
- [Zod](https://github.com/colinhacks/zod): A TypeScript-first schema validation library with optional runtime validation.
- [TypeScript](https://www.typescriptlang.org): A statically typed superset of JavaScript that compiles to plain JavaScript.
- [Framer Motion](https://www.framer.com/api/motion/): A production-ready motion library for creating animations and transitions in React applications.
- [Axios](https://axios-http.com/): A popular HTTP client for making API requests from the browser or Node.js.
- [React Hook Form](https://react-hook-form.com/): A performant form validation library for React applications.

Feel free to explore the documentation of each technology and package for more information on how to use them effectively in your project.

## Project Structure

The structure of the project is organized as follows:

├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── Components/
│ │ ├── Footer.js
│ │ ├── Navbar.js
│ │ ├── Modals.js
│ │ └── ...
│ ├── assets/
│ │ ├── images/
│ │ ├── css/
│ │ └── ...
│ ├── helpers/
│ ├── hooks/
│ ├── pages/
│ │ ├── Home/
│ │ ├── Gallery/
│ │ ├── Uplaod/
│ │ └── ...
│ ├── schema/
│ ├── services/
│ ├── types/
│ ├── App.js
│ ├── index.js
│ └── ...
├── .gitignore
├── package.json
├── README.md
└── ...

---

*This README provides a basic template for the Gugulashvili Art website. Modify it according to your project's specific
