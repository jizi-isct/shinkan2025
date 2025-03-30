<script lang="ts">
  import CircleComponent from "./CircleComponent.svelte";

  let {circles}: { circles: Circle[] } = $props();

  let search = $state("")
  let exercise = $state(true)
  let culture = $state(true)
  let technology = $state(true)
  let official = $state(true)
  let unofficial = $state(true)
</script>

<div class="root">
    <h2>検索</h2>
    <div class="search">
        <div>
            <h4>サークル名</h4>
            <input class="text" type="search" placeholder="検索..." bind:value={search}/>
        </div>
        <div>
            <h4>サークルのジャンル</h4>
            <div class="checkboxes">
                <div>
                    <input class="checkbox" type="checkbox" bind:checked={exercise}/> <span>運動系</span>
                </div>
                <div>
                    <input class="checkbox" type="checkbox" bind:checked={culture}/> <span>文化系</span>
                </div>
                <div>
                    <input class="checkbox" type="checkbox" bind:checked={technology}/> <span>技術系</span>
                </div>
            </div>
        </div>
        <div>
            <h4>公認/非公認</h4>
            <div class="checkboxes">
                <div>
                    <input class="checkbox" type="checkbox" bind:checked={official}/> <span>公認</span>
                </div>
                <div>
                    <input class="checkbox" type="checkbox" bind:checked={unofficial}/> <span>非公認</span>
                </div>
            </div>
        </div>
    </div>
</div>

{#each
    circles.filter((it) =>
        (it.name.toLowerCase().includes(search.toLowerCase()))
        &&
        (
            (exercise && it.circleCategory === "exercise")
            || (culture && it.circleCategory === "culture")
            || (technology && it.circleCategory === "technology")
        )
        &&
        (
            (official && it.circleType === "official")
            || (unofficial && it.circleType === "unofficial")
        )
    )
        as circle}
    <CircleComponent circle={circle}/>
{/each}

<style>
    .root {
        border-radius: 8px;
        border-style: solid;
        border-width: 1px;
        border-color: #ffd4d4;

        background-color: #fff8f8;

        box-shadow: 0 0 8px #f1f1f1;
    }


    @media (max-width: 450px) {
        .root {
            padding: 20px;
            width: calc(90vw - 40px);
        }
    }
    @media (min-width: 450px) {
        .root {
            padding: 40px;
            width: calc(90vw - 80px);
        }
    }

    .search {
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
    }

    .search>div {
        flex-grow: 1;
    }

    h2 {
        margin: 0.2em 0;
    }

    h4 {
        margin: 0.2em 0 0.4em 0;
    }

    .checkboxes {
        display: flex;
        flex-direction: column;
        padding: 0 0.5em;
    }

    .text {
        margin: 0 0.5em;

        border: 1px solid #dfdfdf;
    }
</style>