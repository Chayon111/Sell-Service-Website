function gv_price_multiply(value) {
  const amount = 4.5 * value; //=========== If you change GV price please change here
  document.getElementById("gv_show_amount").value = "$" + amount;
}
function Gmail_price_multiply(value) {
  const anount = 0.8 * value; //=========== If you change Gmail price please change here
  document.getElementById("Gmail_show_amount").value = "$" + anount;
}
function text_price_multiply(value) {
  const anount = 3.5 * value; //=========== If you change text verify number price please change here
  document.getElementById("text_show_amount").value = "$" + anount;
}
function voice_price_multiply(value) {
  const anount = 3.2 * value; //=========== If you change voice verify number price please change here
  document.getElementById("voice_show_amount").value = "$" + anount;
}

//========================================== If you change your payment information please change here

var USDT_wallet =
  "USDT_Wallet :~~    bc1saq8ystv7bjymk76239kldyh5hr87gryqwe4mcgq  'Network : TRC20' ";
var BTC_wallet = " BTC_Wallet :~~~    1CnYTFYqaVetrFGk7Aj8n4BFg9xJtBFA3";
var Binance_email_and_ID =
  " Email :~~~   example@gmail.com   _________  ID : 532654";
//===============================================================================================

//========================================== If you change your payment Prove please change here
var email = " Email :~~  example@gmail.com ";
var wastapp = " Wastapp :~~ +88 01932654326 ";
var teligram = " Teligram :~~ @example ";
//============================================= gv_openwindow() ==================================================

