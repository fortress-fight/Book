<template>
    <div
        id="site_bg"
        class="site_bg"
        :class="{site_image: showImage, book_index_page:isBookFace}"
        :style="c_style"
    >
        <img class="site_bg-img" :src="bg_link" alt srcset>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import $ from "jquery";
export default Vue.extend({
    data() {
        return {
            bg_link: ""
        };
    },
    props: {
        bg: String,
        showImage: Boolean,
        isBookFace: Boolean
    },
    computed: {
        c_style() {
            return this.showImage
                ? {}
                : { backgroundImage: `url(${this.bg_link})` };
        }
    },
    mounted() {
        this.bg_link = this.$withBase(
            this.bg || this.$page.frontmatter.heroImage
        );
    }
});
</script>

<style lang="scss">
.home .hero {
    height: calc(100vh - 11.6rem);

    position: relative;
    z-index: 10;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    margin: 0;
    left: auto;
    right: auto;
    img {
        display: none;
    }
    .action {
        width: 100%;
    }
    .action-button {
        padding: 0.3rem 1.6rem;
    }
    .description {
        margin: 0;
        width: 100%;
        max-width: none;
    }
}
.home .footer {
    position: relative;
    z-index: 10;
}
#main-title {
    max-width: 100%;
    width: 100%;
}
.site_bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    &-img {
        display: none;
    }
    .site_image &-img {
        display: block;
        width: 30vw;
    }
    .book_index_page &-img {
        margin-left: -46.4vw;

        max-width: 100%;
        min-width: 370px;
    }
}
.c-index_page .navbar {
    background: transparent;
}
</style>

