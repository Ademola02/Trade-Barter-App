const signIn = document.querySelector('.signin');
const logIn = document.querySelector('.login');
let details = [];
 let ogg=JSON.parse(localStorage.getItem('signDetails'));
details = ogg  || [] ;
const text = document.querySelector('#txt');

//Sign in
// const signUp = document.querySelector('#signUp');
const signEmail = document.querySelector('#inp1');
const signPassword = document.querySelector('#inp2');
const signRpassword = document.querySelector('#inp3');

// Login in
const loginEmail = document.querySelector('#inp1');
const loginPassword = document.querySelector('#inp2');
// const logins = document.querySelector('#logins');

   // SignUp
function signUp(){
   if(!signEmail.value || !signPassword.value || !signRpassword.value){
          signEmail.classList.add('outline'); 
          return;
        }
        else if(signEmail.value !='' && details.length !=0){
         let chec = details.find(element => {
            return element.signEmail == signEmail.value
         });

         if (chec){
            text.hidden = false;

            return;
         } else{
            signEmail.classList.remove('outline'); 
            
         }
                          
        }
         posh()
         // location.replace('index.html');
};
 
function posh(){
    let obj = {signEmail:signEmail.value,signPassword:signPassword.value,signRpassword:signRpassword.value};

    details.push(obj);
   //  console.log(details);
    setstorage();
};

// Local Storage
function setstorage(){
   localStorage.setItem('signDetails', JSON.stringify(details));
}

  // Login
function logins(){
   if(!loginEmail.value){
      loginEmail.classList.add('outline');
      return;
   }
   else{
      loginEmail.classList.remove('outline');
};
       let chec = details.find(element => {
               return element.signPassword == loginPassword.value
            });
            // console.log(chec.signPassword)
            
            if(chec.signPassword !== loginPassword.value){
                note.hidden = true;
               console.log(123);
               // return location.replace('index.html');
               //  
               
            }
            // else if(chec == loginPassword.value){
            //     note.hidden = false;
            //    console.log(chec)
              
               
            //    };
            }
   
   
  

function enter(){
   signIn.classList.add('hidden');
   location.replace('login.html');
}




// // // Login
// function login(){
//   if(logName.value === detail[0].signName || plogName.value === detail[0].passName){
//     // console.log(123); 
//     console.log(345);
//     modal.classList.remove('block');
//   }else{
//     console.log(logName.value,plogName)
//   }

//    if(logName !== detail[0].signName || plogName !== detail[0].passName){
//     console.log(123)
//   }
  
// }








