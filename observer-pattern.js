class Subscriber {
    constructor(name) {
        this.name = name
    }
    update(news) {
      throw new Error("This method must be overwritten!");
    }
  }
  
  class NewsSubscriber extends Subscriber {
    constructor(name) {
        super(name)
    }
    update(news) {
        console.log(`the news are ${news}`)
    }
  }
  
  class NewsPublisher {
    constructor() {
      this.subscribers = [];
    }
  
    addSubscriber(subscriber) {
        this.subscribers.push(subscriber)
    }
  
    removeSubscriber(subscriber) {
        const subIndex = this.subscribers.indexOf(subscriber);
        if (subIndex > -1) {
          this.subscribers.splice(subIndex, 1);
        }
    }
  
    publish(news) {
        this.subscribers.forEach( sub => {
            sub.update(news)
        })
    }
  }

  const sub1 = new NewsSubscriber('Harry')
  const publisher = new NewsPublisher()

  publisher.addSubscriber(sub1)
  publisher.publish('Interesting news')
  console.log(publisher.subscribers)
  publisher.removeSubscriber(sub1)
  publisher.publish('Bad news')
  console.log(publisher.subscribers)
