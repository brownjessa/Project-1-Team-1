// article key70d33a5bb880c7ea27d6d510a14fac55
$(document).ready(function () {




    $("button").on("click", function () {



    });
        function displayArticleInfo() {

            var article = $(this).attr("display-article");
            var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=KA8lDAriISCJyVV0ouUHqjPUROdmn2nc";


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                console.log(response);

            });

        }
    }); 






