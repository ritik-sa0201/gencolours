function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('gen').addEventListener('click', function() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const angle = Math.floor(Math.random() * 360);

    const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

    document.getElementById('bdy').style.background = gradient;

    document.querySelector('.cpy').textContent = `background: ${gradient};`;
});

//radial gradient

document.getElementById('rad').addEventListener('click', function() {
   

    const color1 = getRandomColor();
    const color2 = getRandomColor();

    const gradient = `radial-gradient(circle, ${color1}, ${color2})`;

    document.getElementById('bdy').style.background = gradient;

    document.querySelector('.cpy').textContent = `background: ${gradient};`;
});

let reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    let grad = `linear-gradient(135deg, #060b1d, #dbaaaa)`;
    document.getElementById('bdy').style.background = grad;
    document.querySelector('.cpy').textContent = 'HELLO HERE COLOUR CODE WILL COME';
})

document.querySelector('.cpy').addEventListener('click', function() {
    const textToCopy = this.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Copied to clipboard: ' + textToCopy);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});