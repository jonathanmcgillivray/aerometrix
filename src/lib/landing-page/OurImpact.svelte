<script>
    import Stat from './Stat.svelte';
    let stats = [
        {
            number: '$42B',
            description: 'of assets under contract'
        },
        {
            number: '12',
            description: 'gigawatts served'
        },
        {
            number: '45%',
            description: 'of South African solar panels monitored annually'
        },
        {
            number: '5B',
            description: 'solar panels inspected'
        }
    ]

</script>

<div class="bg-black text-white pt-10 pb-20">
    
    <div class="w-[80%] mx-auto">
        <h1 class="text-2xl md:text-4xl font-bold">Our global impact</h1>

        <div class="flex justify-between items-center align-middle">
                <div class="mt-8 w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {#each stats as stat}
                        <div class="w-full glow-effect py-10">
                            <Stat value={stat.number} description={stat.description} />
                        </div>
                    {/each}
                </div>
        </div>
    </div>
</div>

<style>
    .glow-effect {
        position: relative;
        background-image: radial-gradient(circle,
        rgba(215, 223, 35, 0.2),
        rgba(215, 223, 35, 0) 90%);
        /* box-shadow: 0 0 8px 8px rgba(255, 255, 255, 0.2); */
        /* border-radius: 50%; Optional: if you want the glow to be circular */
        /* Adjust the box-shadow's color, spread, and blur radius as needed */
    }
</style>