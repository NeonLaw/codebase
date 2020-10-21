<script lang="ts">
  import SideNavLink from './side-nav-link.svelte';

  export let segment;

  const links = [
    {
      title: 'Dashboard',
      href: '/',
      icon: 'dashboard',
    },
    {
      title: 'Profile',
      href: '/profile',
      icon: 'profile',
    },
    {
      title: 'Portal',
      href: '/portal',
      icon: 'portal',
    },
  ];
</script>

<style>
  nav {
    background: #000000b0;
    color: var(--white);
    flex: 0 0 21rem;
    padding: 0 var(--gutter-small);
  }

  img {
    display: block;
    margin-bottom: var(--gutter-medium);
  }

  li:not(:last-child) {
    margin-bottom: var(--gutter-normal);
  }
</style>

<nav>
  <img src="/images/logo.svg" alt="Neon Law" />
  <ul>
    {#each links as link}
      <li>
        <SideNavLink {segment} {...link} />
      </li>
    {/each}
  </ul>
</nav>
