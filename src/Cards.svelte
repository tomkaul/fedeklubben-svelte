<script>
  import Card from "./Card.svelte";

  const items = [
		{
			title: "Fede Manse ligger sidst: -1.7kg",
			description: "Manse førbillede",
			imageUrl: "images/FedeManse.JPG"
		},
    {
      title: "Så kommer Thomas: -1.8kg",
			description: "Thomas førbillede",
			imageUrl: "images/FedeAbe2.JPG"
    },
		{
			title: "Derpå Jaksen: -2.4kg",
      description: "Jacob førbillede",
      imageUrl: "images/FedeSeal.JPG"
		},
    {
      title: "Claus er gået i udbrud: -4.4kg",
      description: "Claus førbillede",
      imageUrl: "images/FedeAbe1.JPG"
    },
  ];
</script>

<hr />
{#each items as item}
  <Card title={item.title} imageUrl={item.imageUrl}>
    <hr />
  </Card>
{/each}