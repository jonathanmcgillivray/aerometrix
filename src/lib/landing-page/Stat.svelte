<script>
    export let value = '';
    export let description = '';
</script>

<div class="flex justify-center flex-col h-full gradient-background">
    <div class="text-left h-full text-container flex-col justify-center items-center">
        <!-- <div> -->
            <h1 class="text-4xl md:text-6xl font-bold text-accent text-center">{value}</h1>
            <p class="text-lg md:text-xl text-center">{description}</p>
        <!-- </div>   -->
    </div>
</div>