import Banner from '@/components/Banner'
import CategoryComponent from '@/components/CategoryComponent'
import Landing from '@/components/Landing'
import NewsLetter from '@/components/NewsLetter'
import Slider from '@/components/Slider'
import Test from '@/components/Text'



export default function Home() {
  return (
    <main className="min-h-screen px-2 mt-24 sm:px-8">
      <Test />
    
      <Slider products={"bestSales"} />
      <Banner />
      <CategoryComponent />
      <Slider />
      <NewsLetter products={"newArrived"} />
      
    </main>
  )
}
