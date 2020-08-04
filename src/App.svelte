<script>
	import { onMount, onDestroy } from 'svelte';
	import { Cards, Music, Plot, Login, Tabs, TabList, TabPanel, Tab, Table } from './tabs.js';
	import images from './data.js';
  import { db } from "./firebase";

	// Hold the user
	let user = null;

	// Hold the data
	let data = null;

	// Save user
	function saveUser(event) {
		user = event.detail;
		// console.log(event.detail);		
	}

	// Load data
	let listener = null;
	// Add listener to data
	onMount(() => {
		// getData();
		listener = db.collection("plotData").onSnapshot(
      () => { 
				getData();
      },
			error => { 
				console.log(error)
			}
		);
	});
	// Kill listener
	onDestroy(() => listener());
	function getData() {
		db.collection("plotData")
			.get()
			.then(querySnapshot => {
				let dataX = {};
				querySnapshot.forEach(doc => {
					dataX[doc.id] = {data: doc.data().data };
					// data[doc.id].data = doc.data().data;
				});
				data = dataX;
				console.log("Loaded Data!");
			})
			.catch(error => {
				console.log("Error getting documents: ", error);
			});
	}
</script>

<style>
body {
  font: normal 16px/1 Verdana;
  box-sizing: content-box;
  padding: 0px;
	margin-top: 0px;
	margin-left: 0px;
	position: auto;	
	width:  103%;
	height: 101%;
}
.header {
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-size: 1.6em;
	font-weight: normal;
	color: white;
	background-color: #800000;
	margin-left: 20px;
	padding: 10px;
	margin: 0 0 0px 0px;
	/* border: 1px solid red; */
}
</style>

<svelte:head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
</svelte:head>

<body>
<div class="header">
	Fedeklubben Stubben
</div>
<Tabs>
	<TabList>
		<Tab>Vægt-kurver</Tab>
		<Tab>Vægt-tabel</Tab>
		<Tab>Fede Dyr</Tab>
		<!-- <Tab>Musik</Tab> -->
		<Tab>{user ? "Profil" : "Login"}</Tab>
	</TabList>

	<TabPanel>
		<h4>Vægt-plot for de fede dyr</h4>
		<Plot data = {data}/>
	</TabPanel>

	<TabPanel>
		<h4>Vægt-tabel for de fede dyr</h4>
		<Table data = {data}/>
	</TabPanel>

	<TabPanel>
		<h4>Billeder af fede dyr</h4>
		<Cards data = {data} images={images}/>
	</TabPanel>

	<!-- <TabPanel>
		<h4>Slanke-musik for fede dyr</h4>
		<Music/>
	</TabPanel> -->

	<TabPanel>
		{#if user}
		<h4>Hej {user.displayName} dit fede dyr</h4>
		{:else}
		<h4>Log et fedt dyr ind</h4>
		{/if}
		<Login user = {user} data = {data} on:user={saveUser} on:data={getData}/>
	</TabPanel>
</Tabs>
</body>