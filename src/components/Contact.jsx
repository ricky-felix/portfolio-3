import { Mail } from "lucide-react";

const Contact = ({ styles }) => {
	return (
		<section id="contact">
			<h3 className="text-2xl font-bold mb-8">Resume</h3>
			<div
				className={`${styles.card} backdrop-blur-sm p-8 rounded-xl shadow-sm`}
			>
				<p className={`${styles.textMuted} mb-6`}>
					Want a quick summary of my experience?
				</p>
				<button
					onClick={() =>
						window.open("./Ricky_Felix-Resume-UI_UX_Engineer.pdf", "_blank")
					}
					className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all"
				>
					Download my resume
				</button>
			</div>
		</section>
	);
};

export default Contact;
