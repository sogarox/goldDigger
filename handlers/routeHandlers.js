import {getData} from '../utils/getData.js'
import { sendResponse } from '../utils/sendResponse.js'
import { sanitizeInput } from '../utils/sanitizeInput.js'
import { addNewInvestment } from '../utils/addNewInvestment.js'
import { parseJSONbody } from '../utils/parseJSONbody.js'

export async function handleGet(res) {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)
}

export async function handlePost(req, res) {
    try{
        const parsedBody = await parseJSONbody(req)
        const sanitizedBody = await sanitizeInput(parsedBody)
        await addNewInvestment(sanitizedBody)

        sendResponse(res, 201, 'application/json', JSON.stringify({
            messaage: 'Investment saved successfully'
        }))
        
    }catch(err){
        sendResponse(res, 500, 'application/json', JSON.stringify({
            error: 'could not save investment'
        }))
    }
}