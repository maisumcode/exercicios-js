const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

const kata1 = () => {
    for (let i = 1; i <= 25; i++) {
        let novoElemento = document.createElement("div");

        let novoTexto = document.createTextNode(`Número: ${i}`);
        novoElemento.appendChild(novoTexto);

        let destino = document.getElementById("kata1");
        destino.appendChild(novoElemento);
    }
}

const kata2 = () => {
    for (let i = 25; i > 0; i--) {
        let novoElemento = document.createElement("div");

        let novoTexto = document.createTextNode(`Número: ${i}`);
        novoElemento.appendChild(novoTexto);

        let destino = document.getElementById("kata2");
        destino.appendChild(novoElemento);
    }
}

const kata3 = () => {
    for (let i = -1; i >= -25; i--) {
        let novoElemento = document.createElement("div");

        let novoTexto = document.createTextNode(`Número: ${i}`);
        novoElemento.appendChild(novoTexto);

        let destino = document.getElementById("kata3");
        destino.appendChild(novoElemento);
    }
}

const kata4 = () => {
    for (let i = -25; i <= -1; i++) {
        let novoElemento = document.createElement("div");

        let novoTexto = document.createTextNode(`Número: ${i}`);
        novoElemento.appendChild(novoTexto);

        let destino = document.getElementById("kata4");
        destino.appendChild(novoElemento);
    }
}

const kata5 = () => {
    for (let i = 25; i >= -25; i--) {
        if (i % 2 != 0) {
            let novoElemento = document.createElement("div");

            let novoTexto = document.createTextNode(`Ímpar: ${i}`);
            novoElemento.appendChild(novoTexto);

            let destino = document.getElementById("kata5");
            destino.appendChild(novoElemento);
        }
    }
}

const kata6 = () => {
    for (let i = 3; i <= 100; i++) {
        if (i % 3 == 0) {
            let novoElemento = document.createElement("div");

            let novoTexto = document.createTextNode(`Número divisível por 3: ${i}`);
            novoElemento.appendChild(novoTexto);

            let destino = document.getElementById("kata6");
            destino.appendChild(novoElemento);
        }
    }
}

const kata7 = () => {
    for (let i = 3; i <= 100; i++) {
        if (i % 7 == 0) {
            let novoElemento = document.createElement("div");

            let novoTexto = document.createTextNode(`Número divisível por 7: ${i}`);
            novoElemento.appendChild(novoTexto);

            let destino = document.getElementById("kata7");
            destino.appendChild(novoElemento);
        }
    }
}

const kata8 = () => {
    for (let i = 100; i > 0; i--) {
        if (i % 3 == 0 || i % 7 == 0) {
            let novoElemento = document.createElement("div");

            let novoTexto = document.createTextNode(`Número divisível por 3 ou 7: ${i}`);
            novoElemento.appendChild(novoTexto);

            let destino = document.getElementById("kata8");
            destino.appendChild(novoElemento);
        }
    }
}

const kata9 = () => {
    for (let i = 5; i <= 100; i += 10) {
        let novoElemento = document.createElement("div");

        let novoTexto = document.createTextNode(`Número impares divisível por 5 até 100: ${i}`);
        novoElemento.appendChild(novoTexto);

        let destino = document.getElementById("kata9");
        destino.appendChild(novoElemento);
    }
}

const kata10 = () => {
    for (let i = 0; i < sampleArray.length; i++) {
        let novoElemento = document.createElement("div");

        let novoTexto = document.createTextNode(`Elemento na posição ${i} no sampleArray: ${sampleArray[i]}`);
        novoElemento.appendChild(novoTexto);

        let destino = document.getElementById("kata10");
        destino.appendChild(novoElemento);
    }
}

const kata11 = () => {
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 == 0) {
            let novoElemento = document.createElement("div");

            let novoTexto = document.createTextNode(`Elemento par na posição ${i} no sampleArray: ${sampleArray[i]}`);
            novoElemento.appendChild(novoTexto);

            let destino = document.getElementById("kata11");
            destino.appendChild(novoElemento);
        }
    }
}

const kata12 = () => {
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 != 0) {
            let novoElemento = document.createElement("div");

            let novoTexto = document.createTextNode(`Elemento ímpar na posição ${i} no sampleArray: ${sampleArray[i]}`);
            novoElemento.appendChild(novoTexto);

            let destino = document.getElementById("kata12");
            destino.appendChild(novoElemento);
        }
    }
}

