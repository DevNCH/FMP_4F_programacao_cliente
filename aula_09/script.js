function calcular() {
    var valor = window.document.getElementById("entrada")
    var resultado = window.document.getElementById("resultado")
    var v = Number(valor.value)
    if (v < 0) {
        resultado.innerHTML = "Insira um número positivo."
    } else if (v % 1 != 0) {
        resultado.innerHTML = "Insira um número inteiro."
    } else {
        var r = 1
        var texto_resultado = `${v}! = `
        for (let i = v; i >= 1; i--) {
            r = r * i;
            if (i != 1) {
                texto_resultado += `${i} * `
            } else {
                texto_resultado += `${i} = `
            }
        }
        texto_resultado += `${r}`
        resultado.innerHTML = texto_resultado
    }
}
