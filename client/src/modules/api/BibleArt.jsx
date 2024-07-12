import axios from "axios";

export const options = {
	method: "GET",
	url: "https://holy-bible-verses.p.rapidapi.com/verse/1",
	headers: {
		"x-rapidapi-key": "95e0ffac76mshdc0b7cb0c1e5b36p15ccdcjsn8a650d11aa69",
		"x-rapidapi-host": "holy-bible-verses.p.rapidapi.com",
	},
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


	// const url = "https://bible-api.com/?random=verse";
	// const fetchVerse = async () => {
	// 	try {
	// 		const response = await fetch(url, {
	// 			method: 'GET',
	// 			mode: 'no-cors'
	// 		});
	// 		const result = await response.json();
	// 		console.log(result);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };
	/*
	 */

	// useEffect(() => {
	// 	fetchVerse();
	// }, []);