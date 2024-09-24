import { getHelloWorldMessage } from './util.js';

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = getHelloWorldMessage();
});
