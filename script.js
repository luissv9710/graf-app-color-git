<<<<<<< HEAD
// Seleccionar los elementos del DOM
const redSlider = document.getElementById("redRange");
const greenSlider = document.getElementById("greenRange");
const blueSlider = document.getElementById("blueRange");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

=======
// Obtener elementos del DOM
const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");
const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");
>>>>>>> aa449fa9efb7530694f9254d96da213ee62cc431
const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");

// Función para actualizar el color
function updateColor() {
<<<<<<< HEAD
    let red = parseInt(redSlider.value);
    let green = parseInt(greenSlider.value);
    let blue = parseInt(blueSlider.value);

    // Convertir a código hexadecimal
    let hex = `#${red.toString(16).padStart(2, "0")}${green.toString(16).padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`.toUpperCase();

    // Aplicar el color al recuadro
    colorBox.style.backgroundColor = hex;
    hexCode.textContent = hex;

    // Sincronizar inputs con sliders
    redInput.value = red;
    greenInput.value = green;
    blueInput.value = blue;
}

// Función para actualizar sliders cuando se escribe en los inputs
function updateSlidersFromInput() {
    let red = Math.min(255, Math.max(0, parseInt(redInput.value) || 0));
    let green = Math.min(255, Math.max(0, parseInt(greenInput.value) || 0));
    let blue = Math.min(255, Math.max(0, parseInt(blueInput.value) || 0));

    redSlider.value = red;
    greenSlider.value = green;
    blueSlider.value = blue;

    updateColor();
}

// Eventos para los sliders
redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

// Eventos para los inputs numéricos
redInput.addEventListener("input", updateSlidersFromInput);
greenInput.addEventListener("input", updateSlidersFromInput);
blueInput.addEventListener("input", updateSlidersFromInput);

// Inicializar el color al cargar la página
=======
    const r = parseInt(redRange.value);
    const g = parseInt(greenRange.value);
    const b = parseInt(blueRange.value);

    const hex = rgbToHex(r, g, b);

    // Actualizar estilos y valores
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    hexCode.textContent = hex;
    
    // Sincronizar los inputs numéricos con los sliders
    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;
}

// Función para convertir RGB a HEX
function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + (+b)).toString(16).slice(1).toUpperCase()}`;
}

// Función para actualizar sliders desde inputs numéricos
function updateSliders() {
    redRange.value = redInput.value;
    greenRange.value = greenInput.value;
    blueRange.value = blueInput.value;
    updateColor();
}

// Eventos para actualizar el color desde sliders
redRange.addEventListener("input", updateColor);
greenRange.addEventListener("input", updateColor);
blueRange.addEventListener("input", updateColor);

// Eventos para actualizar sliders desde inputs numéricos
redInput.addEventListener("input", updateSliders);
greenInput.addEventListener("input", updateSliders);
blueInput.addEventListener("input", updateSliders);

// Inicializar color
>>>>>>> aa449fa9efb7530694f9254d96da213ee62cc431
updateColor();