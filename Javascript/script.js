function started()
{
    var mail=document.getElementById('start').value;
    var signout=document.getElementById('loginandout');
    var a=signout.innerHTML;

    var mail2=document.getElementById('start2').value;
    if(mail=="kunal@gmail.com" ||  mail2=="kunal@gmail.com" )
    {
        if(a=="Sign Out")
        {
            window.location.href="Home.html";

        }
        else
        {
            alert("Please Sign In to your Account");
        }
    }
    else
    {
        alert("Invalid Email");
    }
}

function details1()
{
    var q1=document.querySelectorAll('.q1');
    var h=document.getElementById('hq1');
    var s=document.getElementById('plus1');
    a=s.innerHTML;
    if(a=="+"){
         s.innerHTML='-';
        h.style.display='';
    }
    else{
        h.style.display='none';
        s.innerHTML='+';
    }  
}

function details2(){
    var q2=document.querySelectorAll('.q2');
    var h2=document.getElementById('hq2');
    var s2=document.getElementById('plus2');
    a2=s2.innerHTML;
    if(a2=="+"){
         s2.innerHTML='-';
        h2.style.display='';
    }
    else{
        h2.style.display='none';
        s2.innerHTML='+';
    }  
}

function details3(){
    var q3=document.querySelectorAll('.q3');
    var h3=document.getElementById('hq3');
    var s3=document.getElementById('plus3');
    a3=s3.innerHTML;
    if(a3=="+"){
         s3.innerHTML='-';
        h3.style.display='';
    }
    else{
        h3.style.display='none';
        s3.innerHTML='+';
    }  
}
function details4(){
    var q4=document.querySelectorAll('.q4');
    var h4=document.getElementById('hq4');
    var s4=document.getElementById('plus4');
    a4=s4.innerHTML;
    if(a4=="+"){
         s4.innerHTML='-';
        h4.style.display='';
    }
    else{
        h4.style.display='none';
        s4.innerHTML='+';
    }  
}

function details5(){
    var q5=document.querySelectorAll('.q5');
    var h5=document.getElementById('hq5');
    var s5=document.getElementById('plus5');
    a5=s5.innerHTML;
    if(a5=="+"){
         s5.innerHTML='-';
        h5.style.display='';
    }
    else{
        h5.style.display='none';
        s5.innerHTML='+';
    }  
}back
function details6(){
    var q6=document.querySelectorAll('.q6');
    var h6=document.getElementById('hq6');
    var s6=document.getElementById('plus6');
    a6=s6.innerHTML;
    if(a6=="+"){
         s6.innerHTML='-';
        h6.style.display='';
    }
    else{
        h6.style.display='none';
        s6.innerHTML='+';
    }  
}
//redirect to sign in page

// function login()
// {
//     window.location.href="login.html";
// }


//login succesfully (login submit button)
function login()
{
    var signout=document.getElementById('loginandout');
    var a=signout.innerHTML;
    var cont=document.getElementById('signinpage');
    if(a=="Sign In")
    {
        cont.style.display='';
    }
    else if(a=="Sign Out")
    {
        signout.innerHTML="Sign In";
    }

}
function checkdetails()
{
    var uname=document.getElementById('username').value;
    var password=document.getElementById('pass').value;
    var cont=document.getElementById('signinpage');
    var signout=document.getElementById('loginandout');
    
    if(uname=="kunal" && password==1111)
    {
        cont.style.display='none';
        signout.innerHTML="Sign Out";

    }
    else
    {
        alert("Invalid Data");
    }

    
}

function logpagedisable()
{
    var cont=document.getElementById('signinpage');
    cont.style.display='none';

}
// login end
    
function back()
{
    window.location.href="Home.html";
    
}

function home()
{
    window.location.href="Home.html";
    
}







function exp()
{
    
    var hamburger=document.getElementById('nav');
    var btn=document.getElementById('ex');
    var sig=btn.innerHTML;
    if(sig=="...")
    {

        hamburger.style.display='';
        btn.innerHTML=" x";
    }
    else
    {
        hamburger.style.display='none';
        btn.innerHTML="...";
    }
   
}

function showpop()
{
    window.location.href="popular.html"
    
}

function showcom()
{
    window.location.href="Comedy.html"
    
}

//search series
const search = () =>{
    const searchbox= document.getElementById('wanttosearch').value.toUpperCase();
    const storeitems = document.getElementById('slide');
    const product=document.querySelectorAll('.item');
    const storecomedy = document.getElementById('comedyitems');
    const comedyproduct=document.querySelectorAll('.comedyseries');
    const pname=document.getElementsByTagName('h5');
    
    for(var i=0;i<pname.length;i++)
    {
        let match=product[i].getElementsByTagName('h5')[0];
        if(match)
        {
            let textvalue=match.textContext || match.innerHTML;

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display='';

            }
            else{
                product[i].style.display='none';
            }
        }



        let match2=comedyproduct[i].getElementsByTagName('h5')[0];
        if(match2)
        {
            let textvalue2=match2.textContext || match2.innerHTML;

            if(textvalue2.toUpperCase().indexOf(searchbox) > -1){
                comedyproduct[i].style.display='';
                
            }
            else{
                comedyproduct[i].style.display='none';
            }
        }
    }


    
}

