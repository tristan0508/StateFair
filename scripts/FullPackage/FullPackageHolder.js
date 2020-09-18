const contentSideShow = document.querySelector(".sideshow")
const contentFood = document.querySelector(".food")
const contentGames = document.querySelector(".games")
const contentRides = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const fullPackageHolders = () => {
    eventHub.addEventListener("fullPackagePurchased", () => {
    contentGames.innerHTML += `<div class="person player"></div>`
    contentFood.innerHTML += `<div class="person eater"></div>`
    contentSideShow.innerHTML += `<div class="person gawker"></div>`
    contentRides.innerHTML += `<div class="person rider"></div>`
    })
}