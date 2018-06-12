
var threeD = 3;
var reg = 0;
var type = [threeD, reg];

var youth = 7;
var student = 8;
var adult = 10;
var senior = 20;
var age = [youth, student, adult, senior];

var mat = 0;
var night = 2;
var time = [mat, night];

var prices = [type, age, time];

function Ticket(movie, type, time, date) {
  this.movie = movie;
  this.type = type;
  this.time = time;
  this.date = date;
}
function resetFields() {
  $("input#movie-name").val();
  $("input#ticket-type").val();
  $("input#ticket-time").val();
  $("input#ticket-date").val();
}


$("form#ticket-form").submit(function(event) {
  event.preventDefault();

  var movieinput = $("input#movie-name").val();
  var typeinput = $("input#ticket-type").val();
  var timeinput = $("input#ticket-time").val();
  var dateinput = $("input#ticket-date").val();

  var newTicket = new Ticket(movieinput, typeinput, timeinput, dateinput);

});
