


var lookup = (word) => {
    $.ajax({
        type: "get",
        url: "query-word",
        // async: false,
        data: `keyword=${word}`,
        dataType: "json",
    }).done((data)=>{
        console.log("in done method");

        if (data.length === 0) {
            $("#searchResultDiv").append(`<p> Not found!</p>`);
        } else {
            // build result div
            data.map((el, idx) => {
                $("#searchResultDiv").append(`<p>${idx}(${el.wordtype}) :: ${el.definition}</p>`);
            })
        }

        // enable back the lookup button
        $("#lookupBtn").prop("disabled", false);
        $("#searchResultLoader").hide();

    }).fail((jqXHR, textStatus, errorThrown)=>{
        console.log("in fail method");
        console.log( 'Could not get posts, server response: ' + textStatus + ': ' + errorThrown );
    });
};


$(document).ready(() => {
    console.log("we are ready!!!!!");
    $("#searchResultLoader").hide();

    $("#lookupBtn").click((e) => { 
        let word = $("#word").val().trim();

        // insert loader
        $("#searchResultDiv").text("");
        $("#searchResultLoader").show();

        // disable lookup button
        $("#lookupBtn").prop("disabled", true);

        lookup(word);
    });
});