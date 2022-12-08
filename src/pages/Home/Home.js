
import { Spinner, Carousel, Button, Container, Row, Col } from "react-bootstrap"
//components
import Card from '../../components/Card/Card'
import cardsArr from "../../data";


const Home = () => {


    //something you need to move around do this
    //map outside app function

    const cards = cardsArr.map((ele, idx) => {
        return (
            <Card
                key={idx}
                title={ele.title}
                url={ele.url}
                img={ele.img}
                text={ele.text}
            />
        );
    });
    return (
        <>
            <div className="testMain">
                <h1>Sean BootCamp !</h1>
                <div>
                    <div className='testc'>
                        <Carousel style={{ maxWidth: "400px", marginBottom: '25px' }}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://bullymake.com/wp-content/uploads/2015/10/278774-dogs-dobermans-scaled.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Loki and Marlow</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F09%2F10%2Fdoberman-mama-adopts-stray-kitten-2000.jpg"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Koda</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://www.bil-jac.com/media/iivhvgbm/doberman-pinscher-1089555870.jpg"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Harley</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                        <h4>Bio</h4>

                        <p className="bio">
                            I’m DeSean Scott, and one of my passions is teaching people life long skills. When I first got into trading, I was studying psychology in college (go figure). So once I found out what trading was at the end of 2019 I was hooked, because it was such a mental oriented job. You have to have a tough mentality to become a trader, because it is one of the hardest jobs out here! Although it’s hard it’s very satisfying to see your progress, and that’s what I plan to do in this Bootcamp! Over these next 3 weeks we will be meeting at least 4 times a week, learning the ins and outs of the market, stock language, psychology of trading, charting, and much more to get you prepared to get out there and start trading for yourselves! I’ve helped over 500 people so far and I’m excited to help you next!
                        </p>


                        <div className="cards">{cards}</div>
                    </div>

                </div>
            </div>
            <div className='junk'></div>
        </>
    )
}

export default Home