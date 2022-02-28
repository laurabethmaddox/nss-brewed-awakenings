import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
//Declaring a variable named findProduct that is equal to a 
//function with two input variables order and allProducts
const findProduct = (order, allProducts) => {
    let orderProduct = null //Declaring a variable named orderProduct that has a value of null

    for (const product of allProducts) { //Value of product will be an object and the value of allProducts will be an array of objects
        if (product.id === order.productId) { 
            orderProduct = product
        }
    }

    return orderProduct //Value of orderProduct will be an object 
}

// Function whose responsibility is to find the employee for an order
//Declaring a variable named findEmployee that is equal to a
//function with two input variables order and allEmployees
const findEmployee = (order, allEmployees) => {
    let orderEmployee = null //Declaring a variable orderEmployee that has a value of null

    for (const employee of allEmployees) { //The value of employee will be an object and the value of allEmployees will be an array of objects
        if (employee.id === order.employeeId) {
            orderEmployee = employee
        }
    }

    return orderEmployee //The value of orderEmployee is an object
}

//Declaring a variables named Orders that is equal to a 
//function with no input variables
export const Orders = () => {
    let html = ""
    html = "<ul>"

    for (const order of orders) { //The value of order will be an object and the value of orders will be an array of objects
        const employee = findEmployee(order, employees)
        const product = findProduct(order, products)

        if (employee !== null) {
            html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
        }
    }

    html += "</ul>"

    return html
}

