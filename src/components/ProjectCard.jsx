// src/components/Projects/Projects.jsx
import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = ({ styles }) => {
	const projects = [
		{
			title: "Project Lead at PPIA",
			description:
				"KIPI is a bi-annual conference held and organized by PPIA (Indonesian Students' Association of Australia) and invites Indonesian academias to share their PhD research. The final results in our team creating a website for all of our viewers to enjoy during the Conference activities.",
			tags: ["Figma", "Webflow", "Project Manager"],
			link: "/projects/kipi",
			github: "https://symposium-ppid.webflow.io/",
			image: "./home/KIPI_PPIA.png",
			year: "2022",
			presentation: "https://pitch.com/v/rickyportfolio-n7u8ra",
		},
		{
			title: "USYD - COMP5216: Mobile Computing",
			description:
				"Give a Gift was a solution to introduce gift gifting is possible even if you are far away from your loved ones. Our solution was featured as one of the best UX Design Solution within the cohort.",
			tags: ["UI/UX", "Figma", "Zeplin", "Android Studio", "Firebase"],
			link: "/projects/mobile-computing",
			github: "https://github.com/rickyfelix19/give-a-gift-copy",
			image: "./home/Give_a_Gift.webp",
			year: "2023",
			presentation: "https://pitch.com/v/rickyportfolio-6fk9ku",
		},
		{
			title: "USYD - IDEA 9102: IDEA Studio",
			description:
				"Bottled Moments is a created to introduce the connection of people to the lake by sending memories and gifts onto the lake (digitally). Our group received one of the best solution and was presented to the clienteles at mapMIMA.",
			tags: ["Tailwind CSS", "p5.js", "Resolume", "Figma", "Miro"],
			link: "/projects/idea-studio",
			github: "https://github.com/rickyfelix19/bottled-moments",
			image: "./home/Bottled_Moments.webp",
			year: "2023",
			presentation: "https://pitch.com/v/rickyportofolio-cs8r6m",
		},
		{
			title: "USYD - IDEA 9105: Interface Design",
			description:
				"Niamod Properties is a company that requires our help to design a new interface for it's house tour services. Our group received one of the best solution and was presented to the Domain Real Estates and Properties.",
			tags: ["Design Thinking", "Figma", "Miro"],
			link: "/projects/interface-design",
			github:
				"https://www.figma.com/design/5N7gi9s7N7sToU9dwhGRrh/Niamod-Properties---Website?node-id=4-51666&t=QWQ7atBVm7spY35k-1",
			image: "./home/Interface_Design.webp",
			year: "2023",
			presentation: "https://pitch.com/v/rickyportfolio-z84zqu",
		},
	];

	return (
		<section id="projects" className="mb-24">
			<h3 className="text-2xl font-bold mb-12">Featured Projects</h3>
			<div className="space-y-12">
				{projects.map((project, index) => (
					<div
						key={index}
						className={`${styles.card} backdrop-blur-sm rounded-xl shadow-sm transition-all overflow-hidden`}
					>
						<div className="md:grid md:grid-cols-2 gap-6">
							{/* Project Image */}
							<div className="relative group">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-64 object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
								/>
								<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
									<div className="space-x-4">
										{/* <a
											href={project.github}
											className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm text-white transition-colors"
										>
											<Github size={20} className="mr-2" />
											View Code
										</a> */}
										<a
											target="_blank"
											rel="noopener"
											href={project.link}
											className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-colors"
										>
											<ExternalLink size={20} className="mr-2" />
											Learn More
										</a>
									</div>
								</div>
							</div>

							{/* Project Info */}
							<div className="p-6 md:pr-8">
								<div className="flex items-center justify-between mb-4">
									<h4 className="text-xl font-semibold">{project.title}</h4>
									<span className={`${styles.textMuted} text-sm`}>
										{project.year}
									</span>
								</div>

								<p className={`${styles.textMuted} mb-6 line-clamp-3`}>
									{project.description}
								</p>

								<div className="space-y-4">
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag, tagIndex) => (
											<span
												key={tagIndex}
												className={`px-3 py-1 text-sm rounded-full ${styles.card} backdrop-blur-sm`}
											>
												{tag}
											</span>
										))}
									</div>

									<div className="pt-4 border-t border-gray-200/20 flex justify-between items-center">
										<div className="space-x-4">
											<a
												target="_blank"
												rel="noopener"
												href={project.github}
												className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
											>
												Open Demo
											</a>
											{/* <a
												href={project.link}
												className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
											>
												<ExternalLink size={18} className="mr-1" />
												Visit Site
											</a> */}
										</div>

										<a
											target="_blank"
											rel="noopener"
											href={project.presentation}
											className={`${styles.textMuted} hover:text-blue-500 text-sm`}
										>
											Download Presentation
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
