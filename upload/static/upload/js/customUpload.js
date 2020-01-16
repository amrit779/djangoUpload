$(".custom-file-input").on("change", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
// document.getElementById("warning").style.display = "none";
$(document).ready(function () {
    $('#uploadfile').click(function () {
        try { 
            (function($) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var csvRows = e.target.result.split("\n");
                    var header = csvRows[0].split(",");
                    var table = []
        
                    for (var row = 1; row < csvRows.length; row++) {
                        var columns = csvRows[row].split(",");
                        var colsCount = columns.length;
                        if (colsCount != 4) {
                            console.log('Invalid data');
                        } else {
                            $("#uploadfile").addClass("btn btn-warning");
                            $("#uploadfile").prop('value', 'Uploading...');
                            $("#warning").hide();
                            tempDict = {};
                            tempDict[header[0]] = columns[0];
                            tempDict[header[1]] = columns[1];
                            tempDict[header[2]] = columns[2];
                            tempDict[header[3]] = columns[3];
                            table.push(tempDict);
                        }
                    }
                    table1 = JSON.stringify(table);
        
                    $.ajax({
                        url: "table/",
                        type: "POST",
                        data: table1,
                        cache: false,
                        traditional: true,
                        error: function (xhr, ajaxOptions, thrownError) {
                            $("#warning").html('Some error occurred ! Please try logging out from admin.')
                            $("#uploadfile").removeClass("btn btn-warning");
                            $("#uploadfile").addClass("btn btn-primary");
                            $("#uploadfile").prop('value', 'Import File');
                        },
                        success: function (data) {
                            $("#uploadfile").removeClass("btn btn-warning");
                            $("#uploadfile").addClass("btn btn-success");
                            $("#uploadfile").attr("disabled", true);
                            $("#uploadfile").prop('value', 'Successful');
                        }
                    });
                }
                reader.readAsText($("#inputfile")[0].files[0]);
        
            })(jQuery);
        } catch(err) {  //We can also throw from try block and catch it here
            $("#warning").html('Please select a file.');
        } finally {
            //code for finally block
        }
    });

    $('#viewfile').click(function () {
        window.location.href = "/viewCsv/";

    });
});


