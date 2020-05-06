<template>
    <div id="contact">
        <h2>Contact Us</h2>
        <ul>
            <li>McIntire Fruits,</li>
            <li>Cairnie,</li>
            <li>Cupar,</li>
            <li>KY15 4QD</li>
        </ul>
        <iframe id="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17688.53153000079!2d-3.0455909745872223!3d56.345937298680965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48864f8a3c6d6175%3A0x43bfbf61183b0b36!2sCupar%20KY15%204QD!5e0!3m2!1sen!2suk!4v1588701149048!5m2!1sen!2suk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="false" aria-hidden="false" tabindex="0"></iframe>
        <p>E-mail: <a href="mailto:enquiries@mcintirefruit.org">enquiries@mcintirefruit.org</a></p>
        <p>Telephone: <a href="tel:+441334123456">+44 (0) 1334 12 34 56</a></p>
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

    #maps {
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