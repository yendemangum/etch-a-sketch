const container = document.querySelector("#container")

const btn = document.querySelector("#btn")

for (let i = 1; i <=16; i++) {
    const row = document.createElement("div")
    row.style.display = "flex"
    row.style.flex = "auto"
    row.classList.add("row")
    for (let j = 1; j <=16; j++) {
        const sqDiv = document.createElement("div")
        sqDiv.style.border = "solid black 0.5px"
        sqDiv.style.backgroundColor = "gray"
        sqDiv.classList.add("square")
        sqDiv.style.display = "flex"
        sqDiv.style.flex = "auto"
        row.appendChild(sqDiv)
    }
    container.appendChild(row)

}



function highlight() {
    container.addEventListener("mouseover", (event) => {
    let target = event.target;
    console.log(target)
    target.style.backgroundColor = randomColor();
})
container.addEventListener("mouseout", (event) => {
    let target = event.target;
    console.log(target)
    target.style.backgroundColor = "gray"
}


)

}

highlight();
onClick();

function randomColor() {
    let a = Math.random() * 255
    let b = Math.random() * 255
    let c = Math.random() * 255

    return "rgb(" + a + ", " + b + ", " + c + ")"
}

function resetGrid(num) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    for (let i = 1; i <= num; i++) {
        const row = document.createElement("div")
        row.style.display = "flex"
        row.style.flex = "auto"
        row.classList.add("row")
        for (let j = 1; j <= num; j++) {
            const sqDiv = document.createElement("div")
            sqDiv.style.border = "solid black 0.5px"
            sqDiv.style.backgroundColor = "gray"
            sqDiv.classList.add("square")
            sqDiv.style.display = "flex"
            sqDiv.style.flex = "auto"
            row.appendChild(sqDiv)
        }
        container.appendChild(row)
    
    }

}


function onClick() {
    btn.addEventListener("click", () => {
        let num = prompt("Enter a grid size between 1 and 100", 16)
        if (0 < num < 100) {
            resetGrid(num);
        }
        if (num < 0) {
            resetGrid(16)
        }
        if (num > 100) {
            resetGrid(100)
        }
    }
    )
}


