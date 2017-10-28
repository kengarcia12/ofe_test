
$(document).ready(function(){
    var t = $('#myTable').DataTable( { 
        rowId: 'imo',
        pageLength: 100,
        select : true,
        ajax: 'dataTab.json',
        columns: [
            {
                "className":      "details-control-cb",
                "orderable":      false,
                "data":           null,
                "defaultContent": "<input type = 'checkbox'>"
            },
            {
                "className":      "details-control-fav",
                "orderable":      false,
                "data":           null,
                "defaultContent": "<i class='fa fa-star-o fav' aria-hidden='true'></i>",
            },
            {
                "className":      "details-control-info",
                "orderable":      false,
                "data":           null,
                "defaultContent": "<i class='fa fa-question' aria-hidden='true'></i>"
            },
            { "data": "name" },
            { "data": "dwt" },
            { "data": "year_built" },
            { "data": "imo" },
            { "data": "type" },
            { "data": "country_built" },
            { "data": "yard" },
            {
                "className":      "circle",
                "defaultContent": "<i class='fa fa-circle-o' aria-hidden='true'></i>"
            },
            {
                "className":      "address",
                "defaultContent": "<i class='fa fa-address-book' aria-hidden='true'></i>"
            },
            {
                "className":      "phone",
                "defaultContent": "<i class='fa fa-phone' aria-hidden='true'></i>"
            }
           ],
           "dom": "Bfrtip",
           "buttons": [
                {
                    "extend": "csv",
                    "text" : "Export to csv",
                    "title": "OFE Data export",
                    "exportOptions": {

                           modifier: {
                                selected: true
                            },
                            columns: "thead th:not(.noExport)"
                    },
                    "className" : "csvButton"
                },
                {
                    "text" : "SEND VIA EMAIL",
                    "className" : "email" 
                },
                {
                    "text" : " VIEW AS",
                    "className" : "view"
                },
                {
                    "text" : "<i class='fa fa-th-large' aria-hidden='true'></i> ",
                    "className" : "gridIcon"
                },
                {
                    "text" : "<i class='fa fa-list-ul' aria-hidden='true'></i>",
                    "className" : "listIcon"
                },
                {
                    "extend" : "colvis",
                    "text" : "<i class='fa fa-cog' aria-hidden='true'></i>",
                    "columns" : ":not(.noVis)"
                } 
            ],
            "columnDefs": [
                {
                    "targets": 0,
                    "checkboxes": {
                       'selectRow': true
                    },
                    "className": "noVis"
                },
                {
                    "targets" : 1,
                    "className" : "noVis"
                }
            ],
            "select": {
                "style": "multi",
                "selector": 'td:first-child'
            },
            initComplete : function(){ 
                var favid =  getCookie('fav-list');
                showFavorites(favid); 

                $('.fav').on('click', function(){

                    var favIds = '';
                    var active = $(this).hasClass('fa-star-o');

                    //update state
                    if(active){    
                        $(this).removeClass('fa-star-o').addClass('fa-star'); 
                    }else{
                        $(this).removeClass('fa-star').addClass('fa-star-o');
                    }

                    //get all fav from table
                    $('.details-control-fav .fa-star').each(function(){
                        favIds += $(this).parents('tr').attr('id')  + ',' ;
                    })

                    // update cookie favList
                    setCookie('fav-list', favIds, 180);


                });
                $("#allFav").click(function(){
                    $(".fav").click();
                });

             }
    });

});


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function showFavorites(ids){
    var id = ids.split(',');
    $.each(id, function(idx,val){
        if(val != '')
            $('tr[id='+val+']').find('.fav').removeClass('fa-star-o').addClass('fa-star');    
    });
}

 