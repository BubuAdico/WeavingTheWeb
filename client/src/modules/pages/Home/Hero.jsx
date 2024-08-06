import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Discover, DiscoverSmall } from "../Discover";

const Hero = ({verses}) => {
	useGSAP(() => {
		gsap.from("#content_hero", 3, {
			x: -150,
			skewY: 4,
			duration: "5",
			ease: "elastic",
			scale: "1.5",
			stagger: {
				amount: 0.3,
			},
		});
	}, []);
	return (
		<>
			<main className="min-w-full h-[70vh]">
				<div className="flex flex-col h-full justify-center items-center text-[#2185D5] overflow-hidden">
					<small className="w-[56em]" id="content_hero">
						HONOR GOD
					</small>

					<span className="w-45em">
						<p
							className="text-5xl my-4 w-[15em] tracking-wide	"
							id="content_hero"
						>
							{verses.verse}
						</p>

						<small className="font-semibold" id="content_hero">
							{verses.book} NLT
						</small>
					</span>

					<p className="w-[45em]" id="content_hero">
						Make this Psalm your prayer today, and give God whatever
						worship comes to mind.
					</p>
				</div>
			</main>

			<div className="w-full pl-7">
				<p className="text-[#2185D5] font-extrabold text-3xl ">
					Discover plans
				</p>
			</div>

			<Discover />
			<DiscoverSmall />
		</>
	);
};

export default Hero;
