
document.addEventListener("DOMContentLoaded", () => {

    const homeDiv = document.getElementById("homePage");
    const adminButton = document.getElementById("showAdmin");
    const progButton = document.getElementById("showProg");
    const projButton = document.getElementById("showProj");
    const appButton = document.getElementById("showApp");
  
            // Home to Admin & Display Admin        
            adminButton.addEventListener("click", () => {
            homeDiv.style.display = "none";
            window.location.href = 'admin.html';
            });    

    // Home to Programs & Display Programs        
    progButton.addEventListener("click", () => {
    homeDiv.style.display = "none";
    window.location.href = 'prog.html';
    });

            // Home to Programs & Display Programs        
            projButton.addEventListener("click", () => {
            homeDiv.style.display = "none";
            window.location.href = 'proj.html';
            });


    // Home to Programs & Display Programs        
    appButton.addEventListener("click", () => {
    homeDiv.style.display = "none";
    window.location.href = 'app.html';
    });
});

function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

    // Function to toggle the dropdown menu
    function toggleDropdown() {
        var dropdown = document.getElementById("dropdownMenu");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none"; // Hide the menu
        } else {
            dropdown.style.display = "block"; // Show the menu
        }
    }

    // Optional: Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('#dropdownBtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.style.display === "block") {
                    openDropdown.style.display = "none";
                }
            }
        }
    }


    function togglemail() {
    document.getElementById("mail").classList.toggle("show");
}

    // Function to toggle the dropdown menu
    function togglemail() {
        var dropdown = document.getElementById("mail");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none"; // Hide the menu
        } else {
            dropdown.style.display = "block"; // Show the menu
        }
    }

    // Optional: Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('#dropdownEmail')) {
            var dropdowns = document.getElementsByClassName("dropdown-message");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.style.display === "block") {
                    openDropdown.style.display = "none";
                }
            }
        }
    }
