<script>
    import Navbar from "./Components/Navbar.svelte";
    import Banner from "./Components/Banner.svelte";
    import Services from "./Components/Services.svelte";
    import Recomended from "./Components/Recomended.svelte";
    import Testimonials from "./Components/Testimonials.svelte";
    import Footer from "./Components/Footer.svelte";

    import DATA from "./Data/data";
</script>

<Navbar header={DATA.HEADER} navlists={DATA.NAVBAR_DATA}/>

<Banner bannerData={DATA.BANNER_DATA} />

<Services serviceData={DATA.SERVICES_DATA}/>

<Recomended recomendedData={DATA.PAGES_RECOMENDED_DATA}/>

<Testimonials testimonialsData={DATA.TESTIMONIALS_DATA}/>

<Footer header={DATA.HEADER}  footerData={DATA.FOOTER_DATA}/>