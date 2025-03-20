document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-modal");
    const modalTitle = document.getElementById("modalProjetLabel");
    const modalContent = document.getElementById("modalContent");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const projetId = button.getAttribute("data-projet");
            const titre = button.getAttribute("data-titre");

            modalTitle.textContent = titre; // pour mettre à jour le titre du modal

            fetch(`projets_details/${projetId}.html`)
                .then(response => response.text())
                .then(data => {
                    modalContent.innerHTML = data;
                    const modal = new bootstrap.Modal(document.getElementById("modalProjet"));
                    modal.show();
                })
                .catch(error => {
                    console.error("Erreur lors du chargement des détails :", error);
                    modalContent.innerHTML = "<p>Impossible de charger les détails du projet.</p>";
                });
        });
    });
});
