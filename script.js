// Romantic Love Page Functionality

// Function to load romantic love quotes
function loadRomanticLoveQuotes() {
    const quotes = [
        "Love is composed of a single soul inhabiting two bodies.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "To love and be loved is to feel the sun from both sides."
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('love-quote').innerText = randomQuote;
}

// Call the function on page load
window.onload = loadRomanticLoveQuotes;