const { ipcMain } = require("electron");
module.exports = {
    getTray(wind){
        let template =[
            {label: "Calculadora"},
            {type:"separator"},

            {
                label:"info", click: () => {
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
              role: "reload",
            },
            {
              role: "toggledevtools",
            },
          ],
        },
        {
          label: "Window",
          submenu: [
            {
              role: "minimize",
            },
            {
              role: "close",
            },
          ],
        },
        {
          label: "Sobre",
          submenu: [
            {
              label: "Info",
              click: () => {
                ipcMain.emit("abre-tela-sobre");
              },
            },
          ],
        },
      ];
      if (process.platform == "darwin") {
        templateMenu.unshift({
          label: app.getName(),
          submenu: [
            {
              label: "Estou rodando no Mac!",
            },
          ],
        });
      }
      return templateMenu;
    }
}


    
