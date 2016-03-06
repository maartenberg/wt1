// This file contains the code to draw the charts included in the Performance section.

var commonChartData = {
		series: {
			lines: { show: false },
			points: { show: true }
		},
		xaxis: {
			ticks: 20,
			tickDecimals: 0,
		},
		legend: {
			position: "nw"
		}
	};

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
	], commonChartData);
}

function plot_https_keepalive() {
	var close_points = []; //with connection:close
	var keepalive_points = []; //with keep-alive
	
	for (var i = 1; i <= 20; i += 1) {
		// close: 6 RTT (3 TCP + 2 TLS + request) * n
		close_points.push([i, 6*i]);

		// keep-alive: 5RTT + n
		keepalive_points.push([i, 5 + i]);
	}

	$.plot("#keepalive_https_chart", [
			{ label: "close", data: close_points},
			{ label: "keep-alive", data: keepalive_points }
			], commonChartData);

}
$(document).ready(
	function() {
		plot_keepalive();
		plot_https_keepalive();
	});
