
document.addEventListener("DOMContentLoaded", () => {

const progDiv = document.getElementById("progPage");
const homeButton = document.getElementById("showHome");
const adminButton = document.getElementById("showAdmin");
const infraButton = document.getElementById("showInfra");
const projButton = document.getElementById("showProj");
const appButton = document.getElementById("showApp");


        // Admin to Home & Display Home        
        homeButton.addEventListener("click", () => {
        progDiv.style.display = "none";
        window.location.href = 'index.html';
        });


// Admin to Home & Display Home        
adminButton.addEventListener("click", () => {
progDiv.style.display = "none";
window.location.href = 'admin.html';
});

// Admin to Home & Display Home        
projButton.addEventListener("click", () => {
progDiv.style.display = "none";
window.location.href = 'proj.html';
});

    // Admin to Home & Display Home        
    appButton.addEventListener("click", () => {
    progDiv.style.display = "none";
    window.location.href = 'app.html';
    });

// Admin to Home & Display Home        
infraButton.addEventListener("click", () => {
progDiv.style.display = "none";
window.location.href = 'infra.html';
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
