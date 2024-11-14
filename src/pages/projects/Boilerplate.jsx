import { useState } from "react";
import Footer from "../../components/common/Footer";
import NavBar from "../../components/common/NavBar";
import { getStyles } from "../../utils/styles";

const lightGradient = `linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%) no-repeat center`;
const darkGradient = `linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)`;

const KIPI2022 = () => {
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
			<NavBar
				isDarkMode={isDarkMode}
				toggleDarkMode={toggleDarkMode}
				styles={styles}
			/>
			<div className="max-w-6xl mx-auto px-4 py-16 pt-28">
				<header className="mb-8 text-center">
					<h1 className={`text-4xl font-bold mb-4 ${styles.text}`}>
						KIPI 2022
					</h1>
					<p className={styles.textMuted}>
						Developed with the team at PPIA Department of IT for about 3 months
					</p>
				</header>

				{/* Rest of your content with styles applied */}
			</div>
			<Footer
				isDarkMode={isDarkMode}
				toggleDarkMode={toggleDarkMode}
				styles={styles}
			/>
		</div>
	);
};

export default KIPI2022;
