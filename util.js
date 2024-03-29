/** Global Parameters Object */
const params = { };

/**
 * @param {Number} n
 * @returns Random Integer Between 0 and n-1
 */
const randomInt = n => Math.floor(Math.random() * n);

/**
 * @param {Number} r Red Value
 * @param {Number} g Green Value
 * @param {Number} b Blue Value
 * @returns String that can be used as a rgb web color
 */
const rgb = (r, g, b) => `rgba(${r}, ${g}, ${b})`;

/**
 * @param {Number} r Red Value
 * @param {Number} g Green Value
 * @param {Number} b Blue Value
 * @param {Number} a Alpha Value
 * @returns String that can be used as a rgba web color
 */
const rgba = (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${a})`;

/**
 * @param {Number} h Hue
 * @param {Number} s Saturation
 * @param {Number} l Lightness
 * @returns String that can be used as a hsl web color
 */
const hsl = (h, s, l) => `hsl(${h}, ${s}%, ${l}%)`;

/** Creates an alias for requestAnimationFrame for backwards compatibility */
window.requestAnimFrame = (() => {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        /**
         * Compatibility for requesting animation frames in older browsers
         * @param {Function} callback Function
         * @param {DOM} element DOM ELEMENT
         */
        ((callback, element) => {
            window.setTimeout(callback, 1000 / 60);
        });
})();

/**
 * Returns distance from two points
 * @param {Number} p1, p2 Two objects with x and y coordinates
 * @returns Distance between the two points
 */
const getDistance = (p1, p2) => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};

/**
 * Interpolates a color from grey(r:128, g:128, b:128) to white(r:255, g:255, b:255) using an integer
 * @param {Number} index A negative integer.
 * @returns An rgb string of Grey for values close to -1, and White for values at or below -25
 */
const fadeColor = (index) => {
    const fadeMax = 25;

    const darkness = Math.max(0, (fadeMax + index + 1) / fadeMax);

    // Interpolate between white (RGB: 255, 255, 255) and grey (RGB: 128, 128, 128)
    const r = Math.round(255 - darkness * (255 - 128));
    const g = Math.round(255 - darkness * (255 - 128));
    const b = Math.round(255 - darkness * (255 - 128));

    return rgb(r, g, b);
}

/**
 * Cycles through the colors of the rainbow
 * @param {Number} index A positive integer
 * @returns An rgb string.
 */
const rainbowColor = (index) => {
    // Calculate the hue value based on the index
    const hue = (index * 360 / 255) % 360;
  
    // Convert HSL to RGB
    const h = hue / 360;
    const s = 1;
    const l = 0.5;
    let r, g, b;
  
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = Math.round(hue2rgb(p, q, h + 1 / 3) * 255);
    g = Math.round(hue2rgb(p, q, h) * 255);
    b = Math.round(hue2rgb(p, q, h - 1 / 3) * 255);
  
    return rgb(r, g, b);
}

//Helper for the conversion from hue to rgb
const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
};