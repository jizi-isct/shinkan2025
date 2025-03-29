<script lang="ts">
    import {type Circle} from "$lib";
    import CircleLink from "./CircleLink.svelte";

    let { circle }: {circle: Circle} = $props();
</script>

<div class="root">
    <h2>{circle.name}</h2>
    <div class="infos">
        <div class="left">
            {#each circle.imageUrls as imageUrl}
                <img src={imageUrl} alt="サークル活動の様子"/>
            {/each}
        </div>
        <div class="right">
            <p>{circle.description}</p>
            <div class="links">
                {#each circle.links as link}
                    <CircleLink url={link} />
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .root {
        padding: 40px;

        border-radius: 8px;
        border-style: solid;
        border-width: 1px;
        border-color: #ffd4d4;

        width: 80vw;

        background-color: #fff8f8;

        box-shadow: 0 0 8px #f1f1f1;
    }
    .infos {
        display: flex;
        gap: 3em;
    }
    .left {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }

    .right {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .links {
        display: flex;
        gap: 2em;
    }

    h2 {
        color: #444;
        margin: 0 0 1em 0;
    }

    p {
        color: #333;
        margin: 0;
    }

    img {
        width: 300px;
        border-radius: 5px;
    }
</style>