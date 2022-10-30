const nome = document.querySelector('#userNome')
const avatar = document.querySelector('#avatar')
const bio = document.querySelector('#bio')

const linkGithub = document.querySelector('#link-github')
const linkBlog = document.querySelector('#link-blog')

// const avatar2 = document.querySelector('#avatar2')
// const local = document.querySelector('#local')
// const upda = document.querySelector('#upda')

let blogdev = 'https://'

fetch('https://api.github.com/users/maykbrito')
    .then((response) => response.json())
    .then((data) =>  {

     
        nome.innerText = data.name
        avatar.src = data.avatar_url

        linkGithub.href = data.html_url
        const bloglink = data.blog
        linkBlog.href = `${blogdev}${bloglink}`

        // local.innerText = data.location
        bio.innerText = data.bio
        // upda.innerText = data.updated_at
    })