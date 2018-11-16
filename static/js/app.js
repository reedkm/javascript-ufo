// Set filteredData to dataSet initially
var filteredData = data;

// Get references to the tbody element, input fields and buttons
var tbody = d3.select("#body");
var datetime = d3.select("#datetime");
var city = d3.select("#city");
var state = d3.select("#state");
var shape = d3.select("#shape");


// Filter the table for date #################################
var filter = d3.select("#filter-date");

filter.on("click", function() {

	// Prevent the page from refreshing
	d3.event.preventDefault();

	// Select the input element and get the raw HTML node
	var inputElement = d3.select("#datetime");

	// Get the value property of the input element
	var inputValue = inputElement.property("value");
	
	var filterDate = inputValue;
	if (filterDate != "") {
		filteredData = data.filter(function (xfile) {
			var xfileDate = xfile.datetime;
			return xfileDate === filterDate;
		});
	};
	renderTable();
});
// Filter the table for date #################################

// Filter the table for city #################################
var filter = d3.select("#filter-city");

filter.on("click", function() {

	// Prevent the page from refreshing
	d3.event.preventDefault();

	// Select the input element and get the raw HTML node
	var inputElementCity = d3.select("#city");

	// Get the value property of the input element
	var inputValueCity = inputElementCity.property("value");
	
	var filterCity = inputValueCity;
	if (filterCity != "") {
		filteredData = filteredData.filter(function (xfile) {
			var xfileCity = xfile.city;
			return xfileCity === filterCity;
		});
	};
	renderTable();
});
// Filter the table for city #################################


// Filter the table for state #################################
var filter = d3.select("#filter-state");

filter.on("click", function() {

	// Prevent the page from refreshing
	d3.event.preventDefault();

	// Select the input element and get the raw HTML node
	var inputElementState = d3.select("#state");

	// Get the value property of the input element
	var inputValueState = inputElementState.property("value");
	
	var filterState = inputValueState;
	if (filterState != "") {
		filteredData = filteredData.filter(function (xfile) {
			var xfileState = xfile.state;
			return xfileState === filterState;
		});
	};
	renderTable();
});
// Filter the table for state #################################

// Filter the table for shape #################################
var filter = d3.select("#filter-shape");

filter.on("click", function() {

	// Prevent the page from refreshing
	d3.event.preventDefault();

	// Select the input element and get the raw HTML node
	var inputElementShape = d3.select("#shape");

	// Get the value property of the input element
	var inputValueShape = inputElementShape.property("value");
	
	var filterShape = inputValueShape;
	if (filterShape != "") {
		filteredData = filteredData.filter(function (xfile) {
			var xfileShape = xfile.Shape;
			return xfileShape === filterShape;
		});
	};
	renderTable();
});
// Filter the table for shape #################################


// renderTable renders the filtered data to the tbody
function renderTable() {
	tbody.innerHTML = "";
	for (var i = 0; i < filteredData.length; i++) {
		// Get get the current xfile object and its fields
		var xfile = filteredData[i];
		var fields = Object.keys(xfile);
	var tr = d3.select("tbody").selectAll("tr")
	.data(filteredData).enter().append("tr");
	// ... cells
	var td = tr.selectAll("td")
	.data(function(d){return d3.values(d)})
	.enter().append("td")
	.text(function(d) {return d});
	}
}

// Reset the table
var reset = d3.select("#reset-btn");

// Reset the data and search form after a search
reset.on("click", function() {
	filteredData = data;
	datetime.value = "";
	city.value = "";
	state.value = "";
	shape.value = "";
	renderTable();
});

// Render the table for the first time on page load
// renderTable();

