///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((a,c) => a+c.price,0)
console.log(summedPrice)

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => (cartTotal*(tax+1)-couponValue)
console.log(calcFinalPrice(100,10,.06))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    firstName (string)
    lastName (string)
    address (string)
    state (string)
    zipCode (number)
    phoneNumber (number)

    firstName, lastName, address, and state all contain letters and more than just numerical valule.
    zipCode and phoneNumber are numerical values.

    these are all basic components a company would want or require for an order.  This will assit with contacting
    the customer, delevering to a customer, or billing a customer.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customerOne = {
    firstName: 'Eddie',
    lastName: 'Vedder',
    address: '10 vitalogy road',
    city: 'Seatle',
    state: 'WA',
    zip: '40407',
    phoneNumber: '8013698228'

}
console.log(customerOne)
