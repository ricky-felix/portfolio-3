// src/pages/Home.jsx
import { useState } from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import About from "../components/About";
import Contact from "../components/Contact";
import { getStyles } from "../components/styles";

const lightGradient = `linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%) no-repeat center`;
const darkGradient = `linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)`;

export default function Home() {
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

			<div className="pt-28">
				<main className="max-w-6xl mx-auto px-4 py-16">
					<Hero styles={styles} />
					<ProjectCard styles={styles} />
					<About styles={styles} />
					<Contact styles={styles} />
				</main>
			</div>

			<Footer
				isDarkMode={isDarkMode}
				toggleDarkMode={toggleDarkMode}
				styles={styles}
			/>
		</div>
	);
}
