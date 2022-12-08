import React from "react";
export default function CardImage(props) {
    return <img style={{ borderRadius: '50px 50px 0px 0px' }} src={props.img} className="card-img" alt={props.title} text={props.text} url={props.url} />;
}