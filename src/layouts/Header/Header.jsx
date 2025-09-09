import './Header.scss';
import mainLogo from '@/assets/main_logo.svg';
import {useState} from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className='header container'>
                <img src={mainLogo} alt="Логотип" className="header__logo"/>

                <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#" className="nav__link">Главная</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">О нас</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Наши услуги</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Контакты</a>
                        </li>
                    </ul>
                </nav>

                {/* Кнопка бургер-меню для мобильных */}
                <button
                    className={`burger ${isMenuOpen ? 'burger--open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Открыть меню"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>
            <div
                className={`menu-overlay ${isMenuOpen ? 'menu-overlay--visible' : ''}`}
                onClick={() => setIsMenuOpen(false)}
            />
        </>
    )
}

export default Header;