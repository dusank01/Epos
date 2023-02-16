$(document).ready(function(){
  $(".burger").mouseup(function(){
    console.log("test")
    $("div.sidebar").toggleClass("showme");
  });
  });


  $(document).ready(function(){
    $("#contactpic").mouseup(function(){
     alert("\nKontakt telefon: 061/111-11-11 \n\nServis podrška: 061/111-11-23")
    });
    });

    $(document).ready(function(){
      $("#address").click(function(){
        console.log("test")
        $(".mapa").toggleClass("mapashowme");
        
      });
      });


