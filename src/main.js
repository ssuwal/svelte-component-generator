import Greeting from './Greeting.svelte';

const greeting = new Greeting({
	target: document.body,
	props: {
		name: 'Crazy World Crazy Name'
	}
});

export default greeting;