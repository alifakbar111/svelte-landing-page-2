<script>
    export let navlists = {};
    export let header; 
    const { NAVBAR_LIST, BOOK_NOW } = navlists;
</script>

<nav class="navbar is-fixed-top is-primary" id="nav-bar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a href="/" class="navbar-item is-size-4">
            {header}
        </a>
        <a id="navbar-burger" role="button" class="navbar-burger" aria-expanded="false" data-target="menubar">
            <span></span>
            <span></span>
            <span></span>
        </a>
    </div>
    <div id="menubar" class="navbar-menu">
        <div class="navbar-end has-text-left">
            {#each NAVBAR_LIST as list}
            <a class="navbar-item is-hoverable" href="{list.url}">
                {list.label}
            </a>
            {/each}
            <div class="navbar-item">
                <a href target="_blank" class="button is-small is-rounded">
                    {BOOK_NOW}
                </a>
            </div>
        </div>
    </div>
</nav>

<style>
    a.navbar-item:hover {
        text-decoration: none;
        background-color: transparent !important;
    }

    @media screen and (min-width: 769px) {
        .navbar {
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }
</style>