// Füge dies innerhalb eines <script>-Tags oder in einer externen JS-Datei hinzu
document.addEventListener('DOMContentLoaded', () => {
    // Hole alle Projektbilder
    const projectImages = document.querySelectorAll('.project-images img');
    // Erstelle ein Overlay für die große Bildansicht
    const overlay = document.createElement('div');
    overlay.style.display = 'none';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    const largeImage = document.createElement('img');
    largeImage.style.maxWidth = '90%';
    largeImage.style.maxHeight = '90%';
    overlay.appendChild(largeImage);
    document.body.appendChild(overlay);

    // Event Listener für das Klicken auf die Bilder
    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            largeImage.src = img.src; // Setze die Quelle des großen Bildes
            overlay.style.display = 'flex'; // Zeige das Overlay an
        });
    });

    // Event Listener für das Schließen des Overlays
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none'; // Verstecke das Overlay
    });
});
