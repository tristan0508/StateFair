const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener('click', event => {
    if (event.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener('click', event => {
    if (event.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("FoodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
})

eventHub.addEventListener('click', event => {
    if (event.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
    }
})

eventHub.addEventListener('click', event => {
    if (event.target.id === "slideshowTicket") {
        const slideshowEvent = new CustomEvent("slideshowTicketPurchased")
        eventHub.dispatchEvent(slideshowEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food</button>
            <button id="gameTicket">Game</button>
            <button id="slideshowTicket">Slideshow</button>
        </div>
        
            
        
    `
}

