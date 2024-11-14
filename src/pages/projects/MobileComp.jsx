import { useState } from "react";
import Footer from "../../components/common/Footer";
import NavBar from "../../components/common/NavBar";
import { getStyles } from "../../components/styles";

const lightGradient = `linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%) no-repeat center`;
const darkGradient = `linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)`;

const MobileComp = () => {
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
						Give a Gift
					</h1>
					<p>University of Sydney course - Mobile Computing - COMP5216</p>
				</header>
				{/* Image */}
				<div className="my-10">
					<img
						src="../projects/mobile-comp/Banner.png"
						alt="Blog Post Cover"
						className="w-full rounded-lg object-cover"
					/>
				</div>
				{/* Button */}
				<div className="flex justify-center items-center">
					<button
						onClick={() =>
							window.open(
								"https://pitch.com/v/rickyportfolio-6fk9ku",
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
					<h2 className="text-3xl">Introduction</h2>
					<br />
					<p>
						When people want to show how much they appreciate or care for
						someone, they would like to send a perfect present. People send
						presents using parcel post services if they cannot give them in
						person. Regardless of the types of gifts - from just a handwritten
						letter to big tangible objects like furniture - sending them takes a
						lot of time and effort.
						<br /> <br />
						People are spending more time in their office to meet a deadline or
						to get their promotion. And sometimes they sacrifice their
						relationship and connections with loved ones. And we want to let
						people still connect with one another even when they are busy with
						their schedule.
						<br /> <br />
						A cost and time-efficient solution for passing on the gift to
						senders and receivers with more diverse options for items.
						<br /> <br />
					</p>
				</article>
				<br />
				<hr />
				<br />
				<article
					className={`prose prose-lg max-w-none text-black  ${styles.text}`}
				>
					{" "}
					<h3 className="text-2xl">Background Research</h3>
					<br />
					<p>
						<h3 className="text-xl">The Sender Problem:</h3>
						<ul>
							<li>
								- Consume time for buying the gifts whether online or offline
							</li>
							<li>
								- Require extra effort asking receiver about their personal
								information such as address and number
							</li>
							<li>
								- Need extra time to go to the post office to mail a package
							</li>
							<li>
								- Require extra effort to keep track of the parcel until the
								receiver receives it
							</li>
						</ul>
						<br />
						<h3 className="text-xl">The Recipient Problem:</h3>
						<ul>
							<li>
								- Need to reveal their private information that they might not
								want to reveal
							</li>
							<li>
								- Need extra effort to keep track of the parcel until they
								receives it
							</li>
							<li>
								- Need extra time and effort to go to he pick-up; place and
								receives it
							</li>
						</ul>
						<br />
						<ul>
							<h3 className="text-xl">
								Based on our findings, our group found out that:
							</h3>
							<li>
								- In 2020, there is a 80% increase of global search for “Online
								Gift” compared to 2019. And 90% of final purchases still happens
								in stores.
							</li>
							<li>
								- Approximately 89% of buyers (do their) research online before
								making the final decision to purchase it on the store.
							</li>
							<li>
								- Australia Gift Card and Incentive Card Market Report 2022
								indicate that Market Value will increase from $5446.5 Million in
								2021 to reach $85045 Million by 2026
							</li>
							<br />
							<h3 className="text-xl">
								And our (Give a Gift) competitors are:
							</h3>
							<ol>
								<li>1) Amazon</li>
								<li>2) Prezee</li>
								<li>3) Uber</li>
								<li>4) GiftsApp</li>
								<li>5) Gifticon</li>
							</ol>
						</ul>
					</p>
				</article>
				<br />
				<article
					className={`prose prose-lg max-w-none text-black  ${styles.text}`}
				>
					{" "}
					<h3 className="text-2xl">1) Initial Rough Sketch</h3>
					<p>
						As I joined the group late, our group created an initial sketch of
						the application in which I change to Lo Fidelity (and eventually
						High Fidelity of the application)
						<br /> <br />
						<div className="my-10">
							<img
								src="../projects/mobile-comp/Lo Fidelity.png"
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
					<h3 className="text-2xl">2) Design</h3>
					<p>
						After sketching and doing a quick informal interview, I then
						implemented our design, our group did a final internal critique to
						evaluate what design that we should change. We mainly discuss on how
						to improve our final product by removing any pain points by making
						sure we comply with 10 Usability Heuristics Guideline.
						<ol>
							<li>1) Recognition rather than recall (to find users)</li>
							<li>2) Using informal feedback to improve our overall design</li>
							<li>
								3) Use available Lottie and annotated onboarding screens to make
								it easier for our users to understand our app functionality
								before using it
							</li>
						</ol>
						<br /> <br />
						<div className="my-10">
							<img
								src="../projects/mobile-comp/Profile page changes.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						<div className="my-10">
							<img
								src="../projects/mobile-comp/Onboarding.png"
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
					<h3 className="text-2xl">3) Handover to Developer (using Zeplin) </h3>
					<p>
						At this stage, I started finalizing our design and began to
						integrate it onto Zeplin to handover to the developers to began
						coding. As the final part of the application is separated onto two
						parts
						<ol>
							<li>1) The Client Side</li>
							<li>2) The Business Side</li>
							<br />
							As a result, of such implementation, our group is marked as one of
							the highest and one of many groups that is presented to the cohort
							as one of the best UX solution within our class.
							<br />
							<br />
							<span className="italic">
								"Some groups do really well and this is another project that
								many assessors like especially the idea they found. It is a very
								good development on the application" -{" "}
							</span>
							<span className="font-semibold">
								Dr Kanchana (Subject Coordinator)
							</span>
						</ol>
						<br /> <br />
						<div className="my-10">
							<img
								src="../projects/mobile-comp/Zeplin.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						<div className="my-10">
							<img
								src="../projects/mobile-comp/Client.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						<div className="my-10">
							<img
								src="../projects/mobile-comp/Business.png"
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
					<h3 className="text-2xl">4) Final Result</h3>
					<p>
						Due to achieving high marks, our group project is presented to the
						whole cohort.
						<br /> <br />
						<div className="my-10">
							<img
								src="../projects/mobile-comp/Presentation.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
					</p>
				</article>
				<hr />
				<br />
				{/* Footer */}
				<footer className="mt-16 text-center">
					<p className={`text-black ${styles.text} `}>
						Presentation video is available at:{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="underline italic"
							href="https://drive.google.com/file/d/11ebV2Xbhvc4fHa1o3UPt9t69tD9xOaaA/view?usp=sharing"
						>
							here
						</a>
					</p>
					<p className={`text-black ${styles.text} `}>
						Zeplin Scenes:{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="underline italic"
							href="https://scene.zeplin.io/project/63553e0832581916c8df356a"
						>
							available here
						</a>{" "}
						and Zeplin Flows:{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="underline italic"
							href="https://zpl.io/5EMerK3"
						>
							available here
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

export default MobileComp;
