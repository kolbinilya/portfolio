import React, {useState} from "react";
import ThemeChanger from "./components/ThemeChanger";
import NavMenu from "./components/NavMenu";
import Hero from "./components/Hero";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";
import Track from "./components/Track";

const App = () => {
	const [open, setOpen] = useState(false);

	return (
			<div>
				<ThemeChanger open={open} setOpen={setOpen}/>
				<NavMenu open={open} setOpen={setOpen}/>
				<Hero/>
				<MyWork/>
				<Track/>
				<Footer/>
			</div>
	);
}

export default App;
