import Navbar from "./modules/pages/Home/components/Navbar";
import axios from "axios";
import Hero from "./modules/pages/Home/Hero";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {

	// ? PROPS

	const [verses, setVerses] = useState([]);

	const rand = Math.floor(Math.random() * 99);

	const getVerses = async () => {
		const options = {
			method: "GET",
			url: `https://holy-bible-verses.p.rapidapi.com/verse/${rand}`,
			headers: {
				"x-rapidapi-key":
					"95e0ffac76mshdc0b7cb0c1e5b36p15ccdcjsn8a650d11aa69",
				"x-rapidapi-host": "holy-bible-verses.p.rapidapi.com",
			},
		};

		try {
			const response = await axios.request(options);
			setVerses(response.data);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getVerses();
	}, []);

	// console.log(`fetched: ${verses}`);

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Hero verses={verses} />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
