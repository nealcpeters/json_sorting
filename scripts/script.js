$.getJSON("data/data.json",
    function (data) {
        data.sort(function(a, b){
            return a.carrierName > b.carrierName;
        });

    var headers = Object.keys(data[1]);

    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        th = $('thead');
        th.append("<th>" + headers[i] + "</th>");
        tr.append("<td>" + data[i].carrierName + "</td>");
        tr.append("<td>" + data[i].planName + "</td>");
        tr.append("<td>" + data[i].copay + "</td>");
        tr.append("<td>" + data[i].premium + "</td>");
        tr.append("<td>" + data[i].annualLimit + "</td>");
        $('table').append(tr);
    }
});