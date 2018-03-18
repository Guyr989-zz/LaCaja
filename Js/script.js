// Go to top of the page ( fast/slow )
function go_up(){
$('html, body').animate({ scrollTop: 0 }, 'slow');
};

window.onload = function(){
// Sends Email to demmo@demo.demo with a massage in the email body.
  $(function () {
        $('.email').click(function (event) {
          var email = 'demo@demo.demo';
          var subject = 'Test';
          var emailBody = 'Hi Sample';
          var attach = 'path';
          document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody+
              "?attach="+attach;
              alert("An email was sent to demo@demo.demo");
        });
      });

// show up_arrow div after 500px
  $(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 500) {
    $('#up_arrow').fadeIn("fast");
  }else {
$('#up_arrow').fadeOut(100);
  }
});
}

// open/close chatBox div. param in fade toggle should be: "slow"/"fast"/milliseconds
function open_chat(){
  $("#chatBox").fadeToggle(300);
start_timer();
  $('.chat').css('pointer-events','none');
  }
  // timer start
  var counter = 11;


function start_timer(){
  setInterval("timer()", 1000);
}

function timer(){
counter--;
$("#count_down").text(counter);
if (counter == 0){
$('#chatBox').fadeOut('slow');
counter = 11;
};

}
