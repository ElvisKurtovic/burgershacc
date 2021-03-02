import { NEWDB } from "../db/NEWDB";

let id = 50
class BurgersService {
    getAll() {
        return NEWDB.burgers
    }

    create(newBurger) {
        newBurger.id = id++
        NEWDB.burgers.push(newBurger)
        return newBurger
    }

    getOne(id) {
        const foundBurger = findBurger(id)
        return foundBurger
    }

    delete(id) {
        findBurger(id)
        NEWDB.burgers = NEWDB.burgers.filter(b => b.id != id)
    }

    edit(editedBurger, id) {
        const foundBurger = findBurger(id)
        Object.keys(editedBurger).forEach(key => { foundBurger[key] = editedBurger[key] })
        return foundBurger
    }





}

function findBurger(id) {
    let foundBurger = NEWDB.burgers.find(b => b.id == id)
    if (!foundBurger) { throw new Error("invalid id") }
    return foundBurger
}


export const burgersService = new BurgersService()