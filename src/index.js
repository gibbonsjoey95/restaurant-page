import './styles.css';
import logo from './logo.jpg';
import { home } from './home.js'
import { menu } from './menu.js'
import { about } from './about.js'

const component = () => {
    const content = document.querySelector('#content')
    const homeBtn = document.querySelector('#home')
    const menuBtn = document.querySelector('#menu')
    const aboutBtn = document.querySelector('#about')

    content.appendChild(home(logo))

    homeBtn.addEventListener('click', () => {
        content.textContent = ''
        content.appendChild(home(logo))
    })

    menuBtn.addEventListener('click', () => {
        content.textContent = ''
        content.appendChild(menu())
    }) 

    aboutBtn.addEventListener('click', () => {
        content.textContent = ''
        content.appendChild(about())
    })

    return content
}

document.body.appendChild(component())
