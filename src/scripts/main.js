import { SinkRepair } from "./SinkRepair.js"
import { fetchRequests} from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
             mainContainer.innerHTML = SinkRepair()
        }
    )  
}

render()

//listens for statechanged from data access
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
