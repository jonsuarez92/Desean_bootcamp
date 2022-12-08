import CardImage from "../CardImage/CardImage";
//create the component
export default function Card1(props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <CardImage img={props.img} alt={props.title} />
            <div> <p>{props.text} <button><a href="/bootCamp-class">{props.url}</a></button> </p></div>
        </div>
    );
}
