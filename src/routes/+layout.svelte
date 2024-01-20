<script>
    import { setContext } from 'svelte';
    export let data;
    const {planets} = data;
    console.log(planets)
    let firstPlanet = planets[0].id
    setContext('shared', firstPlanet);
</script>
<nav>
    <ul>
        {#each planets as planet}
            <li>
                <a href="/{planet.id}">{planet.name}</a>
            </li>
        {/each}
    </ul>
</nav>
<slot />
<style>
    ul { list-style: none; }
</style>
