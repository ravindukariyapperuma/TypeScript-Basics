// Data types =========================================

// let mystring: string;
// let mynumber: number;
// let mybool: boolean;
// let myany: any;

// mystring = "hello";
// mynumber = 12;
// mybool = true;
// myany = {};

// Arrays **************************************

// let stringArray: string[];
// let numArray: number[];
// let boolArray: boolean[];

// let stringArray: Array<string>;
// let numArray: Array<number>;
// let boolArray: Array<boolean>;

// stringArray = ["one","two","three",];
// numArray = [1,2,3,4];
// boolArray = [true,false,false];

// Tuple **************************************

// let myTuple: [string,string,number];

// myTuple = ["hello","world",2];

// Void ***************************************

// let myVoid: void;

// myVoid = null;

// Undefined and null *************************

// let u: undefined = undefined;
// let n: null = null;

// console.log(n);

// functions ================================================
/*
function getTotal(n1 :string, n2 :string):string{

    // if(typeof n1 == 'string'){
    //     n1 = parseInt(n1);
    // }

    return n1+" "+n2;
}

console.log(getTotal("ravindu","lakshan"));
*/

// Interfaces ==================================================

function myinterface(mydata: {title: string, age :number}){
    console.log(mydata.title + " is young he is " + mydata.age);
}

myinterface({title: "Ravindu", age: 22});