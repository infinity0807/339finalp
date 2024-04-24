




document.querySelector('img').style.filter = 'grayscale(30%)';
document.querySelector('img').addEventListener('mouseover', function() {
    this.style.filter = 'none';
});
document.querySelector('img').addEventListener('mouseout', function() {
    this.style.filter = 'grayscale(100%)';
});

function openModal(src) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) {
        const lightboxDiv = document.createElement('div');
        lightboxDiv.id = 'lightbox';
        lightboxDiv.className = 'lightbox';
        lightboxDiv.onclick = () => { lightboxDiv.style.display = 'none'; };
        const img = document.createElement('img');
        img.src = src;
        lightboxDiv.appendChild(img);
        document.body.appendChild(lightboxDiv);
    } else {
        lightbox.children[0].src = src;
        lightbox.style.display = 'flex';
    }
}


