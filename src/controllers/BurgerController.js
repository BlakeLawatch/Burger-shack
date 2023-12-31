import { Burger } from "../models/Burger.js";
import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";

export class BurgerController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getBurgers)
            .get('/:burgerId', this.getBurgerById)
            .post('', this.createBurger)
    }
    async getBurgers(request, response, next) {
        try {
            const burgers = await burgerService.getBurgers()

            return response.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async getBurgerById(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            const burger = await burgerService.getBurgerById(burgerId)

            return response.send(burger)
        } catch (error) {
            new (error)
        }
    }

    async createBurger(request, response, next) {
        try {
            const burgerData = request.body
            const newBurger = await burgerService.createBurger(burgerData)

            response.send(newBurger)
        } catch (error) {
            next(error)
        }
    }
}