const nome = document.querySelector('#userNome')
const avatar = document.querySelector('#avatar')
const bio = document.querySelector('#bio')
// const avatar2 = document.querySelector('#avatar2')
// const local = document.querySelector('#local')
// const upda = document.querySelector('#upda')


fetch('https://api.github.com/users/maykbrito')
    .then((response) => response.json())
    .then((data) =>  {

     
        nome.innerText = data.name
        avatar.src = data.avatar_url
       
        // local.innerText = data.location
        bio.innerText = data.bio
        // upda.innerText = data.updated_at
    })