


//* Store the external data in application state that was fetched in an empty object
const applicationState = {
    requests: [],
    plumbers: [],
    completions: []

}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}
//* returns a copy of the request's state
export const getRequests = () => {
    return applicationState.requests.map(request =>
        ({...request}))
}

//* take the transient state when the user clicks the button and convert it in the database.json file by using a fetch() call
export const sendRequest = (userServiceRequest) => {
    const mainContainer = document.querySelector("#container")
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

//* Update your sendRequest() function's fetch call to dispatch the custom event after the POST operation has been completed.
    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
//* the function whose responsibility it is to initiate the fetch request for DELETE must have the primary key sent to it as an argument.

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

//* todo adding the name of the plumber

export const fetchPlumbers = () => {
    return fetch(`${API}/plumbers`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.plumbers = data
            }
        )
}
export const getPlumbers = () => {
    return applicationState.plumbers.map(plumber =>
        ({...plumber}))
}

export const saveCompletion = (completionObject) => {
    return fetch(`${API}/completions`, {
       method: "POST", 
       headers: {
        "content-type": "application/json"
       }, 
       body: JSON.stringify(completionObject)
    })
    
}
export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.completions = data
            }
        )
}
export const getCompletions = () => {
    return applicationState.completions.map(completion =>
        ({...completion}))
}