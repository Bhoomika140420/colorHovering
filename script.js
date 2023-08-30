const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor);

//can be written as a method 

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;

};

//console.log(getBGColor(orange)); // passing arument to the method

//event listner

// var orangeElementColor = getBGColor(orange);

// orange.addEventListener("mouseenter", () => {
//     center.style.background = orangeElementColor;
// });

//method 
const magicColorChange = (element,orangeElementColor ) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = orangeElementColor;
    });
};

magicColorChange(red, getBGColor(red)); // passing multiple argument
magicColorChange(cyan, getBGColor(cyan));
magicColorChange(violet, getBGColor(violet));
magicColorChange(orange, getBGColor(orange));
magicColorChange(pink, getBGColor(pink));