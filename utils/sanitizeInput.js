import sanitizeHtml from 'sanitize-html'

export function sanitizeInput(data){

    const sanitizedData = {}

    for(const [key, value] of Object(data)){
        if (typeof value === 'String'){
            sanitizedData[key] = sanitizeHtml(value, {allowedTags: ['b'], allowedAttributes: {}})
        }else{
            sanitizedData[key] = value
        }
    }
} 