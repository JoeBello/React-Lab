const doSomething = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('resolved')
        }, 3000)
    })
}

export default async function appLoader() {
    console.log('appLoader');
    
    const response = await doSomething()

    console.log({ response })

    return { response }
}