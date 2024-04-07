import useCartStore from "../store/useCartStore"

const useCart = () => {
    const {addItemIntoCart, listItemsIntoCart, removeItemIntoCart} = useCartStore(store => store)
    function addToCart( item ){
        addItemIntoCart(item)
    }

    function removeToCart(item){
        removeItemIntoCart(item.id)
    }

    return {
        addToCart,
        removeToCart,
        listItemsIntoCart
    }
}

export default useCart