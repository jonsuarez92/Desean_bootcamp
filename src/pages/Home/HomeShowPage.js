import React from 'react'
//components

import { Spinner, Carousel, Button, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";

const HomeShowPage = () => {
    return (
        <>

            <div className="backGround">
                <h1>
                    About Sean's BootCamp
                </h1>
                <Link to="https://checkout.stripe.com/c/pay/cs_live_a1NseJE8iWo6AN9znKj9mrIGF0ewJngJvuFnHfxF2bsWIk0HgMgmAfhKQ5#fidkdWxOYHwnPyd1blppbHNgWjA0TWEyblNEdzBNS3d3Vj1xMUZ%2FYkJkRHZgNWlcN21CfGxoaWpJTWZOZ0xOZ2BiZzdgTkBmdUdvU3N1NnJHX3U0UFYwNlx3fTxLPHdjaj1McEBVXzxTam5KNTVPYlxPXUdEbCcpJ3VpbGtuQH11anZgYUxhJz8nNmZ2NTVINnBTYnUwZ2Z2Nz09J3gl"><Button style={{ marginTop: '10px', marginBottom: '20px' }} variant="success">Enroll Now!</Button></Link>
                <div>
                    <Container style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
                        <img style={{
                            borderRadius: '50px',
                            padding: '20px',
                            maxWidth: '100%', height: '300px'
                        }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJ_4p84RlFU3o88MhlAcwYqqpnahdFWVtL1r_TGi4&s" alt="" />
                        <Container style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column' }} >
                            <h2>Mission Statement</h2>
                            <p >Each week you will learn a new topic to add to your arsenal to make you a SNIPER! Some subjects include psychology, risk management/stoploss,
                                choosing the right contracts, etc. My goal is to help each and every one of you navigate through this market with the confidence to propel
                                you to become a self sufficient trader! There is nothing wrong with being is group chats, but you NEED to know how to maneuver yourself. After these next 3 weeks, you should have a better grasp on the market overall.
                            </p>
                        </Container >
                        <img style={{
                            borderRadius: '50px',
                            padding: '20px',
                            maxWidth: '100%',
                            height: '300px'
                        }} src="https://cdn.mos.cms.futurecdn.net/avQoSGU9uTjFCgtCW3Rrhk.jpg" alt="" />
                        <Container style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
                            <h2>What the Course entails</h2>
                            <p >Two classes per week, beginner and intermediate class
                                weekly game plan every Sunday
                                Live trading 1-2 times per week
                            </p>
                            <h3>If you</h3>
                            <div>
                                <ul>
                                    <li>
                                        Are looking for another source of income
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Want to make money when YOU want to
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Understand risk and reward
                                    </li>
                                </ul>
                                <ul>
                                    <li>Want to have the potential to create generational wealth
                                        This bootcamp is for you!”
                                    </li>
                                </ul>
                            </div>

                        </Container>
                        <img style={{
                            borderRadius: '50px',
                            padding: '20px',
                            maxWidth: '100%',
                            height: '300px'
                        }} src="https://media.istockphoto.com/id/695164028/photo/vintage-suitcase-full-of-money-business-emigration-concept-background.jpg?s=612x612&w=0&k=20&c=-CvsXGcl6vyaegSFwTvYlHiD2uLSClGZfZyBelwXx6Y=" alt="" />
                        <Container style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column' }} >
                            <h2>Disclaimer </h2>
                            <p >I do not provide personal investment advice and I am not a qualified licensed investment advisor. I am an amateur investor.
                                All information found here, including any ideas, opinions, views, predictions, forecasts, commentaries, suggestions, or stock picks, expressed or implied herein, are for informational, entertainment or educational purposes only and should not be construed as personal investment advice. While the information provided is believed to be accurate, it may include errors or inaccuracies.
                                I will not and cannot be held liable for any actions you take as a result of anything you read here.
                                Conduct your own due diligence, or consult a licensed financial advisor or broker before making any and all investment decisions. Any investments, trades, speculations, or decisions made on the basis of any information found on this site, expressed or implied herein, are committed at your own risk, financial or otherwise.
                                I do not provide personal investment advice and I am not a qualified licensed investment advisor. I am an amateur investor.
                                All information found here, including any ideas, opinions, views, predictions, forecasts, commentaries, suggestions, or stock picks, expressed or implied herein, are for informational, entertainment or educational purposes only and should not be construed as personal investment advice. While the information provided is believed to be accurate, it may include errors or inaccuracies.
                                I will not and cannot be held liable for any actions you take as a result of anything you read here.
                                Conduct your own due diligence, or consult a licensed financial advisor or broker before making any and all investment decisions. Any investments, trades, speculations, or decisions made on the basis of any information found on this site, expressed or implied herein, are committed at your own risk, financial or otherwise.</p>
                        </Container>
                    </Container>

                </div>
            </div>

        </>
    )
}

export default HomeShowPage