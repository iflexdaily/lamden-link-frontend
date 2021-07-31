<script lang="ts">
  import Globe from "./components/Globe.svelte";
  import GlobeController from "./components/GlobeController.svelte";
  import { onMount } from "svelte";

  let app;
  onMount(() => {
    app = document.createElement("app");
    app.className = "web-app";

    let globe_container = document.createElement("div");
    globe_container.className = "globe-container";

    let controller_container = document.createElement("div");
    controller_container.className = "globe-controller-container";

    let app_globe = document.getElementById("canvas-container");
    let globe_controller = document.getElementById("globe-controller");
    let canvas = document.getElementById("my-canvas");

    if (canvas) {
      controller_container.appendChild(globe_controller);
      globe_container.appendChild(app_globe);

      app.appendChild(globe_container);
      app.appendChild(controller_container);
      document.body.appendChild(app);
      console.log(app);
    }
  });
</script>

<main>
  <div>
    <Globe />
    <GlobeController />
  </div>
</main>

<style>
  .app {
    display: grid;
    grid-template-columns: 3fr 1fr;
  }
</style>
