import { Mail } from "lucide-react";

const Contact = ({ styles }) => {
	return (
		<section id="contact">
			<h3 className="text-2xl font-bold mb-8">Resume</h3>
			<div
				className={`${styles.card} backdrop-blur-sm p-8 rounded-xl shadow-sm`}
			>
				<p className={`${styles.textMuted} mb-6`}>
					Wanna chat? Always Open to discuss
				</p>
				<a
					href="mailto:rickyfelix19@outlook.com"
					className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all"
				>
					Contact Me
				</a>
			</div>
		</section>
	);
};

export default Contact;
