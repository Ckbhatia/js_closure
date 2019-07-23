/** This function alerts the given string
 * @param {string}
 * @return {undefined}
*/
let nonsense = string => {
    (function blab() {
        alert(string);
    })();
}


/** This function alerts the given string
 * @param {string}
 * @return {undefined}
*/
let nonsense = string => {
    function blab() {
        alert(string);
    };
    setTimeout(blab, 3000);
}

/** This function returns the function
 * @param {string}
 * @return {function}
*/
let nonsense = string => {
    function blab() {
        alert(string);
    };
    return blab;
}

let blabLater = nonsense('Hello');
let blabAgainLater = nonsense('Welcome');

// Invoke blabLater alerts the Hello string and returns undefined
// Invoke blabAgainLater alerts the Welcome string and returns undefined 


/** This function takes firstName as argument returns a function
 * @param {string}
 * @return {function}
*/
let lastNameTrier = firstName => {
    return innerFunction = lastName => {
        console.log(firstName+' '+lastName);
    }
}

/** It returns object that let us control the storyWriter
 * @param {none}
 * @return {object}
*/ 
let storyWriter = () => {
    let story = '';

    return {
        addWords: function(sent) {
            story += sent;
            return story;
        },
        erase: function() {
            story = '';
            return story;
        }
    }
}