<script>
  import Card from "./Card.svelte";
  export let data;
  // export let names;

  // Misc functions
  function get_weight_loss(key) {
    return (data[key].start_weight - data[key].data[data[key].data.length-1].y).toFixed(1);
  };
	// Sort after weight loss
  let names = Object.keys(data);
  names.sort(function (a,b) {return get_weight_loss(a)-get_weight_loss(b)});
  const items = [
		{
			title: "Fede " + names[0] + " ligger sidst: -" + get_weight_loss(names[0]) + 'kg',
			description: "Førbillede",
			imageUrl: data[names[0]].image
		},
    {
      title: "Så kommer " + names[1] + ": -" + get_weight_loss(names[1]) + 'kg',
			description: "Førbillede",
			imageUrl: data[names[1]].image
    },
		{
			title: "Derpå " + names[2] + ": -" + get_weight_loss(names[2]) + 'kg',
      description: "Førbillede",
      imageUrl: data[names[2]].image
		},
    {
      title: names[3] + " er gået i udbrud: -" + get_weight_loss(names[3]) + 'kg',
      description: "Claus førbillede",
      imageUrl: data[names[3]].image
    },
  ];
</script>

<hr />
{#each items as item}
  <Card title={item.title} imageUrl={item.imageUrl}>
    <!-- <hr /> -->
  </Card>
{/each}