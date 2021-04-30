const { ipcMain } = require("electron");
module.exports = {
    getTray(wind){ //template do tray
        let template =[ 
            {label: "Calculadora"},
            {type:"separator"},

            {
                label:"info", click: () => { //evento para abrir tela de info
                    wind.send('tela-sobre');
                }
                
            }
        ]
        return template;
    },
    geraMenuPrincipalTemplate(app) {
      let templateMenu = [
        {
          label: "View",
          submenu: [ 
            {
              role: "reload", //recarega a pagina
            },
            {
              role: "toggledevtools", //abre e fecha console
            },
          ],
        },
        {
          label: "Window",
          submenu: [
            {
              role: "minimize", //minimizar
            },
            {
              role: "close", // fecha a aplicação
            },
          ],
        },
        {
          label: "Sobre",
          submenu: [
            {
              label: "Info",
              click: () => {
                ipcMain.emit("abre-tela-sobre"); //evento para abrir tela info
              },
            },
          ],
        },
      ];
      if (process.platform == "darwin") { //caso o O.S. seja Mac, coloca o primeiro label para criar o menu
        templateMenu.unshift({
          label: app.getName(),
          submenu: [
            {
              label: "Mac",
            },
          ],
        });
      }
      return templateMenu;
    }
}


    
