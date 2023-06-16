const doSomething = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('resolved')
        }, 3000)
    })
}

export default async function appLoader() {
    console.log('hooksLoader');
    
    const response = await doSomething()

    console.log({ response })

    return { response }
}