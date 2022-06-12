/*global $*/
$(document).ready(function(){
  $('input').keyup(checkChange(this));
});

function checkChange(e){
  var v;
  var old = v=$(e).find('input').val();
  let serchText;
  return function(){
    v=$(e).find('input').val();
    if(old != v){
      $("tr").addClass("invisi");
      old = v;
      v = hiraToKata(v);
      $("a:contains(" + v + ")").parents("tr").removeClass("invisi");
    }
  };
}

function reSearch(hoge){
  for(let i=0;i<10;i++){
    
  }
}

function hiraToKata(str) {
  return str.replace(/[\u3041-\u3096]/g, ch =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  );
}

function dummyAlert(){
  alert("DUMMY");
}