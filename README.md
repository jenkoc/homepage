# Homepage

## Running the application locally

To run the sample locally, follow the steps below.

### Prerequisites

- [Node.js and Git](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=shopathome-github-jopapa) installed

### Setup

Clone (or Fork and Clone) this repository

## Run the app locally

This project can be run anywhere, but VS Code is required for local debugging.

1. Open the application with VS Code.

### Running the web client

1. Install front-end dependencies...

cd into client folder

   ```bash
   npm install
   ```

1. Run the web client project in the browser (automatically opens a browser window).

cd into client folder

   ```bash
   npm run start
   ```

## Create Docker Image

Start your Docker Desktop or Service and run the following comand. Change ```dev``` to the current version.

```bash
docker build --platform=linux/amd64 --tag jkockms/homepage:dev .
 ```

Run container via:

```bash
docker run -p 1337:80 jkockms/homepage:dev
```

## Credits

- [Icons](https://www.iconpacks.net/free-icon-pack/free-essentials-black-outline-icon-pack-251.html)
