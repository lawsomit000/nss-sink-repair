import { getRequests } from "./dataAccess.js"
import {deleteRequest } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()
    return `
        <ul class="allRequest">
            ${
                requests.map(request => {
                    return `
                        <li class="listItem">${request.description}
                            <button class="request__delete"
                                    id="request--${request.id}">
                                Delete
                            </button>
                        </li>`
                }).join("")
            }
        </ul>
    `
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})