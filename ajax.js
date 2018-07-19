document.addEventListener("DOMContentLoaded", function() {

  var step1And2 = document.getElementById('b1');
  step1And2.addEventListener('click', function(e){
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/',
      method:'GET',
    }).done(function() {
        console.log('call sucssesful');
    })
  })
  var step3456 = document.getElementById('pingPongButtom');
  step3456.addEventListener('click', function(e) {
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/pong',
      method:'GET',

    }).done(function(responseData) {
        var step3456Section = document.getElementById("step3456")
        var  pTag  = document.createElement('p');
        var textnode = document.createTextNode(responseData);
          pTag.appendChild(textnode)
          step3456Section.appendChild(pTag)
    }).fail(function(responseData) {
      var step3456Section2 = document.getElementById("step3456")
      var  ptag2 = document.createElement('p');
      var  textnode2 = document.createTextNode('something went wrong')
      ptag2.appendChild(textnode2);
      step3456Section2.appendChild(ptag2);
    }).always(function() {
      console.log('the request is done');
    })
  })

  var  countRequest = document.getElementById('countButton');
  countRequest.addEventListener('click', function(e){
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/count',
      method:'GET',
    }).done(function(responseData) {
      //grab the <element> tag
      var  step7Section = document.getElementById('step7');
      //create a tag.
      var  pTag = document.createElement('p');
      //translate the response to a text.
      var  textnode = document.createTextNode(responseData);
      // append the text to the variable into the <p> tag.
      pTag.appendChild(textnode);
      // append the <p> tag into the <section> tag .
      step7Section.appendChild(pTag);
    }).fail(function(responseData) {
      var step7Section = document.getElementById('step7');
      var pTag = document.createElement('p');
      var textnode = document.createTextNode('something went wrong');
      pTag.appendChild(textnode);
      step7Section.appendChild(pTag);
    })
  })
  var timeButton = document.getElementById('timeButton')
  timeButton.addEventListener('click', function(e){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method:'GET',
      data: {timezone: 'Pacific/Honolulu'},
      dataType:'text',
      }).done(function(responseData) {
      var step8Section = document.getElementById('step8');
      var pTag = document.createElement('p');
      var textnode = document.createTextNode(responseData);
      pTag.appendChild(textnode);
      step8Section.appendChild(pTag);
      })
  })
    var carButtom = document.getElementById('carButtom');
    carButtom.addEventListener('click', function(){
      $.ajax({
        url:'http://first-ajax-api.herokuapp.com/a_car',
        method:'GET',
        dataType: 'html',
      }).done(function(responseData) {
        console.log(responseData);
        var step9Section = document.getElementById('step9');
        var uList = document.createElement('ul');
          uList.innerHTML = responseData;
            uList.setAttribute('id', ' car')
            step9Section.appendChild(uList)
      }).fail(function(responseData) {
        var step9Section = document.getElementById('step9');
        var uList = document.createElement('ul');
          uList = document.createTextNode('something went worng');
          step9Section.appendChild(uList);
      })

    })
});
