function JSONParser(filePath){
    var self = this;

    var getData = function(filePath, callBack){
        $.getJSON(filePath, callBack)
    }
    
    this.sortData = function(data){
        data.sort(function(a, b) {
          return a.carrierName > b.carrierName;
        })
    }
    
    getHeaders = function(data) {
        return Object.keys(data[1]);
    }
    
    makeTable = function(data, headers) {
        for(var i=0;i<data.length;i++){
            $('thead').append("<th>" + headers[i] + "</th>");        
            var obj = data[i];
            for(var key in obj){
                $('table').append('<tr/>');
                $($('tr')[i]).append("<td>" + obj[key] + "</td>");
            }
        }
    }
    
    processData = function(data){
        self.sortData(data);
        var headers = getHeaders(data);
        makeTable(data, headers)
    }
    
    getData(filePath, processData)
}

var testing = new JSONParser("data/data.json")

// TESTING LOGIC BELOW:

var helper = [{
    "carrierName": "Zebra"
},{
    "carrierName": "Apple"
}]

function assert(data) {
  testing.sortData(data);  
  if (data[1]["carrierName"] == "Apple" && data[0]["carrierName"] == "Zebra") {
    console.log("false");
    throw "ERROR!";
  }
  console.log("true");
  return true;
}

assert(helper)