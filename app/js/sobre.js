const { ipcRenderer, shell } = require('electron');
const process = require('process');

let versaoElectron = document.querySelector('#versao-electron');
let versaoNode = document.querySelector('#versao-node');

window.onload = function(){
    versaoElectron.textContent = process.versions.electron;
    versaoNode.textContent = process.version;
}

let linkGit = document.querySelector('#joao-git');
linkGit.addEventListener('click', () => {
    shell.openExternal('https://github.com/johnsjohns');
})


let linkFechar = document.querySelector('#link-fechar');
linkFechar.addEventListener('click', function(){
    ipcRenderer.send('fechar-janela-sobre');
});