const name = document.querySelector('#name');
const phone=document.querySelector('#phone');
const btn=document.querySelector("#btn");

function getDataVal()
{
    const nameVal = name.value;
    
    const getData=localStorage.getItem(nameVal);
    console.log(nameVal);
    

    const  table=document.querySelector('tbody');
console.log(table);
     table.innerHTML += 
 `<tr>
     <td>${nameVal}</td>
     <td>${getData}</td>
 </tr>`
     
}

btn.addEventListener('click',function()
{
    
    const nameVal = name.value;
    const phoneVal = phone.value;


  localStorage.setItem(nameVal,phoneVal);
  getDataVal(nameVal)
  
})

//getDataVal()
