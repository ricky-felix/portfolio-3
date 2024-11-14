import React, { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { getStyles } from "../styles";

const NavBar = ({ isDarkMode, toggleDarkMode }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const styles = getStyles(isDarkMode);

	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "Projects", href: "/#projects" },
		{ name: "About", href: "/#about" },
		{ name: "Contact", href: "/#contact" },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 px-4 py-6">
			<nav className="max-w-6xl mx-auto">
				<div
					className={`relative ${styles.nav} backdrop-blur-md rounded-2xl shadow-lg px-6 py-4`}
				>
					<div className="flex justify-between items-center">
						<a href="/" className="text-xl font-bold">
							Ricky Felix
						</a>

						<div className="hidden md:flex items-center space-x-1">
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className={`px-4 py-2 rounded-xl ${styles.cardHover} transition-all`}
								>
									{link.name}
								</a>
							))}
							<div className="h-6 w-px bg-gray-300/30 mx-2" />
							<button
								onClick={toggleDarkMode}
								className={`p-2 rounded-xl ${styles.cardHover} transition-all`}
							>
								{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
							</button>
							<button
								onClick={() =>
									window.open(
										"./Ricky_Felix-Resume-UI_UX_Engineer.pdf",
										"_blank"
									)
								}
								className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all"
							>
								Download Resume
							</button>
						</div>

						<div className="md:hidden flex items-center gap-2">
							<button
								onClick={toggleDarkMode}
								className={`p-2 rounded-xl ${styles.cardHover} transition-all`}
							>
								{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
							</button>
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className={`p-2 rounded-xl ${styles.cardHover}`}
							>
								{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
							</button>
						</div>
					</div>

					{isMenuOpen && (
						<div
							className={`md:hidden absolute top-full left-0 right-0 mt-2 ${styles.nav} backdrop-blur-md rounded-xl shadow-lg p-4`}
						>
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className={`block px-4 py-2 rounded-xl  ${styles.cardHover} transition-all`}
									onClick={() => setIsMenuOpen(false)}
								>
									{link.name}
								</a>
							))}
							<button
								onClick={() =>
									window.open(
										"./Ricky_Felix-Resume-UI_UX_Engineer.pdf",
										"_blank"
									)
								}
								className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all"
							>
								Download Resume
							</button>
						</div>
					)}
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
