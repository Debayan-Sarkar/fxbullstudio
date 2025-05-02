import HeroThumbImg from "../../../assets/images/about/front.jpg";
function HeroThumbs() {
	return (
		<div className="aximo-hero-thumb jos" data-jos_animation="fade-right">
			<img src={HeroThumbImg} alt="Hero thumb" style={{ filter: "grayscale(1)" }} />
		</div>
	);
}

export default HeroThumbs;
