<script lang="ts">
  import { setClient, restore, query } from 'svelte-apollo';
  import ContentWrapper from '../components/content-wrapper.svelte';
  import Main from '../components/main.svelte';
  import PageWrapper from '../components/page-wrapper.svelte';
  import SideNav from '../components/side-nav/side-nav.svelte';
  import TopNav from '../components/top-nav.svelte';

  export let segment;
</script>

<style>
</style>

<PageWrapper>
  <SideNav {segment} />
  <ContentWrapper>
    <TopNav />
    <Main>
      <slot />
    </Main>
  </ContentWrapper>
</PageWrapper>
