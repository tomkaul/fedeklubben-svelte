<script>
  import Card from "./Card.svelte";

  const items = [
    {
      title: "Claus",
      description: "Claus førbillede",
      imageUrl: "images/FedeAbe1.JPG"
    },
    {
      title: "Jacob",
      description: "Jacob førbillede",
      imageUrl: "images/FedeSeal.JPG"
    },
		{
			title: "Manse",
			description: "Manse førbillede",
			imageUrl: "images/FedeManse.JPG"
		},
		{
			title: "Thomas",
			description: "Thomas førbillede",
			imageUrl: "images/FedeAbe2.JPG"
		}
  ];
</script>

<hr />
{#each items as item}
  <Card title={item.title} imageUrl={item.imageUrl}>
    <hr />
  </Card>
{/each}