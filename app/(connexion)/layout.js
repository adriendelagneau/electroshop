import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div >
             <header className={`w-full  transition-all fixed top-0 h-16 z-50 text-skin-inverted`}>
            <nav className='flex items-center justify-between w-full h-full px-4 py-2'>
                <div className='hidden w-1/4 sm:inline-flex'>
                    
                <Link href={"/"} >
                    <Image src={"https://res.cloudinary.com/dos8mey8r/image/upload/v1705394086/electro/logo11_l1u82h.png"} width={50} height={50} alt='' />
                </Link>
                </div>
              
            </nav>
      </header>
      {children}
    </div>

  )
}
