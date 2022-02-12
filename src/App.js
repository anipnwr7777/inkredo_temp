import React from "react";
import Header from "./components/Header.js";
import Intro from "./components/Intro.js";
import TopPicks from "./components/TopPicks.js";
import Quote from "./components/Quote.js";

export default function App() {
	return (
		<div>
			<Header />
			<Intro />
			<TopPicks />
			<Quote />
		</div>
  )
}