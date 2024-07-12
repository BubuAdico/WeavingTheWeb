import { icon_bible } from "../../../../assets/images";

const Navbar = ({ title }) => {
	return (
		<nav className="p-4 text-xl  shadow-md">
			<div className="w-full flex justify-between items-center px-8">
				<div className="text-[#2185D5] font-bold text-3xl flex items-center gap-2">
					<img
						src={icon_bible}
						alt="theLamb icon"
						width={30}
						height={30}
					/>
					TheLamb
				</div>

				<ul className="flex gap-5 items-center">
					<li>Products</li>
					<li>About</li>
					<li>Press</li>
					<div className="bg-[#2185D5] text-white px-4 py-1 rounded-md">
						<li>Give</li>
					</div>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;