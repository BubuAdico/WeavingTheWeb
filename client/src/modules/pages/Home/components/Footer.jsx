import { FiTwitter } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import { icon_bible } from "../../../../assets/images";

const Footer = () => {

	return (
		<main className="h-auto flex mt-auto flex-col border ">
			<section className="w-full h-auto bg-coffee-500	flex p-3  justify-start items-start overflow-hidden footer-section gap-5">
				<section className="items-start h-auto flex ">
					<div className="p-5 h-auto">
						<header className="media-q-text tracking-wider">
							<figure className="w-full gap-3 items-center flex ">
								<span className="flex items-center gap-6">
									<img
										src={icon_bible}
										className="w-8 h-8 mr-[-1.25rem] rounded-full"
										alt="Fashion Logo"
									/>
									<span className="self-center text-xl font-bold whitespace-nowrap dark:text-[#2185d5] text-[#2185d5] flex flex-col justify-start">
										TheLamb
									</span>
								</span>
							</figure>
						</header>

						<div className="intro-foot-icons mt-3 flex gap-1">
							<div className="intro-foot-icons-twitter flex items-center">
								<span className="text-md text-black social_media_names pl-2">
									<Link to="#">
										<FiTwitter />
									</Link>
								</span>
							</div>

							<div className="intro-foot-icons-linkedIn flex items-center">
								<span className="text-md text-black social_media_names pl-2">
									<Link to="">
										<AiOutlineFacebook />
									</Link>
								</span>
							</div>

							<div className="intro-foot-icons-instagram flex items-center">
								<span className="text-md text-black social_media_names pl-2">
									<Link to="#">
										<FiInstagram />
									</Link>
								</span>
							</div>
						</div>
					</div>
				</section>

				<section className="items-start h-auto flex">
					<div className="p-5 h-auto">
						<header className="media-q-text tracking-wider">
							<span className="text-black">Get to know us</span>
						</header>

						<ul name="footer" className="cursor-pointer mt-4">
							{arry["getToKnow"].map((items) => (
								<li
									key={items.link}
									className="	flex items-center"
								>
									<Link
										to={items.link}
										className="text-sm pl-2	text-black hover:text-[#2185d5]"
									>
										{items.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className="items-start h-auto flex">
					<div className="p-5 h-auto">
						<header className="media-q-text tracking-wider">
							<span className="text-black">
								Sell on Fashion.com
							</span>
						</header>

						<ul name="footer" className="cursor-pointer mt-4">
							{arry["Sell"].map((items) => (
								<li
									key={items.link}
									className="	flex items-center"
								>
									<Link
										to={items.link}
										className="text-sm pl-2	text-black hover:text-[#2185d5]"
									>
										{items.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className="items-start h-auto flex">
					<div className="p-5 h-auto">
						<header className="media-q-text tracking-wider">
							<span className="text-black">Get Support</span>
						</header>

						<ul name="footer" className="cursor-pointer mt-4">
							{arry["Support"].map((items) => (
								<li
									key={items.link}
									className="	flex items-center"
								>
									<Link
										to={items.link}
										className="text-sm pl-2	text-black hover:text-[#2185d5]"
									>
										{items.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</section>
			</section>
			<hr className="" />

			<div className=" flex justify-between p-5 bg-coffee-500 text-[#2185d5]">
				<span className="mx-10">
					&copy; {new Date().getFullYear()} Fashion
				</span>
				<span className="mx-10">All right reserved</span>
			</div>
		</main>
	);
};

export default Footer;
const arry = {
	getToKnow: [
		{
			name: "About us",
			link: "/AboutUs",
		},
		{
			name: "Career",
			link: "/Career",
		},
		{
			name: "Fashion Blog",
			link: "/FashionBlog",
		},
	],
	Sell: [
		{
			name: "Start Selling",
			link: "/StartSelling",
		},
		{
			name: "Seller Central",
			link: "/SellerCentral",
		},
		{
			name: "Partnerships",
			link: "/Partnerships",
		},
	],
	Support: [
		{
			name: "Help Center",
			link: "/Help",
		},
		{
			name: "Your Accout",
			link: "/Account",
		},
		{
			name: "Report",
			link: "/Report",
		},
	],
};
