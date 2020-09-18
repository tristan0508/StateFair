const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")
const customers = document.querySelector(".customers")

let ticketsSold = 1;

eventHub.addEventListener("click", () => customers.innerHTML = `Total tickets purchased: ${ticketsSold}`)


eventHub.addEventListener('click', event => {
    if (event.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        ticketsSold += 1
        eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener('click', event => {
    if (event.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("FoodTicketPurchased")
        ticketsSold += 1
        eventHub.dispatchEvent(foodEvent)
    }
})

eventHub.addEventListener('click', event => {
    if (event.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased")
        ticketsSold += 1
        eventHub.dispatchEvent(gameEvent)
    }
})

eventHub.addEventListener('click', event => {
    if (event.target.id === "slideshowTicket") {
        const slideshowEvent = new CustomEvent("slideshowTicketPurchased")
        ticketsSold += 1
        eventHub.dispatchEvent(slideshowEvent)
    }
})

eventHub.addEventListener('click', event => {
    if (event.target.id === "fullPackage") {
        const fullPackage = new CustomEvent("fullPackagePurchased")
        ticketsSold += 1
        eventHub.dispatchEvent(fullPackage)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food</button>
            <button id="gameTicket">Game</button>
            <button id="slideshowTicket">Slideshow</button>
            <button id="fullPackage">Full Package</button>
        </div>
        
            
        
    `
}

