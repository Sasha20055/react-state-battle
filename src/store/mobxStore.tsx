import { makeAutoObservable } from "mobx";

export class MobxStore {
    squares = Array(9).fill('null')
    queue = 0

    constructor() {
        makeAutoObservable(this)
    }

    clean = () => {
        return this.squares = Array(9).fill('null'), this.queue = 0
    }

    setSquare = (i: number) => {
        if(this.squares[i] !== 'null') return {}

        this.squares[i] = this.queue === 0 ? 'x' : 'o'
        this.queue = this.queue === 0 ? 1 : 0
    }
}