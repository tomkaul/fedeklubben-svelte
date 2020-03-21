<script>
	import { Tabs, TabList, TabPanel, Tab, Music, Cards, Plot, Table } from './tabs.js';
	import data from './data.js';
</script>

<svelte:head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</svelte:head>

<h1>
	Fedeklubben Stubben
</h1>
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