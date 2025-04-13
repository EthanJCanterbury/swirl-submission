function updateFooterYear() {
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `\u00A9 ${currentYear} Ethan Canterbury`;
    }
}

// Call the function when the page loads
window.onload = updateFooterYear;