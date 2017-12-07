function nextQuote(q) {
    q.preventDefault();
    $.ajax({
        url: "https://random-quote-generator.herokuapp.com/api/quotes/random"})
        .done(function (data) {
            $("#quote").html(data.quote);
            $("#author").html(data.author);
        });
};

function tweet() {
    var quote = $("#quote").text();
    var author = $("#author").text();
    location.href = `https://twitter.com/intent/tweet?hashtags=quote_of_the_day&text=${quote} 
    -${author}`
}

$(document).ready(function() {
    
    $("#next-quote").click(nextQuote);

    $("#twitter").click(tweet);

});


