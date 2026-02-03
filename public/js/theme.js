(function () {
	const THEME_KEY = "theme";

	// Get theme from localStorage or system preference
	const getInitialTheme = () => {
		const stored = localStorage.getItem(THEME_KEY);
		if (stored === "light" || stored === "dark") {
			return stored;
		}

		// Fallback to system preference
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			return "dark";
		}

		return "dark"; // Default to dark
	};

	const theme = getInitialTheme();

	// Apply theme IMMEDIATELY
	if (theme === "dark") {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
})();
