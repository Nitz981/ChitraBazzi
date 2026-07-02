    /* ==========================================
            GLOBAL THEME MANAGER
    ========================================== */

    document.addEventListener("DOMContentLoaded", () => {

        const themeToggle = document.getElementById("themeToggle");

        // Load saved theme
        const savedTheme = localStorage.getItem("theme") || "light";

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            
        }

        // If toggle exists (only on settings page)
        if (themeToggle) {

            themeToggle.checked = savedTheme === "dark";

            themeToggle.addEventListener("change", () => {

                if (themeToggle.checked) {

                    document.body.classList.add("dark-mode");

                    localStorage.setItem("theme", "dark");

                } else {

                    document.body.classList.remove("dark-mode");

                    localStorage.setItem("theme", "light");

                }

            });

        }

    });