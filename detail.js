$(document).ready(function () {
    var pageID = window.location.search.trim();
    var itemSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://my-json-server.typicode.com/JeyWav/jsonserver/singleitems" + pageID,
        "method": "GET",
        "dataType": "json",
    }
    
    $.ajax(itemSettings).done(function (response) {
        var myItem = "";
        var beat = "";
        $.each(response, function (i, val) {
            myItem += '<div class="card mt-4">'
            myItem += '<img class="card-img-top img-fluid" src="' + val.img + '" alt="">'
            myItem += '<div class="card-body">'
            myItem += '<h3 class="card-title">' + val.title + '</h3>'
            myItem += '<h4>' + val.price + '</h4>'
            myItem += '<p class="card-text">' + val.desc + '</p>'
            myItem += '<span class="text-warning">' + val.beat + '</span>'
            myItem += '</div>'
            myItem += '</div>'
            beat+='<a href="#" class="list-group-item list-group-item-action">'+val.beat+'</a>';
               // console.log('valore', obj.id); */
        });
        $("#singleItem").append(myItem);
        $("#listGroup").append(beat);
    });
    
       
 
    
});
