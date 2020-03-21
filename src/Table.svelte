<script>
  export let data;
  
  // Misc function
  function get_start_weight(key) {
    return data[key].start_weight.toFixed(1);
  };
  function get_current_weight(key) {
    return (data[key].start_weight + data[key].data[data[key].data.length-1].y).toFixed(1);
  };
  function get_weight_loss(key) {
    return -data[key].data[data[key].data.length-1].y.toFixed(1);
  };

  // Create table data, first a header row
  var tableHeader = [];
  tableHeader[0] = new Date().toISOString().slice(0,10);
  for (let name in data) {
    tableHeader.push(name);
  }
  // Now the content
  const rowGen = {
    'Startvægt': get_start_weight,
    'Nuv.vægt' : get_current_weight,
    'Vægttab'  : get_weight_loss
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

<svelte:head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</svelte:head>


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
