const users = [{"id":1,"first_name":"Laverna","last_name":"Richardes","email":"lrichardes0@t-online.de","gender":"Bigender","ip_address":"113.64.228.26"},
    {"id":2,"first_name":"Alistair","last_name":"Coutthart","email":"acoutthart1@qq.com","gender":"Bigender","ip_address":"70.222.26.194"},
    {"id":3,"first_name":"Rosamund","last_name":"Pien","email":"rpien2@epa.gov","gender":"Female","ip_address":"72.208.97.181"},
    {"id":4,"first_name":"Lori","last_name":"Issett","email":"lissett3@gov.uk","gender":"Female","ip_address":"156.206.199.228"},
    {"id":5,"first_name":"Lambert","last_name":"Emmins","email":"lemmins4@xinhuanet.com","gender":"Male","ip_address":"4.32.95.202"},
    {"id":6,"first_name":"Eldridge","last_name":"Keeton","email":"ekeeton5@networkadvertising.org","gender":"Male","ip_address":"128.254.171.39"},
    {"id":7,"first_name":"Neddy","last_name":"Caso","email":"ncaso6@twitpic.com","gender":"Male","ip_address":"109.13.208.157"},
    {"id":8,"first_name":"Bobbie","last_name":"Gajewski","email":"bgajewski7@springer.com","gender":"Male","ip_address":"10.36.40.72"},
    {"id":9,"first_name":"Linoel","last_name":"Glaves","email":"lglaves8@storify.com","gender":"Male","ip_address":"151.230.123.103"},
    {"id":10,"first_name":"Charley","last_name":"Branston","email":"cbranston9@lulu.com","gender":"Male","ip_address":"201.194.179.170"},
    {"id":11,"first_name":"Lora","last_name":"Batt","email":"lbatta@hostgator.com","gender":"Female","ip_address":"238.201.194.245"},
    {"id":12,"first_name":"Gib","last_name":"St Louis","email":"gstlouisb@ocn.ne.jp","gender":"Male","ip_address":"38.108.219.22"},
    {"id":13,"first_name":"Leda","last_name":"Schohier","email":"lschohierc@networkadvertising.org","gender":"Genderqueer","ip_address":"134.168.177.145"},
    {"id":14,"first_name":"Aylmer","last_name":"Hatry","email":"ahatryd@senate.gov","gender":"Male","ip_address":"194.72.165.38"},
    {"id":15,"first_name":"Dru","last_name":"Bogie","email":"dbogiee@goo.ne.jp","gender":"Genderqueer","ip_address":"199.232.196.11"},
    {"id":16,"first_name":"Celle","last_name":"Kindle","email":"ckindlef@rakuten.co.jp","gender":"Female","ip_address":"120.136.202.94"},
    {"id":17,"first_name":"Ranique","last_name":"Savory","email":"rsavoryg@stumbleupon.com","gender":"Female","ip_address":"102.19.79.230"},
    {"id":18,"first_name":"Erich","last_name":"Teideman","email":"eteidemanh@ebay.com","gender":"Agender","ip_address":"252.106.136.155"},
    {"id":19,"first_name":"Daffy","last_name":"Stefi","email":"dstefii@fotki.com","gender":"Female","ip_address":"141.22.240.153"},
    {"id":20,"first_name":"Phillipe","last_name":"Rigge","email":"priggej@a8.net","gender":"Male","ip_address":"156.5.78.196"},
    {"id":21,"first_name":"Matteo","last_name":"Heffernan","email":"mheffernank@who.int","gender":"Male","ip_address":"227.210.240.22"},
    {"id":22,"first_name":"Tristam","last_name":"Leasor","email":"tleasorl@oaic.gov.au","gender":"Male","ip_address":"190.161.164.5"},
    {"id":23,"first_name":"Hollie","last_name":"Sandcroft","email":"hsandcroftm@weibo.com","gender":"Female","ip_address":"147.67.46.31"},
    {"id":24,"first_name":"Berrie","last_name":"Abela","email":"babelan@symantec.com","gender":"Genderfluid","ip_address":"131.149.135.44"},
    {"id":25,"first_name":"Dannel","last_name":"Mardoll","email":"dmardollo@tumblr.com","gender":"Male","ip_address":"146.202.215.130"},
    {"id":26,"first_name":"Sol","last_name":"Langley","email":"slangleyp@buzzfeed.com","gender":"Male","ip_address":"187.85.151.90"},
    {"id":27,"first_name":"Briano","last_name":"Boxe","email":"bboxeq@bing.com","gender":"Male","ip_address":"200.127.24.24"},
    {"id":28,"first_name":"Iseabal","last_name":"MacNaughton","email":"imacnaughtonr@nasa.gov","gender":"Female","ip_address":"115.104.49.67"},
    {"id":29,"first_name":"Viki","last_name":"Runsey","email":"vrunseys@amazon.co.uk","gender":"Female","ip_address":"222.35.130.236"},
    {"id":30,"first_name":"Alicea","last_name":"Goor","email":"agoort@pcworld.com","gender":"Female","ip_address":"79.62.99.41"},
    {"id":31,"first_name":"Edd","last_name":"Gribble","email":"egribbleu@umich.edu","gender":"Genderqueer","ip_address":"12.9.71.196"},
    {"id":32,"first_name":"Garik","last_name":"Boissieux","email":"gboissieuxv@opensource.org","gender":"Male","ip_address":"4.37.249.22"},
    {"id":33,"first_name":"Ursa","last_name":"Bourthouloume","email":"ubourthouloumew@angelfire.com","gender":"Female","ip_address":"173.162.182.116"},
    {"id":34,"first_name":"Elaina","last_name":"Dufall","email":"edufallx@twitpic.com","gender":"Female","ip_address":"32.182.88.177"},
    {"id":35,"first_name":"Henrik","last_name":"Kille","email":"hkilley@alexa.com","gender":"Male","ip_address":"90.21.242.192"},
    {"id":36,"first_name":"Georgi","last_name":"Coverlyn","email":"gcoverlynz@theatlantic.com","gender":"Male","ip_address":"128.108.147.74"},
    {"id":37,"first_name":"Daryl","last_name":"Tubritt","email":"dtubritt10@boston.com","gender":"Female","ip_address":"112.187.186.2"},
    {"id":38,"first_name":"Julina","last_name":"Beilby","email":"jbeilby11@umn.edu","gender":"Female","ip_address":"32.120.97.249"},
    {"id":39,"first_name":"Kimmie","last_name":"Newland","email":"knewland12@typepad.com","gender":"Bigender","ip_address":"242.65.111.4"},
    {"id":40,"first_name":"Leticia","last_name":"Charge","email":"lcharge13@virginia.edu","gender":"Female","ip_address":"251.155.167.150"},
    {"id":41,"first_name":"Julio","last_name":"Summerbell","email":"jsummerbell14@webs.com","gender":"Male","ip_address":"38.114.40.101"},
    {"id":42,"first_name":"Thomasina","last_name":"Benedict","email":"tbenedict15@etsy.com","gender":"Female","ip_address":"113.230.206.18"},
    {"id":43,"first_name":"Roscoe","last_name":"Downer","email":"rdowner16@netlog.com","gender":"Male","ip_address":"168.196.222.44"},
    {"id":44,"first_name":"Phyllis","last_name":"Bartaletti","email":"pbartaletti17@china.com.cn","gender":"Female","ip_address":"206.36.59.208"},
    {"id":45,"first_name":"Nils","last_name":"Dunmore","email":"ndunmore18@blogspot.com","gender":"Male","ip_address":"78.5.1.213"},
    {"id":46,"first_name":"Cass","last_name":"Stack","email":"cstack19@howstuffworks.com","gender":"Female","ip_address":"195.187.203.255"},
    {"id":47,"first_name":"Nanice","last_name":"Kingcote","email":"nkingcote1a@dmoz.org","gender":"Female","ip_address":"98.6.6.32"},
    {"id":48,"first_name":"Hilary","last_name":"Dacca","email":"hdacca1b@t-online.de","gender":"Female","ip_address":"126.8.9.171"},
    {"id":49,"first_name":"Ewart","last_name":"Skipping","email":"eskipping1c@theatlantic.com","gender":"Male","ip_address":"27.67.56.107"},
    {"id":50,"first_name":"Law","last_name":"McLeoid","email":"lmcleoid1d@prnewswire.com","gender":"Male","ip_address":"59.221.17.51"}]


const id = parseInt(prompt("Ingrése el ID que desea buscar: "));

const usuario_encontrado = users.find((user)=>{
    return user.id === id;
})

if(usuario_encontrado){
    console.log(usuario_encontrado)
}else{
    console.log("no existe ese id de usuario")
}


const contador_generos = users.reduce((acc,user)=>{
    const genero = user .gender
    if(acc[genero]){
        acc[genero]++;
    }
    else{
       acc[genero]=1; 
    }
    return acc
},{})

console.log(contador_generos);