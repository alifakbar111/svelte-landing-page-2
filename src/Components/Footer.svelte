<script>
    export let footerData = {};
    export let header = "";
    const {DESCRIPTION, CONTACT_DETAILS} = footerData;
    const {HEADING, ADDRESS, MOBILE} = CONTACT_DETAILS;
</script>

<footer class="footer has-background-grey-dark">
    <div class="container">
        <div class="columns">
            <div class="column">
                <h4 class="title is-3 is-bold has-text-white">{header}</h4>
                <p class="has-text-white">{DESCRIPTION}</p>
            </div>
            <div class="column">
                <div class="mb-2 title is-5 has-text-white">{HEADING}</div>
                <div class="mb-2 title is-6 has-text-white"><i class="fas fa-map-marker-alt" />&nbsp;{ADDRESS}</div>
                <div class="mb-2 title is-6 has-text-white"><i class="fas fa-phone" />&nbsp;{MOBILE}</div>
            </div>
        </div>
        <div class="has-text-centered px-2">
            <span class="icon is-large">
                <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x fa-inverse"></i>
                    <i class="fab fa-twitter fa-stack-1x"></i>
                </span>
            </span>
            <span class="icon is-large">
                <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x fa-inverse"></i>
                    <i class="fab  fa-facebook-f fa-stack-1x"></i>
                </span>
            </span>
            <span class="icon is-large">
                <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x fa-inverse"></i>
                    <i class="fab  fa-facebook-f fa-stack-1x"></i>
                </span>
            </span>
            <span class="icon is-large">
                <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x fa-inverse"></i>
                    <i class="fab fa-instagram fa-stack-1x"></i>
                </span>
            </span>
            <span class="icon is-large">
                <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x fa-inverse"></i>
                    <i class="fab fa-linkedin-in fa-stack-1x"></i>
                </span>
            </span>
        </div>
        <hr>
        
        <div class="has-text-centered has-text-white">
            <p>© 2020 TrawasView</p>
            <p>Copyright by Team TrawasView </p>
        </div>
    </div>
</footer>