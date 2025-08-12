# Essentials 3PL React Website Deployment Instructions

This document provides instructions for deploying the Essentials 3PL React website to Netlify.

## Project Structure

The project has been converted from a static HTML website to a React application. The React application is located in the `essentials-react` directory.

### Key Components

- **Header & Footer**: Reusable components for all pages
- **Pages**: Home, Services, About, and Contact
- **Routing**: React Router for navigation
- **Styling**: CSS from the original website, adapted for React
- **Form Handling**: Contact form with validation

## Deployment Steps

### Local Development

1. Navigate to the React project directory:
   ```
   cd essentials-react
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. View the website at http://localhost:3000

### Building for Production

1. Build the project:
   ```
   npm run build
   ```

2. The build output will be in the `build` directory.

### Deploying to Netlify

1. **Option 1: Deploy via Netlify CLI**
   - Install Netlify CLI: `npm install -g netlify-cli`
   - Login to Netlify: `netlify login`
   - Deploy: `netlify deploy --prod`

2. **Option 2: Deploy via Netlify UI**
   - Create a new site on Netlify
   - Connect to your GitHub repository
   - Set the build command to `npm run build`
   - Set the publish directory to `build`
   - Deploy the site

3. **Option 3: Drag and Drop**
   - Build the project locally
   - Drag and drop the `build` directory to Netlify

## Configuration Files

### netlify.toml

A `netlify.toml` file has been created in the root directory with the following configuration:

```toml
[build]
  base = "essentials-react/"
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This configuration tells Netlify:
- The base directory for the project is `essentials-react/`
- The build command is `npm run build`
- The publish directory is `build`
- All routes should be redirected to `index.html` to support React Router

## Troubleshooting

If you encounter issues with the Node.js version, try:

1. Using Node.js version 16.x or 18.x (LTS versions)
2. Clearing the npm cache: `npm cache clean --force`
3. Deleting the `node_modules` directory and reinstalling dependencies

## Additional Notes

- The website uses Font Awesome icons via the `@fortawesome` packages
- Images from the original website have been copied to the `public/images` directory
- The contact form is set up for client-side validation but would need a backend service to actually send emails