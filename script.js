

const text = "Web developer,Programmer Enthuasit,Groww investor";
let index = 0;
function Writtentext() {
    document.getElementById('autotext').innerText = text.slice
    (0, index);
    index++;
    if (index > text.length - 1) {
        index = 0;

    }

}
setInterval(Writtentext, 150) 


