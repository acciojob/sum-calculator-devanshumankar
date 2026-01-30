import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
	const [num, setNum] = useState(0);
	const [sum, setSum] = useState(0);

	useEffect(() => {
		setSum((prev) => prev + Number(num));
	}, [num]);
	return (
		<div>
			<h1>Sum Calculator</h1>
			<input
				type="number"
				onChange={(e) => setNum(e.target.value)}
				value={num}
			></input>
			<p>Sum: {sum}</p>
			{/* Do not remove the main div */}
		</div>
	);
};

export default App;
