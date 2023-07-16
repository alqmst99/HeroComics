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
function detail(data){
  modal.innerHTML=`
  
        <ul class="nav nav-pills card-header-pills justify-content-center">
          <li class="nav-item">
            <a class="nav-link tab1 active" onclick="selectTab1(${data.powerstats})"  href="#">PowerStat</a>
          </li>
          <li class="nav-item">
            <a class="nav-link tab2" onclick="selectTab2(${data.biography})" href="#">Bio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link tab3" onclick="selectTab3(${data.appearance})" href="#">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link tab4" onclick="selectTab4(${data})" href="#">Relese</a>
          </li>

        </ul>`
}


function general(data){
    inf.innerHTML= `<div class="card mb-3 " >
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" class="img-fluid rounded-start" alt="Batman">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"PowerStats</h5>
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



          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
    `
}



function Bio(data){
    inf.innerHTML=`
    <div class="card mb-3 " >
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" class="img-fluid rounded-start" alt="Batman">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"biography</h5>
          <ul class= "tab-body-single">
          <li>
          <span>full name: </span>
          <span> Gorege Humarrallo</span>
          </li>
          <li>
          <span>alter-egos: </span>
          <span> no alter egos found.</span>
          </li>

          <li>
          <span>alianses: </span>
          <span> Batman II, The Tomorrow Knight, Batman Beyond</span>
          </li>

          <li>
          <span>place-of-birth: </span>
          <span> Gotham City, 25th Century</span>
          </li>

          <li>
          <span>first apparence: </span>
          <span> batman Beyond</span>
          </li>

          <li>
          <span>publisher: </span>
          <span>DC Comics </span>
          </li>
            <ul>



          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
    `
}

function skill(data){
    inf.innerHTML=`
    <div class="card mb-3 justify-content-center" >
    <div class="row g-0">
    <div class="col-md-4 aling-item-center img-flit">
    <img src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" class="img-fluid rounded-start" alt="Batman">
  </div>
      <div class="col-md-8 ">
        <div class="card-body">
          <h5 class="card-title">Skills or Habilities</h5>
          <ul class="justify-content-center">
            <li><p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p></li>
            <li><p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p></li>
            <li><p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p></li>
            </ul>
          
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
    `
}

function relese(data){
    inf.innerHTML= `
    <div class="card justify-content-center" style="width: 10rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    `
}

