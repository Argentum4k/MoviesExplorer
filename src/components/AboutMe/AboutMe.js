import './AboutMe.css';
import userpic from '../../images/userpic.png';

export default function AboutMe() {
    return (
        <section className="about-me" id="aboutMe">
            <div className="about-me__container">
                <h2 className="about-me__title">Резюме</h2>
                <div className="about-me__bio-container">
                    <div className="about-me__bio">
                        <h3 className="about-me__name">Алексей</h3>
                        <p className="about-me__age">Фронтенд-разработчик, 33 года</p>
                        <p className="about-me__text">
                            Разрабатываю лендинги, сайты и веб-приложения на React и бэкенд на node.js.<br/>
                            Окончил курс Яндекс.Практикум по веб-разработке.
                            Имею опыт в IT больше 10 лет, однако в данном направлении работаю недавно,
                            продолжаю учиться и накапливать навыки. Работаю как по Вашему макету (figma итд) так и без него.
                            Готов принять участие в долгосрочном проекте на условиях частичной занятости.
                        </p>
                        <ul className="about-me__socials">
                            <li>
                                <a
                                    href="https://t.me/Argentum4k"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="about-me__social-link"
                                >
                                    Telegram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Argentum4k"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="about-me__social-link"
                                >
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                    <img
                        className="about-me__avatar"
                        src={userpic}
                        alt="фотография разработчика приложения"
                    />
                </div>
            </div>
        </section>
    );
}
