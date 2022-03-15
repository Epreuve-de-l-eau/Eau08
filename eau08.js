#! node
//Function du tri à bulle
function my_bulle_sort(tab){
    let changed;
    do{
        changed = false;
        for(let a = 0; a < tab.length - 1; a++) {
            if(tab[a] > tab[a+1]) {
                let big = tab[a];
                tab[a] = tab[a+1];
                tab[a+1] = big;
                changed = true;
            }
        }
    } while(changed);
}
//Function qui transforme chasue index en nombre
function num(tab) {
  for (let b = 0; b < tab.length; b++) {
    tab[b] = Number(tab[b])
  }
}

//Gestion d'erreur
if(process.argv.length < 4) {
  console.log('Veuillez indiquer au minimum deux nombres en argument')
  return
}
process.argv.splice(0, 2)
for (i in process.argv) {
  if (process.argv[i] % 1 != 0) {
    console.log("Veuillez indiquer seulement des nombres en argument")
    return
  }
}

//Parsing
let arg = process.argv

//Résolution du problème
num(arg)
my_bulle_sort(arg);

//Affichage
console.log(arg);
