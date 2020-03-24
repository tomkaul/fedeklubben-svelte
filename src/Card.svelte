<script>
  export let title;
  export let imageUrl;
</script>

<style>
  h3  {
    /* margin-left: 20px; */
	  font-weight: normal;
  }
</style>

<section>
  <h3>
    {title}
		<br>
    <img src={imageUrl} alt="Avatar for {title}" style="width: 18rem;"/>
  </h3>

  <div>
    <slot>
    </slot>
  </div>
</section>