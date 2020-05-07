<script>
  import { createEventDispatcher } from 'svelte';
  import {  Button, 
            Form, 
            FormGroup, 
            FormText, 
            Input, 
            Label, 
            Toast, 
            ToastBody, 
            ToastHeader } from 'sveltestrap';
  import { fb } from "../firebase";
  import Card from "./Card.svelte";
  
  // Props
  export let user = null;

  // Hold data for login
  let userData = {
    email: "",
    password: ""
  };

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
</script>

{#if user}
	<p>Hello {user.displayName}</p>
  <Card title="Her er dit foto" imageUrl={user.photoURL}>
    <!-- <hr /> -->
  </Card>
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

