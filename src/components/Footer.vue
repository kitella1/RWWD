<template>
    <footer id="footer">
        <ul>
            <li><p>McIntire Fruits</p></li>
            <li><p>Cairnie</p></li>
            <li><p>Cupar</p></li>
            <li><p>KY15 4QD</p></li>
        </ul>
        <ul>
            <li><h2>Opening hours</h2></li>
            <li><p>Monday to Friday - 10:00 to 16:00</p></li>
            <li><p>Saturday and Sunday - 11:00 to 14:00</p></li>
        </ul>
        <ul>
            <li><h2>Contact Us</h2></li>
            <li><p>E-mail: <a href="mailto:enquiries@mcintirefruit.org">enquiries@mcintirefruit.org</a></p></li>
            <li><p>Telephone: <a href="tel:+441334123456">+44 (0) 1334 12 34 56</a></p></li>
        </ul>
        <ul>
            <li><p>Copyright &copy; 2020 McIntire Fruits</p></li>
        </ul>
        <ul>
            <li><h2>Sitemap</h2></li>
            <li><router-link @click.native="setActivePage('home')" to="/home">Home</router-link></li>
            <li><router-link @click.native="setActivePage('about')" to="/about">About us</router-link></li>
            <li><router-link @click.native="setActivePage('shop')" to="/shop/produce">Produce</router-link></li>
            <li><router-link @click.native="setActivePage('shop')" to="/shop/merch">Merchandise</router-link></li>
            <li><router-link @click.native="setActivePage('shop')" to="/shop/products">Farm products</router-link></li>
            <li><router-link @click.native="setActivePage('shop')" to="/shop/juices">Juices</router-link></li>
            <li><router-link @click.native="setActivePage('kids')" to="/kids">Kidz Zone</router-link></li>
            <li><router-link @click.native="setActivePage('events')" to="/events">Events</router-link></li>
        </ul>
    </footer>
</template>