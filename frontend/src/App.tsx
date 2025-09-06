import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [data, setData] = useState(null);

	// fetch("/api/steam")
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		console.log(JSON.stringify(data));
	// 		setData(data);
	// 	});

	return (
		<>
			<code>{JSON.stringify(data, null, 2)}</code>
		</>
	);
}

export default App;
