
console.log("START OF favorite.js")



console.log(document.getElementsByClassName("Layout-sc-1xcs6mc-0 bZVrjx side-nav-card"))


// create the star element
const starIcon = document.createElement('img')
starIcon.id = 'starIcon'
starIcon.src = 'https://www.shareicon.net/data/256x256/2015/08/30/93083_star_512x512.png'
starIcon.classList.add('starIcon')
let streamersDiv;
let vcount;
let streamerNum = 0;
// select all live streamers div
setTimeout(() => streamersDiv = document.querySelector('[aria-label="Followed Channels"]').children[1].children[0].children[0].children[0], 5000);

// set viewer count div for placement reference
setTimeout(() => vcount = document.querySelector('[aria-label="Followed Channels"]').children[1].children[0].children[0].children[0].children[streamerNum].children[1].children[1], 5000);

//                  num  <--- this is to be mapped for each streamer
// streamersDiv.children[streamerNum].children[1].insertBefore(starIcon, vcount)

setTimeout(() => streamersDiv.children[streamerNum].children[1].insertBefore(starIcon, vcount), 8000);
// this works for editing the content. timeout 5000 ms
// edit this with a better way later. for now this works in testing
// setTimeout(() => DeleteFollowingList('[aria-label="Followed Channels"]'), 5000);




// map through each following list item
// document.getElementsByClassName("Layout-sc-1xcs6mc-0 bZVrjx side-nav-card")
// returns an array of each follow list item
console.log( document.querySelector('[aria-label="Followed Channels"]').children[1])
// each list item has an <a> tag with data-a-id="followed-channel-(num)"

// each following tab is located with this. map throug these
console.log( document.querySelector('[aria-label="Followed Channels"]').children[1].children)



// export default DeleteFollowingList
console.log("END OF favorite.js")


