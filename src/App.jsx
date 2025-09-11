import './styles/null.scss'
import './styles/global.scss'
import Header from "./layouts/Header/Header";
import Hero from "@/home/Hero/Hero";
import Rest from "@/home/Rest/Rest";
import ServiceCard from "@/home/serviceCard/serviceCard";
import About from "@/home/About/About";
import Prices from "@/home/Prices/Prices";
import Additional from "@/home/Additional/Additional";
import Application from "@/home/Application/Application";
import News from "@/home/News/News";

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
                <Additional/>
                <Application/>
                <News/>
            </main>

        </>
    )
}

export default App
