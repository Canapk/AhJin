function toggleSolutions() {
    var solutions = document.getElementById("solutions");
    if (solutions.style.display === "none" || solutions.style.display === "") {
        solutions.style.display = "block"; // Muestra las soluciones
    } else {
        solutions.style.display = "none"; // Oculta las soluciones
    }
}