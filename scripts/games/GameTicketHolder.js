const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const gamesTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", () => {
    contentTarget.innerHTML += `<div class="person player"></div>`
    })
}