/**
 * @author Chidinma Irene Nwoye
 */

console.log("my javascript loads!");

function dataLoaded(UNEMPDATA){            //UNEMPDATA is the local name for the JSON file
	
	console.log(UNEMPDATA);
	
	var myObsData = UNEMPDATA.observations; 
	//I'm trying to construct an array of arrays
	
	var myDataArray = [];     //my Data Array is the array  of arrays
	
	//1st parameter is starting point
	//specify starting point, ending point
	for(i=0; i<myObsData.length; i++){
		
		//create reference to current object in list
		var curObj = myObsData[i];
		var curArray= [curObj.date, curObj.value];
		myDataArray.push(curArray);    //pushin the little arrays into the big array myDataArray
		
	}// end of for loop
	console.log(myDataArray);
	
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

