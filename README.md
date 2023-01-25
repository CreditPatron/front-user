# With Docker

This examples shows how to use Docker with Next.js based on the [deployment documentation](https://nextjs.org/docs/deployment#docker-image). Additionally, it contains instructions for deploying to Google Cloud Run. However, you can use any container-based deployment host.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-docker nextjs-docker
# or
yarn create next-app --example with-docker nextjs-docker
# or
pnpm create next-app --example with-docker nextjs-docker
```

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: 
`docker build -t arbollo .`.
1. Run your container: 
`docker run -p 3000:3000 arbollo`.

You can view your images created with `docker images`.

### In existing projects

To add support for Docker to an existing project, just copy the `Dockerfile` into the root of the project and add the following to the `next.config.js` file:

```js
// next.config.js
module.exports = {
  // ... rest of the configuration.
  output: "standalone",
};
```

This will build the project as a standalone app inside the Docker image.

## Deploying to Google Cloud Run

1. Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) so you can use `gcloud` on the command line.
1. Run `gcloud auth login` to log in to your account.
1. [Create a new project](https://cloud.google.com/run/docs/quickstarts/build-and-deploy) in Google Cloud Run (e.g. `nextjs-docker`). Ensure billing is turned on.
1. Build your container image using Cloud Build: `gcloud builds submit --tag gcr.io/PROJECT-ID/helloworld --project PROJECT-ID`. This will also enable Cloud Build for your project.
1. Deploy to Cloud Run: `gcloud run deploy --image gcr.io/PROJECT-ID/helloworld --project PROJECT-ID --platform managed`. Choose a region of your choice.

   - You will be prompted for the service name: press Enter to accept the default name, `helloworld`.
   - You will be prompted for [region](https://cloud.google.com/run/docs/quickstarts/build-and-deploy#follow-cloud-run): select the region of your choice, for example `us-central1`.
   - You will be prompted to **allow unauthenticated invocations**: respond `y`.

Or click the button below, authorize the script, and select the project and region when prompted:

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run/?git_repo=https://github.com/vercel/next.js.git&dir=examples/with-docker)

## Running Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.



###D-board

D-board is an advanced, responsive admin template built with Typescript, React, Redux Toolkit, Next.js and Tailwind CSS.

It includes 2 different layouts, 2 background color styles, 100+ components in every layout and lots of widgets and custom made reusable components to help you kickstart your next React project or application.

To install, first make sure the correct `node` and `npm` are installed in your system.

To check if they are installed correctly, run the following commands, which should print at least the following versions.

`node -v` -> v16.13.0 LTS
`npm -v` -> 8.1.0

D-board is 100% ready to use. Just unzip the included files and run the following commands:

`npm install` to install all the required dependencies
`npm run dev` to run the development server
Open http://localhost:3000

To build and run a production ready bundle, run the following commands:

`npm run build`
`npm run start` to preview the generated files

The template includes the following structural elements:

- Navbar
- Left sidebar
- Right sidebar
- Main content section
- Centered layouts for forms

D-board uses the default Next.js file and folder code structure. For more information on the project and to familiarize yourself with the file and folder structure used in a Next.js application, please go to the Next.js website.

All pages are located in the `src/pages` folder.

All components and widgets are located in the `src/components` folder.

All layouts and structural views are located in the `src/layouts` folder.

CSS files are located in the `src/css` folder.

####Important folders in the template

`src/components`
Includes all the components ands widgets included in the template

`src/css`
Includes CSS files

`src/layouts`
Includes all layouts and structural views

`src/css/layouts`
Includes CSS for all the included layouts

`src/css/components`
Includes CSS for some of the included components, although most components use tailwind classes

`functions`
Includes helpers and functions used in the template

`json`
Includes sample json files with data used in some views and components

`src/slices`
Includes Redux Toolkit slices used in the app

`src/slices/navigation`
Includes menus and navigation files that are used in the left sidebar and top navigation components

`src/pages`
Includes all pages and sample views

`public`
Includes all the static assets and content used in the template

####Important files in the template

`src/store.tsx`
Redux Toolkit config and global store

`tailwind.config.js`
Tailwind CSS default configuration

`src/pages/index.tsx`
Template index file

`src/pages/_app.tsx`
Next.js custom App file. All CSS files are imported here

`src/pages/_document.tsx`
Next.js custom Document file. Custom HTML meta tags are defined here

`postcss.config.js`
PostCSS configuration for plugins used in the template
