// This file contains the code to draw the charts included in the Performance section.

// Draws the chart comparing connection:close and connection:keep-alive
function plot_keepalive() {
	var close_points = [];
	var keepalive_points = [];

	for (var i = 1; i <= 20; i += 1) {
		// Connection: close -> 3 RTT per resource
		close_points.push([i, 3*i]);

		// Connection: keep-alive -> 3 RTT + n-1 requests for n resources
		keepalive_points.push([i, 3 + (i - 1)]);
	} 

	$.plot("#keepalive_chart", [
			{ label: "close", hoverable: true, data: close_points}, 
			{ label: "keep-alive", hoverable:true, data: keepalive_points}
	], {
		series: {
			lines: { show: false },
			points: { show: true }
		},
		xaxis: {
			ticks: 20,
			tickDecimals: 0,
		}
	});
}
$(document).ready(
	function() {
		plot_keepalive();
	});
