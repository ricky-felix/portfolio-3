import React from "react";
import {
	Code,
	Rocket,
	Coffee,
	Github,
	Globe,
	Laptop,
	Trophy,
	Youtube,
	BookOpen,
	Calendar,
	MessageSquare,
	Sparkles,
} from "lucide-react";

const About = ({ styles }) => {
	return (
		<section id="about" className="mb-24">
			<h3 className="text-2xl font-bold mb-8">Who Am I?</h3>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(100px,auto)]">
				{/* Frontend Developer Card */}
				<div
					className={`${styles.card} rounded-3xl p-6 col-span-1 md:col-span-2 backdrop-blur-sm`}
				>
					<div className="h-full flex flex-col">
						<h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
							<Sparkles className="text-blue-500" size={20} />
							Creative Developer
						</h4>
						<p className={`${styles.textMuted} mb-4`}>
							I'm a passionate developer and designer with a total of 2 years of
							experience building modern web and mobile applications. My focus
							is creating intuitive user interfaces that make complex tasks feel
							simple.
						</p>
					</div>
				</div>

				{/* Languages Card */}
				<div className={`${styles.card} rounded-3xl p-6 backdrop-blur-sm`}>
					<h4 className="font-medium flex items-center gap-2 mb-4">
						<Code className="text-blue-500" size={20} />
						Languages & Tools
					</h4>
					<div className="flex flex-wrap gap-2">
						{[
							"noSQL",
							"JavaScript",
							"SQL",
							"HTML",
							"CSS",
							"Bootstrap 5",
							"TailwindCSS",
							"Miro",
							"Figma & FigJam",
							"Zeplin",
						].map((lang) => (
							<span
								key={lang}
								className={`${styles.textMuted} text-sm px-3 py-1 rounded-full bg-white/10`}
							>
								{lang}
							</span>
						))}
					</div>
				</div>

				{/* Experience Card */}
				<div className={`${styles.card} rounded-3xl p-6 backdrop-blur-sm`}>
					<h4 className="font-medium flex items-center gap-2 mb-2">
						<Trophy className="text-blue-500" size={20} />
						Experience
					</h4>
					<p className="text-2xl font-bold">2 Years</p>
				</div>

				{/* Projects Completed Card */}
				<div className={`${styles.card} rounded-3xl p-6 backdrop-blur-sm`}>
					<div className="h-full">
						<div className="flex items-center justify-between">
							<div>
								<h4 className="font-medium flex items-center gap-2 mb-1">
									<Rocket className="text-blue-500" size={20} />
									Projects Completed
								</h4>
								<p className="text-2xl font-bold">10</p>
							</div>
						</div>
					</div>
				</div>

				{/* Learning Card */}
				<div className={`${styles.card} rounded-3xl p-6 backdrop-blur-sm`}>
					<h4 className="font-medium flex items-center gap-2 mb-4">
						<BookOpen className="text-blue-500" size={20} />
						Learning
					</h4>
					<div className="flex flex-wrap gap-2">
						{["Product Management", "SQL", "Python"].map((topic) => (
							<span
								key={topic}
								className={`${styles.textMuted} text-sm px-3 py-1 rounded-full bg-white/10`}
							>
								{topic}
							</span>
						))}
					</div>
				</div>

				{/* Availability Card */}
				<div className={`${styles.card} rounded-3xl p-6 backdrop-blur-sm`}>
					<div className="flex items-center justify-between">
						<div>
							<h4 className="font-medium flex items-center gap-2">
								<Calendar className="text-blue-500" size={20} />
								Availability
							</h4>
							<p className={`${styles.textMuted} text-sm mt-1`}>Open to Work</p>
						</div>
						<span className="flex h-3 w-3">
							<span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
						</span>
					</div>
				</div>

				{/* Framework Expertise Card */}
				<div
					className={`${styles.card} rounded-3xl p-6 col-span-1 md:col-span-2 backdrop-blur-sm`}
				>
					<h4 className="font-medium flex items-center gap-2 mb-6">
						<Laptop className="text-blue-500" size={20} />
						Framework Expertise
					</h4>
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
						{[
							{ name: "React", level: 65 },
							{ name: "Tailwind CSS", level: 90 },
							{ name: "Bootstrap 5", level: 85 },
							{ name: "Node.js", level: 55 },
						].map((framework) => (
							<div key={framework.name} className="text-center">
								<div className="relative inline-flex mx-auto mb-2">
									<svg className="w-16 h-16 transform -rotate-90">
										<circle
											cx="32"
											cy="32"
											r="24"
											className="stroke-current text-gray-200"
											strokeWidth="6"
											fill="none"
										/>
										<circle
											cx="32"
											cy="32"
											r="24"
											className="stroke-current text-blue-500"
											strokeWidth="6"
											fill="none"
											strokeDasharray={`${framework.level * 1.51}, 151`}
										/>
									</svg>
									<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm">
										{framework.level}%
									</span>
								</div>
								<p className="text-sm">{framework.name}</p>
							</div>
						))}
					</div>
				</div>

				{/* Coffee Stats Card */}
				<div className={`${styles.card} rounded-3xl p-6 backdrop-blur-sm`}>
					<h4 className="font-medium flex items-center gap-2 mb-2">
						<Coffee className="text-blue-500" size={20} />
						Coffee Stats
					</h4>
					<p className="text-2xl font-bold">1,337</p>
					<p className={`${styles.textMuted} text-sm`}>cups this year</p>
				</div>

				{/* Let's Chat Card */}
				<div className={`${styles.card} rounded-3xl p-6 backdrop-blur-sm`}>
					<div className="flex items-center justify-between">
						<div>
							<h4 className="font-medium flex items-center gap-2">
								<MessageSquare className="text-blue-500" size={20} />
								Wanna a summary of my experience?
							</h4>
							<p className={`${styles.textMuted} text-sm mt-1`}>
								Click to download my resume
							</p>
						</div>
						<button
							className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all"
							onClick={() =>
								window.open("./Ricky_Felix-Resume-UI_UX_Engineer.pdf", "_blank")
							}
						>
							Download
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
