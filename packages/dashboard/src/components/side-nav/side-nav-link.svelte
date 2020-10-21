<script lang="ts">
  import Icon from '../icon.svelte';
  export let href, icon, title, segment;

  let link;
  let isActive = false;
</script>

<style>
  a {
    display: flex;
    align-items: center;
    padding-left: var(--gutter-x-small);
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
    border-left: 2px solid transparent;
  }

  a:hover {
    color: var(--cyan-light);
  }

  [aria-current] {
    color: var(--cyan-light);
    border-color: var(--cyan-light);
  }
</style>

<a
  aria-current={href === '/' && segment === undefined ? 'page' : segment === title.toLowerCase() ? 'page' : undefined}
  bind:this={link}
  {href}
  on:mouseover={() => {
    isActive = true;
  }}
  on:mouseleave={() => {
    isActive = false;
  }}>
  <Icon
    name={icon}
    isActive={isActive || (href === '/' && segment === undefined) ? 'page' : segment === title.toLowerCase() ? 'page' : undefined} />
  {title}
</a>
