const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!!!');
        }else{
            reject('Whooops!!!');
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.log(error));

const somethingWillHappen2 = () => {
    return new Promise ((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True');
            },2000)
        }else{
            const error = new Error('Whoops!!!')
            reject(error);
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.log(error))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array Results:', response);
    })
    .catch(error => {
        console.log('Array Errors:', error);
    })

