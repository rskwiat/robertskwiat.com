document.addEventListener("DOMContentLoaded", () => {
	const workerUrl = (window as any).WORKER_URL;

	if (!workerUrl) {
		console.warn("WORKER_URL not set in head.njk");
	}

	function initTheme() {
		const html = document.documentElement;
		const savedTheme = localStorage.getItem("theme");
		const theme =
			savedTheme ||
			(window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light");

		html.setAttribute("data-theme", theme);
	}

	function updateThemeIcon() {
		const theme =
			document.documentElement.getAttribute("data-theme") || "light";
		const sunIcon = document.getElementById("icon-sun");
		const moonIcon = document.getElementById("icon-moon");

		if (theme === "dark") {
			sunIcon?.style.setProperty("display", "block");
			moonIcon?.style.setProperty("display", "none");
		} else {
			sunIcon?.style.setProperty("display", "none");
			moonIcon?.style.setProperty("display", "block");
		}
	}

	function toggleTheme() {
		const html = document.documentElement;
		const current = html.getAttribute("data-theme") || "light";
		const next = current === "dark" ? "light" : "dark";

		html.setAttribute("data-theme", next);
		localStorage.setItem("theme", next);
		updateThemeIcon();
	}

	initTheme();
	updateThemeIcon();

	const themeToggle = document.getElementById("dark-mode-toggle");
	if (themeToggle) {
		themeToggle.addEventListener("click", toggleTheme);
	}

	const isHome =
		window.location.pathname === "/" ||
		window.location.pathname === "/index.html";

	const links = document.querySelectorAll<HTMLElement>(
		'[data-scroll-to="home"], [data-scroll-to="projects"]',
	);

	links.forEach((link) => {
		link.addEventListener("click", (e) => {
			const id = link?.dataset?.scrollTo;
			if (id === undefined) return;
			const target = document.getElementById(id);

			if (!isHome || !target) return;
			e.preventDefault();

			if (id === "home") {
				window.scrollTo({ top: 0, behavior: "smooth" });
				history.replaceState(null, "", "/");
				return;
			}
			const top = target.getBoundingClientRect().top + window.scrollY - 24;
			window.scrollTo({ top, behavior: "smooth" });
			history.replaceState(null, "", `/#${id}`);
		});
	});
});
