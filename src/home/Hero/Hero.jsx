import './Hero.scss'

function Hero() {

    return (
        <div className='hero'>
            <h1 className='hero__head'>УСАДЬБА КОМАРОВО В ВИТЕБСКЕ</h1>
            <div className="hero__images">
                <img src="/hero_image_1.png" alt="" className="hero__item"/>
                <img src="/hero_image_2.png" alt="" className="hero__item"/>
                <img src="/hero_image_3.png" alt="" className="hero__item"/>
                <img src="/hero_image_4.png" alt="" className="hero__item"/>
            </div>
        </div>
    )
}

export default Hero