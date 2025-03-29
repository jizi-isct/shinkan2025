<script lang="ts">
  import {type Circle} from "$lib";
  import CircleLink from "./CircleLink.svelte";

  let {circle}: { circle: Circle } = $props();
</script>

<div class="root">
    <h2>{circle.name}</h2>
    <div class="infos">
        <div class="left">
            {#each circle.imageUrls as imageUrl}
                <img src={imageUrl} alt="サークル活動の様子"/>
            {/each}
            <table>
                <tbody>
                <tr>
                    <td class="bold">公認/非公認</td>
                    <td>
                        {#if circle.circleType === "official"}
                            公認
                        {:else}
                            非公認
                        {/if}
                    </td>
                </tr>
                <tr>
                    <td class="bold">ジャンル</td>
                    <td>
                        {#if circle.circleCategory === "exercise"}
                            運動系
                        {:else if circle.circleCategory === "culture"}
                            文化系
                        {:else}
                            技術系
                        {/if}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="right">
            <p>{circle.description}</p>
            <div class="links">
                {#each circle.links as link}
                    <CircleLink url={link}/>
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

        flex-wrap: wrap;
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

    table {
        border-collapse: collapse;
        color: #222;
    }

    td {
        border: none;
    }

    .bold {
        font-weight: bold;
    }
</style>