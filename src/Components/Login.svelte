<script>
  import { createEventDispatcher } from 'svelte';
  // import AddData from './AddData.svelte';
  import {  Button, 
            Form, 
            FormGroup, 
            FormText, 
            Input, 
            Label, 
            Toast, 
            ToastBody, 
            ToastHeader } from 'sveltestrap';
  import { db, fb } from "../firebase";
  import Card from "./Card.svelte";
  
  // Props
  export let user = null;
  export let data = null;

  // Hold data for login
  let userData = {
    email: "",
    password: ""
  };

  // Can data be added?
  let canDataBeAdded = false;
  let newWeight = null;
  $: {
    if (user && data) {
      let name = user.displayName;
      let dd = data[user.displayName].data;
      let lastDataWeek = dd[dd.length - 1].x;
      // newWeight = dd[dd.length - 1].y;
      canDataBeAdded = lastDataWeek < getCurrentWeekNumber();
    }
  }

  // Event: Send back user to parent
  const dispatch = createEventDispatcher();
  function registerLogin(newUser) {
    dispatch("user", newUser);
  }

  // Login function
  async function login() {
		// alert("Email: " + email + "\nPassword: " + password);
    // user = userData.email;
    fb.auth()
      .signInWithEmailAndPassword(userData.email, userData.password)
      // eslint-disable-next-line no-unused-vars
      .then(_ => {
        var newUser = fb.auth().currentUser;
        registerLogin(newUser);
        })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }
	function logout() {
		// alert("Email: " + email + "\nPassword: " + password);
    fb.auth()
      .signOut()
      .then(() => {
        alert("User logged out successfully!");
        user = null;
      })
      .catch(err => {
        console.log(err);
      });
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
  <p>Så kan der tastes vægt-data ind!</p>
  <hr>
  Uge {getCurrentWeekNumber()}: 
  <input type="number" bind:value={newWeight}>
  <Button color="success" on:click={sendWeight}>Send</Button>
  <hr>
  {/if}
  <!-- <AddData user = {user} data = {data}> /> -->
  <Card title="Her er Fede-{user.displayName}" imageUrl={user.photoURL} />
	<Button color="danger" on:click={logout}>
		Logout
	</Button>
{:else}
<Form>
  <FormGroup>
    <Label for="loginEmail">Email</Label>
    <Input
      type="email"
      name="email"
      id="loginEmail"
			readonly=""
			bind:value={userData.email}
      placeholder="fedt-dyr@gmail.com" />
  </FormGroup>
  <FormGroup>
    <Label for="loginPassword">Password</Label>
    <Input
      type="password"
      name="password"
      id="loginPassword"
			readonly=""
			bind:value={userData.password}
      placeholder="angiv password" />
  </FormGroup>
  <!-- <FormGroup>
    <Label for="exampleFile">Foto</Label>
    <Input type="file" name="file" id="exampleFile" />
    <FormText color="muted">
      This is some placeholder block-level help text for the above input. It's a
      bit lighter and easily wraps to a new line.
    </FormText>
  </FormGroup> -->
</Form>
<Button color="success" on:click={login}>
	Login
</Button>
{/if}

