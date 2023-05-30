const doSomething = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('resolved')
        }, 3000)
    })
}

async function rootLoader() {
    console.log('rootLoader');
    
    const response = await doSomething()

    console.log({ response })

    return { response }
}

export default rootLoader