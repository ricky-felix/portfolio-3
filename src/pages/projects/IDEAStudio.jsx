import { useState } from "react";
import Footer from "../../components/common/Footer";
import NavBar from "../../components/common/NavBar";
import { getStyles } from "../../components/styles";

const lightGradient = `linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%) no-repeat center`;
const darkGradient = `linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)`;

const IDEAStudio = () => {
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
				{/* Header */}
				<header className="mb-8 text-center">
					<h1 className={`text-4xl font-bold mb-4 ${styles.text}`}>
						Bottled Moments
					</h1>
					<p className="">
						University of Sydney course - IDEA 9102 - IDEA Studio
					</p>
				</header>
				{/* Image */}
				<div className="my-10">
					<img
						src="../projects/idea-studio/Banner.webp"
						alt="Blog Post Cover"
						className="w-full rounded-lg object-cover"
					/>
				</div>
				{/* Button */}
				<div className="flex justify-center items-center">
					<button
						onClick={() =>
							window.open(
								"https://pitch.com/v/rickyportofolio-cs8r6m",
								"_blank",
								"noopener"
							)
						}
						className="mb-10 rounded-md bg-blue-500 hover:bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
					>
						Open Full Presentation
					</button>
				</div>
				{/* Content */}
				<article
					className={`prose prose-lg max-w-none text-black  ${styles.text}`}
				>
					{" "}
					<h2 className="text-3xl">Introduction</h2>
					<p>
						The thematic focus is Experience and Product Design of Media
						Architecture. Groups will be developing your design work with the
						goal of designing the visitor experience of a real-world cultural
						venue. The studio will be supported by Lake Macquarie City Council
						in New South Wales, and our Design Brief will have their Multi-Arts
						Pavilion, mima (MAP mima), a cultural precinct as target location.
					</p>
				</article>
				<hr />
				<article
					className={`prose prose-lg max-w-none text-black  ${styles.text}`}
				>
					{" "}
					<h3 className="text-2xl">Design Thinking Process</h3>
					<p>
						As our project is separated onto two parts, we implemented Triple
						Diamond.
						<div className="my-10">
							<img
								src="../projects/idea-studio/Double Diamond.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						<div className="my-10">
							<img
								src="../projects/idea-studio/Triple Diamond.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
					</p>
				</article>
				<article
					className={`prose prose-lg max-w-none text-black  ${styles.text}`}
				>
					{" "}
					<h3 className="text-2xl">1) Background Research</h3>
					<p>
						In 2018, Lake Macquaire City collaborated with University of
						Newcastle to design a new venue that to be developed in Speers Point
						Park as a significant cultural and arts space for Lake
						Macquaire--that place is now known by the name mapMIMA.
						<br /> <br />
						mapMIMA was concepted by an architect student from University of
						Newcastle named Samantha Bailey and the building was launched in
						October 2021 with collaborations with other artists to allow the
						place to be a beacon in Lake Macquaire area. And the intentions was
						to create a landmark that is opened day and night to help establish
						Lake Macquarie as one of the region's major cultural destinations,
						with the potential to attract national and international artists and
						exhibitions.
						<br /> <br />
						Since it is initial launching, the area is used to create a lot
						attractions to the general public. This includes:
						<ol>
							<li>1. Local Music Performance</li>
							<li>2. Art workshops for children</li>
							<li>3. Public and potential tourists attractions</li>
							<li>4. Food night market and social hangouts</li>
						</ol>
						<div className="my-10">
							<img
								src="../projects/idea-studio/mapMima attraction.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
					</p>
				</article>
				<article
					className={`prose prose-lg max-w-none text-black  ${styles.text}`}
				>
					{" "}
					<h3 className="text-2xl">2) Research Triangulation</h3>
					<p>
						Our group initialize hypothesis, before conducting any sort of
						research, the users that comes and goes to mapMIMA as follow:
						<div className="my-10">
							<img
								src="../projects/idea-studio/brainstorm.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
					</p>
					<p>
						Our group then proceed to conduct research by observing onsite, data
						analytics, and survey to find out more of the area of mapMIMA and as
						it turns out the data shows us as follow:
						<div className="my-10">
							<img
								src="../projects/idea-studio/data analytics.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						To find out, we should target the following target user as well as
						creating our Proto Persona as follow:
						<div className="my-10">
							<div className="my-10">
								<img
									src="../projects/idea-studio/target users.png"
									alt="Blog Post Cover"
									className="w-full rounded-lg object-cover"
								/>
							</div>
							<img
								src="../projects/idea-studio/Persona.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
					</p>
				</article>
				<article
					className={`prose prose-lg max-w-none text-black  ${styles.text}`}
				>
					{" "}
					<h3 className="text-2xl">3) Ideations </h3>
					<p>
						Our group proceed to the next stage by Ideating ideas to create
						Bottled Moments:
						<img
							src="../projects/idea-studio/Ideation Process.png"
							alt="Blog Post Cover"
							className="w-full rounded-lg object-cover mt-10"
						/>
					</p>
				</article>
				<article
					className={`prose prose-lg max-w-none text-black  ${styles.text}`}
				>
					{" "}
					<h3 className="text-2xl">
						4) Double Diamond (1st Assignment Submitted)
					</h3>
					<p>
						As a result, we created Bottled Moments which can be described as
						follow:
						<div className="my-10">
							<img
								src="../projects/idea-studio/Bottled Moments.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
					</p>
				</article>
				<article
					className={`prose prose-lg max-w-none text-black  ${styles.text}`}
				>
					{" "}
					<h3 className="text-2xl">
						5) Final Diamond (Iterations of improvements)
					</h3>
					<p>
						To make sure we reach the best potential of our application, we
						created based on localization of the product and adopting a design
						system specifically for our users.
						<div className="my-8">
							<img
								src="../projects/idea-studio/Artifact Research.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						<div className="my-8">
							<img
								src="../projects/idea-studio/Adopt Design System.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
					</p>
				</article>
				<article
					className={`prose prose-lg max-w-none text-black  ${styles.text}`}
				>
					{" "}
					<h3 className="text-2xl">6) Final Result</h3>
					<p>
						In the end, we submitted the final version of our application as
						follow:
						<div className="my-10">
							<img
								src="../projects/idea-studio/Bottled Moments app.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						<div className="my-10">
							<img
								src="../projects/idea-studio/Resolume app.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
					</p>
				</article>
				<hr />
				{/* Footer */}
				<footer className="mt-16 text-center">
					<p className={`text-black ${styles.text} `}>
						Demo Video is available by:{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="underline italic"
							href="https://drive.google.com/file/d/1Sfhon25CuOQAvmYoDRndlSHwcfzuQN65/view"
						>
							clicking here
						</a>
					</p>
					<p className={`text-black ${styles.text} `}>
						To see the full presentation, including MVP, Success Outcome, and
						many more,{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="underline italic"
							href="https://pitch.com/v/rickyportofolio-cs8r6m"
						>
							click here
						</a>
					</p>
				</footer>
			</div>
			<Footer
				isDarkMode={isDarkMode}
				toggleDarkMode={toggleDarkMode}
				styles={styles}
			/>
		</div>
	);
};

export default IDEAStudio;
