$(function(){

  $("#typed").typed({
    strings: ["Welcome to RevX", "Check your website", "Technology for all", "TeamX IT Solutions"],
    typeSpeed: 100,
    callback: function(){
      shift();
    }
  });

});
function shift(){
    $(".head-wrap").addClass("shift-text");
    terminalHeight();
}

function terminalHeight(){
    var termHeight = $(".terminal-height");
    var value = termHeight.text();
    value = parseInt(value);
    setTimeout(function(){
        if (value > 10){
            value = value-1;
            this.txtValue = value.toString();
            termHeight.text(this.txtValue);
            self.terminalHeight();
        }
        else{
            clearTimeout();
        }
    }, 10);
}
