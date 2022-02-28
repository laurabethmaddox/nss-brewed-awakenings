//Importing the getEmployees from the database module
import { getEmployees } from "./database.js"

const employeeOrders = (employee, orders) => {
    const fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === employee.id) {
            fulfilledOrders ++
        }
    }
    return fulfilledOrders
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {

                    const orderCount = employeeOrders()

                    window.alert(` ${employee.name} sold ${employee.orderCount} products `)
                }
            }
        }
    }
)

//Declaring a variable named employees that holds the copy of the array
//getEmployees returns by invoking the getEmployees function
const employees = getEmployees()

export const Employees = () => { //Export and declare a variable named Employees that is equal to a function with no input parameters
    let html = "<ul>" //Declaring a variable named html whose value is an empty unordered list of strings

    for (const employee of employees) { //The value of employee will be an object and the value of employees will be an array of objects
        html += `<li id="employee--${employee.id}">${employee.name}</li>` //Re declaring the variable html by giving it a list of the employee name
    }

    html += "</ul>" //Re declaring the variable html by making the list item of the name have bullet points

    return html //The value of html will be an object
}

