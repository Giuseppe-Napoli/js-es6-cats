$(function(){
/* 1)  Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
2) Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

Milestone 2
Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

Milestone 3
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.
 */

 const gatti = [
  {
    nome: 'Michy',
    age: 5,
    colore: '#FFDCAF',
    sesso: 'maschio'
  },
  {
   nome: 'Maya',
   age: 5,
   colore: '#953718',
   sesso: 'femmina'
 },
 {
   nome: 'Max',
   age: 6,
   colore: '#DC5528',
   sesso: 'maschio'
 },
  {
    nome: 'Harry',
    age: 3,
    colore: '#5C5D54',
    sesso: 'maschio'
  },
  {
   nome: 'Koda',
   age: 4,
   colore: '#11100C',
   sesso: 'maschio'
 },
 {
   nome: 'Luna',
   age: 8,
   colore: '#E47848',
   sesso: 'femmina'
 }
 ]

 //ciclo forEach che mi consente di ritornare il nome e colore dei gatti
 gatti.forEach((cat)=>{
   $('#list-cat ul').append(generatorCat(cat.nome, cat.colore))
 })

 //assegno un colore al fiocco in base al sesso del gatto
 const rosa = '#FF66F7';
 const blu = '#3D54FF'
 const newList = gatti.map((cat)=>{
   let color =(cat.sesso === 'femmina') ? rosa : blu;
   let opacity = cat.age / 10;
   return {
     ...cat,
     fiocco:{
       color,
       opacity
      }
    }
  })

  // filtro gli array in base al sesso del gatto
  const catMale = newList.filter((cat)=> cat.sesso === 'maschio');
  const catFemale = newList.filter((cat)=> cat.sesso === 'femmina')
     
   
  
  // stampo a schermo la lista di gatti maschi e femmine
   catFemale.forEach((cat)=>{
     $('#list-cat-female ul').append(generatorCat(cat.nome, cat.colore, cat.fiocco.color, cat.fiocco.opacity))
   })
   catMale.forEach((cat)=>{
     $('#list-cat-male ul').append(generatorCat(cat.nome, cat.colore, cat.fiocco.color, cat.fiocco.opacity))
   })


/*    Milestone 3
   Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto. */
 

   // per creare un array utilizzando lo spread

   const globalCat = [...catFemale,...catMale];

   const oderCats = globalCat.map((cat)=>{
     //destrutturo un array per ricavare il nomre il colore e il fiocco
    let{nome,colore,fiocco}= cat;
    $('#list-cat-order ul').append(generatorCat(nome,colore,fiocco.color, fiocco.opacity))
    return {nome,colore,fiocco}
  })
});// fine document ready





// FUNZIONE //
function generatorCat(gatto,colore, ...fiocco){
  let fioccoTag = '';
  // condizione che si prensenterà solo  se realmente è presente un fiocco dentro l array gatti
  if(fiocco.length > 0){
    fioccoTag = `<i class="fas fa-ribbon"
    style="color:${fiocco[0]};
         opacity:${fiocco[1]}"></i>
    
  `;
  
  }
  let html = `
  <li>
      <i class="fas fa-cat" style='color:${colore}'></i>
      ${fioccoTag}
      <span style='color:${colore}'>${gatto} </span>
  </li>
  `;
  return html;
}