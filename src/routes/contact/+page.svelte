<script>
	// Page-specific JavaScript here
	import Statement from './Statement.svelte';

</script>

<main>
	<div class="bg-black text-white flex h-[calc(100vh-5rem)] flex-col">
	<Statement
		image = '/inverness.jpg'
		title = "Get in touch with us!"
		subtitle = "We're located in Inverness, Scotland, United Kingdom. Feel free to reach out to us with any questions or inquiries. We're here to help!"
	/>
	
	<div class="py-5">
		<div class="w-[80%] mx-auto">
			<p class="text-1xl font-bold mt-1">
				Aerometrix Ltd<br>
				76 Miller Road<br>
				Inverness, IV2 3EN<br>
				Scotland, United Kingdom
			</p>
			<!-- <div class="m-8" >
				<img src="/panel.jpg" alt="Solar Panels" style="border-radius: 2%;" class="w-[400px] md:w-[600px]">
			</div> -->
			<!-- Google Maps iframe -->
			<!-- <div class="mt-5">
				<iframe
					src="YOUR_GOOGLE_MAPS_EMBED_LINK_HERE"
					width="600"
					height="450"
					style="border:0;"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade">
				</iframe>
			</div> -->
			<p class="text-1xl font-bold mt-10">
				Email: hello@aerometrix.co <br>
				Phone: +44(0) 7917 493657
			</p>
		</div>
	</div>
	</div>
</main>