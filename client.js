document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('navigateButton');

    submitButton.addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Redirect to the to-do list page
        window.location.href = '/todo';
    });
});
