$(document).ready(function() {

function apiSearch(isLuck) {
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
            if(isLuck) {
                window.location.href = data.webPages.value[0].url;
            }
            else{
            var len = data.webPages.value.length;
            var results = '';
            for (i = 0; i < len; i++) {
                results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog({
                height: $(window).height()
            });
        }
        })
        .fail(function () {
            alert('error');
        });
        $('#searchResults').css('visibility', 'visible');
}

$(function() {
    $("#Search").button();

    $("#Search").click(function() {
        apiSearch(false);
    });

    $('#query').keypress(function(event) {
        if (event.which === 13) { 
            apiSearch(false);
            event.preventDefault();
        }
    });
});


$(function() {
    $("#lucky").button();

    $("#lucky").click(function() {
       apiSearch(true);
   });
});

$(function() {
    $("#tiktok").button();

    $("#tiktok").click(function() {
    var moment = new Date();
    var hours = String(moment.getHours()).padStart(2, '0');
    var mins = String(moment.getMinutes()).padStart(2, '0');
    $('#time').html ("Time: <br>" + hours + ":"+ mins);
    $('#time').dialog({
        height: 100,
        width: 100
    });
    $('#time').css('visibility', 'visible');
});
});

$('#query').addClass('ui-widget ui-widget-content ui-corner-all');

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

