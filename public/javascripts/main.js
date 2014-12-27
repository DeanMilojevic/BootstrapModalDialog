$(function(){
    $("#modal-button").on("click", function () {
        var $url = $(this).attr("data-url");

        $("#modal-dialog").load($url, function(data){
            $("#myModal").modal("show");
        });
    });
});