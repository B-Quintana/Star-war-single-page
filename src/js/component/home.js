import React from "react";
import { Navbar } from "./navbar";
import { Cards } from "./cards";
import { Jumbotron } from "./jumboton";
let list = [
  {
    title: 'NYC Train',
    link:  "https://s.abcnews.com/images/US/subway-1-gty-file-ml-190524_hpMain_4x3_992.jpg",
    description: 'blah blah',
    imgUrl: "https://s.abcnews.com/images/US/subway-1-gty-file-ml-190524_hpMain_4x3_992.jpg"
  },
  {
    title: 'Cool Train',
    link: 'https://eeeeeee.com',
    description: 'This train was created in 1919',
    imgUrl: 'https://sdfsdf.com'
  },
  {
    title: 'White Bullter Train',
    link: 'https://aaaaaf.com',
    description: 'Fast train',
    imgUrl: 'https://sdfsdf.com'
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
