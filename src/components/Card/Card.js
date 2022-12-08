import CardImage from "../CardImage/CardImage";
//create the component
import { Spinner, Carousel, Button, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";

export default function Card1(props) {
    return (
        <div className="card" style={{ width: "18rem", borderRadius: '50px' }}>
            <CardImage img={props.img} alt={props.title} />
            <div> <p>{props.text} <Link to="/bootCamp-class"><Button variant="primary">{props.url}</Button></Link> </p></div>
        </div>
    );
}
