import { useState } from "react";
import ModalVideo from "react-modal-video";
import PlayBtnImg from "../../../assets/images/v1/play-btn.svg";
import VideoBg from "../../../assets/images/about/front2.jpeg";

function Video() {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className="aximo-video-wrap">
			<img src={VideoBg} alt="VideoBg" />
			{/* <ModalVideo
				channel="youtube"
				youtube={{ autoplay: 0 }}
				isOpen={isOpen}
				videoId="Vx2aLNgGoAE"
				onClose={() => setOpen(false)}
			/> */}
		</div>
	);
}

export default Video;
