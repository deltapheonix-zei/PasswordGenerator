# Password Generator

This project is a simple password generator built with React and Tailwind CSS. It allows users to generate random passwords with customizable options such as length, inclusion of uppercase letters, lowercase letters, numbers, and symbols. The generated password can be copied to the clipboard with a single click.

## Features

- Generate random passwords with customizable length (5 to 32 characters).
- Include or exclude uppercase letters, lowercase letters, numbers, and symbols.
- Copy the generated password to the clipboard.
- Responsive design with a visually appealing UI.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/passwordgenerator.git
    cd passwordgenerator
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Usage

1. Start the development server:

    ```sh
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run preview`: Previews the production build.

## Project Structure

- `src/`: Contains the source code of the application.
  - `App.jsx`: Main component of the application.
  - `App.css`: Custom CSS for the application.
  - `index.css`: Tailwind CSS imports.
  - `main.jsx`: Entry point of the application.
  - `lib/utils.jsx`: Utility functions for class name merging.
- `public/`: Contains static assets and the `index.html` file.
- `postcss.config.js`: Configuration for PostCSS.
- `tailwind.config.js`: Configuration for Tailwind CSS.
- `vite.config.js`: Configuration for Vite.
- `.eslintrc.cjs`: Configuration for ESLint.
- `package.json`: Project dependencies and scripts.

## Dependencies

- `react`: JavaScript library for building user interfaces.
- `react-dom`: Entry point to the DOM and server renderers for React.
- `clsx`: Utility for constructing `className` strings conditionally.
- `tailwind-merge`: Utility to merge Tailwind CSS classes.
- `framer-motion`: Library for animations in React.

## Dev Dependencies

- `@vitejs/plugin-react`: Vite plugin for React.
- `autoprefixer`: PostCSS plugin to parse CSS and add vendor prefixes.
- `eslint`: Linter for JavaScript and JSX.
- `eslint-plugin-react`: React specific linting rules for ESLint.
- `eslint-plugin-react-hooks`: ESLint rules for React Hooks.
- `eslint-plugin-react-refresh`: ESLint plugin for React Refresh.
- `postcss`: Tool for transforming CSS with JavaScript.
- `tailwindcss`: Utility-first CSS framework.
- `vite`: Next generation frontend tooling.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.