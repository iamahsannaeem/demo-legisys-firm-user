# Introduction

This repository contains the frontend application for the Legisys platform, designed specifically for use by law firms.  It provides a user-friendly interface for accessing and utilizing the powerful legal research and analysis tools provided by Legisys.  Lawyers and legal professionals can use this application to efficiently conduct legal research, analyze case law, manage documents, collaborate with colleagues, and improve their overall productivity.

# Folder Structure and Naming Conventions

The project follows a structured folder hierarchy to maintain clarity and organization.

### Naming Conventions

Use `kebab-case` for file and folder names. For example, `my-component.tsx`, `my-folder`.

Here's a breakdown of the key technologies used:

## Next.js 15 with App Router:

Leverages Next.js 15's features including server-side rendering, static generation, and the efficient App Router for a performant and scalable frontend architecture.

## ShadCN:

Will be utilizing ShadCN ready made components

## React Query with Persist Storage:

Manages API calls from the browser-side with React Query. Persist storage ensures data remains available across sessions for an improved user experience.

## API Calling:

API calls are managed using Redux Toolkit, which provides a powerful and efficient way to fetch, cache, and synchronize data.

## Prettier:

Enforces consistent code formatting across the project, improving readability and maintainability.

## Husky & Lint-Staged:

Automates code formatting and checking typescript errors with Husky pre-commit hooks. Husky seamlessly triggers Prettier to format staged files, followed by checking typescript errors to catch potential errors before committing changes, ensuring a smooth development pipeline.

This combination of technologies empowers you to focus on building features and functionalities while maintaining a clean, consistent, and error-free codebase.

# Getting Started

This section guides you through setting up the project and running it on your local machine.

## Prerequisites:

Before diving in, ensure you have the following software installed:

### Node.js (version>=22.13.1 or as mentioned in package.json under engines section): https://nodejs.org/en/about/previous-releases

### pnpm (version>=9.15.4 or as mentioned in package.json under engines section) - typically comes bundled with Node.js

## Install dependencies:

```
pnpm install
```

This command downloads all the necessary libraries and dependencies required to run the project.

## Development Server:

```
pnpm run dev
```

This command starts a development server, typically running at http://localhost:3000 by default (you can check the exact port in package.json). Open this URL in your web browser to view the application running locally.

# Build and Test

TODO: Describe and show how to build your code and run the tests.

# Contribute

## Creating a new feature or fix branch:

- When starting work on a new feature or bug fix, create a new branch from the `main` branch.

```
 git checkout main
 git pull origin main
 git checkout -b feature/your-feature-name
```

- Develop your feature or fix in this branch.
- Commit your changes with meaningful messages.

## Merging changes to dev or qa:

- Once your feature or fix is complete, it needs to be tested. Depending on the testing strategy, you can merge your branch into `dev` or `qa` via PR process.

- Resolve any conflicts that arise during the merge process.

## Testing and Verification:

- Test the changes in the `dev` or `qa` branch.
- If there are issues or conflicts in `dev` or `qa`, create a new branch to resolve them.

```
 git checkout -b fix/resolve-conflict-dev-your-feature-name
 git merge dev
 git merge feature/your-feature-name
 # resolve conflicts
 git commit
```

And then make PR

## Merging to main:

- After successful testing and verification, merge the changes from `dev` or `qa` back to `main` via PR process

## Deleting the feature/fix branch:

- Once the changes are merged into `main` and no longer needed, delete the feature/fix branch.

```
 git branch -d feature/your-feature-name
 git push origin —delete feature/your-feature-name
```

### Summary of Commands

```
 # Create a new feature/fix branch
 git checkout main
 git pull origin main
 git checkout -b feature/your-feature-name

 # Create a conflict resolution branch
 git checkout -b fix/resolve-conflict-dev-your-feature-name
 git merge dev
 git merge feature/your-feature-name
 # resolve conflicts & make PR

 # Delete feature/fix branch
 git branch -d feature/your-feature-name
 git push origin —delete feature/your-feature-name
```
