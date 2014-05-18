function DataParser(filePath){
    var getData = function(fPath, callBack){
        $.getJSON(fPath, callBack)
    }
    
    var sortData = function(data){
        data.sort(function(a, b) {
          return a.carrierName > b.carrierName;
        })
    }
    
    var getHeaders = function(data) {
        return Object.keys(data[1]);
    }
    
    var makeTable = function(data, headers) {
        for(var i=0;i<data.length;i++){
            $('thead').append("<th>" + headers[i] + "</th>");        
            var obj = data[i];
            for(var key in obj){
                $('table').append('<tr/>');
                $($('tr')[i]).append("<td>" + obj[key] + "</td>");
            }
        }
    }
    
    var processData = function(data){
        sortData(data);
        var headers = getHeaders(data);
        makeTable(data, headers)
    }
    
    getData(filePath, processData)
}


new DataParser("data/data.json")