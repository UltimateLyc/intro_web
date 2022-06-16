function calculateArea (base, height)
{
    return ((base*height)/2)
}

function calcultePerimeter (base, sideA, sideB)
{
    return (base + sideA + sideB)
}

function sendRequest()
{
    const getBase = document.getElementById('base');
    const valorOfBase = getBase.value;
    //console.log("🚀 ~ file: triangulo.js ~ line 10 ~ valorOfBase", valorOfBase)
    
    const getHeight = document.getElementById('height');
    const valorOfHeight = getHeight.value;
    //console.log("🚀 ~ file: triangulo.js ~ line 14 ~ valorOfHeight", valorOfHeight)

    const getArea = calculateArea(Number(valorOfBase), Number(valorOfHeight));
    //console.log("🚀 ~ file: triangulo.js ~ line 17 ~ getArea", getArea)
    

    const printData = document.getElementById('area');
    printData.value = getArea; 

    const getSideA = document.getElementById('sideA');
    const valorOfSideA = getSideA.value;
    //console.log("🚀 ~ file: triangulo.js ~ line 30 ~ valorOfSideA", valorOfSideA)

    const getSideB = document.getElementById('sideB');
    const valorOfSideB = getSideB.value;
    //console.log("🚀 ~ file: triangulo.js ~ line 34 ~ valorOfSideB", valorOfSideB)

    const getPerimeter = calcultePerimeter(Number(valorOfBase), Number(valorOfSideA), Number(valorOfSideB));

    const printDataPerimeter = document.getElementById('perimeter');
    printDataPerimeter.value = getPerimeter;
    
}