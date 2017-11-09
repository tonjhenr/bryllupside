$(function(){
  
  $('.form .input-group input, .form .input-group textarea').focusout(function(){
    
    var text_val = $(this).val();
    
    if(text_val === "") {
      
      $(this).removeClass('has-value');
      
    } else {
      
      $(this).addClass('has-value');   
    }
  });  
});

$(document).ready(function(){
    $('select').change(function(){
        if($('select.answer.ant option:selected').text() == "2"){
        $('.input-group.add').remove();
        $('html select.answer.ant').after("<div class='input-group add'><br><br><input type='text' required></input><label>Navn på ledsager</label></div>");
		}
        else if($('select.answer.ant option:selected').text() == "3"){
        $('.input-group.add').remove();
        $('html select.answer.ant').after("<div class='input-group add'><br><br><input type='text' required></input><label>Navn på ledsager</label></div>");
		$('html select.answer.ant').after("<div class='input-group add'><br><br><input type='text' required></input><label>Navn på ledsager</label></div>");
        } 
        else if($('select.answer.ant option:selected').text() == "4"){
        $('.input-group.add').remove();
        $('html select.answer.ant').after("<div class='input-group add'><br><br><input type='text' required></input><label>Navn på ledsager</label></div>");
		$('html select.answer.ant').after("<div class='input-group add'><br><br><input type='text' required></input><label>Navn på ledsager</label></div>");
		$('html select.answer.ant').after("<div class='input-group add'><br><br><input type='text' required></input><label>Navn på ledsager</label></div>");
        } 
        else{
        $('.input-group.add').remove();
        }
    })
});

$('.example-5 .send').click(function(){
  $(this).parents('.email').addClass('is-sent');
  setTimeout(function(){
    $('.email').removeClass('is-sent');  
  }, 1800); 
});