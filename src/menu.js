import { menuItems } from "./data"

const menu = () => {
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container')

    const title = document.createElement('h1')
    const menuTitleContainer = document.createElement('div')
    title.textContent = 'Menu' 

    title.classList.add('title')

    menuTitleContainer.appendChild(title)
    menuTitleContainer.classList.add('menu-title-container')

    menuContainer.appendChild(menuTitleContainer)

    menuItems.forEach((item) => {
        const div = document.createElement('div')

        const itemName = document.createElement('h3')
        itemName.textContent = item.name
        itemName.classList.add('item-name')

        const itemDescription = document.createElement('p')
        itemDescription.textContent = item.description

        const itemPrice = document.createElement('p')
        itemPrice.textContent = `Small: $${item.prices.small}, Large: $${item.prices.large}`
        itemPrice.classList.add('item-price')

        div.appendChild(itemName)
        div.appendChild(itemDescription)
        div.appendChild(itemPrice)

        div.classList.add('item-container')

        menuContainer.appendChild(div)
    })

    return menuContainer
}

export { menu }