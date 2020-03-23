import React from "react";
import { Navbar } from "./navbar";
import { Cards } from "./cards";
import { Jumbotron } from "./jumbotron";
let list = [
  {
    title: 'NYC Train',
    link:  'https://s.abcnews.com/images/US/subway-1-gty-file-ml-190524_hpMain_4x3_992.jpg',
    description: 'Inwoods',
    imgUrl: 'https://s.abcnews.com/images/US/subway-1-gty-file-ml-190524_hpMain_4x3_992.jpg'
  },
  {
    title: 'Cool Train',
    link:   'https://s3-prod.crainsnewyork.com/s3fs-public/BLOGS04_160519867_AR_-1_STFYVAUTRXQG.jpg',
    description: 'This train was created in 1919',
    imgUrl: 'https://s3-prod.crainsnewyork.com/s3fs-public/BLOGS04_160519867_AR_-1_STFYVAUTRXQG.jpg'
  },
  {
    title: 'White Bullter Train',
    link:  'https://upload.wikimedia.org/wikipedia/commons/7/70/Miami_Metrorail_Hitachi_train_20190117.jpg',
    description: 'Fast train',
    imgUrl:  'https://upload.wikimedia.org/wikipedia/commons/7/70/Miami_Metrorail_Hitachi_train_20190117.jpg'
  }
]

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