// banner
var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    // Javascript for image slider manual navigation
    var manualNav = function(manual){
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Javascript for image slider autoplay navigation
    var repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 10000);
      }
      repeater();
    }
    repeat();
// banner end

// ___________________________________________________________poster on small tv

function showposter()
{
    var post=document.getElementById('tvseriename1');
    var permanemt=document.getElementById('tvserienameper');
    var s=post.style.display;
    
    if(s=="none"){
        post.style.display='';        
    permanemt.style.display='none';}
    
    
}
function showpost()
{
    var post=document.getElementById('tvseriename1');
    var permanemt=document.getElementById('tvserienameper');
    permanemt.style.display='none';

    post.style.display='';        

}
function hidepost()
{
    var post=document.getElementById('tvseriename1');
    var permanemt=document.getElementById('tvserienameper');
    permanemt.style.display='';
    post.style.display='none';        

}

function hideposter()
{
    var post=document.getElementById('tvseriename1');
    var permanemt=document.getElementById('tvserienameper');
    var s=post.style.display;
    if(s!="none"){
        post.style.display='none';
    permanemt.style.display='';}
    
}

function showposter2()
{
    var post=document.getElementById('tvseriename2');
    var permanemt=document.getElementById('tvserienameper');
    var s=post.style.display;
    if(s=="none"){
        post.style.display='';
    permanemt.style.display='none';}
    
}
function showpost2()
{
    var post=document.getElementById('tvseriename2');
    var permanemt=document.getElementById('tvserienameper');
    permanemt.style.display='none';
    post.style.display='';        

}
function hidepost2()
{
    var post=document.getElementById('tvseriename2');
    var permanemt=document.getElementById('tvserienameper');
    permanemt.style.display='';
    post.style.display='none';        

}
function hideposter2()
{
    var post=document.getElementById('tvseriename2');
    var permanemt=document.getElementById('tvserienameper');
    var s=post.style.display;
    if(s!="none"){
        post.style.display='none';
    permanemt.style.display='';}
    
}

function showposter3()
{
    var post=document.getElementById('tvseriename3');
    var permanemt=document.getElementById('tvserienameper');
    var s=post.style.display;
    if(s=="none"){
        post.style.display='';
    permanemt.style.display='none';}
    
}
function hidepost3()
{
    var post=document.getElementById('tvseriename3');
    var permanemt=document.getElementById('tvserienameper');
    permanemt.style.display='';
    post.style.display='none';        

}
function showpost3()
{
    var post=document.getElementById('tvseriename3');
    var permanemt=document.getElementById('tvserienameper');
    permanemt.style.display='none';
    post.style.display='';        

}
function hideposter3()
{
    var post=document.getElementById('tvseriename3');
    var permanemt=document.getElementById('tvserienameper');
    var s=post.style.display;
    if(s!="none"){
        post.style.display='none';
    permanemt.style.display='';}
    
}

function showposter4()
{
    var post=document.getElementById('tvseriename4');
    var permanemt=document.getElementById('tvserienameper');
    var s=post.style.display;
    if(s=="none"){
        post.style.display='';
    permanemt.style.display='none';}
    
}
function showpost4()
{
    var post=document.getElementById('tvseriename4');
    var permanemt=document.getElementById('tvserienameper');
    permanemt.style.display='none';
    post.style.display='';        

}
function hidepost4()
{
    var post=document.getElementById('tvseriename4');
    var permanemt=document.getElementById('tvserienameper');
    permanemt.style.display='';
    post.style.display='none';        

}
function hideposter4()
{
    var post=document.getElementById('tvseriename4');
    var permanemt=document.getElementById('tvserienameper');
    var s=post.style.display;
    if(s!="none"){
        post.style.display='none';
    permanemt.style.display='';}
    
}

function showposter5()
{
    var post=document.getElementById('tvseriename5');
    var permanemt=document.getElementById('tvserienameper');
    var s=post.style.display;
    if(s=="none"){
        post.style.display='';
    permanemt.style.display='none';}
    
}
function showpost5()
{
    var post=document.getElementById('tvseriename5');
    var permanemt=document.getElementById('tvserienameper');
    permanemt.style.display='none';
    post.style.display='';        

}
function hidepost5()
{
    var post=document.getElementById('tvseriename5');
    var permanemt=document.getElementById('tvserienameper');
    permanemt.style.display='';
    post.style.display='none';        

}
function hideposter5()
{
    var post=document.getElementById('tvseriename5');
    var permanemt=document.getElementById('tvserienameper');
    var s=post.style.display;
    if(s!="none"){
        post.style.display='none';
    permanemt.style.display='';}
    
}
// _________________________________________________________________

