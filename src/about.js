import { storeHours } from "./data"

const about = () => {
    const aboutContainer = document.createElement('div')

    const headerDiv = document.createElement('div') 
    const hoursDiv = document.createElement('div')
    const contactDiv = document.createElement('div')

    const h1 = document.createElement('h1')
    h1.textContent = 'About Us'

    headerDiv.appendChild(h1)

    const hours = document.createElement('h2')
    hours.textContent = 'Hours'

const hoursContainer = document.createElement('div')

    storeHours.forEach((day) => {
        const dayHours = document.createElement('p')

        dayHours.textContent = `${day.day}: ${day.open}am - ${day.close}am`

        hoursContainer.appendChild(dayHours)
    })

    hoursDiv.appendChild(hours)
    hoursDiv.appendChild(hoursContainer)

    const createElementWithText = (tag, text) => {
        const element = document.createElement(tag)
        element.textContent = text
        return element
    }
    
    const appendElements = (parent, ...children) => {
        children.forEach((child) => parent.appendChild(child))
    }

    const contact = createElementWithText('h2', 'Contact Us')
    const phone = createElementWithText('p', "Phone: 999-999-9999")
    const email = createElementWithText('p', "Email: mightbeafakeemail@fakeemail.com")
    const address = createElementWithText('p', "1234 Grove St, Dallas Tx")

    appendElements(contactDiv, contact, phone, email, address)
    
    aboutContainer.appendChild(headerDiv)
    aboutContainer.appendChild(hoursDiv)
    aboutContainer.appendChild(contactDiv)

    return aboutContainer
}

export { about }