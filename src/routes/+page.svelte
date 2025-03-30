<script lang="ts">

  import type {Circle} from "$lib";
  import Header from "../components/Header.svelte";
  import Circles from "../components/Circles.svelte";
  import Background from "../components/Background.svelte";
  import Footer from "../components/Footer.svelte";

  export let data: {
    circles: Circle[];
  };
</script>

<Background />
<Header/>
<div class="circles">
    <Circles circles={data.circles} />
</div>
<Footer/>


<style>
    * {
        font-family: Noto Sans JP, sans-serif;
    }

    .circles {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 4em 0;
        gap: 4em;
        align-items: center;
    }
</style>