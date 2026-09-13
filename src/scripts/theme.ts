export function initTheme() {
	const html = document.documentElement;
	const savedTheme = localStorage.getItem("theme");
	const theme =
		savedTheme ||
		(window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light");

	html.setAttribute("data-theme", theme);
}

export function updateThemeIcon() {
	const theme = document.documentElement.getAttribute("data-theme") || "light";
	const sunIcon = document.getElementById("icon-sun");
	const moonIcon = document.getElementById("icon-moon");

	if (theme === "dark") {
		sunIcon?.classList.remove("hidden");
		moonIcon?.classList.add("hidden");
	} else {
		sunIcon?.classList.add("hidden");
		moonIcon?.classList.remove("hidden");
	}
}

export function toggleTheme() {
	const html = document.documentElement;
	const current = html.getAttribute("data-theme") || "light";
	const next = current === "dark" ? "light" : "dark";

	html.setAttribute("data-theme", next);
	localStorage.setItem("theme", next);
	updateThemeIcon();
}

export function setupThemeToggle() {
	initTheme();
	updateThemeIcon();

	const themeToggle = document.getElementById("dark-mode-toggle");
	if (themeToggle) {
		themeToggle.addEventListener("click", toggleTheme);
	}
}
