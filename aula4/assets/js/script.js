function toggleNavbar() {

    var navbar = document.getElementById('nav_mobile')
    var isHidden  = navbar.classList.contains('header_hidden') // verifica se possui classe que deixa inviivel
    // true --> esta escondido
    // false --> esta oculte
    if (isHidden) {
    // hidden navbar | colocar uma classe  
    navbar.classList.remove('header_hidden')
    }else{
    navbar.classList.add('header_hidden')
    // show navbar | retira classe
    }


    // let isShow = false
    // clicou troca o estado da div
    // Saber o estado show | hidden
}




// clicar muda uma classe 
// clico de novo e muda para display flex
// class  header_hidden | id -> nav_mobile