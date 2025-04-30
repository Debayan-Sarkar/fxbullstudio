import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function useMenu() {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [mobileSubMenu, setMobileSubMenu] = useState("");
	const [mobileSubMenuSub, setMobileSubMenuSub] = useState("");
	const [menuTitle, setMenuTitle] = useState("");
	const location = useLocation();

	useEffect(() => {
		setToggleMenu(false);
		setMobileSubMenu("");
		setMobileSubMenuSub("");
	}, [location.pathname]); // Run effect on every route/path change
	
	const handleMenu = () => {
		setToggleMenu(false);
		setMobileSubMenu("");
		setMobileSubMenuSub("");
	};

	const handleSubMenu = (e, id) => {
		e.preventDefault();
		setMobileSubMenu(id);

		if (e.target.tagName === "A") {
			const content = e.target.firstChild.textContent;
			setMenuTitle(content);
		} else {
			const content = e.target.parentElement.textContent;
			setMenuTitle(content);
		}
	};

	const handleSubMenuSub = (e, id) => {
		e.preventDefault();
		setMobileSubMenuSub(id);
		if (e.target.tagName === "A") {
			const content = e.target.firstChild.textContent;
			setMenuTitle(content);
		} else {
			const content = e.target.parentElement.textContent;
			setMenuTitle(content);
		}
	};

	const handleGoBack = () => {
		if (mobileSubMenuSub) {
			setMobileSubMenuSub("");
			return;
		}
		if (mobileSubMenu) {
			setMobileSubMenu("");
			return;
		}
	};

	return {
		toggleMenu,
		setToggleMenu,
		mobileSubMenu,
		setMobileSubMenu,
		mobileSubMenuSub,
		setMobileSubMenuSub,
		handleSubMenu,
		handleSubMenuSub,
		handleGoBack,
		handleMenu,
		menuTitle,
		setMenuTitle,
	};
}

export default useMenu;
