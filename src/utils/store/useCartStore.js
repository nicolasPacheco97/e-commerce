import { create } from "zustand";

const useCartStore = create((set, get) => ({
    listItemsIntoCart: [],
    getNumberItemsIntoCart: () => get().listItemsIntoCart.length,
    addItemIntoCart: newItem => {
        const currentList = get().listItemsIntoCart
        const currentItem = currentList.findIndex( item => item.id === newItem.id)

        if( currentItem !== -1 ){
            currentList[currentItem].times += 1
            return set({ listItemsIntoCart: currentList})
        }

        const updatedList = [...currentList, {...newItem, times: 1}]
        return set({ listItemsIntoCart: updatedList })
    },
    removeItemIntoCart: (id) => {
        const currentList = get().listItemsIntoCart
        const currentItem = currentList.findIndex( item => item.id === id)

        if( currentList[currentItem].times === 1 ){
            const filteringList = currentList.filter( item => item.id !== id)
            return set({ listItemsIntoCart: filteringList })
        }

        currentList[currentItem].times -= 1
        return set({ listItemsIntoCart: currentList })
    }
}))

export default useCartStore