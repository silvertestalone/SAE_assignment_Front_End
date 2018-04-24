//login provera
function UserName()
{
    var regusername=/^[A-Z][a-z]{3,15}$/;
    var username=document.getElementById("username").value;
    var Username=document.getElementById("username");

    if(regusername.test(username))
    {
            Username.style.color="green";
              Username.style.border="";

    }
    else
    {
        Username.style.color="red";

    }

}

function PassworD()
{
    var regpassword=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;
    var password=document.getElementById("password").value;
    var Password=document.getElementById("password");

     if(regpassword.test(password))
    {
            Password.style.borderColor="green";
            Password.style.border="";
    }
    else
    {

        Password.style.borderColor="red";

    }

}

function ConfirmPassworD()
{
    var regconfirmPassword=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;
    var confirmpassword=document.getElementById("confirmPassword").value;
    var Confirmpasswprd=document.getElementById("confirmPassword");

     if(regconfirmPassword.test(confirmpassword)){
        if(password==confirmpassword){


            confirmPassword.style.borderColor="green";
            confirmPassword.style.border="";


        }
}
    else {
        confirmPassword.style.borderColor="red";
    }
};

function CountrY()
{
    var regcounty=/^[A-Z][a-z]{3,15}$/;
    var country=document.getElementById("country").value;
    var Country=document.getElementById("country");

     if(regcounty.test(country))
    {
            Country.style.color="green";
            Country.style.border="";

    }
    else
    {

        Country.style.color="red";

    }
};
function CitY()
{
    var regcity=/^[A-Z][a-z]{3,15}$/;
    var city=document.getElementById("city").value;
    var City=document.getElementById("city");

     if(regcity.test(city))
    {
            City.style.color="green";
            City.style.border="";

    }
    else
    {

        City.style.color="red";}
}





var greske=[];
function Provera()
{
  greske=[];
     var regusername=/^[A-Z][a-z]{3,15}$/;
    var username=document.getElementById("username").value;
    var Username=document.getElementById("username");

    if(regusername.test(username))
    {
            Username.style.borderColor="green";

    }
    else
    {
        Username.style.borderColor="red"
        greske.push("Nije dobar username");
    }

    var regpassword=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;
    var password=document.getElementById("password").value;
    var Password=document.getElementById("password");

     if(regpassword.test(password))
    {
            Password.style.borderColor="green";

    }
    else
    {
         greske.push("Password nije dobar");
        Password.style.borderColor="red";

    }

     var regconfirmPassword=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;
    var confirmpassword=document.getElementById("confirmPassword").value;
    var Confirmpassword=document.getElementById("confirmPassword");

     if(regconfirmPassword.test(confirmpassword))
    {
            confirmPassword.style.borderColor="green";

    }
    else
    {
         greske.push("Niste potvrdili password");
        confirmPassword.style.borderColor="red";

    }
     var regcounty=/^[A-Z][a-z]{3,15}$/;
    var country=document.getElementById("country").value;
    var Country=document.getElementById("country");

     if(regcounty.test(country))
    {
            Country.style.borderColor="green";

    }
    else
    {
        greske.push("Zemlja nije dobra")
        Country.style.borderColor="red";

    }

  var regcity=/^[A-Z][a-z]{3,15}$/;
    var city=document.getElementById("city").value;
    var City=document.getElementById("city");

     if(regcity.test(city))
    {
            City.style.borderColor="green";

    }
    else
    {
        greske.push("Grad nije dobar")
        City.style.borderColor="red";}

    function check() {
        if( document.getElementById("accept").checked = false){
            greske.push("nije cekiran accept")
        }
    }

	if(greske.length != 0)
	{
        var GRESKE="";
		for(var i = 0; i < greske.length; i++)
		{
			GRESKE+=greske[i]+"\n";
		}
        alert(GRESKE);
	}
	else
	{
		alert("Uspesno ste ulogovani");
	}
  }

  function USERNAME1()
  {
      var regusername1=/^[A-Z][a-z]{3,15}$/;
      var username1=document.getElementById("username1").value;
      var username2=document.getElementById("username1");

      if(regusername1.test(username1))
      {
              username2.style.color="green";
              username2.style.border="";

      }
      else
      {
          username2.style.color="red";
      }

  }


  function PASSWORD1()
  {
      var regpassword=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;
      var password1=document.getElementById("password1").value;
      var password2=document.getElementById("password1");

       if(regpassword.test(password1))
      {
              password2.style.borderColor="green";
              password2.style.border="";
      }
      else
      {

          password2.style.borderColor="red";

      }

  }

