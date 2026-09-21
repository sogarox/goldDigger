import * as http from 'http'
import { handleGet } from './handlers/routeHandlers.js'
import { sendResponse } from './utils/sendResponse.js'
import {serveStatic} from './utils/serveStatic.js'
import { getContentType } from './utils/getContentType.js'
const PORT = 8000
const HOST = '0.0.0.0'

const __dirname = import.meta.dirname

const server = http.createServer(async(req, res) => {
    
    /*if (req.url === '/api'){
        if (req.method === 'GET'){
            return await handleGet(res)
        }else if(req.method === 'POST'){
            handlePost()
        }
    }*/
   return await serveStatic(req, res, __dirname)
})

server.listen(PORT, HOST, () => {
    console.log(`server running at http://localhost:${PORT}`)
})