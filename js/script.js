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


    function myFunction() {
      let ime = document.getElementById("imeprez").value;
      let mail=document.getElementById("mail").value;
      let telefon=document.getElementById("telefon").value;
      let model=document.getElementById("model").value;
      let napomena=document.getElementById("napomena").value;
      if (ime=="") {
        alert("Unesite ime i prezime");
      } 
      else if (mail=="") {
        alert("Unesite imejl");
      } 
      else if (telefon=="") {
        alert("Unesite telefon");
      } 
      else if(isNaN(telefon)){
        alert("Nepravilan unos telefona");
      }
      else if (model=="") {
        alert("Unesite model");
      } 
      else if (napomena=="") {
        alert("Unesite napomenu");
      } 
      else{
      alert("\nIme prezime:" + ime + "\nImejl:" + mail + "\nTelefon:" + telefon + "\nModel:" + model + "\nVaš problem:\n" + napomena + "\n\nProverite unete podatke!");
      alert("Vaša kontakt forma je primljena. Očekujte odgovor u najkraćem roku!\nHvala na ukazanom poverenju")
      }
      document.getElementById("imeprez").value="";
      document.getElementById("mail").value="";
      document.getElementById("telefon").value="";
      document.getElementById("model").value="";
      document.getElementById("napomena").value="";
      
    }


  



  
