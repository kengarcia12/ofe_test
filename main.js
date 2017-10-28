
$(document).ready(function(){
    var t = $('#myTable').DataTable( { 
        select : true,
    	ajax: 'dataTab.json',
    	"columns": [
            {
                "className":      'details-control-cb',
                "orderable":      false,
                "data":           null,
                "defaultContent": '<input type = "checkbox">'
            },
            {
                "className":      'details-control-bm',
                "orderable":      false,
                "data":           null,
                "defaultContent": '<i>star</i>'
            },
            {
                "className":      'details-control-info',
                "orderable":      false,
                "data":           null,
                "defaultContent": '<i>?</i>'
            },
            { "data": "name" },
            { "data": "dwt" },
            { "data": "year_built" },
            { "data": "imo" },
            { "data": "type" },
            { "data": "country_built" },
            { "data": "yard" }
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
                    "className" : "viewAs"
                },
                {
                    "extend" : "colvis",
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
                "style": "multi"
            },
            "order": [[1, "asc"]]
           
    });




});



 