//search capture input
async function allSuperH(hero) {
   let url = `https://superheroapi.com/api/6878269665535139/search/${hero}`
   try {
      let responce = await fetch(url)
      let resquest = await  responce.json()
      let data= resquest.results
      
      console.log(data);
         showResult(data);
         
      
   } catch (error) {
      console.log(error)
   }

}

src.addEventListener('submit', (event) => {
   event.preventDefault()
   let searchT = src.search.value.trim();
   console.log(searchT);
   if (!searchT) {
      alert('Debe usted ingresar un artista u tema');
      return
   }
   allSuperH(searchT)
});
res.innerHTML=``
const showResult = (data) => {
   data.forEach(dataI => {
      const divE = document.createElement('div')
      divE.classList.add('result')
      divE.classList.add('col')
      divE.classList.add('col-xs-3')
      divE.classList.add('col-lg-3')

      
      divE.innerHTML= result(dataI)
      res.appendChild(divE) 
      
   })}
res.addEventListener('click', event => {
   if (event.target.tagName == "BUTTON"){
      const element = event.target;
      const id = element.getAttribute("data-id");
      console.log(id)
      getHero(id);
   }
})
async function getHero(id){
   const api = `https://superheroapi.com/api/6878269665535139/${id}`
   const request = await fetch(api)
   const responce = await request.json()
   const dataS = responce.powerstats
   const dataB = responce.biography
   const dataA = responce.appearance
   const dataR = responce

   console.log(dataR)
   console.log(id)
   detail(dataR)
}