<script>
  export let data;

  // Misc functions
  function get_start_weight(key) {
    return data[key].start_weight.toFixed(1);
  };
  function get_current_weight(key) {
    return (data[key].data[data[key].data.length-1].y).toFixed(1);
  };
  function get_weight_loss(key) {
    return (data[key].start_weight - data[key].data[data[key].data.length-1].y).toFixed(1);
  };

  // Create table data, first a header row
  var tableHeader = [];
  tableHeader[0] = new Date().toISOString().slice(0,10);
  for (let name in data) {
    tableHeader.push(name);
  }
  // Now the content
  const rowGen = {
    'Startvægt (kg)': get_start_weight,
    'Nuv.vægt (kg)' : get_current_weight,
    'Vægttab (kg)'  : get_weight_loss
  };
  var rows = [];
  var i = 0;
  for (let key in rowGen) {
    rows[i] = [];
    rows[i][0] = key;
    for (let name in data) {
      rows[i].push(rowGen[key](name));
    }
    i += 1;
  }
</script>

<style>
.table {
  font-family: "Trebuchet MS", Verdana, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.table td, .table th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.table tr:nth-child(even){background-color: #f2f2f2;}

.table th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #4CAF50;
  color: white;
}
</style>

<table class="table table-striped">
  <thead class='thead-dark'>
  <tr>
    {#each tableHeader as thItem}
    <th> {thItem} </th>
    {/each}
  </tr>
  </thead>
	{#each rows as cells}
		<tr> 
			{#each cells as cell}
				<td>{cell}</td>
			{/each}
		</tr>
	{/each}
</table>
