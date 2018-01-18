const fs = require('fs'),
    request = require('request');


var proxyUrl = "http://proxy.intra.bt.com:8080"

var patchVersion = "8.1.1", //example 8.1.1 or 6.24.1 etc
    allChampDataUrl = "http://ddragon.leagueoflegends.com/cdn/" + patchVersion + "/data/en_US/champion.json", //fetch static champion data from the url
    itemsDataUrl = "http://ddragon.leagueoflegends.com/cdn/" + patchVersion + "/data/en_US/item.json"; //fetch static items data from the url

//var proxyUrl = "http://" + user + ":" + password + "@" + host + ":" + port;

function fetchData(params) {
    var options = {
        url: allChampDataUrl,
        proxy: proxyUrl, //'http://' + proxyList[getRandomInt(0,25)], //proxy,
        headers: {
            'User-Agent': "Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/527  (KHTML, like Gecko, Safari/419.3) Arora/0.6 (Change: )"
        }
    }

    var file = fs.createWriteStream("./Data/champ.json");

    request(options, function (err, resp, body) {
        //console.log(body)

    }).pipe(file, function (file) {

        data = JSON.parse(file)
        console.log(data)
        champNames()
    })
}


function champNames() {
    // get all the champions name in an arrray
    file = fs.readFileSync("./Data/champ.json", 'utf8')
    champData = JSON.parse(file)
    
    console.log(champData.data)

    
}

champNames()