import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
            <Navbar />

            <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-10">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default Layout