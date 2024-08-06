import { IoHeartOutline } from "react-icons/io5";
import { IoStar, IoStarHalf } from "react-icons/io5";
import data from "./components/data";

const DiscoverSmall = () => {
	return (
		<section className="h-auto m-6 p-10 bg-[#e3ecf5] rounded-[3rem] shadow-md grid sg:grid-cols-1 se:grid-cols-1 xr:grid-cols-1 xs:grid-cols-1 cs:grid-cols-2 ss:grid-cols-2 sm:grid-cols-3 mm:grid-cols-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-2 gap-y-4 place-items-center overflow-hidden">
			{data.map((info) => (
				<div
					className="flex h-[10vh] max-w-80 bg-white rounded-xl shadow-md overflow-hidden"
					key={info.id}
				>
					<figure className="relative">
							<img
								src={info.img}
								alt="plan-image"
								className="w-[5rem] h-[5rem] px-2 py-2 bg-cover rounded-[1rem]"
							/>
						<figcaption className="">
							{/* <small className="absolute text-white top-[1.6em] left-[10em] text-sm">
								{info.numberOfDays} days
							</small> */}

							{/* <IoHeartOutline
								className="absolute text-white bottom-[1.6em] left-[1.5em]"
								size={25}
							/> */}
						</figcaption>
					</figure>

					<div className="pl-3 leading-tight">
						<h2 className="text-sm font-bold max-w-50 text-wrap text-ellipsis">{info.title}</h2>
						<small>{info.desc}</small>

						<div className="flex  justify-end pr-2 m-1">
							<IoStar size={12} color="skyblue" />
							<IoStar size={12} color="skyblue" />
							<IoStar size={12} color="skyblue" />
							<IoStar size={12} color="skyblue" />
							<IoStarHalf size={12} color="skyblue" />
						</div>
					</div>

					{/* <div className="p-3">
						<button
							type="button"
							className="text-white bg-[#2185D5] w-full p-1 rounded-2xl"
						>
							start plan
						</button>
					</div> */}
				</div>
			))}
		</section>
	);
};

export default DiscoverSmall;
