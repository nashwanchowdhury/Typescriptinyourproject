let numbers1: number[] = [1, 2, 3, 4];
let numbers2: number[] = [5, 6, 7, 8];

let numbers: number[] = [...numbers1, ...numbers2];

//console.log(numbers);

let square = (x: number): number => x * x;

//console.log(square(8));

const squares: number[] = numbers.map(x => square(x))

//console.log(squares);

let isEven = (x: number): boolean => {
    if (x % 2 > 0) {
        return false;
    } else {
        return true;
    }

};

//console.log(isEven(9));

const evenSquares: number[] = squares.filter(x => isEven(x) == true);

//console.log(evenSquares);

let [ firstEvenSquare, secondEvenSquare ]: number[] = evenSquares;

//console.log(firstEvenSquare);
//console.log(secondEvenSquare);

console.log(`${numbers}, ${squares}, ${evenSquares}, ${firstEvenSquare}, ${secondEvenSquare}`)