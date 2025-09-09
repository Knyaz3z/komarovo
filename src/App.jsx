import './styles/null.scss'
import './styles/global.scss'
import Header from "./layouts/Header/Header";
import Hero from "@/home/Hero/Hero";
import Rest from "@/home/Rest/Rest";
import ServiceCard from "@/home/serviceCard/serviceCard";

function App() {

    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <Rest/>
                <ServiceCard/>
            </main>

        </>
    )
}

export default App
