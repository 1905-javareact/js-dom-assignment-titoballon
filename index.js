// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
getUsa = () => {
    const c = document.querySelectorAll('*')
    const element =  [...c].find(x => x.innerText == 'USA')
    console.log(element.innerText);
}
//getUsa();

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
getPeopleSales = ()=>{
    const emps = document.querySelectorAll('.empName')
    let employees = [...emps].map((x)=>{
        return x.innerText;
    })
    console.log(employees);
}
//getPeopleSales();

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
getAnchorChildren = () => {
    const anchors = document.querySelectorAll('span')
    return [...anchors].map(x=>{
        if(x.parentElement.nodeName =='A'){
            console.log(x)
        }
    })
}
//getAnchorChildren();
  


// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.

getHobbies = () => {
    const anchors = document.querySelectorAll('option')
    return  [...anchors].map(x=>{
        if(x.parentElement.name =='skills'){
            console.log(`Value: ${x.value} Content: ${x.innerHTML}`)
        }
    }) 
}
//getHobbies()



// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. 

getCustomAttribute = ()=>{
    const elem = document.querySelectorAll('[data-customAttr]')
    return [...elem].map((x)=>{
        console.log(`The element is a : ${x.nodeName} and 
the attribute valuev is: ${x.getAttribute('data-customAttr')} `)
   
    })
}
//getCustomAttribute();




// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  
sum = ()=>{
    const nums = document.querySelectorAll('.nums')
    let sum = [...nums].reduce((sum,n)=>{
        let x = Number.parseInt(n.value)
        !x ? x = 0: x;
        return sum + x
    },0)
    return sum
}
document.querySelector('#num1').addEventListener('change',()=>{
    let sumE = document.querySelector('#sum')
    sumE.innerText = sum();
})
document.querySelector('#num2').addEventListener('change',()=>{
    let sumE = document.querySelector('#sum')
    sumE.innerText = sum();
})



// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

document.querySelector('[name=skills]').addEventListener('change',function(){
    alert(`Are you sure ${this.value} is one of your skills?`)
})


// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

let color = document.querySelector('input[value=blue]').getAttribute('value')
document.querySelector('input[value=blue]').checked = true;

document.querySelector('input[value=blue]').addEventListener('change',function(){
    alert(`"So you like ${this.getAttribute('value')} more than ${color} now?"`)
    color =this.getAttribute('value')
})
document.querySelector('input[value=green]').addEventListener('change',function(){
    alert(`"So you like ${this.getAttribute('value')} more than ${color} now?"`)
    color =this.getAttribute('value')
})
document.querySelector('input[value=orange]').addEventListener('change',function(){
    alert(`"So you like ${this.getAttribute('value')} more than ${color} now?"`)
    color =this.getAttribute('value')
})
document.querySelector('input[value=red]').addEventListener('change',function(){
    alert(`"So you like ${this.getAttribute('value')} more than ${color} now?"`)
    color =this.getAttribute('value')
})


// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
const emps = document.querySelectorAll('.empName')
let employees = [...emps].map((x)=>{
    x.addEventListener('mouseover',function(){
        this.hidden = !this.hidden;
    })
})

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

setInterval(function(){
    let today = new Date();
    const ampm = today.getHours() >= 12 ? 'PM' : 'AM';
    const hour = today.getHours() >= 12 ? today.getHours()-12 : today.getHours();
    document.querySelector('#currentTime').innerText =  hour  + ":" + today.getMinutes() + ":" + today.getSeconds() +" "+ ampm;
}, 1000);

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

document.querySelector('#helloWorld').addEventListener('click',function(){
    let colors=['red','blue','orange','green']
    setTimeout(()=>{
        this.innerText= colors[Math.floor(Math.random() * 4)]
    },3000)
})


// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).


function walkTheDom(node){
    
    if (!node.hasChildNodes()){
        return console.log(node);
    }
    [...node.childNodes].map((n)=>{
        walkTheDom(n)
    })
}
walkTheDom(document.querySelector('body'))