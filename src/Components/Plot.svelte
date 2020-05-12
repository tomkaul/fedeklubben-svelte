<script>
	import { onMount } from 'svelte';
	
	let canvasReady = false;
	let mounted = false;
	let chart;

	export let data;
	
	// Listen to data and update plot on change
	$: {
		if (mounted && canvasReady) {
			updatePlot(data);
		}
	}

	// Has canvas been loaded?
	function canvasLoaded () {
		canvasReady = true;
	}
	// Component mounted
	onMount(() => {
		mounted = true;
	});
	
	// Function updatePlot
	function updatePlot(data) {
		// Create plot data
		let plotData = []
		for (let key in data) {
			plotData.push({
				type: "line",
				showInLegend: true,
				name: key,
				// Plot weight loss, ie subtract initial weight
				dataPoints: data[key].data.map(function(val){ 
							return {x: val.x, y: val.y - data[key].data[0].y}; 
					})
			});
		};
		// Append goals
		plotData.push({
					type: "line",
					// showInLegend: true,
					// name: "Mål",
					lineDashType: "dash",
					dataPoints: [
						{ x: 11, y: 0 },
						{ x: 31, y: -10 }
					]
				});

			// Plotting options
		var options = {
			theme: "light2",
			axisX:{
				title: "Uge nr.",
				minimum: 11
				// valueFormatString: "DD MMM"
			},
			axisY: {
				title: "Vægt diff (kg)",
				//minimum: 30
			},
			legend:{
				// cursor:"pointer",
				verticalAlign: "bottom",
				horizontalAlign: "left",
				dockInsidePlotArea: true,
				// itemclick: toogleDataSeries
			},
			data: plotData,
		};
		chart = new CanvasJS.Chart("chartContainer", options).render();
	}
</script>

<svelte:head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"  on:load={canvasLoaded}></script>
</svelte:head>

<div id="chartContainer"></div>