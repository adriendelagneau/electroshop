import CategoryComponent from '@/components/CategoryComponent'
import Landing from '@/components/Landing'
import Tps from '@/components/Tps'


export default function Home() {
  return (
    <main className="min-h-screen px-2 mt-24 sm:px-8">
      <Landing />
      <CategoryComponent />
      <Tps />
    </main>
  )
}
