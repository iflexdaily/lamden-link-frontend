<script lang="ts">
  import Earth from "./Earth.svelte";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";

  import { onMount } from "svelte";

  function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  onMount(() => {
    let container = document.getElementById("canvas-container");
    if (container) {
      let header = document.getElementById("header");
      let canvas = document.getElementById("my-canvas");
      let footer = document.getElementById("footer");

      container.insertBefore(header, container.childNodes[0]);
      insertAfter(footer, canvas);
    }
  });
</script>

<div class="globe">
  <Header />
  <Earth />
  <Footer />
</div>

<style>
</style>
