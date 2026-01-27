
# Blueprint

## Overview

This project is a front-end application built with Vue.js and TypeScript, using Vite as the development server and build tool. The goal is to create a fast, responsive, and scalable web application.

## Implemented Features

*   **Framework**: Vue 3 with Vite
*   **Styling**: Tailwind CSS
*   **Components**: The application is component-based, with components for different sections like Hero, About, Services, Contact, and a Navigation Bar.
*   **Routing**: Basic routing is set up with Vue Router.
*   **Image Optimization**: A script in `vite.config.js` generates mobile-optimized versions of images.

## Current Task: Performance Optimization

Based on a Lighthouse audit, the application's performance needs to be improved. The current task is to address the following issues:

1.  **Image Optimization**:
    *   Create multiple responsive sizes for images to reduce file size on different devices.
    *   Implement the `<picture>` element or `srcset` attribute in Vue components to serve the appropriate image size.
    *   Improve image compression.
2.  **Font Loading**:
    *   Preload fonts to improve loading times.

