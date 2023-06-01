class TravelStrategy {
    travelTime(distance) {
      throw new Error("This method must be overwritten!");
    }
  }
  
  class WalkingStrategy extends TravelStrategy {
    travelTime(distance) {
        throw new Error("This method must be overwritten!");
      }
    }
  
  class CyclingStrategy extends TravelStrategy {
    travelTime(distance) {
        throw new Error("This method must be overwritten!");
      }
  }
  
  class DrivingStrategy extends TravelStrategy {
    travelTime(distance) {
        throw new Error("This method must be overwritten!");
      }
  }
  
  class Traveler {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    travel(distance) {
      // Implement this
    }
  }
  
  const traveler1 = new Traveler()