import './styles/null.scss'
import './styles/global.scss'
import Header from "./layouts/Header/Header";
import Hero from "@/home/Hero/Hero";
import Rest from "@/home/Rest/Rest";
import ServiceCard from "@/home/serviceCard/serviceCard";
import About from "@/home/About/About";
import Prices from "@/home/Prices/Prices";

function App() {

    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <About/>
                <Rest/>
                <ServiceCard/>
                <Prices/>
            </main>

        </>
    )
}

export default App
