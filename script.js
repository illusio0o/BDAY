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