function updateDesign() {
  const phone = document.getElementById("phoneInput").value.trim();
  const network = document.getElementById("networkInput").value.trim();

  document.getElementById("phoneText").textContent =
    phone || "777000000";

  document.getElementById("networkText").textContent =
    network || "اسم الشبكة";
}

function downloadDesign() {
  const design = document.getElementById("design");

  html2canvas(design, {
    scale: 3,
    useCORS: true,
    backgroundColor: null
  }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "islam-net-plus-design.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
