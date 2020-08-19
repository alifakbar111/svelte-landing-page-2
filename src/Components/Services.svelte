<script>
    export let serviceData = {};
    const {HEADING, SERVICE_LIST} = serviceData;
</script>

<section class="hero is-fullheight" id="services">
    <div class="hero-body">
        <div class="container">
            <p class="has-text-centered">
                <img src="images/airplane.svg" alt="" class="icon-airplane">
            </p> 
            <h1 class="title is-3 has-text-centered is-uppercase">{HEADING}</h1>
            <br>
            <div class="columns is-centered">
                {#each SERVICE_LIST as list}
                <div class="column is-4 has-text-centered">
                <div class="is-centered">
                    <img src={list.IMAGE_URL} alt={list.LABEL} class="img-services">
                    <br>
                    <h4 class="title is-4 is-uppercase">{list.LABEL}</h4>
                </div>
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    img.img-services {
        width: 250px;
        height: 250px;
    }

    img.icon-airplane {
        width: 64px;
        height: 64px;
    }
</style>