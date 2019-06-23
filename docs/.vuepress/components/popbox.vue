<template>
    <transition name="slide-fade">
        <div class="popbox" id="popbox" v-if="show" @click="close_pop_box">
            <div class="popbox_box">
                <div class="popbox-close_btn" @click="close_pop_box">
                    <i class="ic iconfont iconclose"></i>
                </div>
                <linksnav v-if="links" :links="links"></linksnav>
            </div>
        </div>
    </transition>
</template>
<script>
import $ from "jquery";
import Vue from "vue";
export default {
    data() {
        return {
            show: false
        };
    },
    props: {
        popbox_switch: String,
        links: Array
    },
    methods: {
        close_pop_box: function() {
            this.show = false;
        }
    },
    mounted() {
        $(this.popbox_switch).on("click", () => {
            this.show = !this.show;
        });
    }
};
</script>

<style lang="scss">
.slide-fade-enter-active {
    transition: all 0.3s ease;
    .popbox_box {
        transition: all 0.3s ease;
    }
}
.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    .popbox_box {
        transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    }
}
.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
    .popbox_box {
        transform: translateY(10px);
    }
}
.popbox {
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &_box {
        width: 78vw;
        height: 68vh;
        border-radius: 0.8rem;
        box-shadow: 0px 4px 18px rgba(117, 117, 117, 0.3);
        overflow: hidden;
        background: #fff;

        padding: 2rem;
        box-sizing: border-box;
        position: relative;
    }
    &-close_btn {
        position: absolute;
        right: 0;
        top: 0;
        width: 20px;
        height: 20px;
        background: #fff;
        margin: 8px;
        line-height: 20px;
        text-align: center;
        border-radius: 50%;
        border: 2px solid #ccc;
        color: #ccc;
        cursor: pointer;
    }
}
</style>
