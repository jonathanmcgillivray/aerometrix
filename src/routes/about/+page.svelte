<script>
	import Statement from './Statement.svelte';
</script>

<main>

	<Statement
		image = '/Drone_Scan2.jpg'
		title = "We aim to transform renewable energy into the world's most efficient power source."
		subtitle = "Welcome to Aerometrix Ltd, a fresh and innovative technology company founded in Scotland, United Kingdom, by a dynamic father and son team."
	/>
	
	<div class="relative py-20 bg-black">
		<div class="w-[80%] mx-auto">
			<div class="flex justify-center items-center h-full text-white">
				<div class="w-[50%]">
					<img src="/aboutus.jpg" alt="Father and Son" class="w-[400px] md:w-[600px]">
				</div>
				<div class="w-[50%] px-10">
					<h1 class="text-2xl md:text-4xl font-bold">Our mission is to revolutionize the renewable energy sector by developing cutting-edge tools for asset management and maintenance.</h1>
					<!-- <h2 class="text-xl md:text-2xl my-8">But there’s a problem.</h2> -->
					<p class="text-xl md:text-2xl my-8">With our deep expertise in Geographic Information Systems (GIS), aerial imaging, and big data analytics, we are uniquely positioned to enhance the efficiency and effectiveness of renewable energy projects.</p>
					<p class="text-lg md:text-xl">At the heart of our operations is the integration of artificial intelligence into our workflows, enabling us to provide smarter, data-driven solutions that are not only effective but also sustainable. As a technology-driven company, we are committed to pushing the boundaries of what's possible in renewable energy management and maintenance, ensuring a greener future for all.</p>
					<!-- <p class="text-lg md:text-xl mt-4">The results? Industry-leading productivity, efficiency, and returns.</p> -->
				</div>
			</div>
		</div>
	
	</div>

</main>

<style>

</style>