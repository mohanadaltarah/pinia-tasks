import {defineStore} from "pinia"

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "Buy some groceries", isFav: false},
            {id: 2, title: "Call my mother", isFav: false}
        ],
        name: "Stricty"
    })
})

export default defineStore()