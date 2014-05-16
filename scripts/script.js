$.getJSON("data/data.json",

    function (data) {
        data.sort(function(a, b){
            return a.carrierName > b.carrierName;
        });

    var tr;
    var headers = Object.keys(data);
    for (var i = 0; i < headers.length; i++) {
        tr = $('<tr/>');
        tr.append("<th>" + headers[i] + "</th>");
        $('table').append(tr);
    }
    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i].carrierName + "</td>");
        tr.append("<td>" + data[i].planName + "</td>");
        tr.append("<td>" + data[i].copay + "</td>");
        tr.append("<td>" + data[i].premium + "</td>");
        tr.append("<td>" + data[i].annualLimit + "</td>");
        $('table').append(tr);
    }
});