$(document).ready(function() {

function apiSearch() {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': '4de0a7c184ad4e409062d648965112ca'
        }
    })
        .done(function (data) {
            var len = data.webPages.value.length;
            var results = '';
            for (i = 0; i < len; i++) {
                results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert('error');
        });
}

$(function() {
    $("#Search").button();

    $("#Search").click(function() {
        apiSearch();
    });
});

$(function() {
    $("#lucky").button();

    //$("#Search").click(function() {
       // apiSearch();
   // });
});

$(function() {
    $("#tiktok").button();

    // $("#Search").click(function() {
    //     apiSearch();
    // });
});

var flag = false;

$("#hetle").click( function (){

    flag = !flag;

    if(flag){
        $('body').css('background-image', 'url("icywold.jpg")');
    }
    else{
        $('body').css('background-image', 'url("wolf2.jpg")');
    }


})

});

