const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const slideShowTicketHolders = () => {
    eventHub.addEventListener("slideshowTicketPurchased", () => {
    contentTarget.innerHTML += `<div class="person gawker"></div>`
    })
}