import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Context from "./context";
import A from "./a";

const App = () => {
	return (
		<BrowserRouter>
			<Context.Provider value="dark">
				<ul>
					<li>
						<Link to="/">A</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/topics">Topics</Link>
					</li>
				</ul>

				<hr />
				<Route exact path="/" component={A} />
			</Context.Provider>
		</BrowserRouter>
	);
};

const c = document.createElement("div");
document.body.appendChild(c);
ReactDOM.render(<App />, c);
