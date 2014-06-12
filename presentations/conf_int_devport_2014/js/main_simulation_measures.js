var CSVArray;
var filename = "results_2014_04_11_12_18_25.txt";

var dataNumberOfBatch = [];
var chartNumberOfBatch;
var chartNumberOfBatchHasBeenWriten = false;

var dataStockOnRoads = [];// 12
var chartStockOnRoads;
var chartStockOnRoadsHasBeenWriten = false;

var CSVArraySizeConnectedComponentsDistribution;
var filenameCCDistribution = "sizeConnectedComponentsDistribution_neighborhood_warehouse_FinalDestinationManager.csv";

var dataSizeConnectedComponentsDistribution = []; // 3
var chartSizeConnectedComponentsDistribution;
var chartSizeConnectedComponentsDistributionHasBeenWriten = false;
var sizeConnectedComponentsDistributionLoaded = false;

var loaded = false;

var charts = [
    chartNumberOfBatch,
    chartStockOnRoads,
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
    
    /*
     * Accelerate the speed of the video on the simulation
     */
    vid=document.getElementById("vid_simu");
    vid.playbackRate=3.0;
    
    /*
     * Charts management
     */
    Reveal.addEventListener( 'slidechanged', function( event ) {
        displayChart(event);
    });

    $.get("data/"+filename, function(data){
        getData(data);
    });


    $.get("data/"+filenameCCDistribution, function(data){
        getDataCCDistribution(data);
    });
});

/*
 * Display the selected chart and hide the others
 * Moreover, it init the selected chart, if it is the first time
 */
function displayChart(event){

    if(event != undefined){
        var id = $(event.currentSlide).attr("id");
        $("#slideChartNumberOfBatch").css("display", "none");
        $("#slideChartStockOnRoads").css("display", "none");
        $("#slideChartSizeConnectedComponentsDistribution").css("display", "none");
        if(id == "sectionChartNumberOfBatch"){
            $("#slideChartNumberOfBatch").css("display", "block");
            initChartNumberOfBatch();  
        }
        else if(id == "sectionChartStockOnRoads"){
            $("#slideChartStockOnRoads").css("display", "block");
            initChartStockOnRoads();
        }
        else if(id == "sectionChartSizeConnectedComponentsDistribution"){
            $("#slideChartSizeConnectedComponentsDistribution").css("display", "block");
            initChartSizeConnectedComponentsDistribution();
        }
    }
}

/*
 * Read the file and convert it to CSV
 */
function getDataCCDistribution(data){
    if(sizeConnectedComponentsDistributionLoaded) {
        if(charts[2] != undefined){
            charts[2].clear();

            dataSizeConnectedComponentsDistribution.length = 0;
        }
    }
    else{
        sizeConnectedComponentsDistributionLoaded = true;
    }

    $.csv.toArrays(data, {separator:";"}, function(err, receivedData){
        processDataCCDistribution(err, receivedData);
    });
}

/*
 * Call methods in order to process data and to display charts and options
 */
function processDataCCDistribution(err, receivedData){
    CSVArraySizeConnectedComponentsDistribution = $.extend(true, [], receivedData);
    extractDataCCDistribution();
}

/*
 * Extract CSV data and build maps used by AmCharts to display charts
 */
function extractDataCCDistribution(){
    for(var i = 0; i<CSVArraySizeConnectedComponentsDistribution.length; i++){
        if(CSVArraySizeConnectedComponentsDistribution[i][1] == 0){
            dataSizeConnectedComponentsDistribution.push({
                time: parseInt(CSVArraySizeConnectedComponentsDistribution[i][0],10),
                sizeConnectedComponentsDistribution:0.01
            });
        }
        else{
            dataSizeConnectedComponentsDistribution.push({
                time: parseInt(CSVArraySizeConnectedComponentsDistribution[i][0],10),
                sizeConnectedComponentsDistribution: CSVArraySizeConnectedComponentsDistribution[i][1]
            });
        }
    }
}
/*
 * Read the file and convert it to CSV
 */
function getData(data){
    if(loaded) {
        for(var i = 0; i<charts.length; i++){
            if(charts[i] != undefined){
                charts[i].clear();
            }
        }
        dataStockOnRoads.length = 0;
        dataNumberOfBatch.length = 0;
    }
    else{
        loaded = true;
    }

    $.csv.toArrays(data, {separator:";"}, function(err, receivedData){
        processData(err, receivedData);
    });
}

/*
 * Call methods in order to process data and to display charts and options
 */
