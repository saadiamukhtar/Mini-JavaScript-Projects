const container= document.querySelector('.container');
const seats= document.querySelectorAll('.row .seat:not(occupied)');
const count= document.getElementById('count');
const total= document.getElementById('total');
const movieSelect= document.getElementById('movie');
populateUI();
let ticketPrice= +movieSelect.value;

// to set selected movie and data
function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);

}
function updateSelectedCount(){
    const selectedSeats= document.querySelectorAll('.row .seat.selected');
    const seatIndexes= [...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat);
    });

    localStorage.setItem('selectedSeats', JSON.stringify(seatIndexes));

    const selectedSeatsCount= selectedSeats.length;
    count.innerText= selectedSeatsCount;
    total.innerText= selectedSeatsCount* ticketPrice;
    setMovieData(movieSelect.selectedIndex, movieSelect.value)

}
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add('selected');
        }
      });
    }

}

// movie select 
movieSelect.addEventListener('change',function(e){
 ticketPrice=+e.target.value;
 setMovieData(e.target.selectedIndex, e.target.value);
 updateSelectedCount();
});

// seat event
container.addEventListener('click', function(e){

    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }

});
updateSelectedCount();