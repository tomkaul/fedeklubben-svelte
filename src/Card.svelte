<script>
  export let title;
  export let imageUrl;
</script>

<style>
  /* Something to make it look pretty */
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