import { z } from "zod";

export const contactSchema = z.object({
	name: z.string().trim().min(2, "Please enter your name."),
	email: z.email("Please enter a valid email address."),
	message: z
		.string()
		.trim()
		.min(10, "Please enter a message with at least 10 characters."),
});

export function configureContactForm() {
	const workerUrl = (window as any).WORKER_URL;
	const form = document.getElementById(
		"contact-form",
	) as HTMLFormElement | null;
	const status = document.getElementById(
		"form-status",
	) as HTMLDivElement | null;

	if (!form || !status) return;

	form.addEventListener("submit", async (e) => {
		e.preventDefault();
		status.textContent = "Sending...";

		const formData = new FormData(form);
		const payload = Object.fromEntries(formData.entries());

		const result = contactSchema.safeParse(payload);
		if (!result.success) {
			const firstMessage =
				result.error.issues[0]?.message ?? "Please fix the form errors.";
			status.textContent = firstMessage;
			return;
		}

		try {
			const response = await fetch(workerUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			status.textContent = "Message sent successfully!";
			form.reset();
		} catch (error) {
			console.error("Error sending message:", error);
			status.textContent = "Failed to send message. Please try again later.";
		}
	});

	if (!workerUrl) {
		console.warn("WORKER_URL not set in head.njk");
	}
}
