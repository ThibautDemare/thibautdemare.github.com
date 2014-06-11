var CSVArraySizeConnectedComponentsDistribution;
var filenameCCDistribution = "results_2014_04_11_12_18_25.txt";

var dataSizeConnectedComponentsDistribution = []; // 3
var chartSizeConnectedComponentsDistribution;
var chartSizeConnectedComponentsDistributionHasBeenWriten = false;
var sizeConnectedComponentsDistributionLoaded = false;

var charts = [
    chartSizeConnectedComponentsDistribution
];

var color1 = "#CF2220";
var color2 = "#CF17EF";
var color3 = "#23EE2B";
var color4 = "#197AD6";
var color5 = "#FFC82E";
var colorAxis = "#333333";

/*
 * Init
 */
$(document).ready(function() {
    Reveal.addEventListener( 'slidechanged', function( event ) {
        displayChartCCDistribution(event);
    });

    $.get("data/"+filename, function(data){
        getDataCCDistribution(data);
    });

});