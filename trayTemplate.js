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
    }
}