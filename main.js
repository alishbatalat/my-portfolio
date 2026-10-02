document.addEventListener("DOMContentLoaded", function () {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    console.log("Filter buttons:", filterButtons.length);
    console.log("Portfolio items:", portfolioItems.length);

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const filterValue = this.getAttribute("data-filter");

            console.log("Clicked:", filterValue);


            // Remove active class from every button
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });


            // Add active to clicked button
            this.classList.add("active");


            // Show/hide portfolio items
            portfolioItems.forEach(function (item) {

                if (
                    filterValue === "all" ||
                    item.classList.contains(filterValue)
                ) {

                    item.style.display = "";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });

});
