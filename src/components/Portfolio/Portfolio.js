import './Portfolio.css';
import {Link} from "react-router-dom";

export default function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__container">
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className="portfolio__projects-list">
                    <li className="portfolio__projects-item">
                        <a
                            href="https://argentum4k.github.io/Auto-Magazine/"
                            target="_blank"
                            rel="noreferrer"
                            className="portfolio__link"
                        >
                            Адаптивный сайт на css grid - статья для автожурнала
                        </a>
                    </li>
                    <li className="portfolio__projects-item">
                        <a
                          href="https://argentum4k.github.io/5bukv/"
                          target="_blank"
                          rel="noreferrer"
                          className="portfolio__link"
                        >
                            Игра &laquo;5 Букв&raquo; на чистом js
                        </a>
                    </li>
                    <li className="portfolio__projects-item">
                        <a
                            href="https://multipasport.nomoredomains.icu/"
                            target="_blank"
                            rel="noreferrer"
                            className="portfolio__link"
                        >
                            Одностраничное приложение на React с бэкендом на Express
                        </a>
                    </li>
                    <li className="portfolio__projects-item">
                        <Link
                          to="/movies"
                          className="portfolio__link"
                        >
                            Сервис поиска музыкальных фильмов с использованием внешнего API, заходите!
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}
