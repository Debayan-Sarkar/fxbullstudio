import { Link } from "react-router-dom";
function TeamCard({ team: { name, designation, img } }) {
	return (
		<div className="col-xl-3 col-md-6">
			<div className="aximo-team-wrap">
				<div className="aximo-team-thumb">
					<img
						src={img}
						alt={name}
						style={{
							height: name === "Cherry" || name === "Harsha" ? 251: '',
							objectFit: name === "Cherry" || name === "Harsha" ? 'cover' : ''
						}}
					/>

				</div>
				<div className="aximo-team-data">
					<h3>{name}</h3>
					<p>{designation}</p>
				</div>
			</div>
		</div>
	);
}

export default TeamCard;
