export class ProductService {
    getInfoInitialProduct = async () => {
       return fetch('https://api.escuelajs.co/api/v1/products')
    }
}