const kata13 = () => {
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 == 0) {
            let novoElemento = document.createElement("div");

            let novoTexto = document.createTextNode(`Elemento divisível por 8 na posição ${i} no sampleArray: ${sampleArray[i]}`);
            novoElemento.appendChild(novoTexto);

            let destino = document.getElementById("kata13");
            destino.appendChild(novoElemento);
        }
    }
}

const kata14 = () => {
    for (let i = 0; i < sampleArray.length; i++) {
        let novoElemento = document.createElement("div");

        let novoTexto = document.createTextNode(`Quadrado do elemento na posição ${i} no sampleArray: ${sampleArray[i] ** 2}`);
        novoElemento.appendChild(novoTexto);

        let destino = document.getElementById("kata14");
        destino.appendChild(novoElemento);

    }
}

const kata15 = () => {
    let soma = 0;
    for (let i = 1; i <= 20; i++) {
        soma += i;
    }
    let novoElemento = document.createElement("div");

    let novoTexto = document.createTextNode(`Soma dos elementos de 1 à 20: ${soma}`);
    novoElemento.appendChild(novoTexto);

    let destino = document.getElementById("kata15");
    destino.appendChild(novoElemento);
}

const kata16 = () => {
    let soma = 0;
    for (let i = 0; i < sampleArray.length; i++) {
        soma += sampleArray[i];
    }
    let novoElemento = document.createElement("div");

    let novoTexto = document.createTextNode(`Soma dos elementos de sampleArray: ${soma}`);
    novoElemento.appendChild(novoTexto);

    let destino = document.getElementById("kata16");
    destino.appendChild(novoElemento);
}


const kata17 = () => {
    let menor = 10000;
    for (let i = 0; i < sampleArray.length; i++) {
        if (menor > sampleArray[i]) {
            menor = sampleArray[i];
        }
    }
    let novoElemento = document.createElement("div");

    let novoTexto = document.createTextNode(`O menor elemento de sampleArray: ${menor}`);
    novoElemento.appendChild(novoTexto);

    let destino = document.getElementById("kata17");
    destino.appendChild(novoElemento);
}



const kata18 = () => {
    let maior = 0;
    for (let i = 0; i < sampleArray.length; i++) {
        if (maior < sampleArray[i]) {
            maior = sampleArray[i];
        }
    }
    let novoElemento = document.createElement("div");

    let novoTexto = document.createTextNode(`Maior elemento do Sample Array: ${maior}`);
    novoElemento.appendChild(novoTexto);

    let destino = document.getElementById("kata18");
    destino.appendChild(novoElemento);
}


const ret1 = () => {
    for (let i = 0; i < 20; i++) {
        let newElement = document.createElement("div");
        newElement.className = "bar";
        newElement.style.width = 100 + "px";
        newElement.style.height = 20 + "px";

        // Put the new div on the page inside the existing element "d1".
        var destination = document.getElementById("ret1");
        destination.appendChild(newElement);
    }

}

const ret2 = () => {
    let incremento = 0;
    for (let i = 0; i < 20; i++) {
        let novoElemento = document.createElement("div");
        novoElemento.className = "bar1";
        novoElemento.style.width = 105 + incremento + "px";
        novoElemento.style.height = 20 + "px";

        let destino = document.getElementById("ret2");
        destino.appendChild(novoElemento);
        incremento += 5;
    }
}


const ret3 = () => {
    for (let i = 0; i < sampleArray.length; i++) {
        let newElement = document.createElement("div");
        newElement.className = "bar3";
        newElement.style.width = sampleArray[i] + "px";
        newElement.style.height = 20 + "px";

        // Put the new div on the page inside the existing element "d1".
        var destination = document.getElementById("ret3");
        destination.appendChild(newElement);
    }

}


const ret4 = () => {
    for (let i = 0; i < sampleArray.length; i++) {
        let newElement = document.createElement("div");
        newElement.className = "bar4";
        newElement.style.width = sampleArray[i] + "px";
        newElement.style.height = 20 + "px";

        if (i % 2 == 0) {
            newElement.style.background = "red";
        } else {
            newElement.style.background = "gray";
        }


        // Put the new div on the page inside the existing element "d1".
        var destination = document.getElementById("ret4");
        destination.appendChild(newElement);
    }

}

const ret5 = () => {
    for (let i = 0; i < sampleArray.length; i++) {
        let newElement = document.createElement("div");
        newElement.className = "bar5";
        newElement.style.width = sampleArray[i] + "px";
        newElement.style.height = 20 + "px";

        if (sampleArray[i] % 2 == 0) {
            newElement.style.background = "red";
        } else {
            newElement.style.background = "gray";
        }


        // Put the new div on the page inside the existing element "d1".
        var destination = document.getElementById("ret5");
        destination.appendChild(newElement);
    }
}
