/**
 * @author Chidinma Irene Nwoye
 */

console.log("my javascript loads!");

function dataLoaded(UNEMPDATA){            //UNEMPDATA is the local name for the JSON file
	
	console.log(UNEMPDATA);
	
	var myObsData = UNEMPDATA.observations; 
	//I'm trying to construct an array of arrays
	
	var myDataArray = [];     //my Data Array is the array  of arrays
	
	//I need headers to be the 1st element of my array i.e. to be the 1st row
	var headerArray = ["Date","Value"];
	myDataArray.push(headerArray);
	
	//1st parameter is starting point
	//specify starting point, ending point
	for(i=0; i<myObsData.length; i++){
		
		//create reference to current object in list
		var curObj = myObsData[i];
		var curArray= [curObj.date, Number(curObj.value)];   //Number converts the curObj from strings to numbers
		myDataArray.push(curArray);    //pushing the little arrays into the big array, myDataArray
		
	}// end of for loop
	
	console.log(myDataArray);
	
	//feed data to visualization library
	var mydataTable = google.visualization.arrayToDataTable(myDataArray);
	
	//create options object to actually customize the look of our chart
	var chartOptions = {
          title: "Unemployment Since 1980"
        };
	//tells Google Visualization to create a line chart and give it to the
	var myChart = new google.visualization.LineChart(document.getElementById('myChartDiv'));
	myChart.draw(mydataTable,chartOptions);
}


function loadedGoogle() {

	console.log("I've loaded Google!");
	
		//
	$.get("UEMP270V_data.json", dataLoaded, "json");

}


function pageLoaded() {

	console.log("I've uploaded my page!!");

	//load the google visualization library
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "loadedGoogle"
	});

}


$(document).ready(pageLoaded);
//I've used $(document).ready to call my function, pageLoaded

