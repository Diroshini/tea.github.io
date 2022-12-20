function tic(label, amount, isIncreasing){
  const input = document.getElementById(label + '-number');
  let Number= input.value;
          if(isIncreasing){
              Number = parseInt(Number) + 1;
          }
         
  else if(Number > 0){
         Number = parseInt(Number) - 1;
       }
     
      input.value =Number;
 
  Total();

  }
  
  document.getElementById('SLC-plus').addEventListener('click',function(){
     
      tic('SLC', 700 ,true);
   });
   
   document.getElementById('SLC-minus').addEventListener('click',function(){
       
      tic('SLC', 700, false);
   });
   
   
   document.getElementById('SLA-plus').addEventListener('click',function(){

      tic('SLA',1200, true);
   });
   
   
   document.getElementById('SLA-minus').addEventListener('click',function(){
    
       tic('SLA',1200 , false);
   });
   


   document.getElementById('FC-plus').addEventListener('click',function(){
     
      tic('FC', 2700 ,true);
   });
   
   document.getElementById('FC-minus').addEventListener('click',function(){
       
      tic('FC', 2700, false);
   });
   
   
   document.getElementById('FA-plus').addEventListener('click',function(){
      tic('FA',5500, true);
   });
   
   
   document.getElementById('FA-minus').addEventListener('click',function(){
      tic('FA',5500 , false);
   });
   

   document.getElementById('IN-plus').addEventListener('click',function(){
      tic('IN',0, true);
   });
   
   
   document.getElementById('IN-minus').addEventListener('click',function(){
      tic('IN', 0 , false);
   });



  function Input(label){
      const labelinput = document.getElementById(label+ '-number');
      const labelNumber = parseInt(labelinput.value);
      return labelNumber;
  }
  let subTotal=0;
  let durcost=0;
  let costoforder=0;

  function calculateTotal(){
    let sladult = getInputvalue('SLA') * 1200;
    let slchild = getInputvalue('SLC') * 700;
    let foradult = getInputvalue('FA') * 5500;
    let forchild = getInputvalue('FC') * 2700;
    subTotal= localadult+ localchild+foreigneradult+foreingerchild;
    costoforder=subTotal+durcost;
    document.getElementById('CO').innerText = ` Cost of Order: RS.${costoforder}` ;
  }
optValue.addEventListener("change",duration)
    function duration(){
    let x= optValue.value;
    if(x=="3hrs"){
      durcost=0;
    }
    else if(x=="half day"){
    durcost=(getInputvalue('SLA')*350)+(getInputvalue('SLC')*350)+(getInputvalue('FA')*450)+(getInputvalue('FC')*450);
   }else if (x=="full day"){
    durcost=(getInputvalue('SLA')*600)+(getInputvalue('SLC')*600)+(getInputvalue('FA')*800)+(getInputvalue('FC')*800);
   }else;
   costoforder=subTotal+durcost;
   document.getElementById('CO').innerText = ` Cost of Order:RS. ${costoforder}` ;
}
  
const addbtn=document.getElementById("add");
addbtn.addEventListener("click",totalcost)
function totalcost(){
document.getElementById('OC').innerText = ` Overall cost of order:RS. ${costoforder}`
document.getElementById('CO').innerText = ` Cost of Order:RS. ${0}` 
}

const PO=document.getElementById("po");
PO.addEventListener("click",message)
function message(){
  alert("Thank You!");
document.getElementById('OC').innerText = ` Overall cost of Order:RS. ${0}`};

//Donation

const amount=document.getElementById("amount");
 const owner=document.getElementById("owner");
 const cardnum=document.getElementById("cardNumber")
 const cvv=document.getElementById("cvv");
 const expirydate=document.getElementById("expirt-date");
 const btnconfirm=document.getElementById("confirm");
 const donatebtn=document.getElementById("donate");
 

btnconfirm.addEventListener("click", e => {
  e.preventDefault();
  validateInput();
  
});

const seterror = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setsuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};



const validateInput= () =>{

  const ownerValue=owner.value.trim();
  const cvvValue=cvv.value.trim();
  const cardValue=card.value.trim();
  
if(ownerValue===''){
    seterror(owner,'Name is required');}
  else {
        setsuccess(owner);
    }

if(cvvValue  ===" "){
      seterror(cvv,'Enter valid number');}
        else if (cvv.value.length<3||cvv.value.length>4) {
          seterror(cvv, 'Provide a valid number');
      }
        else {
          setsuccess(cvv);
      }
  

if(cardValue ===''){
      seterror(card,'Enter valid number');}
        else if (card.value.length<16||card.value.length>16) {
          seterror(card, 'Enter valid number');}
       else {
          setsuccess(card);
      }
      
    
btndonate.addEventListener ("click",message);
  function message(){
  alert("Thank You!");
        
  }
}