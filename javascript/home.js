document.querySelectorAll('.grid-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        switch (index) {
            case 0:
                window.location.href = "accounts.html"; // Link to Accounts page
                break;
            case 1:
                window.location.href = "transfers.html"; // Link to Transfers page
                break;
            case 2:
                window.location.href = "payments.html"; // Link to Payments page
                break;
            case 3:
                window.location.href = "deposit.html"; // Link to Deposit page
                break;
            case 4:
                window.location.href = "cash-to-atm.html"; // Link to Cash to ATM page
                break;
            case 5:
                window.location.href = "virtual-card.html"; // Link to Virtual Card page
                break;
            case 6:
                window.location.href = "qr-payment.html"; // Link to QR Payment page
                break;
            case 7:
                window.location.href = "contact.html"; // Link to Contact Us page
                break;
            case 8:
                window.location.href = "locator.html"; // Link to Locator page
                break;
        }
    });
});
// JavaScript for automatic banner scrolling

let currentIndex = 0;
const banners = document.querySelector('.banner-images');
const totalBanners = banners.children.length;

function scrollBanner() {
    currentIndex++;
    if (currentIndex >= totalBanners) {
        currentIndex = 0;
    }
    banners.style.transform = `translateX(-${currentIndex * 100 / totalBanners}%)`;
}

// Change the interval time for auto scroll (e.g., 3 seconds)
setInterval(scrollBanner, 3000);  // Auto-scroll every 3 seconds


