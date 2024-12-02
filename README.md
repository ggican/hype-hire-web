# FOR ACCESS WEBSITE JUST PRESS SUBMIT BUTTON LOGIN PAGE

# Project Overview

This project is a Next.js application that includes several services, components, and tools to build a robust user interface. It integrates with **Storybook** for component documentation, **Chromatic** for visual testing, and **MSW (Mock Service Worker)** for API mocking. It is a multi-environment application, meaning it can be configured to run in different environments (e.g., development, production).

---

## URLs for Key Resources

- **Chromatic** (Visual Testing and Component Library):  
  [Chromatic Library](https://www.chromatic.com/library?appId=674ded1f0b3e873edbebd891&branch=main)

- **Storybook** (Component Documentation and Testing):  
  [Storybook URL](https://hyper-hire-web-storybook.vercel.app/)

- **Live Website** (Production URL):  
  [Website URL](https://hyper-hire-web-kappa.vercel.app/)

---

## NPM Scripts Explanation

The following scripts are defined in the `package.json` file to automate common tasks such as running the development server, testing, linting, formatting, building the project, and more.

### **Scripts**

- **`dev`**:  
  Starts the Next.js development server for local development. This will run the app in development mode, enabling features like hot-reloading for easier development.

  ```bash
  npm run dev

  ```

- **`build`**:  
  Builds the production version of the Next.js app. This creates an optimized and minified version of the application that is ready for deployment.
  ```bash
  npm run build

  ```
- **`storybook`**:  
  Starts Storybook in development mode at port 6006. Storybook is used for building and testing UI components in isolation.

  ```bash
  npm run storybook

  ```

- **`build-storybook`**:  
  Builds a static version of Storybook, which can be deployed to a hosting service. This is used for publishing the Storybook UI components library.

  ```bash
  npm run build-storybook

  ```

- **`chromatic`**:  
  Deploys Storybook to Chromatic for visual testing and UI review. Chromatic allows you to perform visual regression testing on your components.
  ```bash
  npm run chromatic
  ```