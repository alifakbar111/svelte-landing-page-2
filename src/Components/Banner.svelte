<script>
    export let bannerData = {};
    const {HEADING, IMAGE_URL, DESCRIPTION_LIST, BOOK_NOW} = bannerData;
</script>

<section class="hero" id="banner">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column">
                    <h1 class="title is-4 is-uppercase has-text-primary">{HEADING}</h1>
                    <ul>
                        {#each DESCRIPTION_LIST as list}
                        <li class="has-text-weight-bold has-text-grey">{list}</li>
                        {/each}
                    </ul>
                    <br>
                    <a href target="_blank" class="button is-small is-rounded is-primary is-uppercase">
                        {BOOK_NOW}
                    </a>
                </div>
                <div class="column">
                    <img src={IMAGE_URL} alt="Trawas View">
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    ul {
        text-decoration: none;
    }
</style>