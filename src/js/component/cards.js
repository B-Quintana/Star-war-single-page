import React from "react";
import PropTypes from "prop-types";

export function Cards(props) {
	return (
		<div className="m-3 text-center" style={{ width: "300px" }}>
			<img
				src={props.myimage}
				className="card-img-top"
				alt="Card image cap"
				style={{ height: "300px", width: "auto", maxWidth: "300px" }}
			/>
			<div className="card-body">
				<h5 className="NYC Trains">NYC Trains</h5>
				<p className="card-text">NYC Trains</p>
				<a href="#" className="btn btn-primary">
					Go Somewhere
				</a>
			</div>
		</div>
	);
}

Cards.propTypes = {
	myimage: PropTypes.string
};
