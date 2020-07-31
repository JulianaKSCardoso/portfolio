function typeWriter(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 110 * i)
    });
}
const text = document.querySelector('h2');
typeWriter(text);