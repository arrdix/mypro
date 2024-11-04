# Mypro Test Case

A project built for the Mypro Solusindo Informatika Technical Test Case using React, Tailwind & TypeScript.

<br>

## Project Structure

The project is organized as follows:

```sh
mypro
|
+-- public                  # static files
+-- src
|   +-- components
|   |   +-- error           # components related to error
|   |   +-- inventory       # components related to inventory
|   |   +-- navbar          # components related to navbar
|   |   +-- product         # components related to product
|   |   +-- skeleton        # components related to skeleton
|   |   +-- transaction     # components related to transaction
|   |   +-- ui              # contains global components or compound components
|   +-- layout              # contains layout component
|   +-- lib                 # contains library utilities
|   +-- pages               # containes pege level components
|   +-- service
|   |   +-- inventory       # API services related to inventory
|   |   |   +-- hooks       # hooks related to inventory API service
|   |   |   +-- schema      # schema related to inventory
|   |   |   +-- types       # types related to inventory
|   |   +-- product         # API services related to product
|   |   |   +-- hooks       # hooks related to product API service
|   |   |   +-- schema      # schema related to product
|   |   |   +-- types       # types related to product
|   |   +-- transaction     # API services related to transaction
|   |   |   +-- hooks       # hooks related to transaction API service
|   |   |   +-- schema      # hooks related to transaction
|   |   |   +-- types       # hooks related to transaction
|   |   +-- shared          # contains general-purpose funct related to API service
|   +-- utils               # contains global utilities
|   +-- App.tsx
|   +-- main.tsx
```

<br>

## Tech Stacks

The project uses the following technologies:

-   TypeScript
-   React
-   Tailwind
-   Shadcn
-   Vite
-   Zod

<br>

## Installation

Follow these steps to set up the project locally:

**Clone the repository**

```sh
git clone https://github.com/arrdix/mypro.git
```

**Go to the project directory**

```bash
cd mypro
```

**Install dependencies**

```sh
npm install
```

<br>

## Environment Variables

Follow these steps to set up the project's .env:

**Create a .env file in the root directory.**

```sh
touch .env
```

**Add the necessary environment variables**

```sh
VITE_BASE_URL=https://example.com
```

<br>

## Usage

To run the application locally:

**Run the application**

```sh
npm run dev
```

**Access the application**

    Open your browser and navigate to `http://localhost:5173`.
