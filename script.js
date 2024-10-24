// Get all buttons and tab contents
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Add event listener to each button
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabNumber = button.getAttribute('data-tab');

        // Remove active class from all buttons and tab contents
        tabButtons.forEach(btn => btn.style.borderBottom = '2px solid transparent'); // Remove border from all buttons
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to the selected tab content
        document.getElementById('tab-' + tabNumber).classList.add('active');

        // Set the border for the active button
        button.style.borderBottom = '2px solid black'; // Add black border to the active button
    });
});
