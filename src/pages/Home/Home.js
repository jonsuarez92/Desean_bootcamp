import React from "react";
import { Spinner, Carousel, Button, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";
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
                <a href="https://checkout.stripe.com/c/pay/cs_live_a1o4CiKoxM7em1ZHwQKxTnxuLDoz2P2SvGVdULmGkLOPh8J9Ezmj5KfhNM#fidkdWxOYHwnPyd1blppbHNgWjA0TWEyblNEdzBNS3d3Vj1xMUZ%2FYkJkRHZgNWlcN21CfGxoaWpJTWZOZ0xOZ2BiZzdgTkBmdUdvU3N1NnJHX3U0UFYwNlx3fTxLPHdjaj1McEBVXzxTam5KNTVPYlxPXUdEbCcpJ3VpbGtuQH11anZgYUxhJz8nNmZ2NTVINnBTYnUwZ2Z2Nz09Jyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl"><Button style={{ marginTop: '10px', marginBottom: '20px' }} variant="success">Enroll Now!</Button></a>

                <div>


                    <div className='testc'>
                        <Carousel style={{ maxWidth: "400px", marginBottom: '25px' }}>
                            <Carousel.Item>
                                <img style={{ borderRadius: '50px', }}
                                    className="d-block w-100"
                                    src="https://i.imgur.com/zQUE4ll.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3></h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ borderRadius: '50px', }}
                                    className="d-block w-100"
                                    src="https://i.imgur.com/S8e7LOA.jpg"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3></h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ borderRadius: '50px', }}
                                    className="d-block w-100"
                                    src="https://i.imgur.com/pczKXhF.jpg"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3></h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ borderRadius: '50px', }}
                                    className="d-block w-100"
                                    src="https://i.imgur.com/M1Tc67R.jpg"
                                    alt="fourth slide"
                                />
                                <Carousel.Caption>
                                    <h3></h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ borderRadius: '50px', }}
                                    className="d-block w-100"
                                    src="https://i.imgur.com/llxGJT0.jpg"
                                    alt="fifth slide"
                                />
                                <Carousel.Caption>
                                    <h3></h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ borderRadius: '50px', }}
                                    className="d-block w-100"
                                    src="https://i.imgur.com/UKJKyvw.jpg"
                                    alt="sixth slide"
                                />
                                <Carousel.Caption>
                                    <h3></h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ borderRadius: '50px', }}
                                    className="d-block w-100"
                                    src="https://i.imgur.com/PVuvki1.jpg"
                                    alt="seventh slide"
                                />
                                <Carousel.Caption>
                                    <h3></h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ borderRadius: '50px', }}
                                    className="d-block w-100"
                                    src="https://i.imgur.com/he9Ut9j.jpg"
                                    alt="eighth slide"
                                />
                                <Carousel.Caption>
                                    <h3></h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ borderRadius: '50px', }}
                                    className="d-block w-100"
                                    src="https://i.imgur.com/7F0JZuL.jpg"
                                    alt="ninth slide"
                                />
                                <Carousel.Caption>
                                    <h3></h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ borderRadius: '50px', }}
                                    className="d-block w-100"
                                    src="https://i.imgur.com/zpoCTRg.jpg"
                                    alt="tenth slide"
                                />
                                <Carousel.Caption>
                                    <h3></h3>
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