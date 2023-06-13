class TravelStrategy {
    travelTime(distance) {
      throw new Error("This method must be overwritten!");
    }
  }
  
  class WalkingStrategy extends TravelStrategy {
    travelTime(distance) {
        return `${distance / 5} hours`
      }
    }
  
  class CyclingStrategy extends TravelStrategy {
    travelTime(distance) {
      return `${distance / 30} hours`
    }
  }
  
  class DrivingStrategy extends TravelStrategy {
    travelTime(distance) {
      return `${distance / 80} hours`
    }
  }
  
  class Traveler {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    travel(distance) {
      return this.strategy.travelTime(distance)
    }
  }
  
  const traveler1 = new Traveler(new WalkingStrategy())
  const travelTime = traveler1.travel(50)

  console.log(travelTime)