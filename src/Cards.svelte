<script>
  import Card from "./Card.svelte";

  const items = [
		{
			title: "Fede Thomas ligger sidst",
			description: "Thomas førbillede",
			imageUrl: "images/FedeAbe2.JPG"
		},
    {
      title: "Så kommer Claus",
      description: "Claus førbillede",
      imageUrl: "images/FedeAbe1.JPG"
    },
		{
			title: "Derpå Manse",
			description: "Manse førbillede",
			imageUrl: "images/FedeManse.JPG"
		},
    {
      title: "Jacob er gået i udbrud",
      description: "Jacob førbillede",
      imageUrl: "images/FedeSeal.JPG"
    },
  ];
</script>

<hr />
{#each items as item}
  <Card title={item.title} imageUrl={item.imageUrl}>
    <hr />
  </Card>
{/each}