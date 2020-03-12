import React from "react";
import { Navbar } from "./navbar";
import { Cards } from "./cards";
import { Jumbotron } from "./jumboton";
let va = [
	"https://s.abcnews.com/images/US/subway-1-gty-file-ml-190524_hpMain_4x3_992.jpg",
	"https://www.nycgo.com/images/venues/1179/yankeestadiumsubway_kateglicksberg_0054__x_large.jpg",
	"https://media.nbcnewyork.com/2019/09/tlmd_7_train_nyc.jpg?fit=650%2C366",
	"https://s3-prod.crainsnewyork.com/s3fs-public/BLOGS04_160519867_AR_-1_STFYVAUTRXQG.jpg",
	"https://brooklynreporter.com/wp-content/uploads/2015/07/IMG_7431-624x416.jpg",
    "https://i.ytimg.com/vi/b9ndnArkPp8/maxresdefault.jpg",
    "https://pbs.twimg.com/media/DTX1FxTXUAAyX--.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/70/Miami_Metrorail_Hitachi_train_20190117.jpg"
];

export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />

			<div className="card-group d-flex justify-content-center">
				{va.map((item, index) => (
					<Cards key={index} myimage={item} />
				))}
			</div>
		</>
	);
}
