var list = [];

function addToList(){
	var listItem = $('#newitem').val(); 
	var pushToArray = list.push(listItem);
	pushToArray;
	$('#list').prepend('<li class="new"><div>' + list[pushToArray - 1] + "<img class='close' src='close.png'></img></div></li>").children(':first').hide().fadeIn(1000)

};

function removeFromList(){

} 

$(document).ready(function(){
  	
  	$('#newitem').keydown(function(event){    
    if(event.keyCode==13){
       $('button').trigger('click');
    }
    $('input').focus();
});


  	$('button').click(function(){
    	addToList(); 
    	$('#newitem').val("");
    
});

});


  $(document).on('click', 'li', function(){
  	$(this).toggleClass("done")

  });
  $(document).on('click', '.close', function(){
  	$(this).parent().parent().remove()


  });