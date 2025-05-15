fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    const container = document.querySelector("#container")
    const usuarios = users.map(user =>{
        return `
        <div class="card">
        <img = src="https://placehold.co/600x400" alt=${user.username}/>
        <h2>${user.name}</h2>
        <p>${user.username}</p>
        <p>${user.email}</p>
        <p>${user.address.street} , ${user.address.suite} , ${user.address.city} , ${user.address.zipcode}</p>
        <p>${user.phone}</p>
        <p>${user.website}</p>
        <p>${user.company.name}</p>
        <p>${user.company.catchPhrase}</p>
        <p>${user.company.bs}</p>
        
        </div>`
    })
    container.innerHTML = usuarios.join("")
})