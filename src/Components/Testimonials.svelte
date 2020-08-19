<script>
    export let testimonialsData = {};
    const {
        HEADING,
        TESTIMONIAL_LIST
    } = testimonialsData;

</script>

<section class="section" id="testimonials">
    <div class="container is-clipped">
        <h1 class="title is-4 has-text-centered is-uppercase">{HEADING}</h1>
        <div class="columns is-centered" >
            {#each TESTIMONIAL_LIST as list}
            <div class="column is-4">
                <div class="box has-text-centered">
                    <div>
                        <img class="img-testimoni" src={list.IMAGE_URL} alt="user {list.NAME}">
                    </div>
                    <p>{list.DESCRIPTION}</p>
                    <h5 class="title is-5 has-text-weight-bold">{list.NAME}</h5>
                </div>
            </div>  
            {/each}
        </div>
    </div>
</section>

<style>
    img.img-testimoni {
        border-radius: 50%;
        width: 128px;
        height: 128px;
    }
</style>