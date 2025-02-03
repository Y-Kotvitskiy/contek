const div = document.querySelector('.header h1')
const services = document.querySelectorAll('.service')

div.insertAdjacentHTML('beforeend',
    `<br><span style='font-size: 0.7rem'>resolution: ${window.innerWidth} ${window.innerHeight} </span>` 
)

let serviceInex = 0
const lastServiceNumber = services.length - 1


const showService = () => {
    serviceInex = (serviceInex === lastServiceNumber) ? 0 : serviceInex + 1
    services.forEach( (currentService, currentIndex) => {
        if (currentIndex === serviceInex) 
            currentService.style.opacity = 1
        else 
        currentService.style.opacity = 0
    }

    )
}

setInterval(showService, 3000)