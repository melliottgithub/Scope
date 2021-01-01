'use strict';
/* Lexical Scoping */

// top level Scope -- Global Scope

function calcAge(currYear) {
    const age = currYear - 1990;
    console.log(me); // me ==> global excution variable environment (global scope)

    //New Scope 
    function currAge() {
        // age and currYear and me are not in this scope therefore we need to find them in the outer scopes
        let output = `${me} is ${age} years old, if we are in the year ${currYear}.`;
        console.log(output);

        //Newer scope 
        if (currYear >= 2020 && currYear <= 2030) {
            var decade3 = true; //function scoped
            // const me = 'Comment me';
            const str = `You are in your 30's!, ${me}.` // let and const block scoped
            console.log(str);

            function blockScoped(x, y) { // block scoped in strict mode only!
                console.log(x + ' ' + y);
            }

            // output = 'What happened?'; //try it out
            // const output = 'What happened?'; // tyr it out
        }
        //Newer scope
        // console.log(str); // Uncaught ReferenceError: str is not defined
        console.log(decade3);
        // blockScoped('it', 'worked?'); // try to use it without 'strict mode'
        console.log(output);
    }
    //New Scope 
    currAge();

    return age;
}
// console.log(me); //Uncaught ReferenceError: Cannot access 'me' before initialization
const me = 'Mike';
calcAge(2020);
// console.log(age); // Uncaught ReferenceError: age is not defined
// currAge(); // Uncaught ReferenceError: age is not defined

// top level Scope -- Global Scope