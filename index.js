document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const actividad = document.getElementById("actividad");

  btn.addEventListener("click", async () => {
    try {
      const response = await fetch("https://apis.scrimba.com/bored/api/activity/");
      const data = await response.json();
      actividad.textContent = `${data.activity}`;
    } catch (error) {
      actividad.textContent = "Error al obtener la actividad";
      console.error(error);
    }
  });
});

