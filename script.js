function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    
    // Show the specific page requested
    document.getElementById(pageId).style.display = 'block';
}
function blowOutCandles() {
    document.getElementById('flame').style.opacity = '0';
    document.getElementById('wish-text').innerText = 'Make a wish! ✨';
}
// Function to show pages
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
    
    // Trigger confetti every time a new page loads
    triggerConfetti();
}

// Function to handle the blowing out animation
function blowCandles() {
    const cakeImg = document.getElementById('cakeImage');
    cakeImg.src = 'assets/cake-blown.png'; // Swap to the "blown" image
    document.getElementById('wish-text').innerText = 'Wish granted! ✨';
    
    // Trigger extra confetti when she blows them out
    triggerConfetti();
}

// Confetti function
function triggerConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}