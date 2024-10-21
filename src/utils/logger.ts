import pino from 'pino';
import expressPino from 'pino-http';

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  formatters: {
    level: (label) => {
      return { level: label.toUpperCase() };
    },
    bindings: (bindings) => {
      return {};
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});

export const logRequest = (enabled: boolean) =>
  expressPino({
    level: 'info',
    enabled,
  });
