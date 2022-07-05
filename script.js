let SaveBtn1 = document.getElementById('09')
let SaveBtn2 =  document.getElementById('10')
let SaveBtn3 = document.getElementById('11')
let SaveBtn4 =  document.getElementById('12')
let SaveBtn5 = document.getElementById('13')
let SaveBtn6 =  document.getElementById('14')
let SaveBtn7 = document.getElementById('15')
let SaveBtn8 =  document.getElementById('16')
let SaveBtn9 = document.getElementById('17')

let textEl =document.querySelector('.description');

//Save inputs to local storage

SaveBtn1.addEventListener('click', (e) => {
   localStorage.setItem('h9', document.getElementById('hour9').value);
})
SaveBtn2.addEventListener('click', (e) => {
    localStorage.setItem('h10', document.getElementById('hour10').value);
 })
 SaveBtn3.addEventListener('click', (e) => {
    localStorage.setItem('h11', document.getElementById('hour11').value);
 })
 SaveBtn4.addEventListener('click', (e) => {
    localStorage.setItem('h12', document.getElementById('hour12').value);
 })
 SaveBtn5.addEventListener('click', (e) => {
    localStorage.setItem('h13', document.getElementById('hour13').value);
 })
 SaveBtn6.addEventListener('click', (e) => {
    localStorage.setItem('h14', document.getElementById('hour14').value);
 })
 SaveBtn7.addEventListener('click', (e) => {
    localStorage.setItem('h15', document.getElementById('hour15').value);
 })
 SaveBtn8.addEventListener('click', (e) => {
    localStorage.setItem('h16', document.getElementById('hour16').value);
 })
 SaveBtn9.addEventListener('click', (e) => {
    localStorage.setItem('h17', document.getElementById('hour17').value);
 })



//set date and time 
$(document).ready(function(){
var currentDayEl = moment();
$("#currentDay").text(currentDayEl.format("dddd MMM Do, YYYY hh:mm"))})




//time color block
let presentHour = moment().hour();

$('.time-block').each( function(){
    let blockHour = parseInt($(this).attr("id"));
    if (blockHour < presentHour){
       $(this).addClass("past");
    } else if (blockHour === presentHour) {
        $(this).addClass('present');
        $(this).removeClass("past");
    } else { $(this).addClass('future');
        $(this).removeClass('present');
        $(this).removeClass('past');
}
    })

    

