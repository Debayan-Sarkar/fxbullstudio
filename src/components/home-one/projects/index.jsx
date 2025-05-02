import Star2Img from "../../../assets/images/v1/star2.png";
import Portfolio1Img from "../../../assets/images/portfolio/p1.jpeg";
import Portfolio2Img from "../../../assets/images/portfolio/p2.jpeg";
import Portfolio3Img from "../../../assets/images/portfolio/p3.jpeg";
import Portfolio4Img from "../../../assets/images/portfolio/p4.jpeg";
import Portfolio5Img from "../../../assets/images/portfolio/p5.jpeg";
import Portfolio6Img from "../../../assets/images/portfolio/p6.jpeg";
import Portfolio7Img from "../../../assets/images/portfolio/p7.jpeg";
import Portfolio8Img from "../../../assets/images/portfolio/p8.jpeg";
import Portfolio9Img from "../../../assets/images/portfolio/p9.jpeg";
import Portfolio10Img from "../../../assets/images/portfolio/p10.jpeg";
import Portfolio11Img from "../../../assets/images/portfolio/p11.jpeg";
import Portfolio12Img from "../../../assets/images/portfolio/p12.jpeg";
import Portfolio13Img from "../../../assets/images/portfolio/p13.jpeg";
// import Portfolio14Img from "../../../assets/images/portfolio/p14.jpeg";
import Portfolio15Img from "../../../assets/images/portfolio/p15.jpeg";
import Portfolio16Img from "../../../assets/images/portfolio/p16.jpeg";
import Portfolio17Img from "../../../assets/images/portfolio/p17.jpeg";
import Portfolio18Img from "../../../assets/images/portfolio/p18.jpeg";
import Portfolio19Img from "../../../assets/images/portfolio/p19.jpeg";
import Portfolio20Img from "../../../assets/images/portfolio/p20.jpeg";
import Portfolio21Img from "../../../assets/images/portfolio/p21.jpeg";
import Portfolio22Img from "../../../assets/images/portfolio/p22.jpeg";
import Portfolio23Img from "../../../assets/images/portfolio/p23.jpeg";
import Portfolio24Img from "../../../assets/images/portfolio/p24.jpeg";
import Portfolio25Img from "../../../assets/images/portfolio/p25.jpeg";
import Portfolio26Img from "../../../assets/images/portfolio/p26.jpeg";
import Portfolio27Img from "../../../assets/images/portfolio/p27.jpeg";
import Portfolio28Img from "../../../assets/images/portfolio/p28.jpeg";
import Portfolio29Img from "../../../assets/images/portfolio/p29.jpeg";
import Portfolio30Img from "../../../assets/images/portfolio/p30.jpeg";
import Portfolio31Img from "../../../assets/images/portfolio/p31.jpeg";
import Portfolio32Img from "../../../assets/images/portfolio/p32.jpeg";
import Portfolio33Img from "../../../assets/images/portfolio/p33.jpeg";
import Portfolio34Img from "../../../assets/images/portfolio/p34.jpeg";
import Portfolio35Img from "../../../assets/images/portfolio/p35.jpeg";
import Portfolio36Img from "../../../assets/images/portfolio/p36.jpeg";
import Portfolio37Img from "../../../assets/images/portfolio/p37.jpeg";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Product Design",
		// description: "Developing the look and feel of physical products, aesthetics, and functionality.",
		img: Portfolio1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Logo and Branding",
		// description: "Creating or refreshing a companys logo and developing a cohesive visual identity.",
		img: Portfolio2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "App UI/UX Design",
		// description: "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
		img: Portfolio3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Packaging Design",
		// description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Environmental Design",
		// description:"Designing trade show booths, exhibition spaces, and immersive installations for events and conferences.",
		img: Portfolio5Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Environmental Design",
		// description:"Designing trade show booths, exhibition spaces, and immersive installations for events and conferences.",
		img: Portfolio6Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Advertising Campaigns",
		// description:"Developing creative concepts for print, digital, and video advertising campaigns, including ad design and copywriting",
		img: Portfolio7Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio8Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio9Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio10Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio11Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio12Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio13Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio15Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio16Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio17Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio18Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio19Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio20Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio21Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio22Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio23Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio24Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio25Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio26Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio27Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio28Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio29Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio30Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio31Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio32Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio33Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio34Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio35Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio36Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		// description:"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio37Img,
	}
];

const swiperSettings = {
	spaceBetween: 24,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination, Mousewheel],
	mousewheel: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3.5,
		},
	},
};
function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center light">
					<h2>
						Have a wide range of
						<span className="aximo-title-animation">
							creative projects
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
			</div>
			<div className="swiper aximo-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
