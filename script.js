$(document).ready(function () {
    var itemSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://my-json-server.typicode.com/JeyWav/jsonserver/items",
        "method": "GET",
        "dataType": "json",
    }
    $.ajax(itemSettings).done(function (response) {
        var myItem = "";
        $.each(response, function (i, obj) {
            myItem += '<div class="col-lg-4">';
            myItem += '<div class="card ' + obj.id + '"  id="' + obj.id + '">';
            myItem += '<a href="detail.html?id=' + obj.id + '" class="link card">';
            myItem += '<img src="' + obj.img + '" class="card-img-top" alt="...">';
            myItem += '<div class="card-body">';
            myItem += '<h5 class="card-title">Acoustic/Unplugged Beat</h5>' + obj.title + '</a>';
            myItem += '<h4>' + obj.price + '</h4>';
            myItem += '<p class="card-text">utilizzo di strumenti acustici</p>' + obj.desc + '</p>';
            myItem += '<p class="card-text"><small class="text-muted">' + obj.beat + '</small>';
            myItem += '</p>';
            myItem += '</div>';
            myItem += '</a>';
            myItem += '</div>';
            myItem += '</div>';
            // console.log('valore', obj.id);
        });
        $("#listItems").append(myItem);
    });
})
