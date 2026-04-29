const users = [{"id":1,"first_name":"Walsh","last_name":"Cullerne","bank":"FIRST NATIONAL BANK","city":"Bosilovo","country":"Macedonia","salary":2484,"expenses":592},
{"id":2,"first_name":"Agneta","last_name":"Gallichan","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Yên Mỹ","country":"Vietnam","salary":1477,"expenses":1120},
{"id":3,"first_name":"Marcelline","last_name":"Kunzel","bank":"Sogefimur","city":"Luorong","country":"China","salary":3404,"expenses":573},
{"id":4,"first_name":"Ileane","last_name":"Vaun","bank":"CITIBANK","city":"Lishu","country":"China","salary":1693,"expenses":1481},
{"id":5,"first_name":"Urbanus","last_name":"MacIlurick","bank":"BANCA DI CREDITO COOPERATIVO DI GAMBATESA - SOCIETA' COOPERATIVA","city":"Fenshui","country":"China","salary":3324,"expenses":851},
{"id":6,"first_name":"Francklyn","last_name":"Rennard","bank":"Bank of Communications Co., Ltd.,  Prague Branch odštěpný závod","city":"Orlovo","country":"Russia","salary":2653,"expenses":979},
{"id":7,"first_name":"Lonee","last_name":"Millard","bank":"Credit suisse bank (Europe), S.A.","city":"Takehara","country":"Japan","salary":1375,"expenses":1433},
{"id":8,"first_name":"Gail","last_name":"Espinha","bank":"PNC BANK","city":"Panadura","country":"Sri Lanka","salary":1255,"expenses":572},
{"id":9,"first_name":"Nickey","last_name":"Farry","bank":"UMPQUA BANK","city":"Condado","country":"Brazil","salary":2498,"expenses":1313},
{"id":10,"first_name":"Antonio","last_name":"Cowthard","bank":"NBH BANK","city":"Gunungsubang","country":"Indonesia","salary":2453,"expenses":1021},
{"id":11,"first_name":"Alex","last_name":"Oxborough","bank":"UNION BANK & TRUST","city":"Talghar","country":"Kazakhstan","salary":1787,"expenses":1146},
{"id":12,"first_name":"Kate","last_name":"Felderer","bank":"FIRST STATE BANK","city":"Vyshneve","country":"Ukraine","salary":2848,"expenses":621},
{"id":13,"first_name":"Nomi","last_name":"Hearons","bank":"Raiffeisenbank Hochfranken West eG","city":"El Rincón","country":"Panama","salary":2253,"expenses":1408},
{"id":14,"first_name":"Bailie","last_name":"Barosch","bank":"BANCA POPOLARE DI PUGLIA E BASILICATA - SOCIETA' COOPERATIVA PER AZIONI","city":"Eci","country":"Indonesia","salary":1832,"expenses":1073},
{"id":15,"first_name":"Phaedra","last_name":"Whitley","bank":"DekaBank Deutsche Girozentrale","city":"George Town","country":"Cayman Islands","salary":1748,"expenses":1089},
{"id":16,"first_name":"Avram","last_name":"Weich","bank":"COMMUNITY NATIONAL BANK","city":"Alangilanan","country":"Philippines","salary":3322,"expenses":1356},
{"id":17,"first_name":"Jacki","last_name":"Carlisso","bank":"BNP Paribas","city":"Baiyan","country":"China","salary":1015,"expenses":892},
{"id":18,"first_name":"Jefferey","last_name":"Killgus","bank":"PNC BANK INC. - BALTIMORE","city":"Boyany","country":"Ukraine","salary":3200,"expenses":635},
{"id":19,"first_name":"Carlin","last_name":"Local","bank":"FIRST STATE BANK","city":"Slantsy","country":"Russia","salary":2632,"expenses":702},
{"id":20,"first_name":"Giffy","last_name":"Goodall","bank":"GLACIER BANK","city":"Afogados da Ingazeira","country":"Brazil","salary":3957,"expenses":1055},
{"id":21,"first_name":"Archibold","last_name":"Rothermel","bank":"FIRST STATE BANK","city":"Pirané","country":"Argentina","salary":3894,"expenses":978},
{"id":22,"first_name":"Koral","last_name":"Kitley","bank":"WHITNEY BANK","city":"Nanxing","country":"China","salary":2979,"expenses":543},
{"id":23,"first_name":"Gregory","last_name":"Babbage","bank":"RaiffeisenBank St. Ulrich - Waidring eGen","city":"Muarabadak","country":"Indonesia","salary":1099,"expenses":1131},
{"id":24,"first_name":"Salvador","last_name":"Camel","bank":"COMMUNITY FIRST BANK","city":"Huangkeng","country":"China","salary":3556,"expenses":1395},
{"id":25,"first_name":"Issiah","last_name":"Swancock","bank":"FIRST NATIONAL BANK","city":"Gambiran","country":"Indonesia","salary":1994,"expenses":1173},
{"id":26,"first_name":"Bessie","last_name":"Brownbill","bank":"BANK OF AMERICA","city":"Mölndal","country":"Sweden","salary":1409,"expenses":1481},
{"id":27,"first_name":"Chrysa","last_name":"Dury","bank":"NBH BANK","city":"Primorsko","country":"Bulgaria","salary":2107,"expenses":542},
{"id":28,"first_name":"Elysia","last_name":"Lenoir","bank":"Raiffeisenbank Küps-Mitwitz-Stockheim eG","city":"Unquillo","country":"Argentina","salary":1948,"expenses":1063},
{"id":29,"first_name":"Felike","last_name":"Valti","bank":"FIRST NATIONAL BANK OF PENNSYLVANIA","city":"Cuenca","country":"Peru","salary":1582,"expenses":1235},
{"id":30,"first_name":"Kalil","last_name":"Saiens","bank":"CITIZENS NATIONAL BANK","city":"Zaragoza","country":"Spain","salary":3340,"expenses":1140},
{"id":31,"first_name":"Peyton","last_name":"Kellogg","bank":"Caja Rural de Guissona, Sociedad Cooperativa de Crédito","city":"Meixi","country":"China","salary":1128,"expenses":1156},
{"id":32,"first_name":"Audie","last_name":"Trigwell","bank":"CAPITAL ONE","city":"Seka","country":"Thailand","salary":3278,"expenses":1499},
{"id":33,"first_name":"Lynda","last_name":"Chasmoor","bank":"PACIFIC WESTERN BANK","city":"Shigu","country":"China","salary":2297,"expenses":926},
{"id":34,"first_name":"Ivar","last_name":"Bare","bank":"FIRSTBANK","city":"Oral","country":"Kazakhstan","salary":2663,"expenses":1267},
{"id":35,"first_name":"Henrieta","last_name":"Burdytt","bank":"Brühler Bank eG","city":"San Rafael Abajo","country":"Costa Rica","salary":1597,"expenses":581},
{"id":36,"first_name":"Hughie","last_name":"Fripps","bank":"FIRST BANK","city":"Saint-Quentin-en-Yvelines","country":"France","salary":3889,"expenses":942},
{"id":37,"first_name":"Clay","last_name":"Ferne","bank":"BANCA DI CREDITO COOPERATIVO VENEZIA GIULIA SOCIETA¿ COOPERATIVA","city":"Azacualpa","country":"Honduras","salary":1339,"expenses":756},
{"id":38,"first_name":"Bryn","last_name":"Littlejohns","bank":"LIBERTY BANK","city":"Forquilhinha","country":"Brazil","salary":1853,"expenses":1219},
{"id":39,"first_name":"Peder","last_name":"Adrain","bank":"SMBC Bank International plc","city":"Lanchkhuti","country":"Georgia","salary":1627,"expenses":503},
{"id":40,"first_name":"Guenna","last_name":"Rizzolo","bank":"BANNER BANK","city":"Banjar Taro Kelod","country":"Indonesia","salary":1282,"expenses":940},
{"id":41,"first_name":"Lucila","last_name":"Batha","bank":"Volksbank Überherrn e.G.","city":"Pyay","country":"Myanmar","salary":3073,"expenses":1232},
{"id":42,"first_name":"Rochelle","last_name":"Roelofs","bank":"FIRST NATIONAL BANK","city":"Paris 02","country":"France","salary":1271,"expenses":1321},
{"id":43,"first_name":"Francisca","last_name":"Shuxsmith","bank":"FEDERAL RESERVE BANK","city":"Jiangpan","country":"China","salary":3754,"expenses":954},
{"id":44,"first_name":"Linell","last_name":"Abram","bank":"COMMUNITY BANK","city":"Guimbal","country":"Philippines","salary":2914,"expenses":1090},
{"id":45,"first_name":"Ronalda","last_name":"Bawles","bank":"BERKSHIRE BANK","city":"Juigalpa","country":"Nicaragua","salary":1089,"expenses":1419},
{"id":46,"first_name":"Nari","last_name":"Castard","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Zhangping","country":"China","salary":1937,"expenses":1416},
{"id":47,"first_name":"Clarinda","last_name":"Androsik","bank":"Bopfinger Bank Sechta-Ries eG","city":"Casuguran","country":"Philippines","salary":1635,"expenses":691},
{"id":48,"first_name":"Andros","last_name":"Cleaveland","bank":"Nuevo Micro Bank, S.A.","city":"Palpalá","country":"Argentina","salary":3066,"expenses":1202},
{"id":49,"first_name":"Trixie","last_name":"Minerdo","bank":"SECURITY STATE BANK","city":"Siteía","country":"Greece","salary":3510,"expenses":1022},
{"id":50,"first_name":"Myron","last_name":"Spillett","bank":"Raiffeisenbank Gratwein-Hitzendorf eGen","city":"Zhutian","country":"China","salary":2817,"expenses":878}]



