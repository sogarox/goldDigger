import fs from 'fs/promises'
import path from 'node:path'

export async function addNewInvestment(payload){
    
    const pathJSON = path.join('data', 'wallet.json')
    const investments = JSON.parse(await fs.readFile(pathJSON, 'utf8'))
    investments.push(payload)
    await fs.writeFile(pathJSON, JSON.stringify(investments, null, 2))
}
