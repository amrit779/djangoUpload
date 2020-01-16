$(".custom-file-input").on("change", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

$(document).ready(function () {

    $.ajax({
        url: "/table/",
        type: "GET",
        contentType: "application/json",
        dataType: 'json',
        error: function (xhr, ajaxOptions, thrownError) {
            alert("Some error occurred, Please try again.")
        },
        success: function (result) {
            var table_data = "";
            $.each(result, function (key, value) {
                table_data += "<tr>";
                table_data += "<td>" + value.id + "</td>";
                table_data += "<td>" + value.timestamp + "</td>";
                table_data += "<td>" + value.temperature + "</td>";
                table_data += "<td>" + value.duration + "</td>";
                table_data += "</tr>";
            });
            $("#task_table").append(table_data);
        }
    });
    $('#goBack').click(function () {
        window.location.href = "/";

    });
});
