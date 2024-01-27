
import { getProducts } from '@/app/_productsActions'
import SliderComponent from './SliderComponent'

const Slider = async () => {


      // Effect to fetch more products when component comes into view

    
    const data = await getProducts(1, 8, "", "", "", "")
       
   


  
    return (
        <div className='w-full mx-auto'>
       <SliderComponent data={data.products} />
        </div>
  )
}

export default Slider