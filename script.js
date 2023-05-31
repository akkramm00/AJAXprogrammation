// la page de votre site affiche une listes d utilisateurs dans un tableau.
// On obtient cette liste via une requete avec la méthode GET:'https://reqres.in/api/users?page=1'.

// Initialisant l'objet XMLHttpsRequest pour récupérer la liste des utilisateurs.
// La propriété 'dat' de l'objet retourné stocke la liste des utilisateurs.
// NOus devons ajouter la propriété 'name' à chaque item de la liste, en concaténant les propriétés
// firts_name et last_name.

// retournons en console la liste des utilisateurs eb ayant ajouté au préalable la propiriété 'name'
// à chauqe utilisateur.

// ********* INDICE *******

// n'oublier pas d'utiliser la méthode JSON.parse() pour transformer l'objet JSON en objet JavaScript.


//====================== SOLUTION =========================
 
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users?page=1');

xhr.addEventListener('readystatechage' , () => {

    if(xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON .parse(xhr.response).data;
        data.forEach(user => {
            user.name = `${user.first_name } ${user.last_name}`
        })
        console.log(data)
    };
});

xhr.send();

//====================================================================================