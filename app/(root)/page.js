import CategoryComponent from '@/components/CategoryComponent'
import Landing from '@/components/Landing'


export default function Home() {
  return (
    <main className="min-h-screen px-2 mt-24 sm:px-8">
      <Landing />
      <CategoryComponent />
    </main>
  )
}
