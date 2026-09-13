import { configureContactForm } from "./form";
import { initScrollEvents } from "./scrollEvents";
import { setupThemeToggle } from "./theme";

document.addEventListener("DOMContentLoaded", () => {
	setupThemeToggle();
	initScrollEvents();
	configureContactForm();
});
