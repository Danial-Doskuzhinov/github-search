class Timer {
    private startTime: Date | null;
    private pausedTime: number;
    private isPaused: boolean;
  
    constructor() {
      this.startTime = null;
      this.pausedTime = 0;
      this.isPaused = false;
    }
  
    start(): void {
      if (!this.startTime || this.isPaused) {
        this.startTime = new Date();
        this.isPaused = false;
      }
    }
  
    pause(): void {
      if (this.startTime && !this.isPaused) {
        this.pausedTime = this.getCurrentElapsedTime();
        this.isPaused = true;
      }
    }
  
    reset(): void {
      this.startTime = null;
      this.pausedTime = 0;
      this.isPaused = false;
    }
  
    log(): { h: number; m: number; s: number; ms: number } {
      const elapsedMilliseconds = this.getCurrentElapsedTime();
      const totalMilliseconds = this.pausedTime + elapsedMilliseconds;
  
      const ms = totalMilliseconds % 1000;
      const totalSeconds = Math.floor(totalMilliseconds / 1000);
      const s = totalSeconds % 60;
      const totalMinutes = Math.floor(totalSeconds / 60);
      const m = totalMinutes % 60;
      const h = Math.floor(totalMinutes / 60);
  
      const logResult = { h, m, s, ms };
      console.log(logResult);
      return logResult;
    }
  
    private getCurrentElapsedTime(): number {
      if (this.startTime) {
        const now = new Date();
        const elapsedMilliseconds = now.getTime() - this.startTime.getTime();
        return elapsedMilliseconds;
      }
      return 0;
    }
  }
  
  // Test your Timer class
  const timer = new Timer();
  
  timer.start();
  
  setTimeout(() => {
    timer.log(); // should log -> { h: 0, m: 0, s: 1, ms: 234 }
    timer.pause();
    timer.log(); // should log -> { h: 0, m: 0, s: 1, ms: 234 }
    timer.start();
  
    setTimeout(() => {
      timer.log(); // should log -> { h: 0, m: 0, s: 3, ms: 221 }
      timer.reset();
  
      setTimeout(() => {
        timer.log(); // should log -> { h: 0, m: 0, s: 1, ms: 0 }
      }, 1000);
    }, 1987);
  }, 1234);
  

export default Timer;
