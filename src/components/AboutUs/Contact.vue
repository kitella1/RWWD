<template>
    <div id="contact">
        <h2>Contact Us</h2>
        <ul v-if="activeCountry === 'UK'">
            <li>McIntire Fruits,</li>
            <li>Cairnie,</li>
            <li>Cupar,</li>
            <li>KY15 4QD</li>
        </ul>
        <ul v-if="activeCountry === 'US'">
            <li>McIntire Fruits,</li>
            <li>East Fork Road,</li>
            <li>Rockwall,</li>
            <li>TX 75087</li>
        </ul>
        <iframe v-if="activeCountry === 'US'" class="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.2861912719754!2d-96.47586608483886!3d32.94345268092208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c0197b6ecd021%3A0x2d82a2db50e84958!2s1232%20E%20Fork%20Rd%2C%20Rockwall%2C%20TX%2075087%2C%20USA!5e0!3m2!1sen!2suk!4v1588863682162!5m2!1sen!2suk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <iframe v-if="activeCountry === 'UK'" class="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17688.53153000079!2d-3.0455909745872223!3d56.345937298680965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48864f8a3c6d6175%3A0x43bfbf61183b0b36!2sCupar%20KY15%204QD!5e0!3m2!1sen!2suk!4v1588701149048!5m2!1sen!2suk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="false" aria-hidden="false" tabindex="0"></iframe>
        <p>E-mail: <a href="mailto:enquiries@mcintirefruit.org">enquiries@mcintirefruit.org</a></p>
        <p v-if="activeCountry === 'UK'">Telephone: <a href="tel:+441334123456">+44 (0) 1334 12 34 56</a></p>
        <p v-if="activeCountry === 'US'">Telephone: <a href="tel:+19277723645">+1 927 772 3645</a></p>
    </div>
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 200px) {
#contact {
        padding: 2em;
    }

    ul {
        list-style: none;
        text-align: center;
        padding: 0;
    }

    .maps {
        width: 100%;
    }

    a {
        color: $font;
    }
}
    @media only screen and (min-width: 700px) {
        #contact {
        padding: 2em 5em;
    }
    }

    @media only screen and (min-width: 1000px) {
        #contact {
        padding-left: 25vw;
                padding-right: 25vw;
    }
    }
</style>

<script>
    import store from "@/store/index";
    import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["activePage", "activeCountry"]),
    ...mapGetters(["currentPage", "currentCountry"])
  }
};
</script>