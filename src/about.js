import { storeHours } from "./data"

const about = () => {
    const aboutContainer = document.createElement('div')
    aboutContainer.classList.add('about-container')

    const headerDiv = document.createElement('div') 
    const hoursDiv = document.createElement('div')
    const contactDiv = document.createElement('div')

    hoursDiv.classList.add('hours-div')
    contactDiv.classList.add('contact-div')

    const h1 = document.createElement('h1')
    const aboutTitleContainer = document.createElement('div')
    h1.textContent = 'About Us'

    h1.classList.add('title')

    aboutTitleContainer.appendChild(h1)
    aboutTitleContainer.classList.add("about-title-container")

    headerDiv.appendChild(aboutTitleContainer)

    const hours = document.createElement('h2')
    hours.classList.add('hours-title')
    hours.textContent = 'Hours'

    const hoursContainer = document.createElement('div')
    hoursContainer.classList.add('hours-container')

    storeHours.forEach((day) => {
        const dayHours = document.createElement('p')
        dayHours.classList.add('day-hours')

        dayHours.textContent = `${day.day}: ${day.open}am - ${day.close}am`

        hoursContainer.appendChild(dayHours)
    })

    hoursDiv.appendChild(hours)
    hoursDiv.appendChild(hoursContainer)

    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contact-container')

    const contactInfoContainer = document.createElement('div')
    contactInfoContainer.classList.add('contact-info-container')

    const createElementWithText = (tag, text) => {
        const element = document.createElement(tag)
        element.textContent = text
        return element
    }
    
    const appendElements = (parent, ...children) => {
        children.forEach((child) => {
            parent.appendChild(child)
            child.classList.add('contact-child')
        })
    }

    const contact = createElementWithText('h2', 'Contact Us')
    const phone = createElementWithText('p', "Phone: 999-999-9999")
    const email = createElementWithText('p', "Email: mightbeafakeemail@fakeemail.com")
    const address = createElementWithText('p', "1234 Grove St, Dallas Tx")

    contact.classList.add('contact-title')

    // contactDiv.appendChild(contact)
    appendElements(contactInfoContainer, phone, email, address)

    contactDiv.appendChild(contact)
    contactDiv.appendChild(contactInfoContainer)
    
    aboutContainer.appendChild(headerDiv)
    aboutContainer.appendChild(hoursDiv)
    aboutContainer.appendChild(contactDiv)

    return aboutContainer
}

export { about }