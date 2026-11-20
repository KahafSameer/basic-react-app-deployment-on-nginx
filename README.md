# Basic React App: Deployment on Nginx

A simple React app (Create React App + React Router) with **Home** and **About** pages, used to practice building a static bundle and serving it with **Nginx**.

## Tech Stack

React · React Router · Create React App (`react-scripts`) · Nginx

## Environment Variables

| Variable | Purpose |
|---|---|
| `REACT_APP_WELCOME_MESSAGE` | Message shown on the Home page (falls back to "Environment variable not set") |

CRA embeds `REACT_APP_*` values **at build time**, so set the variable before running `npm run build`.

## Run locally

```bash
git clone https://github.com/KahafSameer/basic-react-app-deployment-on-nginx.git
cd basic-react-app-deployment-on-nginx
npm install
npm start           # http://localhost:3000
```

| Command | Description |
|---|---|
| `npm start` | Dev server |
| `npm run build` | Production build into `build/` |
| `npm test` | Tests |

## Deploy on Nginx

```bash
npm run build
sudo cp -r build/* /var/www/html/
```

React Router needs every path to fall back to `index.html`. Add this to your Nginx `server` block:

```nginx
location / {
    try_files $uri /index.html;
}
```

Then reload Nginx: `sudo systemctl reload nginx`.

## Routes

| Path | Page |
|---|---|
| `/` | Home (`src/pages/Home.js`) |
| `/about` | About (`src/pages/About.js`) |
