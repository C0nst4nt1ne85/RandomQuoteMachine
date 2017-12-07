function nextQuote(q) {
    q.preventDefault();
    $.ajax({
        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"})
        .done(function (data) {
            $("#quote").html(data.content);
            $("#author").html(data.title);
        });
};

function tweet() {
    ;
}

$(document).ready(function() {
    
    $("#next-quote").click(nextQuote);

    $("#twitter").click(tweet);

});


