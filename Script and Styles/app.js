




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



function navigate(page) {
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", () => {

    const appDiv = document.getElementById("appPage");
    const homeButton = document.getElementById("showHome");
    const adminButton = document.getElementById("showAdmin");
    const progButton = document.getElementById("showProg");
    const projButton = document.getElementById("showProj");
    

            // App to Home & Display Home        
            homeButton.addEventListener("click", () => {
            appDiv.style.display = "none";
            window.location.href = 'index.html';
            });

            // App to Admin & Display Admin        
            adminButton.addEventListener("click", () => {
                appDiv.style.display = "none";
                window.location.href = 'admin.html';
                });

            // App to Program & Display Program        
            progButton.addEventListener("click", () => {
                appDiv.style.display = "none";
                window.location.href = 'prog.html';
                });

            // App to Project & Display Project      
            projButton.addEventListener("click", () => {
                appDiv.style.display = "none";
                window.location.href = 'proj.html';
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




