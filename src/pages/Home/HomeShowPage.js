import React from 'react'
//components
import Carousels from '../../components/Carousel/Carousel'
import { Carousel, Container } from 'react-bootstrap'
const HomeShowPage = () => {
    return (
        <>

            <div className="backGround">
                <h1>
                    About Sean's BootCamp
                </h1>
                <div>
                    <Container style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
                        <img style={{
                            borderRadius: '50px',
                            padding: '20px',
                            maxWidth: '100%', height: '300px'
                        }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJ_4p84RlFU3o88MhlAcwYqqpnahdFWVtL1r_TGi4&s" alt="" />
                        <Container style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column' }} >
                            <h2>Mission Statement</h2>
                            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus sit ipsam amet beatae nam qui consequuntur, quas modi eligendi corporis odit! Iste laudantium aut reiciendis consequatur soluta. Fugit, architecto tempore.</p>
                        </Container >
                        <img style={{
                            borderRadius: '50px',
                            padding: '20px',
                            maxWidth: '100%',
                            height: '300px'
                        }} src="https://cdn.mos.cms.futurecdn.net/avQoSGU9uTjFCgtCW3Rrhk.jpg" alt="" />
                        <Container style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
                            <h2>Idk what to put here</h2>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae repellendus unde blanditiis consequuntur error distinctio nostrum at aspernatur numquam a rerum perferendis soluta iure corporis maxime praesentium, aliquam modi.</p>
                        </Container>
                        <img style={{
                            borderRadius: '50px',
                            padding: '20px',
                            maxWidth: '100%',
                            height: '300px'
                        }} src="https://media.istockphoto.com/id/695164028/photo/vintage-suitcase-full-of-money-business-emigration-concept-background.jpg?s=612x612&w=0&k=20&c=-CvsXGcl6vyaegSFwTvYlHiD2uLSClGZfZyBelwXx6Y=" alt="" />
                        <Container style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column' }} >
                            <h2>Important Info</h2>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi, nemo optio, a vel omnis esse sit et nam voluptatem neque quas sed dolor assumenda consectetur placeat ratione dolores veniam.</p>
                        </Container>
                    </Container>
                    <span><a href="https://linktr.ee/seandontrades">Book Here</a></span>
                </div>
            </div>

        </>
    )
}

export default HomeShowPage