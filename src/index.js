import './styles.css';
import logo from './logo.jpg';

const component = () => {
    const content = document.querySelector('#content')

    const logoDiv = document.createElement('div')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')

    const myLogo = new Image()
    myLogo.src = logo
    logoDiv.append(myLogo)

    h1.textContent = 'The Pizza Project'

    p.textContent = `At The Pizza Project, we take pride in offering an extraordinary dining experience that goes beyond the ordinary.
     Situated in the heart of Dallas, our restaurant embodies the essence of hospitality, welcoming guests into a cozy and vibrant atmosphere.
      Here, we celebrate the art of pizza-making, infusing each creation with passion and expertise. Our handcrafted pizzas are a testament to our commitment to quality,
       featuring the finest ingredients sourced from local producers and authentic recipes passed down through generations. 
       But it's not just about the food – it's about the sense of community and camaraderie that fills our dining room. 
       Whether you're gathering with friends, enjoying a family dinner, or simply savoring a solo meal, 
       every moment at The Pizza Project is an opportunity to create cherished memories.
     Join us and discover the joy of good food, good company, and genuine hospitality.`

    content.appendChild(logoDiv)
    content.appendChild(h1)
    content.appendChild(p)

    return content
}

document.body.appendChild(component())

