


// select all live streamers div
let streamersDiv;
setTimeout(() => streamersDiv = document.querySelector('[aria-label="Followed Channels"]').children[1], 5000);


const NewIcon = () => {
    const starIcon = document.createElement('img')
    starIcon.id = 'starIcon'
    starIcon.src = 'https://www.shareicon.net/data/256x256/2015/08/30/93083_star_512x512.png'
    starIcon.classList.add('starIcon')

    return starIcon
}



// helper func for adding buttons
const AddFavButton = (iter) => {

    let vcount;
    let streamerTarget;

    vcount = streamersDiv.children[iter].children[0].children[0].children[0].children[1].children[1];
    console.log(vcount);

    streamerTarget = streamersDiv.children[iter].children[0].children[0].children[0].children[1];
    console.log(streamerTarget);

    streamerTarget.insertBefore(NewIcon(), vcount);
    
}


// runs checks for following list on whether follows are done or not
const ExecuteFavButton = () => {

    for (let i = 0 ; i < streamersDiv.children.length; i++) {
        AddFavButton(i);
    }

}


setTimeout(() => ExecuteFavButton(), 8000);



// each following tab is located with this. map throug these
console.log( document.querySelector('[aria-label="Followed Channels"]').children[1].children)



