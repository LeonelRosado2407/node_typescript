
import env from '../env';

/**
 * Shape of the configuration object returned by the factory.
 * You can import this type elsewhere if you want to strongly type
 * the configuration passed around the application.
 */
export type Config = ReturnType<typeof createConfig>;

const createConfig = () => {
  const envConfig = env();

  return {
    app: {
      name: envConfig.app.name ?? 'my‑app',
      port: envConfig.app.port,
    },

    // express-session options. all values are read from environment
    // variables with reasonable defaults so you can override them when
    // deploying or running in different environments.
    session: {
      secret: process.env.SESSION_SECRET || 'change_this',
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: 'lax' as const,
        maxAge: parseInt(process.env.SESSION_COOKIE_MAX_AGE ?? '86400000', 10), // 1 day
      },
    },

    // keep any other groups you need; we forward jwt/cloudinary from env
    jwt: envConfig.jwt,
    cloudinary: envConfig.cloudinary,
  };
};

export default createConfig;