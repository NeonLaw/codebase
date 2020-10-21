<script>
  import Search from './search.svelte';
</script>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    padding: var(--gutter-small);
    background: var(--off-white);
  }
</style>

<nav>
  <Search />
  <ul>Top Nav will Go here.</ul>
</nav>
