$(document).ready(function () {
    var count = 0;

    $("#addrow").on("click", function () {

        counter = $('.student tr').length - 1;

        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="text" name="fname' + counter + '"/></td>';
        cols += '<td><input type="text" name="lname' + counter + '"/></td>';
        cols += '<td><input type="text" name="phone' + counter + '"/></td>';
        cols += '<td><input type="button" class="btnDel"  value="Delete"></td>';
        newRow.append(cols);
        if (counter == 10) $('#addrow').attr('disabled', true).prop('value', "You've reached the maximum number of entries");
        $("table.student").append(newRow);
        count++;
    });


    $("table.student").on("click", ".btnDel", function (event) {
        $(this).closest("tr").remove();
        
        counter -= 1;
        $('#addrow').attr('disabled', false).prop('value', "Add Row");
    });


});

