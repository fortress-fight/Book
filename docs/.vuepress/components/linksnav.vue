<template>
    <div id="links_nav" class="links_nav">
        <div class="links_nav-box">
            <router-link
                v-for="(item, index) in links"
                class="nav-link"
                :to="item.link"
            >{{ item.text }}</router-link>
            <!-- <NavLink v-for="(index, item) in links" :key="index" :item="item"></NavLink> -->
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    props: {
        links: Array
    }
};
</script>
