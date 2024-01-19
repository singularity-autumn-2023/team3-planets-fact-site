<script>
    export let data;
    const {planets} = data;
    console.log(planets)
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
