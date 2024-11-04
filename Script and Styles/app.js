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
