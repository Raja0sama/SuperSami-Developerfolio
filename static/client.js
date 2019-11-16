$( document ).ready(function() {

  $("#checkout").validate({
    rules: {
    
  billing_first_name:{  required: true  },
  billing_last_name:{  required: true  },
  billing_company:{  required: false  },
  billing_country:{  required: true  },
  billing_address_1:{  required: true  },
  billing_address_2:{  required: false  },
  billing_city:{  required: true  },
  billing_state:{  required: true  },
  billing_postcode:{  required: false  },
  billing_phone:{  required: true,digits: true  },
  billing_email:{  required: true,email:true  },
  ship_to_different_address:{  required: true  },
  shipping_first_name:{  required: true  },
  shipping_last_name:{  required: true  },
  shipping_company:{  required: true  },
  shipping_country:{  required: true  },
  shipping_address_1:{  required: true  },
  shipping_address_2:{  required: true  },
  shipping_city:{  required: true  },
  shipping_state:{  required: true  },
  shipping_postcode:{  required: true  },
  payment_method:{  required: true  }
  
    },
    messages: {
    billing_first_name:{ required: "The Field is required",  },
  billing_last_name:{ required: "The Field is required",  },
  billing_company:{ required: "The Field is required",  },
  billing_country:{ required: "The Field is required",  },
  billing_address_1:{ required: "The Field is required",  },
  billing_address_2:{ required: "The Field is required",  },
  billing_city:{ required: "The Field is required",  },
  billing_state:{ required: "The Field is required",  },
  billing_postcode:{ required: "The Field is required",  },
  billing_phone:{ required: "The Field is required",digits : "Enter Correct Number"  },
  billing_email:{ required: "The Field is required", email : "Enter The Email in Correct format"  },
  ship_to_different_address:{ required: "The Field is required",  },
  shipping_first_name:{ required: "The Field is required",  },
  shipping_last_name:{ required: "The Field is required",  },
  shipping_company:{ required: "The Field is required",  },
  shipping_country:{ required: "The Field is required",  },
  shipping_address_1:{ required: "The Field is required",  },
  shipping_address_2:{ required: "The Field is required",  },
  shipping_city:{ required: "The Field is required",  },
  shipping_state:{ required: "The Field is required",  },
  shipping_postcode:{ required: "The Field is required",  },
  payment_method:{ required: "The Field is required",  }
    }
  });
  
  
  
  
  $("#wpmc-next").css("visibility", "hidden");
  $( ".wpmc-nav-buttons" ).append( "<button id='check' class='button  current' type='button'>Next</button>" );
  
  $('#check').click(function(){
  
  $("#checkout").valid()
  $('.error').css('color','red')
  
  var a = $('.error:visible').length
  a = a / 2 
  if(a == 0){
  $('.error').remove()
  $('#check').remove()
  $('#check').unbind( "click" );
  console.log('success')
  
  
  $('#wpmc-next').click()
  $( ".wpmc-nav-buttons" ).append( "<button id='check' class='button  current' type='button'>Next</button>" );
  $('#check').click(function(){
  $("#checkout").valid()
  $('.error').css('color','red')

  var a = $('.error:visible').length
  a = a / 2 

  var checkbox = $('#ship-to-different-address-checkbox').is(':checked')
  if(checkbox == false){
    $('.error').remove()
  $('#check').remove()
  $('#check').unbind( "click" );
  console.log('double success')
  $("#wpmc-next").css("visibility", "visible");
  }
  if(a == 0){
  $('.error').remove()
  $('#check').remove()
  $('#check').unbind( "click" );
  console.log('double success')
  $("#wpmc-next").css("visibility", "visible");
  }}
  )
  }
  
  })
  
  $('#wpmc-next').click(function(){
  console.log('next')
  })
  
  
  })
