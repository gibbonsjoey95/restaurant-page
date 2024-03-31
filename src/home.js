const home = (logo) => {
    const homeContainer = document.createElement('div')
    homeContainer.classList.add('home-container')

    const logoDiv = document.createElement('div')
    const titleContainer = document.createElement('div')
    const h1 = document.createElement('h1')
    const descriptionContainer = document.createElement('div')
    const p = document.createElement('p')

    
    const myLogo = new Image()
    myLogo.src = logo
    logoDiv.append(myLogo)
    myLogo.classList.add('logo')
    
    
    h1.textContent = 'The Pizza Project'
    
    h1.classList.add('title')
    titleContainer.appendChild(h1)
    titleContainer.classList.add('title-container')

    p.textContent = `At The Pizza Project in Dallas Texas, we craft exceptional pizzas using locally sourced ingredients and authentic recipes.
                     Join us for delicious food, warm hospitality, and memorable moments that will keep you coming back for more.`

     p.classList.add('home-description')

    descriptionContainer.appendChild(p)
    descriptionContainer.classList.add('description-container')

    homeContainer.appendChild(logoDiv)
    homeContainer.appendChild(titleContainer)
    homeContainer.appendChild(descriptionContainer)

    return homeContainer
}

export {home}