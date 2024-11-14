import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

import { getStyles } from "../components/styles";
import { useState } from "react";

const lightGradient = `linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%) no-repeat center`;
const darkGradient = `linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)`;

const versionHistory = [
	{
		version: "2.5.0 - Webflow Final",
		date: "25 March 2024",
		changes: [
			"Final Version at Webflow",
			"Link: https://rickyfelix19.webflow.io/",
		],
	},
	{
		version: "3.0.0 - Vite React",
		date: "19 August 2024",
		changes: [
			"Migrated the website to the current site",
			"Deployed website online for everyone to see",
			"Link: https://v3-rickyfelix025.vercel.app/",
		],
	},
	{
		version: "3.0.1",
		date: "01 September 2024",
		changes: [
			"Added presentation slides to each projects",
			"Added Interface Design project",
			"Refactor projects page",
			"Add version history",
		],
	},
	{
		version: "3.0.2",
		date: "13 October 2024",
		changes: [
			"Change image into icons",
			"Insert icons into BentoBox",
			"Link: https://v3-rickyfelix025.vercel.app/",
		],
	},
	{
		version: "4.0.0",
		date: "14 November 2024",
		changes: [
			"Revamped the homepage, footer, and navbar",
			"Link: https://rickyfelix025.vercel.app/",
		],
	},
];

const VersionHistory = () => {
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
				<h1 className={`text-4xl font-bold mb-8 text-center ${styles.text}`}>
					Version History
				</h1>
				<div className="max-w-4xl mx-auto space-y-8">
					{versionHistory.map((version) => (
						<div
							key={version.version}
							className={`${styles.card}bg-white shadow-md rounded-lg p-6`}
						>
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-2xl font-semibold">
									Version {version.version}
								</h2>
								<span className={` ${styles.text}`}>{version.date}</span>
							</div>
							<ul className="list-disc list-inside">
								{version.changes.map((change, index) => (
									<li key={index} className={`${styles.textMuted}`}>
										{change}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<Footer
				isDarkMode={isDarkMode}
				toggleDarkMode={toggleDarkMode}
				styles={styles}
			/>
		</div>
	);
};

export default VersionHistory;
