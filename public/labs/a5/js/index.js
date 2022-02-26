/*alert('Hello World!');*/
const init = () => {
    console.log('Hello world from jQuery');

    console.log('Hello World!');


    global1 = 10;
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = global1 + functionScoped -
        blockScoped;

    console.log('Variables and Constants');
    console.log(global1);
    console.log(functionScoped);
    console.log(blockScoped);
    console.log(constant1);


    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = 'Hello World!';
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
    console.log('Variable types');
    console.log(numberVariable +
        "\n" +  floatingPointNumber +
        "\n" + stringVariable +
        "\n" + booleanVariable +
        "\n" + isNumber +
        "\n" + isString +
        "\n" + isBoolean);


    let true1 = true;
    let false1 = false;
    let false2 = true1 && false1;
    let true2 = true1 || false1;
    let true3 = !false2;
    let true4 = numberVariable === 123;
    let true5 = floatingPointNumber !== 321.432;
    let false3 = numberVariable < 100;
    console.log('Boolean Variables' +
        "\n" + true1 +
        "\n" + false1 +
        "\n" + false2 +
        "\n" + true2 +
        "\n" + true3 +
        "\n" + true4 +
        "\n" + true5 +
        "\n" + false3
    );

    console.log('If else');
    if(true1) {
        console.log(true);
    }

    if(!false1) {
        console.log('!false1');
    } else {
        console.log('false1');
    }

    // had to change this from "const" because it's used again later in the document
    let loggedIn = true;
    const greeting = loggedIn ? 'Welcome!' : 'Please login';
    console.log(greeting)


    console.log("Legacy ES5 function")
    function add (a, b) {
        return a + b;
    }
    const twoPlusFour = add(2, 4);
    console.log(twoPlusFour);


    console.log("New ES6 Functions")
    const subtract = (a, b) => {
        return a - b;
    }
    const threeMinusOne = subtract(3, 1);
    console.log(threeMinusOne);

    console.log("Implied Return");
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    console.log("Parenthesis and Parameters");
    const square = a => a * a;
    const plusOne = a => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    console.log(twoSquared);
    console.log(threePlusOne);

    console.log("Arrays");
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    let variableArray1 = [
        functionScoped,
        blockScoped,
        constant1,
        numberArray1,
        stringArray1
    ];

    console.log(numberArray1
        + "\n" + stringArray1
        + "\n" + variableArray1
        + "\n" + functionScoped
        + "\n" + blockScoped
        + "\n" + constant1
        + "\n" + numberArray1
        + "\n" + stringArray1);

    console.log("Array index and length");
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);
    console.log(length1
        + "\n" + index1);

    console.log("Adding and Removing Data to/from Arrays");
    // adding new items
    numberArray1.push(6);
    stringArray1.push('string3');

    // remove 1 item starting on 3rd spot
    numberArray1.splice(2, 1);
    stringArray1.splice(1, 1);
    console.log(numberArray1);
    console.log(stringArray1);

    console.log("For Loops");
    for (let i=0; i<stringArray1.length; i++) {
        const string1 = stringArray1[i];
        console.log(string1);
    }

    console.log("The Map Function");
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);
    console.log(
        numberArray1 + "\n" +
        squares + "\n" +
        cubes
    );

    console.log("The Find Function");
    const four = numberArray1.find(a => a === 4);
    const string3 = stringArray1.find(a => a === 'string3');
    console.log(
        four  + "\n" +
        string3
    )


    console.log("The Find Index Function");
    const fourIndex = numberArray1
        .findIndex(a => a === 4);
    const string3Index = stringArray1
        .findIndex(a => a === 'string3');
    console.log(
        fourIndex  + "\n" +
        string3Index
    )

    console.log("The Filter Function");
    const numbersGreaterThan2 = numberArray1
        .filter(a => a > 2);
    const evenNumbers = numberArray1
        .filter(a => a % 2 === 0);
    const oddNumbers = numberArray1
        .filter(a => a % 2 !== 0);
    console.log(
        numberArray1   + "\n" +
        numbersGreaterThan2  + "\n" +
        evenNumbers  + "\n" +
        oddNumbers
    )

    console.log("Template Strings");
    const five = 2 + 3;
    const result1 = "2 + 3 = " + five;
    console.log(result1);

    const result2 = `2 + 3 = ${2 + 3}`;
    console.log(result2);

    const username = "alice";
    const greeting1 = `Welcome home ${username}`;
    console.log(greeting1);

    //previously declared @67
    loggedIn = false;
    const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
    console.log(greeting2);


    const bindById = $('#bind-by-id');
    const bindByClass = $('.bind-by-class');
    console.log('Binding to DOM');
    console.log(bindById);
    console.log(bindByClass);

    console.log("Changing Style Programmatically");
    const changeStyle = $('#change-style');
    const changeStyle2 = $('.change-style');
    changeStyle.css('color', 'red');
    changeStyle2.css('color', 'blue');

}

$(init);
