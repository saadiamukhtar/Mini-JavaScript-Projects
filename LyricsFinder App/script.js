const form= document.getElementById('form');
const search= document.getElementById('search');
const result= document.getElementById('result');
const more= document.getElementById('more');


const apiUrl= 'https://api.lyrics.ovh'


// function searchSongs(term){
//     fetch(`${apiUrl}/suggest/${term}`)
//     .then(response => response.json())
//     .then(data =>{
//         console.log(data);
//     })
// }
async function searchSongs(term){
const res= await fetch(`${apiUrl}/suggest/${term}`);
const data= await res.json();
showData(data);
}

// show data
function showData(data){
    // let output="";
    // data.data.forEach(song =>{
    //     output+= `
    //     <li> 
    //     <span><strong> ${song.artist.name}</strong> -${song.title}</span>
    //     <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get lyrics</button>
    //     </li>
    //     `;
    // });
    // result.innerHTML=`<ul class="songs">
    // ${output}
    // </ul>
    // `; 
result.innerHTML=`
<ul class= "songs">
${data.data.map(
    song=>  ` <li> 
    <span><strong> ${song.artist.name}</strong> -${song.title}</span>
    <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get lyrics</button>
    </li>`
    ).join('')}
    </ul>


`;
if(data.prev || data.next){
    more.innerHTML=`
    
    ${
        data.prev ? `<button class="btn" onclick="getMoreSongs ('${data.prev}')" >Prev</button>`: ''
    }

    ${
        data.next ? `<button class="btn" onclick="getMoreSongs ('${data.next}')">Next</button>`: ''
    }
    
    `;
} else{
    more.innerHTML='';
}
 

}

    //Get prev and next songs
    async  function getMoreSongs(url){
        const res= await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
        const data= await res.json();
        }

form.addEventListener('submit', e=>{
    e.preventDefault();
    const searchTerm= search.value.trim();
   if(!searchTerm){
    alert("Please type in the search box");
   } 
   else{

    searchSongs(searchTerm);
}

});

// async function getLyrics(artist,songTitle){
//     const res= await fetch(`${apiUrl}/v1/${artist}/${songTitle}`);
//     const data= await res.json();
//     console.log(data);
//     if (data.error) {
//         result.innerHTML = data.error;
//    } else {
//         const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

//         result.innerHTML = `
//             <h2><strong>${artist}</strong> - ${songTitle}</h2>
//             <span>${lyrics}</span>
//         `;
//   }

//   more.innerHTML = '';

// }
async function getLyrics(artist, songTitle) {
    const res = await fetch(`${apiUrl}/v1/${artist}/${songTitle}`);
    const data = await res.json();
  
    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
  
    result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
    <span>${lyrics}</span>`;
     if (data.error) {
          result.innerHTML = data.error;
     } else {
          const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
  
          result.innerHTML = `
              <h2><strong>${artist}</strong> - ${songTitle}</h2>
              <span>${lyrics}</span>
          `;
    }
  
    more.innerHTML = '';
  }

// Get Lyrics button click
result.addEventListener('click', e =>{
    // console.log(e.target);
    const clickedEl= e.target;
    if(clickedEl.tagName==='BUTTON'){
        const artist= clickedEl.getAttribute('data-artist');
        const songTitle= clickedEl.getAttribute('data-songtitle');
        console.log(artist, songTitle)
        getLyrics(artist,songTitle);

       
    }
})