// Variable for data
var tableData = data

// Variable for tbody
var tbody = d3.select("#body");
// Select the input elements
var reset = d3.select("#reset-btn");

// Select the input elements
var dateInput = d3.select("#datetime");
var cityInput = d3.select("#city");
var stateInput = d3.select("#state");
var countryInput = d3.select("#country");
var shapeInput = d3.select("#shape");
var durationInput = d3.select("#duration");
var commentaryInput = d3.select("#commentary");

reset.on("click", function() {
	buildTable();
});

// Set initial table
buildTable();

// buildTable renders the data to the tbody
function buildTable() {
	// Loop to build table body
	data.forEach(function(xFiles) {
		var row = tbody.append('tr');	
		Object.entries(xFiles).forEach(function([key, value]) {
			var cell = row.append('td');
			cell.text(value);
		})
	})
}

// buildTable renders the data to the tbody
function clearTable() {
	// Prevent the page from refreshing
	d3.event.preventDefault();
	
	// Loop to build table body
	data.forEach(function(xFiles) {
		var row = tbody.append('tr');
		Object.entries(xFiles).forEach(function([key, value]) {
			var cell = row.append('td');
			cell.text(value);
		})
	})
}

// Filter the table #################################
var filter = d3.select("#filter-btn");

filter.on("click", function() {
	filterTable();
});

// Filter table by input
function filterTable() {
	// Prevent the page from refreshing
	d3.event.preventDefault();
	
	//clears previous filter
	tbody.text("")
	
	// Prevent the page from refreshing
	d3.event.preventDefault();	
	
	// Filter for date
	if (dateInput != "") {

	var dateInputValue = dateInput.property("value");

	var filteredData = tableData.filter(data => data.datetime === dateInputValue);
	// Loop to build filtered table body
	filteredData.forEach(function(xFileDate) {
		var row = tbody.append('tr');	
		Object.entries(xFileDate).forEach(function([key, value]) {
			var cell = row.append('td');
			cell.text(value);
	 });
	})	
	}
	// Filter for city
	if (cityInput != "") {

	var cityInputValue = cityInput.property("value");

	var filteredData = tableData.filter(data => data.city === cityInputValue);
		// Loop to build filtered table body
	filteredData.forEach(function(xFileDate) {
		var row = tbody.append('tr');	
		Object.entries(xFileDate).forEach(function([key, value]) {
			var cell = row.append('td');
			cell.text(value);
	 });
	})	
	}
	// Filter for state
	if (stateInput != "") {

	var stateInputValue = stateInput.property("value");

	var filteredData = tableData.filter(data => data.state === stateInputValue);
		// Loop to build filtered table body
	filteredData.forEach(function(xFileDate) {
		var row = tbody.append('tr');	
		Object.entries(xFileDate).forEach(function([key, value]) {
			var cell = row.append('td');
			cell.text(value);
	 });
	})	
	}
	 // Filter for country
	if (countryInput != "") {

	var countryInputValue = countryInput.property("value");

	var filteredData = tableData.filter(data => data.state === countryInputValue);
		// Loop to build filtered table body
	filteredData.forEach(function(xFileDate) {
		var row = tbody.append('tr');	
		Object.entries(xFileDate).forEach(function([key, value]) {
			var cell = row.append('td');
			cell.text(value);
	 });
	})	
	}
	// Filter for shape
	if (shapeInput != "") {

	var shapeInputValue = shapeInput.property("value");

	var filteredData = tableData.filter(data => data.shape === shapeInputValue);
		// Loop to build filtered table body
	filteredData.forEach(function(xFileDate) {
		var row = tbody.append('tr');	
		Object.entries(xFileDate).forEach(function([key, value]) {
			var cell = row.append('td');
			cell.text(value);
	});
	})	
	}
}

// Append new sightings #################################
var append = d3.select("#append-btn");

append.on("click", function() {
	appendTable();
});

// Append table by input
function appendTable() {
   
	// Prevent the page from refreshing
	d3.event.preventDefault();
	
	// Set form inputs for values
	var dateInputValue = dateInput.property("value");
	var cityInputValue = cityInput.property("value");
	var stateInputValue = stateInput.property("value");
	var countryInputValue = countryInput.property("value");
	var shapeInputValue = shapeInput.property("value");
	var durationInputValue = durationInput.property("value");
	var commentaryInputValue = commentaryInput.property("value");

	// Append values
	var inputs =[];
	inputs.push({"datetime": dateInputValue});
	inputs.push({"city": cityInputValue});
	inputs.push({"state": stateInputValue});
	inputs.push({"country": countryInputValue});
	inputs.push({"shape": shapeInputValue});
	inputs.push({"duration": durationInputValue});
	inputs.push({"comments": commentaryInputValue});
	// Push values
	data.push(inputs);

		var row = tbody.append('tr');
		Object.entries(inputs).forEach(function([key, value]) {
			var cell = row.append('td');
			cell.text(Object.values(value)[0]);
		});
}

// Can write to table in browser, but JavaScript cannot write to hardrive, so data is lost on reset
