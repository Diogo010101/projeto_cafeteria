
var objMenuHeader = document.querySelector("#menu_principal");



function dropMenu(){
    if(objMenuHeader.style.display == 'none'){
        objMenuHeader.style.display = 'block'
    }else{
        objMenuHeader.style.display = 'none'
    }
}


function ajusteMenu(){
    if(window.innerWidth >= 793){
        objMenuHeader.style.display = 'block'
    }else{
        objMenuHeader.style.display = 'none'
    }
}




/*Função botão de topo*/
function botaoSubir(){
    window.scroll(0,0);
}