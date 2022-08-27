// Get the modal
let modal = document.querySelector('#id01');
let modalContent = document.querySelector('.modalContent');
let loginContent = document.querySelector('.logi');
// Signup
let signName = document.querySelector("#id01 > section.modalContent > div > input[type=text]:nth-child(5)");
let passName = document.querySelector("#id01 > section.modalContent > div > input[type=password]:nth-child(7)");
let rpassName = document.querySelector("#id01 > section.modalContent > div > input[type=password]:nth-child(9)");
let logName = document.querySelector("#id01 > section.logi > div.login.container > input.logname");
let plogName = document.querySelector("#id01 > section.logi > div.login.container > input.pasname");
let details = [];
let detail;
let ogg=JSON.parse(localStorage.getItem('signDetails'));
   detail = ogg  
function trade(){
  modal.classList.add('block'); 
}

function clos(){
 modal.classList.remove('block');
}
// Login
function login(){
  if(logName.value === detail[0].signName || plogName.value === detail[0].passName){
    // console.log(123); 
    console.log(345);
    modal.classList.remove('block');
  }else{
    console.log(logName.value,plogName)
  }

  //  if(logName !== detail[0].signName || plogName !== detail[0].passName){
  //   console.log(123)
  // }
  
}


// Confirm password inputs
function signup(){ 
  if(!signName.value || !passName.value || !rpassName.value){
    // modal.classList.add('block'); 
    console.log(123)
  }
  else{
    modal.classList.remove('block');
    posh();
  } 
  }
  if(passName.value !== rpassName.value){
  rpassName.classList.add('outline');
  modal.classList.add('block'); 
  }
  else{
    rpassName.classList.remove('outline'); 
//  console.log(details)

}

function signin(){
 loginContent.hidden = false;
 modalContent.classList.add('hidden');
}
function posh(){
  let obj={signName:signName.value,passName:passName.value,rpassName:rpassName.value};
  details.push(obj);
  setstorage();
}
// localstorage
function setstorage(){
   localStorage.setItem('signDetails',JSON.stringify(details));
   
  //  || [];
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('block');
  }
}