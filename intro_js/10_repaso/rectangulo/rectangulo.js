function calcularArea(base, altura)
{
    return base*altura;
}

function obtenerArea()
{
    const ladoA = document.getElementById('base');
    const valorDeLaBase = ladoA.value;
    console.log("🚀 ~ file: rectangulo.js ~ line 10 ~ valorDeLaBase", valorDeLaBase)
    

    const ladoB = document.getElementById('altura');
    const valorDeLaAltura = ladoB.value;
    console.log("🚀 ~ file: rectangulo.js ~ line 15 ~ valorDeLaAltura", valorDeLaAltura)

    const area = calcularArea(Number(valorDeLaBase), Number(valorDeLaAltura));
    console.log("🚀 ~ file: rectangulo.js ~ line 18 ~ area", area)

    const mostrar = document.getElementById('area');
    mostrar.value = area;
}