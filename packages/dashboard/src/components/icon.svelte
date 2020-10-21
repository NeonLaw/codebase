<script>
  export let name = '';
  export let isActive = '';
  const icons = {
    dashboard: `<path 
        d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" 
      />
      <path 
        d="M9 22V12h6v10M2 10.6L12 2l10 8.6"
      />`,
    profile: `<path 
      d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" 
      />
      <circle cx="12" cy="10" r="3" />
      <circle cx="12" cy="12" r="10" />`,
    portal: `<line 
      x1="4" y1="21" x2="4" y2="14"></line>
      <line x1="4" y1="10" x2="4" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12" y2="3"></line>
      <line x1="20" y1="21" x2="20" y2="16"></line>
      <line x1="20" y1="12" x2="20" y2="3"></line>
      <line x1="1" y1="14" x2="7" y2="14"></line>
      <line x1="9" y1="8" x2="15" y2="8"></line>
      <line x1="17" y1="16" x2="23" y2="16"></line>`,
  };
</script>

<style>
  svg {
    height: 2rem;
    width: 2rem;
    margin-right: var(--gutter-x-small);
    transition: all 0.2s;
  }
</style>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke={isActive ? 'var(--cyan-light)' : 'var(--white)'}
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round">
  {@html icons[name]}
</svg>
