class Coffee {
    cost() {
        return 1;
    }
}

class CoffeeDecorator extends Coffee {
    constructor(coffee) {
        super();
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost();
    }
}

class MilkDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 0.5;
    }
}

class WhipDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 0.7;
    }
}

class MochaDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 0.9;
    }
}