const calculoAhorro = (user) =>{
    return user.salary - user.expenses
}

const infoUsuario = (user) =>{
    return {nombre : `${user.first_name} ${user.last_name}`,
        banco : user.bank,
        ahorro : calculoAhorro(user) }

}

const calcularClasificacionAhorro = (ahorroMensual) =>{
    return ahorroMensual <= 500
    ?"ahorro bajo"
    : ahorroMensual > 500 && ahorroMensual <1500
    ?"ahorro medio" 
    : "ahorro alto"
}


const BusquedaUsuario = (array)=>{
    
    let busqueda = false
    while (busqueda === false){
        const id = parseInt(prompt("Ingrése el ID que desea buscar: "));

        const UsuarioEncontrado = array.find((user)=>{
            return user.id === id;
        })
            if (UsuarioEncontrado){
                busqueda = true;
                return UsuarioEncontrado;
            
            }else{
                console.log("No existe ese id,sellecione otra id");
        }
    }
}


const UsuarioAhorroMensual = (array) =>{
    const usuario = BusquedaUsuario(array);
    const informacionUsuario = infoUsuario(usuario)
    return informacionUsuario

}


const agruparPor= (array, clave) => {
    const resultado =  {};

    array.forEach((user) => {
        const valorClave = user[clave];

        if (!resultado[valorClave]) {
            resultado[valorClave] = {
                [clave]: valorClave,
                cantidadUsuarios: 0,
                ahorroTotal: 0
            };
        }

        resultado[valorClave].cantidadUsuarios++;
        resultado[valorClave].ahorroTotal+= calculoAhorro(user);
    });

    return resultado;
};


const usuario = UsuarioAhorroMensual(users);
console.log(usuario);


users.forEach((user)=>{
    const informacionUsuario = infoUsuario(user)
    informacionUsuario.tipo = calcularClasificacionAhorro(informacionUsuario.ahorro)
    console.log (informacionUsuario)    
})

const usuariosBancos = agruparPor(users,"bank")
console.log(usuariosBancos)


const usuariosPais = agruparPor(users,"country")
console.log(usuariosPais)



