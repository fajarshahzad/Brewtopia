document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      const data = await res.json();

      if (data.success) {
        alert("Thank you! Your message has been sent.");
        form.reset();
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      alert("Server error. Try again later.");
      console.error(err);
    }
  });
});
