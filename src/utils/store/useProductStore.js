import { create } from "zustand"
import { ProductService } from "../api/ProductService"

const productService = new ProductService()
const useProductsStore = create((set) => ({
    products: [],
    getInitialProducts: async () => {
        const productsJson = await productService.getInfoInitialProduct()
        const products = await productsJson.json()
        return set({ products: products })
    }
}))

export default useProductsStore