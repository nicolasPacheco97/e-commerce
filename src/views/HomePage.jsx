import Card from "../components/card/Card"
import Carousel from "../components/carousel/Carousel"
import useProducts from "../utils/hooks/useProducts"

function HomePage (){
    const { products } = useProducts()
    return <>
        <Carousel products={products}/>
        <div className="flex gap-2 overflow-x-auto">
            { products?.map( product => (
                <Card key={product?.id} {...product}/>
            ))}
        </div>
    </>
}

export default HomePage