// ______________________________________________________________
function showline()
{
    var line=document.getElementById('seriestext');
    
    line.style.display='';
    
}
function hideline()
{
    var line=document.getElementById('seriestext');
    
    line.style.display='none';
    
}
// ______________________________________________________________


function playtrailer()
{
    var trailer=document.getElementById('playvideo');
    trailer.style.display='';
}

function showseriesdetails()
{
    var show=document.getElementById('box');
    show.style.display='';
}

// __________________________________________________________________
function hide()
{
    var show=document.getElementById('box');
    show.style.display='none';
}
function showseriesdetails2()
{
    var show=document.getElementById('box2');
    show.style.display='';
}
function hide2()
{
    var show=document.getElementById('box2');
    show.style.display='none';
}

function showseriesdetails3()
{
    var show=document.getElementById('box3');
    show.style.display='';
}
function hide3()
{
    var show=document.getElementById('box3');
    show.style.display='none';
}

function showseriesdetails4()
{
    var show=document.getElementById('box4');
    show.style.display='';
}
function hide4()
{
    var show=document.getElementById('box4');
    show.style.display='none';
}



function showseriesdetails5()
{
    var show=document.getElementById('box5');
    show.style.display='';
}
function hide5()
{
    var show=document.getElementById('box5');
    show.style.display='none';
}
function showseriesdetails6()
{
    var show=document.getElementById('box6');
    show.style.display='';
}
function hide6()
{
    var show=document.getElementById('box6');
    show.style.display='none';
}
function showseriesdetails7()
{
    var show=document.getElementById('box7');
    show.style.display='';
}
function hide7()
{
    var show=document.getElementById('box7');
    show.style.display='none';
}
function showseriesdetails8()
{
    var show=document.getElementById('box8');
    show.style.display='';
}
function hide8()
{
    var show=document.getElementById('box8');
    show.style.display='none';
}
function showseriesdetails9()
{
    var show=document.getElementById('box9');
    show.style.display='';
}
function hide9()
{
    var show=document.getElementById('box9');
    show.style.display='none';
}
function showseriesdetails10()
{
    var show=document.getElementById('box10');
    show.style.display='';
}
function hide10()
{
    var show=document.getElementById('box10');
    show.style.display='none';
}
function showseriesdetails11()
{
    var show=document.getElementById('box11');
    show.style.display='';
}
function hide11()
{
    var show=document.getElementById('box11');
    show.style.display='none';
}
function showseriesdetails12()
{
    var show=document.getElementById('box12');
    show.style.display='';
}
function hide12()
{
    var show=document.getElementById('box12');
    show.style.display='none';
}
function showseriesdetails13()
{
    var show=document.getElementById('box13');
    show.style.display='';
}
function hide13()
{
    var show=document.getElementById('box13');
    show.style.display='none';
}
function showseriesdetails14()
{
    var show=document.getElementById('box14');
    show.style.display='';
}
function hide14()
{
    var show=document.getElementById('box14');
    show.style.display='none';
}
function showseriesdetails15()
{
    var show=document.getElementById('box15');
    show.style.display='';
}
function hide15()
{
    var show=document.getElementById('box15');
    show.style.display='none';
}
function showseriesdetails16()
{
    var show=document.getElementById('box16');
    show.style.display='';
}
function hide16()
{
    var show=document.getElementById('box16');
    show.style.display='none';
}
function showseriesdetails17()
{
    var show=document.getElementById('box17');
    show.style.display='';
}
function hide17()
{
    var show=document.getElementById('box17');
    show.style.display='none';
}
function showseriesdetails18()
{
    var show=document.getElementById('box18');
    show.style.display='';
}
function hide18()
{
    var show=document.getElementById('box18');
    show.style.display='none';
}
function showseriesdetails19()
{
    var show=document.getElementById('box19');
    show.style.display='';
}
function hide19()
{
    var show=document.getElementById('box19');
    show.style.display='none';
}
function showseriesdetails20()
{
    var show=document.getElementById('box20');
    show.style.display='';
}
function hide20()
{
    var show=document.getElementById('box20');
    show.style.display='none';
}

function showseriesdetails21()
{
    var show=document.getElementById('box21');
    show.style.display='';
}
function hide21()
{
    var show=document.getElementById('box21');
    show.style.display='none';
}
function showseriesdetails22()
{
    var show=document.getElementById('box22');
    show.style.display='';
}
function hide22()
{
    var show=document.getElementById('box22');
    show.style.display='none';
}

























// _______________________________________________popular show series details___________
function pshowdetails1()
{
    var show=document.getElementById('pbox1');
    show.style.display='';
}
function phide1()
{
    var show=document.getElementById('pbox1');
    show.style.display='none';
}
