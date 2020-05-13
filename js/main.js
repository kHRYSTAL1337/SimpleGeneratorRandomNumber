/*
Get Page Elements
*/
const minValue = document.getElementById('minValue');
const maxValue = document.getElementById('maxValue');
const generateButton = document.getElementById('generate');
const completedRandomNumber = document.querySelector('.completedNumber');

/*
initialize variables
*/
let setInputMinValue;
let setInputMaxValue;
let isValid = true;


/*
this function sets the minimum values
*/
let setDefaultValue = () => {
    minValue.value = 0;
    maxValue.value = 100;
};

/*
this function assigns variable values from elements
1. minValue (element)
2. maxValue (element)
*/
let setInputValue = () => {
    setInputMinValue = Number(minValue.value);
    setInputMaxValue = Number(maxValue.value);
};


/*
this function generates a number in the range, takes 2 arguments
1. setInputMinValue (Variable)
2. setInputMaxValue (Variable)
*/
let getRandomInt = (setInputMinValue, setInputMaxValue) => {
    setInputMinValue = Math.ceil(setInputMinValue);
    setInputMaxValue = Math.floor(setInputMaxValue);

    return Math.floor(Math.random() * (setInputMaxValue - setInputMinValue + 1)) + setInputMinValue;
};


/*
this function checks the validity of the entered data
1. setInputMinValue (Variable - Integer)
2. setInputMaxValue (Variable - Integer)
3. isValid (Variable - Boolean)
*/
let checkValidInput = () => {
    if (setInputMinValue == 0 && setInputMaxValue == 0) {
        isValid = false;
        alert('Введите числа больше 0 !');
    } else {
        isValid = true;
    }
};

/*
The most important function in this program
1. randomNumber (Variable - Integer)
2. setInputValue (Method - arrow Function)
3. checkValidInput (Method - arrow Function)
4. generateButton (Element, addEventListener(function))
*/
let submitGenerate = () => {
    generateButton.addEventListener('click', () => {
        event.preventDefault();

        setInputValue();
        checkValidInput();

        if (isValid) {
            let randomNumber = getRandomInt(setInputMinValue, setInputMaxValue);
            completedRandomNumber.textContent = `Ваше сгенерированное число: ${randomNumber}`;
        }
    });
};





setDefaultValue();
submitGenerate();