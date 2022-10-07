

import { getCompletions, getRequests } from "./dataAccess.js"


const line = document.querySelector('ul__details')
const requestsArray= getRequests()  
const completionsArrays = getCompletions()
const newCompletionArrayForHtml = []
// }
// }    

// )
/*
needs to run on plumber  choice change event
..when clicked on we end up with new completion object in array with
{
      "requestId": 2,
      "plumberId": 1,
      "date_created": 1664994899254,
      "id": 1
    } 
if array of completion's plumberId matches the plumber.id from click event, 
then go through the list of requests   
deconstruct the request--id into 2 and give it a variable name. if that name matches requestId 
then put that matching request in service completion list.
need to make a open html list for service completions to put it into 
it then posts description to completed requests

then find a way to delete it from rendered list


*/

export const completionsHtml = (theNewCompletionArrayForHtml) => {
    theNewCompletionArrayForHtml.map(
        (theNewCompletionArrayForHtmlObject) => {
            return `<li>${theNewCompletionArrayForHtmlObject.description}
            </li>`
        }
    )

}
service.addEventListener(
    "change",
    (event) => {
        requestLineItems = line.children
       
    if (event.target.id === "plumbers") {
       
       completionsArrays.map(
            (completionObject) => {
                if(completionObject.includes('plumberId' && 'requestId')){
                    requestsArray.map(
                        (requestsObject) => {
                            if(requestsObject.id === completionObject.requestId){
                                 newCompletionArrayForHtml.push(completionObject) 
                            }
                            return null
                        }
                    )
                }
                return null
            }
            )
       
        
        
    }
        
    })
