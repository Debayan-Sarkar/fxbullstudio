import { Link } from "react-router-dom";
import ArrayRightImg from "../../../assets/images/icon/arrow-right.svg";
function GridBlogCard({ blog: { img, title, date, category, href } }) {
	return (
		<div className="col-xl-6">
			<div className="single-post-item">
				<div className="post-thumbnail">
					<img src={img} alt={title} />
				</div>
				<div className="post-content">
					<div className="post-meta">
						<div className="post-category">
							<a href="javascript:void(0)">{category}</a>
						</div>
						<div className="post-date">{date}</div>
					</div>
					{href === true ? (<Link to="/single-blog">
						<h3 className="entry-title">{title}</h3>
					</Link>) : (
						<h3 className="entry-title">{title}</h3>
					)}
					{href === true ? (
						<Link className="post-read-more" to="/single-blog">
							read more <img src={ArrayRightImg} alt="Arrow" />
						</Link>
					) : ''}


				</div>
			</div>
		</div>
	);
}

export default GridBlogCard;
