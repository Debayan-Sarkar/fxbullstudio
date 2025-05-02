import { useParams } from "react-router-dom";
import SingleBlog from "../../components/blog/single-blog";
import BreadCrumb from "../../components/common/Breadcrumb";
import Blog3Img from "../../assets/images/blog/blog3.png";
function SingleBlogPage() {
	const blogs = [
		{
			id: "digital-marketing",
			title: "Digital Marketing ",
			content: "Any product or service promoted through electronic media is called as an online marketing, It promotes brands which act as a linking bridge to customers using the internet. This includes sending email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel",
			img: Blog3Img,
		},
		{
			id: "graphic-design",
			title: "Graphic Designing",
			content: "Graphic designing will help one to create visual concepts by using computer software or by their hand, it is a medium to communicate ideas that inspire, and inform, and win consumers goodwill. They can develop the overall layout and production design for advertisements, brochures, magazines, and reports.",
			img: Blog3Img,
		},
		{
			id: "website-design",
			title: "Website Designing",
			content: "Web designing is a visual display of a web site. It is necessary to communicate ideas effectively which involves all aspects of the design and functioning of websites, from the graphic design and interface to the UX and technical aspects on the back-end. It also includes the right amount of information, be bold and eye-catching and easy to use. It is a Call to action process which clearly tells about the action you want to take and how to achieve it. A good web design is apt, and making every webpage on the web site feel like it owes.",
			img: Blog3Img,
		},
		{
			id: "commercial-shoot",
			title: "Commercial photography",
			content: "It is a genre that encompasses any photos used for a business or publication. It is only a photography that helps to sell things. It devotes the entire photo shoot to your product or service. For commercial shoots, the photographer works within brand guidelines and an approved shot list. Here images are used for promotional purposes in advertisements, books, reports, catalogs, and other places of interest.",
			img: Blog3Img,
		},
		{
			id: "content-writing",
			title: "Content writing",
			content: "It is the process of writing, editing, and publishing content in a digital format. The content includes blog posts, video or podcast scripts, ebooks or whitepapers, press releases, product category descriptions, landing page or social media copy, emailers, newsletters, social media posts, case studies, and more.",
			img: Blog3Img,
		},
		{
			id: "ad-films",
			title: "Ad films",
			content: "An advertising film is a short, very concise film that is usually ten to a maximum of 60 seconds long. The aim is to draw attention to a product, a brand or a service and to promote its sales and make business. Video content is perhaps the most engaging form of content right now, and it is here to stay in the long run. In fact, brands are rapidly shifting to video content and prioritizing it over written content and images. Many brands are also thinking of introducing premium video-based content to engage people even further.",
			img: Blog3Img,
		},
		{
			id: "animation",
			title: "Animated Graphics",
			content: "Animated graphics are pieces of animation or digital footage which create the illusion of motion or rotation, and are usually combined with audio for use in multimedia projects. The magic of cool motion graphics animation for brand apps and web platforms is that it showcases complex pictures, ideas, concepts, and a great deal of data in a short, simple, visually appealing video. As a result, it helps convey a message in the fastest way, easily grab and hold the viewer's attention. Animated graphics are usually displayed via electronic media technology like mobile, TV, Tablet and computer and more.",
			img: Blog3Img,
		},
	];
	const { id } = useParams();
	const blog = blogs.find((blog) => blog.id === id);
	console.log(blog);
	if (!blog) {
		return <div>Blog not found</div>;
	}

	return (
		<>
			<BreadCrumb title={blog.title} />
			<SingleBlog blogs={blog} />
		</>
	);
}

export default SingleBlogPage;
