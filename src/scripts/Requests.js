import { deleteRequest, getRequests, getPlumbers, saveCompletion, getCompletions } from "./dataAccess.js"



//* The function you write will convert each service request object into HTML representations and used in dataAccess.js's map()
const convertRequestToListElement = (requestArrayObject) => {
    const plumbers = getPlumbers()
        
            return `<li>${requestArrayObject.description}
            <select class="plumbers" id="plumbers">
                <option value="">Choose</option>${plumbers.map(plumber => {
                    return `
                    <option value="${requestArrayObject.id}--${plumber.id}">${plumber.name}</option>`
                }
                ).join("")}
            </select>
            <button class="request__delete" id="request--${requestArrayObject.id}">Delete</button>
            </li>`

}


//*The function should define 1 parameter (value will be each object in the array)
export const Requests = () => {
    const requests = getRequests()

    //*The description of the service request should be interpolated inside the <li> HTML representation.
    let html = `
        <ul id="ul__details">
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
        
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})
//* todo create a listener that will listen for state change in the Plumbers choices section and add it to completion object by running saveCompletion function
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = {
                requestId: parseInt(requestId),
                plumberId: parseInt(plumberId),
                date_created: Date.now()
             }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
                 saveCompletion(completion)
        
        
            

        }
    }
)
