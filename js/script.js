const app = document.querySelector("#app");
app.style.textAlign = "center";
const input = document.createElement("input");
input.type = "text";
input.style.margin = "3rem";
app.appendChild(input);

function filter() {
  const allP = document.querySelectorAll("p");
  allP.forEach((e) => {
    if (e) {
      if (e.textContent.toUpperCase().indexOf(this.value.toUpperCase()) > -1) {
        e.style.display = "";
      } else {
        e.style.display = "none";
      }
    }
  });
}

input.addEventListener("input", filter);
