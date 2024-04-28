<script>
	export let image = '/background.jpg';
	export let title = 'SolarView: Effortless Solar Energy Management';
	export let subtitle = 'An innovative drone aerial data and inspection platform designed to streamline the processing and display of reports for thermographic and optical inspections of solar power plants';
</script>

<div class="relative h-[70vh] bg-cover bg-top">
    <div class="absolute inset-0 bg-top" style="background-image: url({image}); background-repeat: no-repeat; background-size: cover; background-position: center;"></div>
	<div
		class="absolute inset-0"
		style="background: linear-gradient(
        to top,
        rgba(0,0,0,1.0) 0%,
        rgba(0,0,0,0.75) 25%,
        rgba(0,0,0,0.5) 50%,
        rgba(0,0,0,0.5) 75%,
        rgba(2,14,30,0.75) 85%,
        rgba(2,14,30,1.0) 100%);"
	></div>
    <div class="absolute inset-0">
        <div class="flex flex-col justify-top h-full ml-5 mt-10 lg:ml-[10%] text-white"
        style="z-index: 20;">
            <div>
                <h1 class="w-full lg:w-[60%] text-6xl font-bold">{title}</h1>
            </div>
            <div class="max-w-[420px]">
                <p class="mt-4 text-xl">{subtitle}</p>
            </div>
        </div>
    </div>

</div>
