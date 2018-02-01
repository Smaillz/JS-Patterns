console.log('Strategy');

const logger = function (strategy, level, message, ...args) {
    return strategy(level, message, ...args)
  }
  
const logToConsoleStrategy = function (level, message) {
    console[level](message);
}
  
  
  logger(
    logToConsoleStrategy,
    'warn',
    'log first message to console'
  );
  