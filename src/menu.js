const menu = () => {
    const menuContainer = document.createElement('div')

    const title = document.createElement('h1')
    title.textContent = 'Menu' 

    menuContainer.appendChild(title)

    const menuItems = [
    {
      "name": "Margherita Supreme",
      "description": "Our Margherita Supreme is a classic Italian favorite with a twist. Featuring San Marzano tomato sauce, fresh mozzarella cheese, ripe Roma tomatoes, fragrant basil leaves, and a sprinkle of Parmesan cheese.",
      "ingredients": ["San Marzano tomato sauce", "fresh mozzarella cheese", "Roma tomatoes", "basil leaves", "Parmesan cheese"],
      "prices": {
        "small": 10.99,
        "large": 14.99
      }
    },
    {
      "name": "Meat Lover's Paradise",
      "description": "Calling all meat enthusiasts! Indulge in our Meat Lover's Paradise pizza, loaded with pepperoni, Italian sausage, ham, bacon, and seasoned ground beef, all atop a zesty marinara sauce and mozzarella cheese blend.",
      "ingredients": ["Marinara sauce", "mozzarella cheese", "pepperoni", "Italian sausage", "ham", "bacon", "seasoned ground beef"],
      "prices": {
        "small": 12.99,
        "large": 16.99
      }
    },
    {
      "name": "Veggie Delight",
      "description": "For our vegetarian friends, the Veggie Delight is a medley of garden-fresh goodness. Packed with colorful bell peppers, red onions, black olives, mushrooms, and spinach, atop a tangy marinara sauce and mozzarella cheese.",
      "ingredients": ["Marinara sauce", "mozzarella cheese", "bell peppers", "red onions", "black olives", "mushrooms", "spinach"],
      "prices": {
        "small": 11.99,
        "large": 15.99
      }
    },
    {
      "name": "BBQ Chicken Feast",
      "description": "Get ready for a flavor explosion with our BBQ Chicken Feast pizza. Tender grilled chicken breast marinated in tangy barbecue sauce, paired with caramelized onions, crispy bacon, fresh cilantro, and a blend of mozzarella and cheddar cheeses.",
      "ingredients": ["BBQ sauce", "mozzarella cheese", "cheddar cheese", "grilled chicken breast", "caramelized onions", "bacon", "cilantro"],
      "prices": {
        "small": 12.99,
        "large": 16.99
      }
    },
    {
      "name": "Hawaiian Luau",
      "description": "Transport yourself to a tropical paradise with our Hawaiian Luau pizza. Topped with sweet pineapple chunks, savory Canadian bacon, and a hint of jalapenos for a spicy kick, all on a base of marinara sauce and mozzarella cheese.",
      "ingredients": ["Marinara sauce", "mozzarella cheese", "pineapple chunks", "Canadian bacon", "jalapenos"],
      "prices": {
        "small": 11.99,
        "large": 15.99
      }
    }
  ]

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