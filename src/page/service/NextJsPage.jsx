import BreadCrumb from "../../components/common/Breadcrumb";
import AutoSlider from "../../components/home-one/auto-slider";
import Testimonial from "../../components/home-one/testimonial";
import ServiceDetails from "../../components/service/ServiceDetails";
function NextJsPage() {
	return (
		<>
			<BreadCrumb title="Service Details" />
			<ServiceDetails />
			<AutoSlider />
			<Testimonial />
		</>
	);
}

export default NextJsPage;
