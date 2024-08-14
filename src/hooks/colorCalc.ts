
function hexToDec(hex: string){
    return parseInt('0x' + hex, 16);
}

function decToHex(dec: number){
    return Math.round(dec).toString(16);
}

export const useColorCalc = (startingColor: string, endingColor: string, numColors: number) => {
    const startingRed: number = hexToDec(startingColor.substring(1, 3));
    const startingGreen: number = hexToDec(startingColor.substring(3, 5));
    const startingBlue: number = hexToDec(startingColor.substring(5, 7));

    const endingRed: number = hexToDec(endingColor.substring(1, 3));
    const endingGreen: number = hexToDec(endingColor.substring(3, 5));
    const endingBlue: number = hexToDec(endingColor.substring(5, 7));

    const diffRed = (endingRed - startingRed) / numColors;
    const diffGreen = (endingGreen - startingGreen) / numColors;
    const diffBlue = (endingBlue - startingBlue) / numColors;

    const colorArr: string[] = [];
    for(let i = 0; i < numColors; i++){
        const currRed: string = decToHex(startingRed - (diffRed * i));
        const currGreen: string = decToHex(startingGreen - (diffGreen * i));
        const currBlue: string = decToHex(startingBlue - (diffBlue * i));
        console.log(diffGreen * i, i, currGreen);
        colorArr.push(`#${currRed}${currGreen}${currBlue}`);
    }

    return colorArr;
}