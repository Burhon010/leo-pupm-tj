const form = document.getElementById("requestForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      document.getElementById("formStatus").classList.add("show");
      form.reset();
    } else {
      alert(result.message || "Ошибка отправки.");
    }
  } catch (error) {
    alert("Не удалось отправить заявку. Проверьте подключение к интернету.");
    console.error(error);
  }
});