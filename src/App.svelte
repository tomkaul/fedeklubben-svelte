<script>
	import { Tabs, TabList, TabPanel, Tab, Music, Cards, Plot, Table } from './tabs.js';
	import data from './data.js';
</script>

<style>
body {
  font: normal 16px/1 Verdana;
  box-sizing: content-box;
  padding: 0px;
	margin: -8px;
	position: auto;	
	/* background-color: linen; */
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
h2 {
	margin-left: 20px;
	font-weight: normal;
}
</style>

<body>
<div class="header">
	Fedeklubben Stubben
</div>
<Tabs>
	<TabList>
		<Tab>Vægt-kurver</Tab>
		<Tab>Vægt-tabel</Tab>
		<Tab>Fede Dyr</Tab>
		<Tab>Musik</Tab>
	</TabList>

	<TabPanel>
		<h2>Vægt-plot for de fede dyr</h2>
		<Plot dataPoints = {data}/>
	</TabPanel>

	<TabPanel>
		<h2>Vægt-tabel for de fede dyr</h2>
		<Table data = {data}/>
	</TabPanel>

	<TabPanel>
		<h2>Billeder af fede dyr</h2>
		<Cards/>
	</TabPanel>

	<TabPanel>
		<h2>Slanke-musik for fede dyr</h2>
		<Music/>
	</TabPanel>
</Tabs>
</body>