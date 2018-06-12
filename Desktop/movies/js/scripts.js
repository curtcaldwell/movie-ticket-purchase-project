/*
var threeD = 3;
var reg = 0;
var movie = [threeD, reg];

var youth = 7;
var student = 8;
var adult = 10;
var senior = 20;
var type = [youth, student, adult, senior];

var mat = 0;
var night = 2;
var time = [mat, night];
var finalPrice = [];
var prices = [type, age, time];
*/

function Ticket(name, movie, type, time, date) {
  this.name = name;
  this.movie = movie;
  this.type = type;
  this.time = time;
  this.date = date;
}
Ticket.prototype.price = function () {
  if (this.movie == "Hang Over(3D +2.00)"){
    this.movie = 2;
  }
  else {
    this.movie = 0;
  }
  if (this.type == "Youth ($7.00)"){
  this.type = 7;
} else if ( this.type == "Student ($8.00)") {
  this.type = 8;
} else if (this.type == "Adult ($10.00)") {
  this.type = 10;
} else if ( this.type == "Senior ($20.00)") {
  this.type = 20;
}
  if (this.time == "12:30PM"){
    this.time = 0;
  } else {
    this.time = 2;
  }
  return "your ticket price is:$" + parseInt(this.movie + this.type + this.time) + ".00";
}


function resetFields() {
  $("input#name").val();
  $("select#movie-name").val();
  $("select#ticket-type").val();
  $("select#ticket-time").val();
  $("input#ticket-date").val();
}

$(function () {
var total = 0;
$("form#ticket-form").submit(function(event) {
  event.preventDefault();

  var nameinput = $("input#name").val();
  var movieinput = $("select#movie-name").val();
  var typeinput = $("select#ticket-type").val();
  var timeinput = $("select#ticket-time").val();
  var dateinput = $("input#ticket-date").val();

  var newTicket = new Ticket(nameinput, movieinput, typeinput, timeinput, dateinput)

$("ul#purchased").append("<li><span class='ticket'>" + newTicket.name + "</span></li>")

$(".ticket").last().click(function() {
  $("#show-ticket").show();
  $("show-ticket h2").text(newTicket.name);
//  $(".mname").text(newTicket.name);
  $(".mchoice").text(newTicket.movie);
  $(".mtype").text(newTicket.price());
  $(".mtime").text(newTicket.time);
  $(".mdate").text(newTicket.date);
});
resetFields();

});
});
