import { menuItems } from "./data"

const menu = () => {
    const menuContainer = document.createElement('div')

    const title = document.createElement('h1')
    title.textContent = 'Menu' 

    menuContainer.appendChild(title)

    menuItems.forEach((item) => {
        const div = document.createElement('div')

        const h3 = document.createElement('h3')
        h3.textContent = item.name

        const itemDescription = document.createElement('p')
        itemDescription.textContent = item.description

        const itemIngredients = document.createElement('p')
        itemIngredients.textContent = item.ingredients

        const itemPrice = document.createElement('p')
        itemPrice.textContent = `Small: $${item.prices.small}, Large: $${item.prices.large}`

        div.appendChild(h3)
        div.appendChild(itemDescription)
        div.appendChild(itemIngredients)
        div.appendChild(itemPrice)

        menuContainer.appendChild(div)
    })

    return menuContainer
}

export { menu }