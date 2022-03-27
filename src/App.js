import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Clases } from "./components/clases";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import {Footer} from "./components/footer";
import en from "./data/en.json";
import es from "./data/es.json"
import "./App.css";

const App = () => {
	const [landingPageData, setLandingPageData] = useState({});
	useEffect(() => {
	   let _gettingLanguage = getBrowserLanguage();
       if(_gettingLanguage && _gettingLanguage === "es"){
			setLandingPageData(es); 
	   }else{
			setLandingPageData(en); 
	   }
	}, []);

	const getBrowserLanguage =()=>{
		try {
			let language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
			navigator.language ||   // All browsers
			navigator.userLanguage; // IE <= 10
			if(language){
				language = language.split('-');
				return language[0];
			}	
		} catch (error) {
			console.log(error);
		}
		
	}

  	return (
		<div>
		{Object.entries(landingPageData).length >0 ?
			<div>
				<Navigation data={landingPageData}/>
				<Header data={landingPageData.Header} interview={landingPageData.Interview} />
				<Services data={landingPageData.Services} />
				<About data={landingPageData.About} />
				<Clases data={landingPageData.Clases} />
				<Testimonials data={landingPageData.Testimonials} />
				<Team data={landingPageData.Team} />
				<Contact data={landingPageData.Contact} />
				<Footer data={landingPageData.Footer}/>
			</div>
		:null
		}
	   </div>
  	);
};
export default App;
