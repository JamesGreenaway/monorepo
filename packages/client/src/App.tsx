import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { QueryPayload } from "@monorepo/shared";
import _ from "lodash";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					{_.toUpper("Learn React")}
				</a>
				<button
					onClick={() => {
						fetch("http://localhost:3001/data", {})
							.then((response) => response.json())
							// eslint-disable-next-line no-console
							.then((data: QueryPayload) => console.log(data.payload));
					}}
				>
					GET DATA
				</button>
			</header>
		</div>
	);
}

export default App;
