const submitDatas = {
    name: "Steve",
    email: "steve@steve.com",
}

function submitData() {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(submitDatas)
    })
    .then(resp => resp.json())
    .then(data => console.log(data.id))
    const p = body.createElement('p')
    p.append(document.querySelector(data.id))
}

// const configurationObject = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//     },
//     body: JSON.stringify(submitData)
// }

// fetch('http://localhost:3000/dogs', configurationObject)
//     .then(resp => resp.json()) //converts body of response from JSON to a plain JS object
//     .then(object => console.log(object))
// // second .then makes the response (converted object) available --> wahtever resp.json() returns will be logged in console.log(object)

// .catch(error => {
//     alert('Bad things have happened!')
//     console.log(error.message)
//     })


