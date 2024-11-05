
document.addEventListener("DOMContentLoaded", () => {

    const adminDiv = document.getElementById("adminPage");
    const homeButton = document.getElementById("showHome");
    const progButton = document.getElementById("showProg");
    const projButton = document.getElementById("showProj");
    const appButton = document.getElementById("showApp");



            // Admin to Home & Display Home        
            homeButton.addEventListener("click", () => {
            adminDiv.style.display = "none";
            window.location.href = 'index.html';
            });

            // Admin to Home & Display Home        
            progButton.addEventListener("click", () => {
                adminDiv.style.display = "none";
                window.location.href = 'prog.html';
                });

            // Admin to Home & Display Home        
            projButton.addEventListener("click", () => {
                adminDiv.style.display = "none";
                window.location.href = 'proj.html';
                });

            // Admin to Home & Display Home        
            appButton.addEventListener("click", () => {
                adminDiv.style.display = "none";
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


const form = document.querySelector('form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert('Thank you for your submission!');
                    form.reset();
                } else {
                    alert('Oops! There was a problem submitting your form.');
                }
            })
            .catch(error => {
                alert('Oops! There was a problem submitting your form.');
            });
        });




