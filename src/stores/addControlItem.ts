import { defineStore } from 'pinia'

export const useAddControlItem = defineStore('addControlItem', {
  state: () => ({ addControlItem: false }),
  actions: {
    setAddControlItem(value: Array<any>) {},
  },
})
