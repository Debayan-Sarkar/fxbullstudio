import { LazyLoadImage } from "react-lazy-load-image-component";
import Blog3PreviewImg from "../../../assets/images/blog/blog3-preview.webp";
import Blog3Img from "../../../assets/images/blog/blog3.png";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import PostMeta from "./PostMeta";
import PostTags from "./PostTags";
function BlogDetails({ blogArr }) {
	return (
		<>
			<div className="post-thumbnail">
				<LazyLoadImage
					src={blogArr.img}
					width={'100%'}
					height={500}
					alt="Single blog image"
					effect="blur"
					placeholderSrc={Blog3PreviewImg}
				/>
			</div>
			<div className="single-post-content-wrap">
				{/* <PostMeta /> */}
				<div className="entry-content">
					<h3>{blogArr.title}</h3>
					<p>
						{blogArr.content}
					</p>

					{/* <PostTags />
					<CommentList />
					<CommentForm /> */}
				</div>
			</div>
		</>
	);
}

export default BlogDetails;