function gv_openwindow() {
  var newwindow = window.open("", "", "width=500, height=550");
  var input_gv = document.getElementById("input_gv").value;
  var gv_show_amount = document.getElementById("gv_show_amount").value;

  newwindow.document.write("<h1 style='color:purple;'>Your invoice</h1>");
  newwindow.document.write(
    "<h3 style='display:inline; color:purple;'>Total GV : </h3>" + input_gv
  );
  newwindow.document.write(
    "<br><h3 style='display:inline; color:purple;'>Total Amount : </h3>" +
      gv_show_amount +
      "<br>"
  );

  newwindow.document.write(
    "<br><h3 style='display:inline; color:purple;'>Our Wallet address : </h3><br>" +
      USDT_wallet +
      "<br>" +
      BTC_wallet
  );
  newwindow.document.write(
    "<br><h3 style='display:inline; color:purple;'>Our Binance Email And ID : </h3><br>" +
      Binance_email_and_ID +
      "<br>"
  );
  newwindow.document.write(
    "<br><h2 style='display:inline; color:purple;'>Please send </h2>" +
      gv_show_amount +
      " " +
      "<h2 style='display:inline; color:purple;' >to any payment method </h2> <br><h1 style='display:inline; color:red;' >Attention!</h1> <h3 style='display:inline; color:red;' >Make sure you use the correct address </h3><br>"
  );
  newwindow.document.write(
    "<br><h3 style='display:inline; color:purple;'>Send prove of your payment screenshoot here : </h3><br>" +
      email +
      "<br>" +
      wastapp +
      "<br>" +
      teligram +
      "<br>"
  );
  newwindow.document.write(
    "<br><h2 style='display:inline; color:brown;'>NOTE : </h2><h3 style='display:inline; color:brown;'>Which via you send payment prove you got GV here</h3><br>"
  );
}
// ============================================== gmail_openwindow() ==================================================================
function gmail_openwindow() {
  var newwindow = window.open("", "", "width=500, height=550");
  var input = document.getElementById("input_gmail").value;
  var show_amount = document.getElementById("Gmail_show_amount").value;

  newwindow.document.write("<h1 style='color:purple;'>Your invoice</h1>");
  newwindow.document.write(
    "<h3 style='display:inline; color:purple;'>Total GV : </h3>" + input
  );
  newwindow.document.write(
    "<br><h3 style='display:inline; color:purple;'>Total Amount : </h3>" +
      show_amount +
      "<br>"
  );

  newwindow.document.write(
    "<br><h3 style='display:inline; color:purple;'>Our Wallet address : </h3><br>" +
      USDT_wallet +
      "<br>" +
      BTC_wallet
  );
  newwindow.document.write(
    "<br><h3 style='display:inline; color:purple;'>Our Binance Email And ID : </h3><br>" +
      Binance_email_and_ID +
      "<br>"
  );
  newwindow.document.write(
    "<br><h2 style='display:inline; color:purple;'>Please send </h2>" +
      show_amount +
      " " +
      "<h2 style='display:inline; color:purple;' >to any payment method </h2> <br><h1 style='display:inline; color:red;' >Attention!</h1> <h3 style='display:inline; color:red;' >Make sure you use the correct address </h3><br>"
  );
  newwindow.document.write(
    "<br><h3 style='display:inline; color:purple;'>Send prove of your payment screenshoot here : </h3><br>" +
      email +
      "<br>" +
      wastapp +
      "<br>" +
      teligram +
      "<br>"
  );
  newwindow.document.write(
    "<br><h2 style='display:inline; color:brown;'>NOTE : </h2><h3 style='display:inline; color:brown;'>Which via you send payment prove you got GV here</h3><br>"
  );
}
// =================================================== text_openwindow()  =============================================================
function text_openwindow() {
  var newwindow = window.open("", "", "width=500, height=550");
  var input = document.getElementById("input_text").value;
  var show_amount = document.getElementById("text_show_amount").value;

  newwindow.document.write("<h1 style='color:purple;'>Your invoice</h1>");
  newwindow.document.write(
    "<h3 style='display:inline; color:purple;'>Total GV : </h3>" + input
  );
  newwindow.document.write(
    "<br><h3 style='display:inline; color:purple;'>Total Amount : </h3>" +
      show_amount +
      "<br>"
  );

  newwindow.document.write(
    "<br><h3 style='display:inline; color:purple;'>Our Wallet address : </h3><br>" +
      USDT_wallet +
      "<br>" +
      BTC_wallet
  );
  newwindow.document.write(
    "<br><h3 style='display:inline; color:purple;'>Our Binance Email And ID : </h3><br>" +
      Binance_email_and_ID +
      "<br>"
  );
  newwindow.document.write(
    "<br><h2 style='display:inline; color:purple;'>Please send </h2>" +
      show_amount +
      " " +
      "<h2 style='display:inline; color:purple;' >to any payment method </h2> <br><h1 style='display:inline; color:red;' >Attention!</h1> <h3 style='display:inline; color:red;' >Make sure you use the correct address </h3><br>"
  );
  newwindow.document.write(
    "<br><h3 style='display:inline; color:purple;'>Send prove of your payment screenshoot here : </h3><br>" +
      email +
      "<br>" +
      wastapp +
      "<br>" +
      teligram +
      "<br>"
  );
  newwindow.document.write(
    "<br><h2 style='display:inline; color:brown;'>NOTE : </h2><h3 style='display:inline; color:brown;'>Which via you send payment prove you got GV here</h3><br>"
  );
}
// ========================================================== Voice_openwindow() ======================================================
function Voice_openwindow() {
  var newwindow = window.open("", "", "width=500, height=550");
  var input = document.getElementById("input_voice").value;
  var show_amount = document.getElementById("voice_show_amount").value;

  newwindow.document.write("<h1 style='color:purple;'>Your invoice</h1>");
  newwindow.document.write(
    "<h3 style='display:inline; color:purple;'>Total GV : </h3>" + input
  );
  newwindow.document.write(
    "<br><h3 style='display:inline; color:purple;'>Total Amount : </h3>" +
      show_amount +
      "<br>"
  );

  newwindow.document.write(
    "<br><h3 style='display:inline; color:purple;'>Our Wallet address : </h3><br>" +
      USDT_wallet +
      "<br>" +
      BTC_wallet
  );
  newwindow.document.write(
    "<br><h3 style='display:inline; color:purple;'>Our Binance Email And ID : </h3><br>" +
      Binance_email_and_ID +
      "<br>"
  );
  newwindow.document.write(
    "<br><h2 style='display:inline; color:purple;'>Please send </h2>" +
      show_amount +
      " " +
      "<h2 style='display:inline; color:purple;' >to any payment method </h2> <br><h1 style='display:inline; color:red;' >Attention!</h1> <h3 style='display:inline; color:red;' >Make sure you use the correct address </h3><br>"
  );
  newwindow.document.write(
    "<br><h3 style='display:inline; color:purple;'>Send prove of your payment screenshoot here : </h3><br>" +
      email +
      "<br>" +
      wastapp +
      "<br>" +
      teligram +
      "<br>"
  );
  newwindow.document.write(
    "<br><h2 style='display:inline; color:brown;'>NOTE : </h2><h3 style='display:inline; color:brown;'>Which via you send payment prove you got GV here</h3><br>"
  );
}
// ================================================================================================================
