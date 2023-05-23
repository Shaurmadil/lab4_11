function factorial(n: number): number {
    return n != 1 ? n * factorial(n - 1) : 1;
}

function getSumm(x: number): number {

    let result = 1; // Initialize the result with the first term of the series
    let term = 1; // Initialize the first term
    let sign = -1; // Alternate the sign of each term
    let iter = 1
    while (Math.abs(term) > 0.001) {
      term *= x * x / (2 * iter * (2 * iter - 1)); 
      result += sign * term; 
      sign *= -1; 
      iter += 1
    }
    return result
}
export default function series(arrX: any) {
    return arrX.map((elem: any) => {
        return Number(getSumm(elem).toFixed(2));
    });
}
