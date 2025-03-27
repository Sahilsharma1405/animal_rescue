function next()
{
    var data=document.getElementsByClassName("onClick")
    data[0].innerHTML="Donate For Pet"
    data[1].innerHTML="Help Animal"
    data[2].innerHTML="Donate"+`<i class="bi bi-chevron-right onClick"></i>`
}

function prev()
{
    var data=document.getElementsByClassName("onClick")
    data[0].innerHTML="Adopt a Pet"
    data[1].innerHTML="Make a difference"
    data[2].innerHTML="Adopt"+`<i class="bi bi-chevron-right onClick">`
}

function facebook(){
   window.open("https://www.facebook.com/","_blank")
}
function whatsapp(){
   window.open("https://web.whatsapp.com/","_blank")
}
function instagram(){
   window.open("https://www.instagram.com/","_blank")
}
function twitter(){
   window.open("https://x.com/?lang=en&mx=2","_blank")
}

function signup(){
   document.getElementById('login').style.display='none'
   document.getElementById('signup').style.display='block'
}

function login(){
   document.getElementById('signup').style.display='none'
   document.getElementById('login').style.display='block'
}

function open_login(){
   window.open("login.html","_blank")
}

function direct(){
   window.open("home1.html","_blank")
}

function openLog(){
   document.getElementById("signup").style.display='none'
   document.getElementById("login").style.display='block'
}