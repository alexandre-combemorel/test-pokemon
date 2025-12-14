import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function (props: any) {
	const router = createBrowserRouter([{ path: "/", element: props.children }]);
	return <RouterProvider router={router} />;
}
