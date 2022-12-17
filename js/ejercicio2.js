function calcular() {
    const monto = parseFloat(document.getElementById('monto').value);

    const ginecologia = monto * 0.4;
    const traumatologia = monto * 0.3;
    const pediatria = monto * 0.3;

    document.getElementById('resultado').innerHTML = `<strong>Resultado</strong> <br>` +
        `Ginecología (40%): ` + ginecologia + `<br>` +
        `Traumatología (30%): ` + traumatologia + `<br>` +
        `Pediatría (30%): ` + pediatria;

    return false;
}

function limpiar() {
    document.getElementById('formulario').reset();
    document.getElementById('resultado').innerHTML = '';
}

