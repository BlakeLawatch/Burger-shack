import { fakeDb } from "../db/FakeDb.js"
import { Burger } from "../models/Burger.js"

class BurgerService {
    async getBurgers() {
        const burgers = await fakeDb.burgers

        return burgers
    }

    async getBurgerById(burgerId) {
        const foundBurger = await fakeDb.burgers.find(burger => burger.id == burgerId)

        if (!foundBurger) {
            return
        }
        return foundBurger
    }

    async createBurger(burgerData) {
        if (fakeDb.burgers.length == 0) {
            burgerData.id = 1
        } else {
            const burgerId = fakeDb.burgers.map(burger => burger.id)
            const largestBurger = Math.max(...burgerId)
            burgerData.id = largestBurger + 1
        }

        const newBurger = new Burger(burgerData)
        fakeDb.burgers.push(newBurger)
        return newBurger
    }


}


export const burgerService = new BurgerService()