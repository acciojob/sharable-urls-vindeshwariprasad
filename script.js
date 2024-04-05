document.addEventListener("DOMContentLoaded", () => {
  let data = document.getElementById("okay");
  data.addEventListener("submit", (e) => {
    e.preventDefault();
    let names = document.getElementById("name").value;
    let years = document.getElementById("year").value;
    let a = "";
    if (names) {
      a += "?name=" + names;
    } if (years && !names) {
      a += "?year=" + years;
    } if (names && years) {
      a += "&year=" + years;
    }
    let h = document.getElementById("url");
    h.innerHTML += a;
  });
});

