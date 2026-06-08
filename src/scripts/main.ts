document.addEventListener("DOMContentLoaded", () => {
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
