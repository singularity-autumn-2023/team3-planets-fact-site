<script>
	export let data;
    console.log(data);
    const {planet} = data;
    const {overview, structure, geology} = planet;
    
</script>
<h1>{planet.name}</h1>
<h2>{overview.content}</h2>
<h2>{overview.source}</h2>
<h2>{structure.content}</h2>    
