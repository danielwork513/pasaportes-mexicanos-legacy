import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="w-[940px] mx-auto max-w-full md:pt-10 pt-4 px-4 pb-20">
        {children}
      </div>
      <Footer />
    </>
  )
}