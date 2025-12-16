import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useGlobalProvider } from "../context/GlobalContext";

export default function DefaultLayout() {
    const { loader } = useGlobalProvider()
    return (
        <>
            <Header />
            {loader && <Loader />}
            <main >
                <Outlet />
            </main>

            <Footer />
        </>
    )
}