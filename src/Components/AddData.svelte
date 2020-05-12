<script>
  import { createEventDispatcher } from 'svelte';
  import {  Button, 
            Input, 
            Toast, 
            ToastBody, 
            ToastHeader } from 'sveltestrap';
  import { db, fb } from "../firebase";
  
  // Props
  export let user = null;
  export let data = null;

  // Can data be added?
  let canDataBeAdded = false;
  let newWeight = 0;
  $: {
    if (user && data) {
      let name = user.displayName;
      let dd = data[user.displayName].data;
      let lastDataWeek = dd[dd.length - 1].x;
      // newWeight = dd[dd.length - 1].y;
      canDataBeAdded = lastDataWeek < getCurrentWeekNumber();
    }
  }

  // Send new weight data
  function sendWeight() {
    let name = user.displayName;
    let dd = { ...data[user.displayName] };
    dd.data.push({
      x: getCurrentWeekNumber(),
      y: newWeight
    });
    console.log(dd);
    db.collection("plotData")
      .doc(user.displayName)
      .update(dd)
      .then(() => {
        console.log("Added data to " + data.id);
      })
      .catch(err => {
        console.log(err);
      });
    // Send data event to parent
    dispatch("data", {});
  }
  // Check for week number
  function getCurrentWeekNumber() {
    // Get week number (2020)
    let date = new Date();
    // eslint-disable-next-line prettier/prettier
    let wn = Math.ceil((((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000 + 2) / 7));
    // console.log(wn);
    return wn;
  }
</script>

{#if user}
  {#if canDataBeAdded}
  <hr>
  Din vægt i uge {getCurrentWeekNumber()}: 
  <input type="number" bind:value={newWeight}>
  <Button color="success" on:click={sendWeight}>Send</Button>
  <hr>
  {/if}
{/if}

