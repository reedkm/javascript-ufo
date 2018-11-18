// Kenneth Reed

var tableData = data;

var tbody = d3.select("#body");

var reset = d3.select("#reset-btn");

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

// Filter the table for date #################################
var filterDate = d3.select("#filter-date");

filterDate.on("click", function() {
	filterTableDate();
});

// filterTableDate filters by date input
function filterTableDate() {
	// Prevent the page from refreshing
	d3.event.preventDefault();
	
	//clears previous filter
	tbody.text("<!-- Cleared? -->")
	 
	// Prevent the page from refreshing
	d3.event.preventDefault();

	// Select the input element and get the raw HTML node
	var inputElement = d3.select("#datetime");
	
	// Get the value property of the input element
	var inputValue = inputElement.property("value");
	var cityInputValue = inputElement.property("value");

	var filteredData = tableData.filter(data => data.datetime === inputValue);

	// Loop to build filtered table body
	filteredData.forEach(function(xFileDate) {
		var row = tbody.append('tr');	
		Object.entries(xFileDate).forEach(function([key, value]) {
			var cell = row.append('td');
			cell.text(value);
	 });
	})
}