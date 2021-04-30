const { ipcRenderer} = require('electron');

ipcRenderer.on('tela-sobre', () => {
    ipcRenderer.send('abre-tela-sobre');
    
});