import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"
import { completionsHtml } from "./completion.js"

//* imported Requests to show list of request that were made
//* imported ServiceForm to show the input field for customer requests

export const SinkRepair = () => {
    return `
        <h1>Maude and Merle's Sink Repair</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}   
        </section>

        <section class="completions">
        <h2>Service Completions</h2>
        ${completionsHtml()}  
    </section>
    `
}



