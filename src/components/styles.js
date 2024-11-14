// src/utils/styles.js
export const getStyles = (isDarkMode) => ({
	card: isDarkMode
		? "bg-white/10 hover:bg-white/15"
		: "bg-white/30 hover:bg-white/40",
	text: isDarkMode ? "text-white" : "text-gray-900",
	textMuted: isDarkMode ? "text-gray-300" : "text-gray-600",
	nav: isDarkMode ? "bg-white/10" : "bg-white/30",
	cardHover: isDarkMode ? "hover:bg-white/15" : "hover:bg-white/40",
});
