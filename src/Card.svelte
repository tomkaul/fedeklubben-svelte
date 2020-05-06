<script>
  export let title;
  export let imageUrl;
</script>

<section>
  <h5>
    {title}
		<br>
    <img src={imageUrl} alt="Avatar for {title}" style="width: 18rem;"/>
  </h5>

  <div>
    <slot>
    </slot>
  </div>
</section>