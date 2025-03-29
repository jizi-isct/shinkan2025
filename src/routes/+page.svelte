<script lang="ts">

  import type {Circle} from "$lib";
  import CircleComponent from "../components/CircleComponent.svelte";
  import Header from "../components/Header.svelte";

  export let data: {
    circles: Circle[];
  };
</script>

<Header/>
<div class="circles">
    {#each data.circles as circle}
        <CircleComponent circle={circle} />
    {/each}
</div>



<style>
    * {
        font-family: Noto Sans JP, sans-serif;
    }

    .circles {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 2em;
        justify-content: center;
    }
</style>