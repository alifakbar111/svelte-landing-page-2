<script>
    export let recomendedData = {};
    const {HEADING, DESTINATION_LIST} = recomendedData;
</script>

<section class="hero is-fullheight" id="pages">
    <div class="hero-body">
        <div class="container">
            <h1 class="title is-4 has-text-centered is-uppercase">{HEADING}</h1>
            <div class="columns is-centered">
                {#each DESTINATION_LIST as list}
                <div class="column is-4">
                    <div class="box has-text-centered">
                        <p class="has-text-centered">
                            <img src="https://bulma.io/images/placeholders/256x256.png" alt="recomended">
                        </p>
                        <br>
                        <h5 class="title is-5 is-uppercase">{list.LABEL}</h5>
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>