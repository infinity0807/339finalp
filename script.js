function updateBackgroundColor() {
    const hour = new Date().getHours();
    const body = document.body;
    
    if (hour < 6 || hour >= 20) {
        body.style.backgroundColor = '#1a1a2e'; // Night
        body.style.color = '#ffffff';
    } else if (hour < 12) {
        body.style.backgroundColor = '#f5f5f5'; // Morning
        body.style.color = '#333333';
    } else {
        body.style.backgroundColor = '#ffe259'; // Afternoon
        body.style.color = '#333333';
    }
}

window.onload = updateBackgroundColor;




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        let targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function highlightRandomMovie() {
    const movies = document.querySelectorAll('.movie');
    const randomIndex = Math.floor(Math.random() * movies.length);
    movies[randomIndex].style.border = '2px solid #ffcc00';
    movies[randomIndex].style.boxShadow = '0 4px 8px rgba(255, 204, 0, 0.6)';
}

window.onload = highlightRandomMovie;


function playVideo(event, containerId, videoUrl) {
    event.stopPropagation();  
    const container = document.getElementById(containerId);
    
    if (container.querySelector('iframe')) {
        container.innerHTML = container.getAttribute('data-original-content'); // Restore original content
    } else {
        container.setAttribute('data-original-content', container.innerHTML);
        container.innerHTML = `
            <iframe width="560" height="315" src="${videoUrl}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button onclick="playVideo(event, '${containerId}', '${videoUrl}')" style="position: absolute; top: 5px; right: 5px; font-size: 16px; color: white; background: red; border: none; padding: 5px 10px; cursor: pointer;">Close</button>
        `;
    }
}


