// Get the notifications container element
const notificationsContainer = document.querySelector('.notifications-container');

// Check if the element exists
if (notificationsContainer) {
    // Variable to track whether auto-scrolling is active
    let isAutoScrolling = true;
    let autoScrollInterval;

    // Function to scroll the notifications container slowly downwards
    function autoScrollDown() {
        if (isAutoScrolling) {
            notificationsContainer.scrollTop += 0.5; // Scroll down slowly

            // Check if we've reached the bottom
            if (Math.abs(notificationsContainer.scrollHeight - notificationsContainer.scrollTop - notificationsContainer.clientHeight) < 1) {
                isAutoScrolling = false; // Stop scrolling at the bottom
                clearInterval(autoScrollInterval); // Stop the interval
            }
        }
    }

    // Start auto-scrolling on page load
    window.onload = function() {
        autoScrollInterval = setInterval(autoScrollDown, 30); // Scroll every 30 ms
    };

    // Stop auto-scrolling when the user interacts with the container
    function stopAutoScroll() {
        isAutoScrolling = false;
        clearInterval(autoScrollInterval); // Stop auto-scroll interval
        // Optionally, restart auto-scroll after 10 seconds
        setTimeout(() => {
            isAutoScrolling = true;
            autoScrollInterval = setInterval(autoScrollDown, 30); // Restart interval
        }, 10000); // 10 seconds after user interaction
    }

    // Add event listeners for user interaction
    notificationsContainer.addEventListener('touchstart', stopAutoScroll);
    notificationsContainer.addEventListener('mousedown', stopAutoScroll);
    notificationsContainer.addEventListener('wheel', stopAutoScroll);
}
