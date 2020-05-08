import React from "react";
import PropTypes from "prop-types";

export function Cards(props) {
	return (
		<div className="m-3 text-center" style={{ width: "300px" }}>
			<img
				src=   {props.myimage.imgUrl}
				className="card-img-top"
				alt="Card image cap"
				style={{ height: "300px", width: "auto", maxWidth: "300px" }}
			/>
			<div className="card-body">
				<h5 classNamegi="NYC">NYC</h5>
				<p className="card-text">{props.myimage.title}
				
				<p className={props.myimage.description}
				<a href="#" className={props.myimage.link}
					Go Somewhere
				</a>
			</div>
		</div>
	);
}

Cards.propTypes = {
	myimage: PropTypes.string
};
