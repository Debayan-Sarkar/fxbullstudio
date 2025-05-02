import Video from "./Video";
import Star2Img from "../../../assets/images/v1/star2.png";
import AboutCounter from "./AboutCounter";

function About() {
	return (
		<div className="section aximo-section-padding">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-section-title">
					<div className="row">
						<div className="col-lg-7">
							<h2>
								<span className="aximo-title-animation">
									Boost Up Your
									<span className="aximo-title-icon">
										<img src={Star2Img} alt="Star2Img" />
									</span>
								</span>
								Business Today
							</h2>
						</div>
						<div className="col-lg-4 offset-lg-1 d-flex align-items-center">
							<p>
							With a career spanning an impressive 15 years, Krishnendu Paul is a luminary in the realms of 3D animation, film making, graphic design, and education. Having excelled in diverse fields, Krishnendu Paul has left an indelible mark on the creative industry. From their groundbreaking work at Maya Entertainment Ltd. to their educational contributions at Zee Learn, Krishnendu Paul continues to inspire and shape the future of multimedia and visual arts. Their journey is a testament to passion, expertise, and an unwavering commitment to artistic excellence.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<Video />
					</div>
					<div className="col-lg-4">
						<AboutCounter />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
