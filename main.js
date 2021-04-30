const { app, BrowserWindow, ipcMain, Tray, Menu}  = require("electron");
const trayTemplate = require('./trayTemplate')
let tray = null
app.on("ready", () => {
    console.log("aplicação iniciada");
    let mainWindow = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    tray = new Tray(`${__dirname}/app/img/tray.png`);
    let template = trayTemplate.getTray(mainWindow)
    let trayMenu = Menu.buildFromTemplate(template);
    

    tray.setContextMenu(trayMenu);
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});


let sobreWindow = null;
ipcMain.on('abre-tela-sobre', () => {
    if(sobreWindow === null){
    sobreWindow = new BrowserWindow({
        width: 600,
        height: 400,
        alwaysOnTop: true,
      frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    sobreWindow.on('closed', () => {
        sobreWindow = null;
      })
    }
  
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
    
});

ipcMain.on('fechar-janela-sobre', () => {
    sobreWindow.close();
  });


