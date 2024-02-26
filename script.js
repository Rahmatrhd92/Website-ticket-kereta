

const inputStasiun = document.getElementById('inputStasiun');
const inputTujuan = document.getElementById('inputTujuan');
const tanggal = document.getElementById('tanggal');
const pDewasa = document.getElementById('pDewasa');
const btn = document.querySelector(".btn");
const out1 = document.getElementById('output1');
const out2 = document.getElementById('output2');
const out3 = document.getElementById('output3');
const out4 = document.getElementById('output4');




function fun1(){

   out1.innerHTML = inputStasiun.value;
   out1.style.color='white';
   out1.style.textAlign='center';
   out1.style.fontSize='30px';
  
}

function fun2(){
    out2.innerHTML = inputTujuan.value;
    out2.style.color='white';
    out2.style.textAlign='center';
    out2.style.fontSize='30px';

 }

 function fun3(){
    out3.innerHTML = tanggal.value;
    out3.style.color='white';
    out3.style.textAlign='center';
    out3.style.fontSize='30px';
 }
 function fun4(){
    out4.innerHTML = pDewasa.value;
    out4.style.color='white';
    out4.style.textAlign='center';
    out4.style.fontSize='30px';
 }


 


btn.addEventListener('click', fun1);
btn.addEventListener('click', fun2);
btn.addEventListener('click', fun3);
btn.addEventListener('click', fun4);
    
