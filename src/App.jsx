import Home from "./pages/Home";
import VersionHistory from "./pages/VersionHistory";
import NotFound404 from "./pages/NotFound404";
import KIPI2022 from "./pages/projects/KIPI2022";
import IDEAStudio from "./pages/projects/IDEAStudio";
import MobileComp from "./pages/projects/MobileComp";
import InterfaceDesign from "./pages/projects/InterfaceDesign";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getStyles } from "./components/styles";

const lightGradient = `linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%) no-repeat center`;
const darkGradient = `linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)`;

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
	const styles = getStyles(isDarkMode);
	return (
		<div
			className={`min-h-screen ${styles.text}`}
			style={{
				background: isDarkMode ? darkGradient : lightGradient,
				backgroundAttachment: "fixed",
			}}
		>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/projects/" element={<Home />} /> */}
				{/* projects route */}
				<Route
					path="/projects/kipi"
					element={
						<KIPI2022
							isDarkMode={isDarkMode}
							toggleDarkMode={toggleDarkMode}
							styles={styles}
						/>
					}
				/>
				<Route path="/projects/mobile-computing" element={<MobileComp />} />
				<Route path="/projects/idea-studio" element={<IDEAStudio />} />
				<Route
					path="/projects/interface-design"
					element={<InterfaceDesign />}
				/>
				{/* Version History */}
				<Route path="/version-history" element={<VersionHistory />} />
				{/* Redirect to 404 */}
				<Route path="*" element={<NotFound404 />} />
			</Routes>
		</div>
	);
}

export default App;
