const expandbutton = document.querySelector("main .lambang .container span");
const lambangParagraph = document.querySelector(
  "main .lambang .container .paragraph"
);

expandbutton.addEventListener("click", () => {
  lambangParagraph.classList.toggle("expand");

  if (lambangParagraph.classList.contains("expand")) {
    expandbutton.innerText = "Lihat lebih sedikit";
  } else {
    expandbutton.innerText = "Selengkapnya";
  }
});
