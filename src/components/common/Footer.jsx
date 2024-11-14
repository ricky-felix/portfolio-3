import React from "react";
import { getStyles } from "../styles";

const Footer = ({ isDarkMode }) => {
	const styles = getStyles(isDarkMode);

	const footerLinks = {
		navigation: [
			{ name: "Home", href: "/" },
			{ name: "Projects", href: "#projects" },
			{ name: "About", href: "#about" },
			{ name: "Contact", href: "#contact" },
			{ name: "Version History", href: "/version-history" },
		],
		social: [
			{ name: "GitHub", href: "https://github.com/rickyfelix19" },
			{ name: "LinkedIn", href: "https://linkedin.com/in/ricky-felix" },
			{ name: "Email", href: "mailto:rickyfelix19@outlook.com" },
		],
		contact: {
			email: "rickyfelix19@outlook.com",
			location: "Medan, North Sumatra, Indonesia",
		},
	};

	return (
		<footer className="mt-20">
			<div className="max-w-6xl mx-auto px-4 pb-6">
				<div
					className={`${styles.nav} backdrop-blur-md rounded-2xl shadow-lg p-8`}
				>
					<div className="grid md:grid-cols-3 gap-8">
						<div>
							<h4 className={`font-bold mb-4 ${styles.text}`}>Navigation</h4>
							<div className="space-y-2">
								{footerLinks.navigation.map((link) => (
									<a
										key={link.name}
										href={link.href}
										className={`block ${styles.textMuted} hover:text-blue-500 transition-all`}
									>
										{link.name}
									</a>
								))}
							</div>
						</div>

						<div>
							<h4 className={`font-bold mb-4 ${styles.text}`}>Connect</h4>
							<div className="space-y-2">
								{footerLinks.social.map((link) => (
									<a
										key={link.name}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className={`block ${styles.textMuted} hover:text-blue-500 transition-all`}
									>
										{link.name}
									</a>
								))}
							</div>
						</div>

						<div>
							<h4 className={`font-bold mb-4 ${styles.text}`}>Contact</h4>
							<div className="space-y-2">
								<p className={styles.textMuted}>
									Email: {footerLinks.contact.email}
								</p>
								<p className={styles.textMuted}>
									Location: {footerLinks.contact.location}
								</p>
							</div>
						</div>
					</div>

					<div className="mt-8 pt-6 border-t border-gray-300/20">
						<p className={`text-center ${styles.text}`}>
							This website is created by Ricky Felix. <br />
							It uses React.js and Tailwindcss. <br />
							It is under constant improvement.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
