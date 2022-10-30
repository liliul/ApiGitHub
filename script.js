const nome = document.querySelector('#userNome')
const avatar = document.querySelector('#avatar')
const bio = document.querySelector('#bio')

const linkGithub = document.querySelector('#link-github')
const linkBlog = document.querySelector('#link-blog')

const local = document.querySelector('#local')
const company = document.querySelector('#company')
const twitter = document.querySelector('#twitter')

let http = 'https://'
let httptwiter = `${http}twitter.com/`

fetch('https://api.github.com/users/maykbrito')
    .then((response) => response.json())
    .then((data) =>  {

     
        nome.innerText = data.name
        avatar.src = data.avatar_url

        linkGithub.href = data.html_url

        const bloglink = data.blog
        linkBlog.href = `${http}${bloglink}`

        local.innerText = data.location
        company.innerText = data.company
        
        const twitterlink = data.twitter_username
        twitter.innerText = data.twitter_username
        twitter.href = `${httptwiter}${twitterlink}`
        
        bio.innerText = data.bio
        // upda.innerText = data.updated_at
    })