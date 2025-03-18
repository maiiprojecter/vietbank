// Get the editable elements for Makara and Heam's balance
const makaraBalanceElement = document.getElementById('makaraBalance');
const heamBalanceElement = document.getElementById('heamBalance');

// Convert text content to numeric value
function getBalanceFromElement(element) {
    return parseFloat(element.textContent.replace(/[^\d.-]/g, "")); // Ensure we remove any non-numeric characters
}

// Update Pie chart with new values
function updateCharts() {
    const makaraBalance = getBalanceFromElement(makaraBalanceElement);
    const heamBalance = getBalanceFromElement(heamBalanceElement);

    // Update Pie chart data
    pieData.datasets[0].data = [makaraBalance, heamBalance];
    pieChart.update();
}

// Listen for changes in balance fields and update charts
makaraBalanceElement.addEventListener('input', updateCharts);
heamBalanceElement.addEventListener('input', updateCharts);

// Initial chart setup (same as before)
const ctxPie = document.getElementById('pieChart').getContext('2d');

// Pie chart data with gradient
const pieData = {
    labels: ['Makara', 'Chan Nea'],
    datasets: [{
        data: [3200, 1000], // Initial balance amounts for Makara and Heam
        backgroundColor: ['#007BFF', '#FF69B4'], // Blue for Makara, Pink for Heam
        hoverOffset: 4
    }]
};

// Create the pie chart
const pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: pieData,
    options: {
        responsive: true,
        animation: {
            duration: 2000, // 2 seconds animation duration
            easing: 'easeOutBounce', // Animation easing function
            animateRotate: true, // Animate the rotation of the pie chart
            animateScale: true // Animate the scale (size)
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title: function() {
                        return ''; // Remove tooltip title (optional)
                    },
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: $${tooltipItem.raw}`;
                    }
                },
                titleFont: {
                    size: 18, // Larger font size for tooltip title
                    family: 'Arial',
                    weight: 'bold',
                    color: '#ffffff' // White color for title
                },
                bodyFont: {
                    size: 16, // Larger font size for tooltip body
                    family: 'Arial',
                    weight: 'normal',
                    color: '#ffffff' // White color for body text
                }
            },
            legend: {
                labels: {
                    font: {
                        size: 18, // Larger font size for legend text
                        weight: 'bold',
                        family: 'Arial',
                    },
                    color: '#ffffff' // White color for legend text
                }
            }
        }
    }
});
