import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Values } from "./components/values";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
 import { Contact } from "./components/contact";
import JsonData from "./data/data.json";

import "./App.css";

const App = () => {
	const [landingPageData, setLandingPageData] = useState({});
	useEffect(() => {
		setLandingPageData(JsonData);
	}, []);

  	return (
		<div>
		<Navigation data={landingPageData}/>
		<Header data={landingPageData.Header} />
		<Values data={landingPageData.Values} />
		<About data={landingPageData.About} />
		<Services data={landingPageData.Services} />
		<Testimonials data={landingPageData.Testimonials} />
		<Team data={landingPageData.Team} />
		<Contact data={landingPageData.Contact} />
		</div>
  	);
};

export default App;
