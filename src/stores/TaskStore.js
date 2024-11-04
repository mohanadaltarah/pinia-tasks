import {defineStore} from "pinia"

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "Buy some groceries", isFav: false},
            {id: 2, title: "Call my mother", isFav: true}
        ],
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        },

        countFavs() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },

        countTotal: (state) => {
            return state.tasks.length
        }
    },

    actions: {
        addTask(task) {
            this.tasks.push(task)
        },

        deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id;
            })
        },

        toggleFav(id) {
            const task = this.tasks.find((t) => t.id === id)
            task.isFav = !task.isFav
        }
    }
})

