export default function RequestGihubtAPI(username){
    return fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
        return {
            name:data.name,
            login:data.login
        }
    })
}