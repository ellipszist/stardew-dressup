import {createRoot} from "react-dom/client";
import clothStoreDict from "./stores/clothStoreDict.js";
import Langs, {LangsProvider} from "./stores/Langs.js";
import Viewer from "./Viewer.jsx";
import Controller from "./Controller.jsx";

function App()
{
	return (
		<LangsProvider>
			<Viewer selection={clothStoreDict} />
			<Controller />
		</LangsProvider>
	);
}


export default function render()
{
	console.log("pixi!");
	const container = document.getElementById("app");
	const root = createRoot(container);
	root.render(<App />);
}

