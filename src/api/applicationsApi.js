export const myApplicationPromise = (email, firebaseToken) =>{
    return fetch(`http://localhost:3000/application?email=${email}`, {
        credentials: 'include',
        headers : {
            authorization : `Bearer ${firebaseToken}`
        }
    
    })
    .then(res => res.json())
}