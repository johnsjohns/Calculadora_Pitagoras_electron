const { ipcRenderer, shell } = require('electron');
const process = require('process');

let versaoElectron = document.querySelector('#versao-electron');
let versaoNode = document.querySelector('#versao-node');

window.onload = function(){ //função que busca a versão dos softwares e envia para pagina info
    versaoElectron.textContent = process.versions.electron;
    versaoNode.textContent = process.version;
}

let linkGit = document.querySelector('#joao-git'); //abre pagina externa do github
linkGit.addEventListener('click', () => {
    shell.openExternal('https://github.com/johnsjohns');
})


let linkFechar = document.querySelector('#link-fechar');//logica para fechar aba info
linkFechar.addEventListener('click', function(){
    ipcRenderer.send('fechar-janela-sobre');
});