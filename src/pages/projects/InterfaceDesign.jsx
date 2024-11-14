import { useState } from "react";
import Footer from "../../components/common/Footer";
import NavBar from "../../components/common/NavBar";
import { getStyles } from "../../components/styles";

const lightGradient = `linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%) no-repeat center`;
const darkGradient = `linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)`;

const InterfaceDesign = () => {
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
						Niamod Properties
					</h1>
					<p>University of Sydney course - IDEA9105 - Interface Design</p>
				</header>
				{/* Image */}
				<div className="my-10">
					<img
						src="../projects/interface-design/Banner.webp"
						alt="Blog Post Cover"
						className="w-full rounded-lg object-cover"
					/>
				</div>
				{/* Button */}
				<div className="flex justify-center items-center">
					<button
						onClick={() =>
							window.open(
								"https://pitch.com/v/rickyportfolio-z84zqu",
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
					className={`prose prose-lg max-w-none text-black ${styles.text}`}
				>
					{" "}
					<h2 className="text-3xl">Introduction</h2>
					<br />
					<p>
						Before the pandemic, the real estate industry heavily relied on
						face-to-face business model and since then it has learned to adapt.
						<br /> <br />
						The way consumers work, shop, learn and connect looks vastly
						different to what it was two years ago. Consumers are more
						tech-savvy and have grown accustomed to the conveniences that a
						digitally connected world has to offer. During and after the
						pandemic, the real estate industry is forced to adapt to consumer's
						behavior. Users have become more tech savvy and wishes a more
						virtual interaction with the form of pre-recorded videos or footage
						for the properties.
						<br /> <br />
						Niamod, which is a real estate business, has engaged you to develop
						a speculative concept for what the user experience of a virtual tour
						solution for remotely viewing properties may look like from
						renter/buyer's perspective. Based on your research, you should
						recommend a technology platform that the application would be linked
						with.
						<br /> <br />
					</p>
				</article>
				<hr />
				<article
					className={`prose prose-lg max-w-none text-black ${styles.text} my-10`}
				>
					<h3 className="text-2xl">Problem and Hypothesis</h3>
					<p>
						The initial exploration of the brief are as follow ‍“How might we
						enable property buyers to remotely attend and inspect properties so
						that they can find a property quickly and easily”
						<br /> <br />
						As our assumption, we assume that “The main point is that buyer
						finds inspecting properties in person to be time-consuming”
						Additionally, our other goals of research do include:
						<ol>
							<li>
								1) Understand the various user profiles in the buyer population
								so that we could choose a suitable user on which to focus our
								solution
							</li>
							<li>
								2) Understand the types of virtual tours being offered and the
								level of adaptation with mainstream buyers
							</li>
							<br />
							To address this issue, we conduct using the Double Diamond
						</ol>
						<div className="my-10">
							<img
								src="../projects/interface-design/Double Diamond.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
					</p>
					<br />
				</article>
				<article
					className={`prose prose-lg max-w-none text-black  ${styles.text}`}
				>
					{" "}
					<h3 className="text-2xl">1) Research</h3>
					<p>
						During this process, our group gather users insights, industry
						competitors, and background research to understand our audience
						along with it the technology that we could used to enhance Niamod's
						Agency as a a whole. Furthermore, our group conducted competitor
						analysis to check how we could improve Niamod's business and elevate
						their technology which can be summarized using the pictures below
						<br /> <br />
						<div className="my-10">
							<img
								src="../projects/interface-design/technology-findings.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						<div className="my-10">
							<img
								src="../projects/interface-design/trend-findings.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						<div className="my-10">
							<img
								src="../projects/interface-design/competitor-insights.png"
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
					<h3 className="text-2xl">2) User Profiles</h3>
					<p>
						As we conduct our interviews of 5 people and online ethnographies,
						we found 3 user profiles
						<br /> <br />
						<div className="my-10">
							<img
								src="../projects/interface-design/user-research.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						<div className="my-10">
							<img
								src="../projects/interface-design/ellen-user-needs.png"
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
						Before ideations, our group created our Jobs to be Done and
						seperated into per per each members (group of three) as follow
						<br /> <br />
						<div className="my-10">
							<img
								src="../projects/interface-design/JTDB.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						Then separated our tasks, ideating iin total 3 times from
						wireframing, lo-fidelity, and high fidelity.
						<div className="my-10">
							<img
								src="../projects/interface-design/design-approach.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						<div className="my-10">
							<img
								src="../projects/interface-design/JTDB.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						<div className="my-10">
							<img
								src="../projects/interface-design/ricky-feature.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
					</p>
				</article>
				<hr />
				<br />
				<article
					className={`prose prose-lg max-w-none text-black  ${styles.text}`}
				>
					{" "}
					<h2 className="text-3xl">Receiving Highest Mark</h2>
					<br />
					<p>
						As our team receives the highest mark, our group then presented our
						project to Niamod Real Estates & Properties. With additional content
						showcasing our design system,
						<br /> <br />
						<div className="my-10">
							<img
								src="../projects/interface-design/niamod-design-system.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						<div className="my-10">
							<img
								src="../projects/interface-design/presentation.jpeg"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
					</p>
				</article>
				{/* Footer */}
				<footer className="mt-16 text-center">
					<p className="dark:text-white text-black">
						Figma demo is available at:{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="underline italic"
							href="https://www.figma.com/design/jXriDgs8GsiQTWpm6OiMlB/Final-Assignment?node-id=4-51666&t=LZv7bwrPiXEr00hG-1"
						>
							https://www.figma.com/design/jXriDgs8GsiQTWpm6OiMlB/Final-Assignment?node-id=4-51666&t=LZv7bwrPiXEr00hG-1
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

export default InterfaceDesign;