function processData(err, receivedData){
    CSVArray = $.extend(true, [], receivedData);
    extractData();

    displayChart();
}

/*
 * Extract CSV data and build maps used by AmCharts to display charts
 */
function extractData(){
    for(var i = 2; i<CSVArray.length; i+=24){
        dataNumberOfBatch.push({
            time: parseInt(CSVArray[i][0],10),
            numberOfBatchLargeToAverage: CSVArray[i][3],
            numberOfBatchAverageToSmall: CSVArray[i][4],
            numberOfBatchSmallToFinal: CSVArray[i][5],
            numberOfBatchProviderToLarge: CSVArray[i][6],
            totalNumberOfBatch: CSVArray[i][7]
        });

        dataStockOnRoads.push({
            time: parseInt(CSVArray[i][0],10),
            stockOnRoadsProviderToLarge: CSVArray[i][8],
            stockOnRoadsLargeToAverage: CSVArray[i][9],
            stockOnRoadsAverageToSmall: CSVArray[i][10],
            stockOnRoadsSmallToFinal: CSVArray[i][11],
            stockOnRoads: CSVArray[i][12]
        });
    }
}

/*
 * Init the chart with the number of batch of goods
 */
function initChartNumberOfBatch(){
    chartNumberOfBatchHasBeenWriten = true;
    chartNumberOfBatch = new AmCharts.AmSerialChart();

    chartNumberOfBatch.dataProvider = dataNumberOfBatch;
    chartNumberOfBatch.categoryField = "time";

    chartNumberOfBatch.fontSize = 18;

    var legend = new AmCharts.AmLegend();
    legend.valueWidth = 50;
    legend.fontSize = 18;
    legend.maxColumns = 2;
    chartNumberOfBatch.addLegend(legend);

    var graph1 = new AmCharts.AmGraph();
    graph1.type = "line";
    graph1.valueAxis = "time";
    graph1.valueField = "totalNumberOfBatch";
    graph1.title = "Total number of batch of goods";
    graph1.id = "g1";
    graph1.lineThickness = 1;
    graph1.lineColor = color1;
    graph1.balloonText = "<b><span style='font-size:20px;'>value: [[value]]</span></b>";
    chartNumberOfBatch.addGraph(graph1);

    var graph2 = new AmCharts.AmGraph();
    graph2.type = "line";
    graph2.valueAxis = "time";
    graph2.valueField = "numberOfBatchLargeToAverage";
    graph2.title = "Batches between national and regional";
    graph2.id = "g2";
    graph2.lineThickness = 1;
    graph2.lineColor = color2;
    graph2.balloonText = "<b><span style='font-size:20px;'>value: [[value]]</span></b>";
    chartNumberOfBatch.addGraph(graph2);

    var graph3 = new AmCharts.AmGraph();
    graph3.type = "line";
    graph3.valueAxis = "time";
    graph3.valueField = "numberOfBatchAverageToSmall";
    graph3.title = "Batches between regional and local";
    graph3.id = "g3";
    graph3.lineThickness = 1;
    graph3.lineColor = color3;
    graph3.balloonText = "<b><span style='font-size:20px;'>value: [[value]]</span></b>";
    chartNumberOfBatch.addGraph(graph3);

    var graph4 = new AmCharts.AmGraph();
    graph4.type = "line";
    graph4.valueAxis = "time";
    graph4.valueField = "numberOfBatchSmallToFinal";
    graph4.title = "Batches between local warehouses and final destinations";
    graph4.id = "g4";
    graph4.lineThickness = 1;
    graph4.lineColor = color4;
    graph4.balloonText = "<b><span style='font-size:20px;'>value: [[value]]</span></b>";
    chartNumberOfBatch.addGraph(graph4);

    var graph5 = new AmCharts.AmGraph();
    graph5.type = "line";
    graph5.valueAxis = "time";
    graph5.valueField = "numberOfBatchProviderToLarge";
    graph5.title = "Batches between provider and national";
    graph5.id = "g5";
    graph5.lineThickness = 1;
    graph5.lineColor = color5;
    graph5.balloonText = "<b><span style='font-size:20px;'>value: [[value]]</span></b>";
    chartNumberOfBatch.addGraph(graph5);

    chartNumberOfBatch.pathToImages = "./img/";

    chartNumberOfBatch.categoryAxis.parseDates = false;
    chartNumberOfBatch.categoryAxis.gridAlpha = 0.15;
    chartNumberOfBatch.categoryAxis.minorGridEnabled = true;
    chartNumberOfBatch.categoryAxis.axisColor = colorAxis;
    chartNumberOfBatch.categoryAxis.title = "Step of the simulation (1 step = 60 artificial minutes)";

    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.axisColor = colorAxis;
    valueAxis.id ="v1";
    valueAxis.integersOnly = true;
    valueAxis.title = "Number of batches";
    valueAxis.minimum = 0;
    chartNumberOfBatch.addValueAxis(valueAxis);

    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.cursorPosition = "mouse";
    chartNumberOfBatch.addChartCursor(chartCursor);

    var chartScrollbar = new AmCharts.ChartScrollbar();
    chartScrollbar.scrollbarHeight = 50;
    chartScrollbar.color = "#FFFFFF";
    chartScrollbar.autoGridCount = true;
    chartScrollbar.graph =  "g1";
    chartNumberOfBatch.addChartScrollbar(chartScrollbar);

    chartNumberOfBatch.numberFormatter = {
        precision: 0,
        decimalSeparator: ",",
        thousandsSeparator:" ",
    };

    charts[2] = chartNumberOfBatch;
    chartNumberOfBatch.write("chartNumberOfBatch");
}

