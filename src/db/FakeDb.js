import { Burger } from "../models/Burger.js"

class FakeDb {
    constructor() {
        this.burgers = [
            new Burger({ id: 1, name: 'BigMac', topping: 'BigMac sauce', meat: 'some horse', calories: 1100 }),
            new Burger({ id: 2, name: 'McDouble', topping: 'pickles', meat: 'mostly beef', calories: 750 }),
            new Burger({ id: 3, name: 'Filet o Fish', topping: 'tartar sauce', meat: 'fish', calories: 500 })
        ]
    }
}

export const fakeDb = new FakeDb()