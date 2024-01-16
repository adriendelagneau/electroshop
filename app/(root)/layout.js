import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <div >
      <Header />
      <div className="mx-auto max-w-screen-2xl text-skin-base">
      {children}
      </div>
      <Footer />
    </div>

  )
}
