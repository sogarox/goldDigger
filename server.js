import * as http from 'http'
import { handleGet, handlePost } from './handlers/routeHandlers.js'
import { sendResponse } from './utils/sendResponse.js'
import {serveStatic} from './utils/serveStatic.js'
import { getContentType } from './utils/getContentType.js'
const PORT = 8000
const HOST = '0.0.0.0'

const __dirname = import.meta.dirname

const server = http.createServer(async(req, res) => {
    
    if(req.url === '/api/invest' ){
         console.log('API INVEST DETECTED')
        if (req.method === 'POST'){
            console.log('POST DETECTED')
            return await handlePost(req, res)
        }
    }
    
   return await serveStatic(req, res, __dirname)
})

server.listen(PORT, HOST, () => {
    console.log(`server running at http://localhost:${PORT}`)
})