/*
 * Init the chart with the stocks of goods within the batch
 */
function initChartStockOnRoads(){
    chartStockOnRoadsHasBeenWriten = true;
    chartStockOnRoads = new AmCharts.AmSerialChart();

    chartStockOnRoads.dataProvider = dataStockOnRoads;
    chartStockOnRoads.categoryField = "time";

    chartStockOnRoads.fontSize = 18;

    var legend = new AmCharts.AmLegend();
    legend.valueWidth = 90;
    legend.fontSize = 18;
    legend.maxColumns = 2;
    chartStockOnRoads.addLegend(legend);

    var graph1 = new AmCharts.AmGraph();
    graph1.type = "line";
    graph1.valueAxis = "time";
    graph1.valueField = "stockOnRoads";
    graph1.title = "Total quantity of goods on roads";
    graph1.id = "g1";
    graph1.lineThickness = 1;
    graph1.lineColor = color1;
    graph1.balloonText = "<b><span style='font-size:20px;'>value: [[value]]</span></b>";
    chartStockOnRoads.addGraph(graph1);
    
    var graph3 = new AmCharts.AmGraph();
    graph3.type = "line";
    graph3.valueAxis = "time";
    graph3.valueField = "stockOnRoadsAverageToSmall";
    graph3.title = "Quantity between regional and local";
    graph3.id = "g3";
    graph3.lineThickness = 1;
    graph3.lineColor = color3;
    graph3.balloonText = "<b><span style='font-size:20px;'>value: [[value]]</span></b>";
    chartStockOnRoads.addGraph(graph3);

    var graph5 = new AmCharts.AmGraph();
    graph5.type = "line";
    graph5.valueAxis = "time";
    graph5.valueField = "stockOnRoadsProviderToLarge";
    graph5.title = "Quantity between provider and national";
    graph5.id = "g5";
    graph5.lineThickness = 1;
    graph5.lineColor = color5;
    graph5.balloonText = "<b><span style='font-size:20px;'>value: [[value]]</span></b>";
    chartStockOnRoads.addGraph(graph5);

    var graph2 = new AmCharts.AmGraph();
    graph2.type = "line";
    graph2.valueAxis = "time";
    graph2.valueField = "stockOnRoadsLargeToAverage";
    graph2.title = "Quantity between national and regional";
    graph2.id = "g2";
    graph2.lineThickness = 1;
    graph2.lineColor = color2;
    graph2.balloonText = "<b><span style='font-size:20px;'>value: [[value]]</span></b>";
    chartStockOnRoads.addGraph(graph2);

    var graph4 = new AmCharts.AmGraph();
    graph4.type = "line";
    graph4.valueAxis = "time";
    graph4.valueField = "stockOnRoadsSmallToFinal";
    graph4.title = "Quantity between local and final destinations";
    graph4.id = "g4";
    graph4.lineThickness = 1;
    graph4.lineColor = color4;
    graph4.balloonText = "<b><span style='font-size:20px;'>value: [[value]]</span></b>";
    chartStockOnRoads.addGraph(graph4);

    chartStockOnRoads.pathToImages = "./img/";

    chartStockOnRoads.categoryAxis.parseDates = false;
    chartStockOnRoads.categoryAxis.gridAlpha = 0.15;
    chartStockOnRoads.categoryAxis.minorGridEnabled = true;
    chartStockOnRoads.categoryAxis.axisColor = colorAxis;
    chartStockOnRoads.categoryAxis.title = "Step of the simulation (1 step = 60 artificial minutes)";

    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.axisColor = colorAxis;
    valueAxis.id ="v1";
    valueAxis.integersOnly = true;
    valueAxis.title = "Occupied surface (in m²)";
    valueAxis.minimum = 0;
    chartStockOnRoads.addValueAxis(valueAxis);

    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.cursorPosition = "mouse";
    chartStockOnRoads.addChartCursor(chartCursor);

    var chartScrollbar = new AmCharts.ChartScrollbar();
    chartScrollbar.scrollbarHeight = 50;
    chartScrollbar.color = "#FFFFFF";
    chartScrollbar.autoGridCount = true;
    chartScrollbar.graph =  "g1";
    chartStockOnRoads.addChartScrollbar(chartScrollbar);

    chartStockOnRoads.numberFormatter = {
        precision: 0,
        decimalSeparator: ",",
        thousandsSeparator:" ",
    };

    charts[3] = chartStockOnRoads;
    chartStockOnRoads.write("chartStockOnRoads");
}

