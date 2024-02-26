const body = document.querySelector('body');
const h1 = document.querySelector('h1');



function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length ==0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1 
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
h1.style.color = 'red'; h1.style.borderBottom = '2px solid black'
h1.style.fontSize ="50px";
body.style.background = "blue";

