export default () => ({
  app: {
    name: (process.env.APPNAME ?? 'MyApp') as string,
    port: parseInt(process.env.APP_PORT ?? '3000', 10),
  },
  jwt: {
    secret: process.env.JWT_SECRET as string,
    expiresIn: process.env.JWT_EXPIRES_IN as string,
  },
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },
});
