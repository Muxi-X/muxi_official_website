import Home from "../pages/home";
import GroupIntro from "../pages/group";
import JoinUs from "../pages/join";
import ProductIntro from "../pages/product";
import MemberIntro from "../pages/member";

const routes = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/intro",
		element: <GroupIntro />,
	},
	{
		path: "/product",
		element: <ProductIntro />,
	},
	{
		path: "/member",
		element: <MemberIntro />,
	},
	{
		path: "/join",
		element: <JoinUs />,
	},
];

export default routes;
