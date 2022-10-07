//* fetch the data from the API and store it in application state before you can convert the data structures to HTML representations


import { SinkRepair } from "./SinkRepair.js"
import { fetchRequests, fetchPlumbers, fetchCompletions } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(() => fetchPlumbers())
    .then(() => fetchCompletions())
    .then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}
//* Now your main module has to listen for the custom event and invoke the render() function to build all the HTML again.

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render ()
