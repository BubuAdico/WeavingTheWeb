import { Outlet } from "react-router-dom";
import Navbar from "./modules/pages/Home/components/Navbar";
import { Footer } from "./modules";


const Layout = () => {
	// console.log(props)

	return (
		<main className=" flex flex-col min-h-[100vh]">
			<Navbar />
			<Outlet />
			<Footer />
		</main>
	);
};

export default Layout;
