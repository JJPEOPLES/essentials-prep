# Essentials 3PL React Application

This is the React version of the Essentials 3PL website. The application has been recreated from the original HTML/CSS website.

## Project Structure

The React application is located in the `essentials-react` directory and has the following structure:

```
essentials-react/
├── public/
│   ├── images/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Services.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── images/
│   ├── App.js
│   ├── index.js
│   ├── reportWebVitals.js
│   └── styles.css
├── package.json
└── netlify.toml
```

## Running the Application

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

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

To build the app for production, run:

```
npm run build
```

This will create a `build` folder with optimized production files.

## Features

- Responsive design for all device sizes
- React Router for navigation
- FontAwesome icons
- Contact form with validation
- Reusable components

## Dependencies

- React 18
- React Router 6
- FontAwesome for icons

## Deployment

The application is configured for deployment to Netlify. A `netlify.toml` file is included in the root directory with the necessary configuration.

## Original Files

The original HTML/CSS files are still available in the root directory for reference.