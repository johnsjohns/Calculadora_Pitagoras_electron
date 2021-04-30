const { app, BrowserWindow, ipcMain, Tray, Menu}  = require("electron");
const trayTemplate = require('./menuTemplate')
let tray = null
app.on("ready", () => { //iniciando aplicação
    console.log("aplicação iniciada");
    let mainWindow = new BrowserWindow({ //criando pagina principal
        width: 600,
        height: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);

    tray = new Tray(`${__dirname}/app/img/tray.png`); // carregando icone da barra atalho
    let template = trayTemplate.getTray(mainWindow);  // carrega os templates da tray
    let trayMenu = Menu.buildFromTemplate(template);  // criar os itens do tray
    tray.setContextMenu(trayMenu);//cria tray icon
    let templateMenu = trayTemplate.geraMenuPrincipalTemplate(app); // carrega template do menu 
    let menuPrincipal = Menu.buildFromTemplate(templateMenu); //carrega os item no menu 
    Menu.setApplicationMenu(menuPrincipal);//cria menu
   
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


