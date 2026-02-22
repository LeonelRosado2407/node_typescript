# Node TypeScript Project

This project is a Node.js application using TypeScript, with ESLint and Prettier configured.

## Setup

Install dependencies:

```bash
npm install
```

## Available Scripts

- `npm run build` - compile TypeScript to `dist/`.
- `npm run start` - run compiled code.
- `npm run dev` - run using `ts-node` for development.
- `npm run lint` - check code with ESLint.
- `npm run lint:fix` - fix linting errors automatically.
- `npm run format` - format code with Prettier.

## Notes

- TypeScript config is in `tsconfig.json`.
- ESLint configuration is in `.eslintrc.js`.
- Prettier options are in `.prettierrc`.

## Configuration

The app reads options from environment variables (via `dotenv`) and exposes
them through a central factory at `src/config/config.ts`.

Current environment variables used include:

| Variable                       | Purpose                                 | Default       |
| ------------------------------ | --------------------------------------- | ------------- |
| `APP_PORT`                     | HTTP port                               | `3000`        |
| `APPNAME`                      | Application name                        | `my‑app`      |
| `JWT_SECRET`, `JWT_EXPIRES_IN` | JSON Web Token settings                 | -             |
| `CLOUDINARY_*` (3 variables)   | Cloudinary credentials                  | -             |
| `SESSION_SECRET`               | Express‑session secret                  | `change_this` |
| `SESSION_COOKIE_MAX_AGE`       | Session cookie lifetime (ms)            | `86400000`    |
| `NODE_ENV`                     | Used to set secure cookie flag (`prod`) | -             |
