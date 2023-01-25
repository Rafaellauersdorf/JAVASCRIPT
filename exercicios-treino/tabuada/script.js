function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.ariaValueMax.length == 0){
        window.alert('[ATENÇÃO] Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c < 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} x ${n*c}`
        }
    }
}