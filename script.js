const nome = document.querySelector('#userNome')
const avatar = document.querySelector('#avatar')
const bio = document.querySelector('#bio')

const linkGithub = document.querySelector('#link-github')
const linkBlog = document.querySelector('#link-blog')

const local = document.querySelector('#local')
const company = document.querySelector('#company')
const twitter = document.querySelector('#twitter')
const followers = document.querySelector('#followers')
const following = document.querySelector('#following')
const reposPublic = document.querySelector('#repo-public')
const gistsPublic = document.querySelector('#gists-public')



let http = 'https://'
let httptwiter = `${http}twitter.com/`

const username = 'maykbrito'
fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) =>  {

     
        nome.innerText = data.name
        avatar.src = data.avatar_url

        linkGithub.href = data.html_url
        bio.innerText = data.bio

        const bloglink = data.blog
        linkBlog.href = `${http}${bloglink}`

        local.innerText = data.location
        company.innerText = data.company
        
        const twitterlink = data.twitter_username
        twitter.innerText = data.twitter_username
        twitter.href = `${httptwiter}${twitterlink}`
        
        followers.innerText = data.followers
        following.innerText = data.following

        reposPublic.innerText = data.public_repos
        gistsPublic.innerText = data.public_gists
        
        // upda.innerText = data.updated_at
})


// buscar dados da api do github users repos
const cards = document.querySelector('#cards')

let nomehub = 'maykbrito'
let url = `https://api.github.com/users/${nomehub}/repos` 
fetch(url)
  .then((response) => response.json())
  .then((grepos) => {
    //   console.log('grepos', grepos)
      // post.innerHTML = grepos.name
      
    grepos.map(list => {
        const h1 = document.createElement('h1')
        const aa = document.createElement('a')
        const article = document.createElement('article')

        // article.setAttribute('id', list.id)
        article.classList.add('card')
        aa.setAttribute('id', list.id)
        // h1.setAttribute('id', list.id)
        aa.href = list.html_url
        h1.innerHTML = list.name
        // let aa = list.html_url

        cards.appendChild(aa)
        aa.appendChild(article)
        article.appendChild(h1)
        // link.href = aa

    })
    // cards.innerHTML = verRepos
    // console.log('mapll',verRepos)
})