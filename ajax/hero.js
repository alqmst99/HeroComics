//search capture input
async function allSuperH(hero) {
   let url = `https://www.superheroapi.com/api/6878269665535139/search/${hero}`
   try {
      let res = await fetch(url, {
         method: 'POST',
         mode: 'no-cors',
       
       });
       const req = await res.json()
      let data = req.results;
     
      console.log(data);
      if(data !== undefined){ 
      showResult(data);
      }else{
         noneF()
      }

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
res.innerHTML = ``
const showResult = (data) => {
   let present = document.querySelector('.img-pre')
   data.forEach(dataI => {
      const divE = document.createElement('div')
      divE.classList.add('result')
      divE.classList.add('col')
      divE.classList.add('col-xs-3')
      divE.classList.add('col-lg-3')


      divE.innerHTML = result(dataI)
      res.appendChild(divE)
      present.classList.add('d-none')
   })
}
res.addEventListener('click', event => {
   let present = document.querySelector('.img-pre')
   if (event.target.tagName == "BUTTON") {
      const element = event.target;
      const id = element.getAttribute("data-id");
      console.log(id)
      getHero(id);
    
   }
})
async function getHero(id) {
   const api = `https://www.superheroapi.com/api/6878269665535139/${id}`
   const request = await fetch(api)
   const responce = await request.json()
   const dataS = responce.powerstats
   const dataB = responce.biography
   const dataA = responce.appearance
   const dataR = responce.image.url

   console.log(dataS)
   console.log(dataB)
   console.log(dataR)
   console.log(dataA)
   console.log(id)
   detail(dataS, dataB, dataA, dataR)
}

function detail(data1, data2, data3, img) {
   try {
     
         general(data1, img)
       
         tab1.addEventListener('click', event => {
          
            general(data1, img)
          
         })

      tab2.addEventListener('click', event => {
         bio(data2, img)
        
      })
      tab3.addEventListener('click', event => {
         skill(data3, img)
         
      })
      tab4.addEventListener('click', event => {
         relese(data1, img)
         
      })
   } catch (error) {
      console.log(error)
   }

}