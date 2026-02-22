import env from './env';

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
      name: envConfig.app.name ?? 'Express App',
      port: envConfig.app.port,
    },
    // keep any other groups you need; we forward jwt/cloudinary from env
    jwt: envConfig.jwt,
    cloudinary: envConfig.cloudinary,
  };
};

export default createConfig;
