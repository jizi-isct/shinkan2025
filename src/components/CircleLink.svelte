<script lang="ts">
    import {shortenUrl} from "$lib/util";

    let {url}: {url: string} = $props();
</script>

<a href={url} target="_blank" rel="noopener noreferrer">
    <img src={`https://www.google.com/s2/favicons?domain=${url}`} alt={`${url} の favicon`} />
    <span>{shortenUrl(url)}</span>
</a>

<style>
    a {
        display: flex;
        flex-direction: row;
        gap: 5px;
        text-decoration: none;
        margin: 1em 0;
    }
    img {
        display: block;
        border-radius: 25%;
        width: 1em;
    }
    span {
        display: block;
        font-size: 0.8em;
        color: #ff1b8d;
    }
</style>