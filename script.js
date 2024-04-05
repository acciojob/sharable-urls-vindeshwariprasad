document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const urlElement = document.getElementById("url");

  document.getElementById("button").addEventListener("click", () => {
    const name = form.name.value;
    const year = form.year.value;

    let queryString = "";
    if (name && year) {
      queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
    } else if (name) {
      queryString = `?name=${encodeURIComponent(name)}`;
    } else if (year) {
      queryString = `?year=${encodeURIComponent(year)}`;
    }

    urlElement.textContent = "https://localhost:8080/" + queryString;
  });
});
