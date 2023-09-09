<script lang="ts">
	import { contactMessage } from '$lib/stores/contactMessage';

	let name = '';
	let email = '';
	let phoneNumber = '';

	const sendMessage = async () => {
		const errors = document.getElementById('errors') as HTMLDivElement;
		errors.innerHTML = 'Sending Your Mail... Hold On';
		// errors.classList.add('success');
		console.log($contactMessage);
		if (name === '' || email === '' || phoneNumber === '' || $contactMessage === '') {
			const errors = document.getElementById('errors') as HTMLDivElement;
			errors.innerHTML = 'Please fill all the fields';
			errors.classList.add('error');
			return;
		}
		if (!email.includes('@') || !email.includes('.') || email.length < 5) {
			const errors = document.getElementById('errors') as HTMLDivElement;
			errors.innerHTML = 'Please enter a valid email';
			errors.classList.add('error');
			return;
		}
		if (isNaN(Number(phoneNumber))) {
			const errors = document.getElementById('errors') as HTMLDivElement;
			errors.innerHTML = 'Please enter a valid phone number';
			errors.classList.add('error');
			return;
		}

		const res = await fetch('/api/sendMessage', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, email, phoneNumber, $contactMessage })
		});
		const response = await res.json();

		if (response.success) {
			const errors = document.getElementById('errors') as HTMLDivElement;
			errors.innerHTML = 'Mail Sent';
			errors.classList.add('success');
		} else {
			const errors = document.getElementById('errors') as HTMLDivElement;
			errors.innerHTML = 'Mail not sent';
			errors.classList.add('error');
		}
		setTimeout(() => {
			errors.innerHTML = '';
			errors.classList.remove('error');
			errors.classList.remove('success');
		}, 5000);
	};
</script>

<svelte:head>
	<title>Contact Web Designer</title>
	<meta
		name="description"
		content="Get started with a free consultation. Discover how our web design and SEO services can transform your online presence."
	/>
</svelte:head>

<div id="contactBox">
	<!--  -->
	<br /><br />
	<h1>Contact Me!</h1>

	<div class="allHeadersForId">
		<div class="Name">
			<p>Name:</p>
			<input type="text" name="name" bind:value={name} />
		</div>

		<div class="Email">
			<p>Email:</p>
			<input type="email" name="email" bind:value={email} />
		</div>

		<div class="phoneNumber">
			<p>Phone Number:</p>
			<input type="tel" name="phoneNumber" bind:value={phoneNumber} />
		</div>

		<div class="message">
			<p>Write your message here:</p>
			<textarea name="message" bind:value={$contactMessage} />
		</div>

		<div id="errors" />

		<div class="sendBtn">
			<button on:click={sendMessage}> SEND </button>
		</div>
	</div>

	<br /><br />
</div>

<style>
	.sendBtn {
		text-align: center;
	}
	.sendBtn button {
		background-color: #ddd;
		border: 1px solid #000;
		padding: 1rem 2rem;
		margin-top: 1rem;
		transition: all 0.3s ease-in-out;
		border-radius: 10px;
	}
	.sendBtn button:hover {
		background-color: var(--primary);
		padding: 1rem 3rem;
		border-radius: 25px;

		color: #fff;
		box-shadow: var(--boxShadowsBlur);
	}
	h1 {
		text-align: center;
	}
	.allHeadersForId {
		width: 80%;
		margin: 0 10%;
		padding: 1rem 0;
	}
	.Name input,
	.Email input,
	.phoneNumber input {
		width: 90%;
		padding: 3% 5%;
		border-radius: 10px;
	}
	.message textarea {
		width: 90%;
		height: 100px;
		resize: none;
		padding: 3% 5%;
		border-radius: 10px;
	}

	input,
	textarea {
		border: 1px solid #000;
	}
</style>
