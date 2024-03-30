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

    const monday = document.createElement('p')
    const tuesday = document.createElement('p')
    const wednesday = document.createElement('p')
    const thursday = document.createElement('p')
    const friday = document.createElement('p')
    const saturday = document.createElement('p')
    const sunday = document.createElement('p')

    monday.textContent = "Monday: 10:30am - 12am"
    tuesday.textContent = "Tuesday: 10:30am - 12am"
    wednesday.textContent = "Wednesday: 10:30am - 12am"
    thursday.textContent = "Thursday: 10:30am - 12am"
    friday.textContent = "Friday: 10:30am - 1am"
    saturday.textContent = "Saturday: 10:30am - 1am"
    sunday.textContent = "Sunday: 10:30am - 12am"

    hoursContainer.appendChild(monday)
    hoursContainer.appendChild(tuesday)
    hoursContainer.appendChild(wednesday)
    hoursContainer.appendChild(thursday)
    hoursContainer.appendChild(friday)
    hoursContainer.appendChild(saturday)
    hoursContainer.appendChild(sunday)

    hoursDiv.appendChild(hours)
    hoursDiv.appendChild(hoursContainer)

    const contact = document.createElement('h2')
    contact.textContent = 'Contact Us'

    const phone = document.createElement('p')
    phone.textContent = "Phone: 999-999-9999"

    const email = document.createElement('p')
    email.textContent = "Email: mightbeafakeemail@fakeemail.com"

    const address = document.createElement('p')
    address.textContent = "1234 Grove St, Dallas Tx"


    contactDiv.appendChild(contact)
    contactDiv.appendChild(phone)
    contactDiv.appendChild(email)
    contactDiv.appendChild(address)

    aboutContainer.appendChild(headerDiv)
    aboutContainer.appendChild(hoursDiv)
    aboutContainer.appendChild(contactDiv)

    return aboutContainer
}

export { about }