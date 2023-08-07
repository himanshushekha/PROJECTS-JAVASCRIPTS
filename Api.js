const events=
[
    {
       title:'TWD JS Workshop',
       image:'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGh0bWwlMjBjc3MlMjAlMjAlMjBoZWlnaHQlMjAyMDAlMjB3aWR0aCUyMDQwMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
       timing:'9AM',
       Tutors:['HARI','NABENDU']


    },
    {
        title:'TWD HTML CSS Workshop',
        image:'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh0bWwlMjBjc3MlMjAlMjAlMjBoZWlnaHQlMjAyMDAlMjB3aWR0aCUyMDQwMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
        timing:'9AM',
        Tutors:['MOUSAM','NABENDU']

    },
    {
        title:'TWD REACT Workshop',
        image:'https://images.unsplash.com/photo-1508317469940-e3de49ba902e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHRtbCUyMGNzcyUyMCUyMCUyMGhlaWdodCUyMDIwMCUyMHdpZHRoJTIwNDAwfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
        timing:'9AM',
        Tutors:['HARI','NABENDU']


    },
  
]


const container=document.querySelector(".container");
events.forEach(function(value,index)
{
    container.innerHTML +=`<div class="box">
    <div class="flex">
    <img src="${value.image} "  alt="_blank">
    </div>
    <div class="info">
    <h1>${value.title}</h1>
    
        <p>Tutors :${value.Tutors}</p>
          
    
    
    <h3>${value.timing}</h3>
    
      </div>   
    </div>`
})

//

