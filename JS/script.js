//name
const username = prompt("Inserire il nome");
console.log(username);

//last name
const userlastname = prompt("Inserisci il tuo cognome");
console.log(userlastname);

//color
const usercolor = prompt("Inserisci il tuo colore preferito");
console.log(usercolor);

const num = '21';

//controllo input
if ('username' && 'userlastname'){

    //controllo dati corretti
    if(isNaN(username) && isNaN(userlastname)){

        //success
        document.getElementById('congrats').innerHTML = `
            <p>Egregio utente, ecco a lei, la sua clamorosa password:</p>
        `;
        //psw
        document.getElementById('user').innerHTML = `
            <p class="display-5 text-danger fw-semibold">${username}${userlastname}${usercolor}${num}</p>
        `;

    }else{

        //fail
        document.getElementById('congrats').innerHTML = `
            <p class="display-5">Opss, credo che qualcosa sia andato storto:</p>
        `;
        //warning message
        document.getElementById('user').innerHTML = `
                <p class="fw-semibold">Perfavore ritenta, inerisci i dati correttamente!</p>
        `;
    }
   
}
