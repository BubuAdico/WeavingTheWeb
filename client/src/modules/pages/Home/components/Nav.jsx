// import { Disclosure} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoCartOutline } from "react-icons/io5";
import { PiUserLight } from "react-icons/pi";
import { RiUser3Line } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { useRef, useState, useEffect } from "react";
import { dynamic } from "../../../public/images";
import { Link } from "react-router-dom";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { TbMessage } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { IoIosCloudDone } from "react-icons/io";
import { PiSignOutBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import Designer from "/images/Designer.jpg";
import { motion } from "framer-motion";

const Navbar = (props) => {
	const [nav, setNav] = useState(false);
	const navClose = useRef(null);
	const [input, setInput] = useState("");
	const [cart, setCart] = useState(0);

	const onSearchSubmit = (e) => {
		e.preventDefault();
		props.onSubmit(input);
		console.log("This is the " + input);
	};

	const linkList = [
		{
			name: "Account",
			icon: <PiUserLight size={22} />,
			link: "/Account",
		},
		{
			name: "Orders",
			icon: <IoFileTrayFullOutline size={22} />,
			link: "/Orders",
		},
		{
			name: "Messages",
			icon: <TbMessage size={22} />,
			link: "/Messages",
		},
		{
			name: "Payment",
			icon: <MdOutlinePayments size={22} />,
			link: "/Payment",
		},
		{
			name: "Cart",
			icon: <IoCartOutline size={22} />,
			link: "/Cart",
		},
		{
			name: "Saved",
			icon: <IoIosCloudDone size={22} />,
			link: "/Saved",
		},
		{
			name: "Sign out",
			icon: <PiSignOutBold size={22} />,
		},
	];

	const handleClick = () => {
		setNav(!nav);
	};
	// Navbar hidden when mousedown
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (navClose.current && !navClose.current.contains(event.target)) {
				setNav(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			<nav
				name="nav"
				className="max-w-screen relative  py-2 z-10 bg-coffee-500 mb-auto  drop-shadow-md "
			>
				<div className=" flex justify-between items-center w-[94%] mx-auto h-full  ">
					<div className=" flex items-center">
						<Link to="/">
							<img
								src={dynamic}
								alt="logo"
								width={35}
								height={35}
								className="rounded-full cursor-pointer"
							/>
						</Link>
						<div className="flex items-center mx-3">
							<div className="flex items-center">
								<span className="self-center whitespace-nowrap text-white flex justify-end items-center h-[7vh] gap-1">
									<IoLocationOutline size={24} />
									<div className="flex flex-col leading-tight	">
										<small>Deliver to</small>
										<span className="font-medium">
											Ghana
										</span>
									</div>
								</span>
							</div>
						</div>
					</div>

					<ul className="hidden font-medium sm:flex inset-0">
						<div className="flex items-center">
							<span className="py-[0.35rem] pl-[0.35rem] mr-8 text-coffee-50 hover:text-coffee-100  flex items-center  border-2 border-coffee-100 rounded-full search-resize">
								<div className="flex pr-2">
									<FiSearch
										onSubmit={onSearchSubmit}
										className=" cursor-pointer"
										size={20}
										color="white"
									/>
								</div>
								<input
									type="text"
									onChange={(e) => setInput(e.target.value)}
									className="outline-none bg-transparent text-[clamp(0.3rem,2vw,0.8rem)] w-full placeholder:whitespace-nowrap overflow-ellipsis  text-white placeholder:text-coffee-50 pr-2"
									placeholder="Search your favorite dress here"
								/>
							</span>

							<Link to="/StartSelling" className="flex mr-4">
								<button className=" border font-normal rounded-md relative border-coffee-300 px-5 text-coffee-50 after:absolute after:content-[' '] after:bg-coffee-400 after:w-0 after:z-0  after:rounded-sm  after:h-full after:top-0 after:left-0  after:transition-all after:duration-700 hover:after:w-full hover:text-coffee-50 transition-colors duration-700 relative border-2 py-[0.5em] px-[1em] text-[clamp(0.8rem,2vw,1rem)] border-coffee-500 cursor-pointer  overflow-hidden font-serif text-sm`">
									<span className=" relative z-10">
										{" "}
										Start selling
									</span>
								</button>
							</Link>
							<li>
								<span className="block  py-2 pl-3 pr text-coffee-100 hover:text-coffee-200 cursor-pointer">
									<TbMessage size={24} />
								</span>
							</li>

							<li>
								<Link
									to="/Cart"
									className="block py-2 pl-3 relative text-coffee-100 hover:text-coffee-200 cursor-pointer"
								>
									<IoCartOutline size={24} />
									<div className=" top-1 left-[25px] bg-white  w-[15px] aspect-square text-[10px] text-coffee-500 flex justify-center items-center rounded-full absolute">
										<span>{cart}</span>
									</div>
								</Link>
							</li>

							<li className=" group" onClick={handleClick}>
								<span className="py-2 pl-3 pr-4 flex items-center text-coffee-100 hover:text-coffee-200 cursor-pointer">
									<RiUser3Line size={24} />
									<IoMdArrowDropdown className=" group-hover:translate-y-1 transition-all duration-500" />
								</span>
							</li>
						</div>
					</ul>

					<div className="sm:hidden flex justify-center">
						<h1 className="sm:hidden m-3 items-center text-coffee-100">
							<IoCartOutline size={29} />
						</h1>
						<div className="sm:hidden m-3" onClick={handleClick}>
							{!nav ? (
								<Bars3Icon className="w-8 text-coffee-100 cursor-pointer" />
							) : (
								<XMarkIcon className="w-8 text-coffee-100 cursor-pointer" />
							)}
						</div>
					</div>

					{nav && (
						<motion.div
							ref={navClose}
							className={
								"absolute z-50 gap-2 w-full xr:w-fit bg-zinc-100 rounded-b-lg right-0 p-6 top-[100%]"
							}
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ type: "spring", stiffness: 150 }}
						>
							<div className=" flex  items-center gap-4">
								<Link
									to="/AccountProfile"
									className="w-14 aspect-square "
								>
									<img
										className=" w-full h-full rounded-full object-cover"
										src={Designer}
										alt=""
									/>
								</Link>
								<div className="flex flex-col">
									<span className="text-sm ">user102920</span>
									<span className=" xr:text-sm text-xs  text-zinc-500">
										owusuemmanuel005@gmail.com
									</span>
								</div>
							</div>
							<ul className="">
								{linkList.map((items) => (
									<li
										className="last:border-t last:pt-4 last:mt-4 border-zinc-400"
										key={items.name}
									>
										<a
											href={items.link}
											className="block py-2 pl-3  pr-4 text-gray-900  hover:text-orange-500 hover:bg-white  cursor-pointer rounded"
											aria-current="page"
										>
											<div className="flex justify-between gap-4">
												<div className="flex items-center gap-4">
													{items.icon}
													<span>{items.name}</span>
												</div>
											</div>
										</a>
									</li>
								))}
							</ul>
						</motion.div>
					)}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
