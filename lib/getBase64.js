




 async function getBase64(imageUrl) {
    
    try {
        const res = await fetch(imageUrl)
        
        if(!res) throw new Error(`failed to fetch image: ${res.status} ${res.statusText}`)
        
        const buffer = await arrayBuffer()
        const { base64 } = await getPlaiceholder(Buffer.from(buffer))
        
        console.log(`base64: ${base64}`)
        
        return base64
    }
    
    catch (err) {
        if(err instanceof Error) console.log(err.stack)
    }
}


export default async function addBlurDataUrl(images) {
    
    const base64Promises = images.map(photo => getBase64(photo))
    
    const base64Results = await Promise.all(base64Promises)

    const photosWithBlur = images.map((photo, i) => {
        photo.addBlurDataUrl = base64Results[i]
        return photo
    })

    return photosWithBlur
}

