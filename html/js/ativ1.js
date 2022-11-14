$(document).ready(function (){
    var select1='';
    var select2='';
    var selid1='';
    var selid2='';
    conta=0;
    acerto=0;
     $('#proximo2 ').hide();
    
     $("#fim").hide();
     $('#ativ3').hide();
     $('#ativ2').hide();
     $('#proximo3 ').hide();
/*atividadeum botões*/
    $(".imagat1").click(function(){
        $('.imagat1').removeClass('bordaazul');
        
        
        select1=$(this).attr('value');
        selid1=$(this).attr('id');
       id="#"+selid2;
   
        if(selid2!=''){
              if(selid2==select1){
                $(this).removeClass('bordaazul');
                $(this).addClass('bordaverde');
                $(id).removeClass('bordaazul');
                $(id).addClass('bordaverde');
                $(this).removeAttr('id');
                $(id).removeAttr('id');
                selid1='';
              selid2='';
              conta=conta+1;
              acerto=acerto+1;
              }else{
                $(this).removeClass('bordaazul');
                $(this).addClass('bordavermelha');
                $(id).removeClass('bordaazul');
                $(id).addClass('bordavermelha');
                $(this).removeAttr('id');
                $(id).removeAttr('id');
                selid1='';
              selid2='';
              conta=conta+1;
              }
        
         
            }else{
                $(this).addClass('bordaazul');
            }
       
        }
    
        
    );

   $(".imagat2").click(function(){
    
    $('.imagat2').removeClass('bordaazul');
            $(this).addClass('bordaazul');
        
        select2=$(this).attr('value');
        selid2=$(this).attr('id');
        var id="#"+selid1;
   
        if(selid1!=''){
              if(selid1==select2){
                $(this).removeClass('bordaazul');
                $(this).addClass('bordaverde');
                $(id).removeClass('bordaazul');
                $(id).addClass('bordaverde');
                $(this).removeAttr('id');
                $(id).removeAttr('id');
                selid1='';
              selid2='';
              conta=conta+1;
              acerto=acerto+1;

              }else{
                $(this).removeClass('bordaazul');
                $(this).addClass('bordavermelha');
                $(id).removeClass('bordaazul');
                $(id).addClass('bordavermelha');
                $(this).removeAttr('id');
                $(id).removeAttr('id');
                selid1='';
              selid2='';
              conta=conta+1;
              }
              
        }else{
            
            
        }
        
    }
    
   );
   $(".imagat2").click(function(){
  if(conta>=5){
    $('#proximo2').show();
  }
});
$(".imagat1").click(function(){
  if(conta>=5){
    $('#proximo2').show();
  }
});



/*botão que vai par atividade2*/
  $('#proximo2').click(function(){
    $('#ativ1').hide();
    $('#ativ2').show();
  })




  /*atividade 2*/



var resp1='';
var resp2='';
var resp3='';
var resp4='';
$('.botresp1').click(function(){
  $('.botresp1').css("background-color","gray")
  $(this).css("background-color","blue");
  resp1=$(this).attr('id');
})
$('.botresp2').click(function(){
  $('.botresp2').css("background-color","gray")
  $(this).css("background-color","blue");
  resp2=$(this).attr('id');
});
$('.botresp3').click(function(){
  $('.botresp3').css("background-color","gray")
  $(this).css("background-color","blue");
  resp3=$(this).attr('id');
});
$('.botresp4').click(function(){
  $('.botresp4').css("background-color","gray")
  $(this).css("background-color","blue");
  resp4=$(this).attr('id');
});
/*botão confirma*/
$('#confirma').click(function(){
if(resp1!='' && resp2!='' && resp3!='' && resp4!=''){
  if(resp1=='1'){
    
    $('#1').css('background-color','green');
    acerto=acerto+1;
  }else{
    var id='#'+resp1;
    $(id).css('background-color','red');
  }
  if(resp2=='2'){
    acerto=acerto+1;
    $('#2').css('background-color','green');
  }else{
    var id='#'+resp2;
    $(id).css('background-color','red');
  }
  if(resp3=='3'){
    acerto=acerto+1;
    $('#3').css('background-color','green');
  }
    else{
    var id='#'+resp3;
    $(id).css('background-color','red');
  }if(resp4=='4'){
    acerto=acerto+1;
    $('#4').css('background-color','green');
  }else{
    var id='#'+resp4;
    $(id).css('background-color','red');
  }
  $('#proximo3').show();
 }
});
/*botão que vai para a atividade 3 */
$('#proximo3').click(function(){
  $('#ativ2').hide();
  $('#ativ3').show();
  $('#terminar').hide();
})


/* ATIVIDADE 3*/
var respos1='';
var respo2='';
var respos3='';

$('.botaoresp1').click(function(){
  $('.botaoresp1').css("background-color","gray")
  $(this).css("background-color","blue");
  respos1=$(this).attr('id');

});
$('.botaoresp2').click(function(){
  $('.botaoresp2').css("background-color","gray")
  $(this).css("background-color","blue");
  respos2=$(this).attr('id');

});
$('.botaoresp3').click(function(){
  $('.botaoresp3').css("background-color","gray")
  $(this).css("background-color","blue");
  respos3=$(this).attr('id');

});

$('#confirmar2').click(function(){
  if(respos1!='' && respos2!='' && respos3!=''){
    if(respos1=='certo1'){
      acerto=acerto+1;
      $('#certo1').css('background-color','green');
    }else{
      var id='#'+respos1;
      $(id).css('background-color','red');
    }
    if(respos2=='certo2'){
      acerto=acerto+1;
      $('#certo2').css('background-color','green');
    }else{
      var id='#'+respos2;
      $(id).css('background-color','red');
    }
    if(respos3=='certo3'){
      acerto=acerto+1;
      $('#certo3').css('background-color','green');
    }
      else{
      var id='#'+respos3;
      $(id).css('background-color','red');
    }
    $('#terminar').show();
  
   }
  });

  $('#terminar').click(function(){
     $('#ativ3').hide();
     $("#fim").show();
     $('#acertos').append("<b>"+acerto+"</b>");
  });

 









});