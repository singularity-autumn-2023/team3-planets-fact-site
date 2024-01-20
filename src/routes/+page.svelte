<script>
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import { getContext } from 'svelte';
    let value = getContext("shared")

    $: if (browser) {
        goto(`/${value}`);
    }
</script>