/*
 * Init the chart with the distribution of size of connected components
 */
function initChartSizeConnectedComponentsDistribution(){
    chartSizeConnectedComponentsDistributionHasBeenWriten = true;
    chartSizeConnectedComponentsDistribution = new AmCharts.AmSerialChart();

    chartSizeConnectedComponentsDistribution.dataProvider = dataSizeConnectedComponentsDistribution;
    chartSizeConnectedComponentsDistribution.categoryField = "time";

    chartSizeConnectedComponentsDistribution.fontSize = 18;

    var legend = new AmCharts.AmLegend();
    legend.valueWidth = 50;
    legend.fontSize = 18;
    legend.maxColumns = 2;
    chartSizeConnectedComponentsDistribution.addLegend(legend);

    var legend = new AmCharts.AmLegend();
    chartSizeConnectedComponentsDistribution.addLegend(legend);

    var graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.valueAxis = "time";
    graph.valueField = "sizeConnectedComponentsDistribution";
    graph.title = "Number of connected components";
    graph.id = "g1";
    graph.lineThickness = 1;
    graph.lineColor = color1;
    graph.balloonText = "<b><span style='font-size:20px;'>value: [[value]]</span></b>";
    chartSizeConnectedComponentsDistribution.addGraph(graph);

    chartSizeConnectedComponentsDistribution.pathToImages = "./img/";

    chartSizeConnectedComponentsDistribution.categoryAxis.parseDates = false;
    chartSizeConnectedComponentsDistribution.categoryAxis.gridAlpha = 0.15;
    chartSizeConnectedComponentsDistribution.categoryAxis.minorGridEnabled = true;
    chartSizeConnectedComponentsDistribution.categoryAxis.axisColor = colorAxis;
    chartSizeConnectedComponentsDistribution.categoryAxis.title = "Size of connected components (in number of nodes)";

    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.axisColor = colorAxis;
    valueAxis.id ="v1";
    valueAxis.integersOnly = true;
    valueAxis.title = "Number of connected components";
    valueAxis.minimum = 0.1;
    valueAxis.logarithmic = true;
    chartSizeConnectedComponentsDistribution.addValueAxis(valueAxis);

    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.cursorPosition = "mouse";
    chartSizeConnectedComponentsDistribution.addChartCursor(chartCursor);

    var chartScrollbar = new AmCharts.ChartScrollbar();
    chartScrollbar.scrollbarHeight = 50;
    chartScrollbar.color = "#FFFFFF";
    chartScrollbar.autoGridCount = true;
    chartScrollbar.graph =  "g1";
    chartSizeConnectedComponentsDistribution.addChartScrollbar(chartScrollbar);

    chartSizeConnectedComponentsDistribution.numberFormatter = {
        precision: 0,
        decimalSeparator: ",",
        thousandsSeparator:" ",
    };

    charts[2] = chartSizeConnectedComponentsDistribution;
    chartSizeConnectedComponentsDistribution.write("chartSizeConnectedComponentsDistribution");
}

// changes cursor mode from pan to select
function setPanSelect() {
    for(var i = 0; i<charts.length; i++){
        if(charts[i] != undefined){
            var chartCursor = charts[i].chartCursor;
            if ($("#rb1").is(':checked')) {
                chartCursor.pan = false;
                chartCursor.zoomable = true;
            } else {
                chartCursor.pan = true;
                chartCursor.zoomable = false;
            }
            charts[i].validateNow();
        }
    }
}           