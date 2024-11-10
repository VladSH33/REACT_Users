import React from 'react';
import MyButton from "../../components/UI/button/MyButton";

import './About.less'

const About = () => {
    return (
        <div className="page">
            <div className="page__container">
                <section className="promo">
                    <div className="container">
                        <h1>Управление персоналом</h1>
                        <div className="promo__btn">
                            <MyButton green>
                                запросить консультацию
                            </MyButton>
                        </div>
                        <div className="promo__img">
                            <img src="https://fundsnetservices.com/wp-content/uploads/LLC-members-managers-scaled.jpg" alt="#" />
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="container">
                        <h2 className='about__title'>О компании</h2>
                        <div className="desc">
                            <p>
                            Компания Users предлагает профессиональные услуги в области управления персоналом. Наша команда экспертов помогает организациям оптимизировать кадровые процессы и повышать уровень удовлетворенности сотрудников.
                            </p>
                            <p>
                            Мы ценим индивидуальный подход к каждому клиенту и используем современные технологии для решения задач. Это позволяет нам эффективно справляться с требованиями законодательства и обеспечивать высокое качество обслуживания.
                            </p>
                            <p>
                            Наша миссия – поддерживать развитие бизнеса клиентов, предлагая надежные решения в области кадрового учета и обучения. Мы стремимся стать вашим надежным партнером в управлении персоналом, обеспечивая стабильность и уверенность в будущем.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="services">
                    <div className="container">
                        <h2 className='services__title'>Услуги компании Users</h2>
                        <h3 className='services__subtitle'>Оптимизация управления персоналом</h3>
                        <table className='services__table'>
                            <caption className='table__title'>Кадровый учет</caption>
                                <tbody>
                                    <tr>
                                        <td>Ведение кадрового учета</td>
                                        <td className='col2'>Профессионализм</td>
                                    </tr>
                                    <tr>
                                        <td>Оформление трудовых договоров</td>
                                        <td className='col2'>Надежность</td>
                                    </tr>
                                    <tr>
                                        <td>Консультирование по трудовому законодательству</td>
                                        <td className='col2'>Экспертиза</td>
                                    </tr>
                                </tbody>
                        </table>

                        <table className='services__table'>
                            <caption className='table__title'>Расчет заработной платы</caption>
                                <tbody>
                                    <tr>
                                        <td>Автоматизация расчета</td>
                                        <td className='col2'>Эффективность</td>
                                    </tr>
                                    <tr>
                                        <td>Подготовка отчетности</td>
                                        <td className='col2'>Точность</td>
                                    </tr>
                                    <tr>
                                        <td>Соблюдение сроков</td>
                                        <td className='col2'>Ответственность</td>
                                    </tr>
                                </tbody>
                        </table>
                    </div>
                </section>

                <section className='prices'>
                    <div className="container">
                        <h2>Прайс услуг</h2>
                        <div className="prices-cards">

                            <div className="card">
                                <div className="card__title">
                                    Кадровый учет
                                </div>
                                <div className="card__price">
                                    15.000р
                                </div>
                                <div className="card__period">
                                    в месяц
                                </div>
                                <hr/>
                                <div className='card__desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur nulla earum delectus similique aperiam commodi distinctio minima laborum.
                                </div>
                                <MyButton green>Купить</MyButton>
                            </div>

                            <div className="card dark">
                                <div className="card__title">
                                    Расчет зарплаты
                                </div>
                                <div className="card__price">
                                    8.000р
                                </div>
                                <div className="card__period">
                                    в месяц
                                </div>
                                <hr/>
                                <div className='card__desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur nulla earum delectus similique aperiam commodi distinctio minima laborum.
                                </div>
                                <MyButton green>Купить</MyButton>
                            </div>
                            <div className="card">
                                <div className="card__title">
                                    Консультирование
                                </div>
                                <div className="card__price">
                                    12.000р
                                </div>
                                <div className="card__period">
                                    в месяц
                                </div>
                                <hr/>
                                <div className='card__desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur nulla earum delectus similique aperiam commodi distinctio minima laborum.
                                </div>
                                <MyButton green>Купить</MyButton>
                            </div>
                        </div>
                    </div>
                        
                </section>
            </div>
            
        </div>
    );
};

export default About;