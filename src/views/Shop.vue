<template>
    <div id="shop">
        <h1>This is a shop page</h1>
        <router-link @click.native="setActivePage('shop')" to="/shop/produce">Produce</router-link>
        <router-link @click.native="setActivePage('shop')" to="/shop/product">Farm Products</router-link>
        <router-link @click.native="setActivePage('shop')" to="/shop/juice">Juices</router-link>
        <router-link @click.native="setActivePage('shop')" to="/shop/merch">Merchandise</router-link>
    </div>
</template>