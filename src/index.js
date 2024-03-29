import './styles.css';
import logo from './logo.jpg';
import { home } from './home.js'

const component = () => {
    const content = document.querySelector('#content')

    content.appendChild(home(logo))

    return content
}

document.body.appendChild(component())
