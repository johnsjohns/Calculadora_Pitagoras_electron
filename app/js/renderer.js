const { ipcRenderer} = require('electron');

ipcRenderer.on('tela-sobre', () => { //recebe evento do Menu Template e envia para o app
    ipcRenderer.send('abre-tela-sobre');
    
});