var greske1=[];
function provera2(){
  greske1=[];
    var regusername=/^[A-Z][a-z]{3,15}$/;
    var username=document.getElementById("username1").value;
    var username1=document.getElementById("username1");

    if(regusername.test(username))
    {
            username1.style.borderColor="green";

    }
    else
    {
        username1.style.borderColor="red";
        greske1.push("username nije dobar");
    }

     var regpassword=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;
    var password1=document.getElementById("password1").value;
    var password2=document.getElementById("password1");

     if(regpassword.test(password1))
    {
            password2.style.borderColor="green";
    }
    else
    {

        password2.style.borderColor="red";
        greske1.push("password nije dobar");
    }

    if(greske1.length != 0)
	{
        var greske3="";
		for(var i = 0; i < greske1.length; i++)
		{
			greske3+=greske1[i]+"\n";
		}
        alert(greske3);
	}
	else
	{
		alert("Uspesno ste ulogovani");
	}
  };


function slide1(){
  $("#quote p:nth-child(1)").html("After visiting this site I'm new man. I advice everyone to check this up.");
  $("#quote p:nth-child(2)").html('<span style="font-weight:bold;font-style:italic;">Richard Morris</span>&nbsp&nbsp&nbsp<span style="font-style: italic;">Artist</span>')
  $(".fa-circle:nth-child(1)").addClass("active");
  $(".fa-circle:nth-child(1)").siblings().removeClass("active");
}
function slide2(){
  $("#quote p:nth-child(1)").html("Eating seed made me better boxer. I've achieved everything thanks to nature. I advice everyone to be healthy and open them selves to nature");
  $("#quote p:nth-child(2)").html('<span style="font-weight:bold;font-style:italic;">Mike Tyson</span>&nbsp&nbsp&nbsp<span style="font-style: italic;">Boxer</span>');
  $(".fa-circle:nth-child(2)").addClass("active");
  $(".fa-circle:nth-child(2)").siblings().removeClass("active");


}
function slide3(){
  $("#quote p:nth-child(1)").html("Everything is based on nature. If we don't look after it, it will destroy us. I recommend this site to all nature lovers.");
  $("#quote p:nth-child(2)").html('<span style="font-weight:bold;font-style:italic;">Ronaldinho</span>&nbsp&nbsp&nbsp<span style="font-style: italic;">Footballer</span>');
  $(".fa-circle:nth-child(3)").addClass("active");
  $(".fa-circle:nth-child(3)").siblings().removeClass("active");
}
function slide4(){
  $("#quote p:nth-child(1)").html("I have friend in my neighboarhood who i could never beat in basketball. After visiting this site, i got so many helpful advices. I'm sure i'll rek him now.");
  $("#quote p:nth-child(2)").html('<span style="font-weight:bold;font-style:italic;">Allen Iverson</span>&nbsp&nbsp&nbsp<span style="font-style: italic;">Basketball player</span>');
  $(".fa-circle:nth-child(4)").addClass("active");
  $(".fa-circle:nth-child(4)").siblings().removeClass("active");
}
function slide5(){
  $("#quote p:nth-child(1)").html("I gave ninty percent of my sallary to people who worked on special effects. If there was no them and this site, Matrix wouldn't exist");
  $("#quote p:nth-child(2)").html('<span style="font-weight:bold;font-style:italic;">Keanu Reeves</span>&nbsp&nbsp&nbsp<span style="font-style: italic;">Actor</span>');
  $(".fa-circle:nth-child(5)").addClass("active");
  $(".fa-circle:nth-child(5)").siblings().removeClass("active");
}

$(function(){

  //slider text na mejnu
  // $(".fa-circle").hover(function(){
  //   $(this).css("color","#c7ecee");
  // },
  // function(){
  //   $(this).css("color","#ed6663");
  // })

  $(".fa-circle:nth-child(1)").click(function(){
    slide1();
  })
  $(".fa-circle:nth-child(2)").click(function(){
    slide2();
  })
  $(".fa-circle:nth-child(3)").click(function(){
    slide3();
  })
  $(".fa-circle:nth-child(4)").click(function(){
    slide4();
  })
  $(".fa-circle:nth-child(5)").click(function(){
    slide5();
  })


    //sliku u indexu u sredini.
  $(".part-mid-slika").hover(function(){
    $(this).animate({opacity:"0.7"},200);
    $(this).css("shadow","3px 3px");
  },
  function(){
    $(this).stop();
    $(this).animate({opacity:"1"},200);
  })

  //download u futeru
  $("#footer-download img").hover(function(){
    $(this).animate({"margin-top":"+=1px"},500);
  },
    function(){
      $(this).animate({"margin-top":"-=1px"},500);
    })

  $("#footer-download img").click(function(){
    $("#download").html('<span id="temp" style="color:red;">Not in function.</span>');
    setTimeout(vrati, 2000);
  })
})
//download dugme u futeru, pomera se i na klik pise drugi text
function vrati(){
  $("#download").html('<span id="temp" style="color:black;">Download this application</span>');
}

//lightbox
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
