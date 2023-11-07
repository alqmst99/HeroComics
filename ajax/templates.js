function result(data){

  return `
   
    <div class="card " style="width: 18rem;">
    <img src=${data.image.url} class="card-img-top" alt="${data.name}">
    <div class="card-body">
      <p class="card-text">${data.name} </p>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detail" data-id="${data.id} "> Details</button>
    </div>
  </div>

    `

}


function noneF(){
  return` 
  <div class="img-non">
        <figure>
          <img class="mx-auto d-block" src="/Assets/not-found-H.jpg" alt="Not-Found-Heros">
        </figure>
      </div>
  `
}



function general(data, img){
    inf.innerHTML= `<div class="card mb-3 " >
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${img} class="img-fluid rounded-start" alt="Batman">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">PowerStats</h5>
          <ul class= "tab-body- single">
          <li>
          <span>Inteligence</span>
          <span>${data.intelligence} </span>
          </li>
          <li>
          <span>strength</span>
          <span>${data.strenght}</span>
          </li>

          <li>
          <span>speed</span>
          <span>${data.speed}</span>
          </li>

          <li>
          <span>durabiity</span>
          <span>${data.durabiity}</span>
          </li>

          <li>
          <span>power</span>
          <span>${data.durabiity}</span>
          </li>

          <li>
          <span>combat</span>
          <span>${data.durabiity}</span>
          </li>
            <ul>



       
        </div>
      </div>
    </div>
  </div>
    `
}



function bio(data, img){
    inf.innerHTML=`
    <div class="card mb-3 " >
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${img} class="img-fluid rounded-start" alt="Batman">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">biography</h5>
          <ul class= "tab-body-single">
          <li>
          <span<b>Full Name: </b>: </span>
          <span>${data.fullName} </span>
          </li>
          <li>
          <span><b>Alter-egos:</b> </span>
          <span>  </span>
          </li>

          <li>
          <span><b>Alianses: </b></span>
          <span>${data.aliases} </span>
          </li>

          <li>
          <span><b>Place-of-birth: </b></span>
          <span></span>
          </li>

          <li>
          <span><b>First apparence: </b></span>
          <span> </span>
          </li>

          <li>
          <span><b>Publisher</b>: </span>
          <span>${data.publisher} </span>
          </li>
            <ul>



          
        </div>
      </div>
    </div>
  </div>
    `
}

function skill(data, img){
    inf.innerHTML=`
    <div class="card mb-3 justify-content-center" >
    <div class="row g-0">
    <div class="col-md-4 aling-item-center img-flit">
    <img src=${img} class="img-fluid rounded-start" alt="Batman">
  </div>
      <div class="col-md-8 ">
        <div class="card-body">
          <h5 class="card-title">Appearance</h5>
          <ul class="justify-content-center">
            <li><b>Gender</b>: ${data.gender} </p></li>
            <li><p class="card-text"><b>Race</b>: ${data.race}.</p></li>
            <li><p class="card-text"><b>Height</b>: ${data.height}.</p></li>
            <li><p class="card-text"><b>Weight</b>: ${data.weight}.</p></li>
                      
            </ul>
          
       
        </div>
      </div>
    </div>
  </div>
    `
}



