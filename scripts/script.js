// Aangepaste map-functie om waarden van het ene bereik naar het andere te mappen
function mapValue(value, startMin, startMax, endMin, endMax) {
    return (value - startMin) * (endMax - endMin) / (startMax - startMin) + endMin;
}

// Verkrijg een verwijzing naar het <h1>-element
var h1 = document.querySelector("h1");

// Voeg een event listener toe om de stijl aan te passen wanneer de muis beweegt
document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX; // X-positie van de muis

    // Pas de stijl van het <h1>-element aan op basis van de muispositie
    const fontWeight = mapValue(mouseX, 0, window.innerWidth, 300, 800);

    h1.style.fontWeight = fontWeight;
});