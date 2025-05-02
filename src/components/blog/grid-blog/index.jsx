import Categories from "../Categories";
import RecentPosts from "../RecentPosts";
import Search from "../Search";
import Tags from "../Tags";

import Blog1Img from "../../../assets/images/service/course1.jpeg";
import Blog2Img from "../../../assets/images/service/course2.jpeg";
import Blog3Img from "../../../assets/images/service/course3.jpeg";
import Blog4Img from "../../../assets/images/blog/blog9.png";
import Blog5Img from "../../../assets/images/blog/blog10.png";
import Blog6Img from "../../../assets/images/blog/blog11.png";
import GridBlogCard from "./GridBlogCard";

const gridBlogData = [
	{
		id: crypto.randomUUID(),
		title: "Certificate in Graphic Designing",
		category: "Graphics Designing",
		img: Blog1Img,
		href: false,
	},
	{
		id: crypto.randomUUID(),
		title: "Certificate in Photography",
		category: "Photography",
		img: Blog2Img,
		href: false,
	},
	{
		id: crypto.randomUUID(),
		title: "Short Film Making Course",
		category: "Film Making",
		img: Blog3Img,
		href: false,
	},
];
function GridBlog() {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="row">
							{gridBlogData.map((blog) => (
								<GridBlogCard key={blog.id} blog={blog} />
							))}
						</div>
					</div>
					<div className="col-lg-4">
						<div className="right-sidebar">
							{/* <Search /> */}
							{/* <Categories /> */}
							{/* <RecentPosts /> */}
							{/* <Tags /> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GridBlog;
