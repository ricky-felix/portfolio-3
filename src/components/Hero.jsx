import React from "react";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";

const Hero = ({ styles }) => {
	// Define social links with their respective URLs and metadata
	const socialLinks = [
		{
			icon: Github,
			href: "https://github.com/rickyfelix19",
			label: "GitHub Profile",
			color: "hover:text-violet-600",
		},
		{
			icon: Linkedin,
			href: "https://linkedin.com/in/ricky-felix",
			label: "LinkedIn Profile",
			color: "hover:text-blue-600",
		},
		{
			icon: Mail,
			href: "mailto:rickyfelix19@outlook.com",
			label: "Email Me",
			color: "hover:text-red-600",
		},
	];

	return (
		<section className="text-center mb-24">
			<div
				className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${styles.card} backdrop-blur-sm mb-6`}
			>
				<Sparkles className="text-blue-500" size={20} />
				<span>Currently Looking For Product Roles</span>
			</div>
			<h2 className="text-5xl font-bold mb-6">Creative Developer</h2>
			<p className={`text-xl ${styles.textMuted} max-w-2xl mx-auto mb-8`}>
				Transforming Concepts into Seamless User Experience
			</p>
			<div className="flex justify-center space-x-4">
				{socialLinks.map((social, index) => (
					<a
						key={index}
						href={social.href}
						target={social.icon !== Mail ? "_blank" : "_self"}
						rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
						aria-label={social.label}
						className={`p-3 ${styles.card} rounded-full transition-all hover:scale-110 ${social.color}`}
					>
						<social.icon size={24} />
					</a>
				))}
			</div>
		</section>
	);
};

export default Hero;
