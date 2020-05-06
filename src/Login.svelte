<script>
  import { Button, Form, FormGroup, FormText, Input, Label } from 'sveltestrap';
	
	let email = "";
	let password = "";
	let user = null;

	// Login function
	function login() {
		// alert("Email: " + email + "\nPassword: " + password);
		user = email;
  }
	function logout() {
		// alert("Email: " + email + "\nPassword: " + password);
		user = null;
  }
</script>

{#if user}
	<p>Hello {email}</p>
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
			bind:value={email}
      placeholder="fedt-dyr@gmail.com" />
  </FormGroup>
  <FormGroup>
    <Label for="loginPassword">Password</Label>
    <Input
      type="password"
      name="password"
      id="loginPassword"
			readonly=""
			bind:value={password}
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

