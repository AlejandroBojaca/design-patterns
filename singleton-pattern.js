class Logger {
    constructor() {
      if (Logger.instance == null) {
        this.logs = [];
        Logger.instance = this;
      }
  
      return Logger.instance;
    }
  
    log(message) {
        this.logs.push(message)
    }
  
    printLogs() {
      console.log(this.logs)
    }
  }

const logger = new Logger()

export default logger