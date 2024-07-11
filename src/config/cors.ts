export const corsConfig =
  process.env.NODE_ENV === 'development'
    ? {
      origin: 'http://localhost:3000',
    }
    : {};
