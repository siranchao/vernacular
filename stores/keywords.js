import { defineStore } from 'pinia'

export const useKeywordStore = defineStore({
    id: 'myKeyword',
    state: () => {
        return {
            keywords: ""
        }
    },
    actions: {
        updateKeyword() {
            this.keywords += " add"
        }
    },
    getters: {
        getKeyword: (state) => {
            return state.keywords
        },
    },
})