const container = document.querySelector(".container");
function createGrid(n) {
    container.innerHTML = '';

    for (let i = 0; i < n*n; i++){
        var div = document.createElement("div");
        div.className = "box";
        container.appendChild(div);
    }

    const widthPercentage = 100/n;

    const divs = document.querySelectorAll('.box');
    divs.forEach(div => {
        div.style.width = `${widthPercentage}%`;
        div.style.aspectRatio = '1';
        div.style.boxSizing = 'border-box';

        div.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
        });
    });
}

const newGridBtn = document.getElementById('new-grid');

newGridBtn.addEventListener('click', () => {
    let question = prompt("How many squares per side for the new grid?")
    if (question === null || question === '') {
        return;
    }
    if (parseInt(question) > 100 || parseInt(question) < 1) {
        alert("Please enter a number between 1 and 100.");
        return;
    } else {
        createGrid(parseInt(question));
    }
})

createGrid(16);