<script lang="ts">
  import { onMount } from "svelte";
  import { init, initGlobe, onWindowResize, animate } from "../globe/index";

  onMount(() => {
    init();
    initGlobe();
    onWindowResize();
    animate();

    let canvas = document.getElementById("my-canvas");
    let canvas_container = document.createElement("div");
    canvas_container.id = "canvas-container";

    canvas_container.append(canvas);
    document.body.appendChild(canvas_container);
  });
</script>

<div />

<style>
</style>
