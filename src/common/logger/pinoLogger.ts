import pino from 'pino';

const transport = pino.transport({
  options: {
    colorize: true,
    singleLine: true,
  },
  target: 'pino-pretty',
});

const pinoLogger = pino(
  {
    level: process.env.PINO_LOG_LEVEL || 'info',
    redact: ['user.password', 'user.phone'],
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  transport
);

export default pinoLogger;
