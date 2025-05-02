import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";

// Teams images
import Team1Img from "../../assets/images/team/1.jpeg";
import Team2Img from "../../assets/images/team/2.jpeg";
import Team3Img from "../../assets/images/team/3.jpeg";
import Team4Img from "../../assets/images/team/4.jpeg";

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Krish",
		designation: "Founder/Technical head",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Cherry",
		designation: "Video editor",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Riya",
		designation: "Manager/ Team Lead",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Harsha",
		designation: "Client coordinator",
		img: Team4Img,
	},
];

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Brand Identity Design",
		description:
			"Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Performance Marketing",
		description:
			"Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Web Design",
		description:
			"Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Motion Graphics",
		description:
			"Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.",
		icon: "icon-design-thinking",
	},
];



function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<Projects />
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}

export default HomeOne;
