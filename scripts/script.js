// Selecteert h1 uit HTML
var h1 = document.querySelector("h1");

// Voeg een event listener toe om de stijl aan te passen wanneer de muis beweegt
document.addEventListener('mousemove', (event) => {
    // Minimale beschikbare font-weight van Futura
    var minFontWeight = 300;

    // Maximale beschikbare font-weight van Futura
    var maxFontWeight = 800;

    // Gebruik de breedte van browser als de maximale x-positie
    var maxX = window.innerWidth; // Bron: https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth

    // X-positie van muis
    var mouseX = event.clientX; // Bron: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX

    // Berekent de waarde van de positie van de muis tegenover de browser breedte
    var position = mouseX / maxX;

    // Berekent nieuwe font-weight
    var fontWeight = minFontWeight + position * (maxFontWeight - minFontWeight);

    // Pas de font-weight van het h1-element aan
    h1.style.fontWeight = fontWeight; // Bron: https://www.w3schools.com/jsref/prop_html_style.asp 
});
