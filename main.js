console.log(document, window)

const dropdownCards = Array.from(document.getElementsByClassName('dropdown'))
const dropdownLinks = Array.from(document.getElementsByClassName("dropdown-link"))

dropdownLinks.forEach((link) => {
    link.onclick = () => {
        console.log(link)
    }
})

console.log(dropdownCards, dropdownLinks)