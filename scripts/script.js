$.parseJSON("data/data.json",
function (data) {
    var tr;
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