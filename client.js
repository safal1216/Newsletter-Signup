const submitButton = document.getElementById('navigateButton');
submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Redirect to the to-do list page
        window.location.href = '/todo';
    });
