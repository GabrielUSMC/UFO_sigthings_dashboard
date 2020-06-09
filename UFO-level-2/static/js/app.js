// from data.js
var td = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Check status of each selector
    var dateCheck = d3.select("#defaultCheckDate").property("checked");
    var cityCheck = d3.select("#cityCheck").property("checked");
    var stateCheck = d3.select("#stateCheck").property("checked");
    var countryCheck = d3.select("#countryCheck").property("checked");
    var shapeCheck = d3.select("#shapeCheck").property("checked");

    // Get the value property of the input element
    var inputValue = d3.select(".form-control").property("value");
    var inputArray = inputValue.split(" ");
    var filteredData = td.filter(s => true);
    // console.log(inputArray);

    if (dateCheck){
        filteredData = filteredData.filter(sighting => inputArray.includes(sighting.datetime));
    }
    if (cityCheck){
        filteredData = filteredData.filter(sighting => inputArray.includes(sighting.city));
    }
    if (stateCheck){
        filteredData = filteredData.filter(sighting => inputArray.includes(sighting.state));
    }
    if (countryCheck){
        filteredData = filteredData.filter(sighting => inputArray.includes(sighting.country));
    }
    if (shapeCheck){
        filteredData = filteredData.filter(sighting => inputArray.includes(sighting.shape));
    }
    

    // var filteredData = td.filter(sighting => sighting.datetime === inputValue);

    var table = d3.select("#ufo-table").select("tbody");

    table.html("");

    table.selectAll("tr")
    .data(filteredData)
    .enter()
    .append("tr")
    .html(d => `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`);



};
