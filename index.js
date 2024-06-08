document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[data-page]');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = link.getAttribute('data-page');
            // Store the selected option in localStorage
            localStorage.setItem('selectedPage', page);
            // Redirect to selection.html
            window.location.href = 'selection.html';
        });
    });
});

function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(content => {
            document.body.innerHTML = content;
        })
        .catch(error => {
            console.error('Error loading page:', error);
        });
}
