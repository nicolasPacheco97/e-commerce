import { useEffect } from "react"
import useProductsStore from "../store/useProductStore"

const useProducts = () => {
    const getInitialProducts = useProductsStore( state => state.getInitialProducts)
    const products = useProductsStore( state => state.products)

    useEffect(() => {
        getInitialProducts()
    },[getInitialProducts])

    return { products }
}

export default useProducts