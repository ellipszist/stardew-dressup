import {createRoot} from "react-dom/client";

import {LangsProvider} from "./stores/Langs.js";
import Viewer from "./Viewer.jsx";
import Controller from "./Controller.jsx";
import Banner from "./Banner.jsx";
import {BodyController, HatsController, HairstyleController, ClothesController} from "./controllers/ClothesController.jsx";

function App()
{
	return (
		<LangsProvider>
			<Viewer />
			<Controller ids={["body", "hats", "hairstyle", "shirts", "pants"]}>
				<BodyController/>
				<HatsController/>
				<HairstyleController />
				<ClothesController name="shirts" />
				<ClothesController name="pants" />
			</Controller>
		</LangsProvider>
	);
}

function setScreenSize() {
	let vh = window.innerHeight * 0.01;

	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function renderComponent(component, containerID)
{
	const container = document.getElementById(containerID);
	const root = createRoot(container);
	root.render(component);
}

export default function render()
{
	setScreenSize();
	window.addEventListener('resize', setScreenSize);
	
	renderComponent(<App />, "app");
	renderComponent(<Banner />, "banner");
}

