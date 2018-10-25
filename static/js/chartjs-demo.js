/*$(function () {

    var barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Data 1",
                backgroundColor: 'rgba(220, 220, 220, 0.5)',
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "Data 2",
                backgroundColor: 'rgba(26,179,148,0.5)',
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var barOptions = {
        responsive: true
    };

    var ctx2 = document.getElementById("barChart").getContext("2d");
    new Chart(ctx2, {type: 'bar', data: barData, options:barOptions});    
});*/

$(document).ready(function(){
    $('#reporte_contenido').click(function(){
        titulos =[];
        scores = [];
        
        $(".isbn").each(function(){
            titulos.push($(this).text());
        });
        $(".score").each(function(){
            scores.push($(this).text());
        });
        scores2 = [];
        $(".score2").each(function(){
            scores2.push($(this).text());
        });
    var barData = {
        labels: titulos,
        datasets: [
            {
                label: "Linear Kernel",
                backgroundColor: 'rgba(220, 220, 220, 0.5)',
                pointBorderColor: "#fff",
                data: scores
            },
            {
                label: "Cosine Similarity",
                backgroundColor: 'rgba(26,179,148,0.5)',
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: scores2
            }
        ]
    };

    var barOptions = {
        responsive: true
    };

    var ctx2 = document.getElementById("barChart").getContext("2d");
    new Chart(ctx2, {type: 'bar', data: barData, options:barOptions}); 
    });

    $('#reporte_colaborativo').click(function(){
        titulos =[];
        scores = [];

        $(".active").each(function(){
        
            $(".isbn").each(function(){
                titulos.push($(this).text());
            });
            $(".score").each(function(){
                scores.push($(this).text());
            });
            /*scores2 = [];
            $(".score2").each(function(){
                scores2.push($(this).text());
            });*/
            var barData = {
                labels: titulos,
                datasets: [
                    {
                        label: "SVD",
                        backgroundColor: 'rgba(220, 220, 220, 0.5)',
                        pointBorderColor: "#fff",
                        data: scores
                    }/*,
                    {
                        label: "Cosine Similarity",
                        backgroundColor: 'rgba(26,179,148,0.5)',
                        borderColor: "rgba(26,179,148,0.7)",
                        pointBackgroundColor: "rgba(26,179,148,1)",
                        pointBorderColor: "#fff",
                        data: scores2
                    }*/
                ]
            };

            var barOptions = {
                responsive: true
            };

            var ctx2 = document.getElementById("barChart").getContext("2d");
            new Chart(ctx2, {type: 'bar', data: barData, options:barOptions}); 
        });
    });
});
