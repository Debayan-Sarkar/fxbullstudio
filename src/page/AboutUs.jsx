import Story from "../components/about/story";
import BreadCrumb from "../components/common/Breadcrumb";
import About from "../components/home-one/about";
import AutoSlider from "../components/home-one/auto-slider";
import Teams from "../components/home-one/teams";
// Teams images
import Team1Img from "../assets/images/team/1.jpeg";
import Team2Img from "../assets/images/team/2.jpeg";
import Team3Img from "../assets/images/team/3.jpeg";
import Team4Img from "../assets/images/team/4.jpeg";

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

function AboutUs() {
	return (
		<>
			<BreadCrumb title="About Us" />
			<About />
			<Story />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}

export default AboutUs;
