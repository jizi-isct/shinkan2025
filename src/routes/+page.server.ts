import type {PageServerLoad} from "./$types";
import type {Circle} from "$lib";

export const prerender = true;

export const load: PageServerLoad = async ({fetch}) => {
  return {
    circles: JSON.parse(await (await fetch("./data.json")).text()) as Circle[]
  }
}

