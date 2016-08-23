// BUSINESS LOGIC
function Account(usersName, initial){
  this.usersName = usersName;
  this.initial = initial;
  this.balance = 0;
}

var newAccount = new Account("", 0, 0, 0);

Account.prototype.calculateTotal = function (deposit, withdraw) {
  this.balance = this.balance + deposit - withdraw;
};

// USER INTERFACE LOGIC

$(function() {
 $(".registerAccount").submit(function(event) {
 event.preventDefault();
 var usersName = $("#usersName").val();
 var initial = parseInt($("#initial").val());

 newAccount = new Account(usersName, initial, 0, 0);

 //$("ul#accountList").append("<li><span class='account'>" + newAccount.usersName + "</span></li>");

 $("#accountHolder").text(usersName);

 $("#balance").text(initial);
 newAccount.balance = initial;

 $("#usersName").val("");
 $("#initial").val("");

  });

$(".accountDetails").submit(function(event) {
  event.preventDefault();
  var deposit = parseInt($("#deposit").val());
  var withdraw = parseInt($("#withdraw").val());

  newAccount.calculateTotal(deposit, withdraw);

  alert(newAccount.balance);

  $("#deposit").val("0");
  $("#withdraw").val("0");

  $("#balance").text(newAccount.balance);
  });
});
