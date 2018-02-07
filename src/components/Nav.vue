<template>
    <div class="db dn-l w-100 vh-100 fixed top-0 left-0 z-999">
        <div class="navTrigger z-9999"
             :class="{ 'active': active }"
             @click="active = ! active">
            <i></i><i></i><i></i>
        </div>

        <div style="background-image: url('img/cover.png')"
             :class="{ 'active': active, 'unactive': ! active }"
             class="navMenu w-100 vh-100">

            <div class="ma4" v-show="active">
                <img src="/img/logo.png" alt=""
                     srcset="/img/logo.png 1x, /img/logo-2x.png 2x"
                     @click="active = false"
                     v-scroll-to="'#Site__Header'"
                     class="pointer">
            </div>

            <div class="mb4" v-show="active">
                <a href="#" class="white link mh3 dim"
                   @click="active = false"
                   v-scroll-to="'#Section__About'">O mnie</a>
            </div>
            <div class="mb4" v-show="active">
                <a href="#" class="white link mh3 dim"
                   @click="active = false"
                   v-scroll-to="'#Section__Honorarium'">Honorarium</a>
            </div>
            <div class="mb4" v-show="active">
                <a href="#" class="white link mh3 dim"
                   @click="active = false"
                   v-scroll-to="'#Section__Services'">Usługi</a>
            </div>
            <div class="mb4" v-show="active">
                <a href="#" class="golden link mh3 ba b--golden bw1 pv2 ph3 dim"
                   @click="active = false"
                   v-scroll-to="'#Section__Contact'">Kontakt</a>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: false
            };
        }
    }
</script>

<style lang="less">
    .navTrigger {
        cursor: pointer;
        width: 30px;
        height: 25px;
        margin: auto;
        position: absolute;
        right: 20px;
        top: 20px;
    i {
        background-color: #CCA876;
        border-radius: 2px;
        content: '';
        display: block;
        width: 100%;
        height: 4px;
    }
    i:nth-child(1) {
        -webkit-animation:outT 0.8s backwards;
        animation:outT 0.8s backwards;
        -webkit-animation-direction:reverse;
        animation-direction:reverse;
    }
    i:nth-child(2) {
        margin: 5px 0;
        -webkit-animation:outM 0.8s backwards;
        animation:outM 0.8s backwards;
        -webkit-animation-direction:reverse;
        animation-direction:reverse;
    }
    i:nth-child(3) {
        -webkit-animation:outBtm 0.8s backwards;
        animation:outBtm 0.8s backwards;
        -webkit-animation-direction:reverse;
        animation-direction:reverse;
    }
    &.active {
    i:nth-child(1) {
        -webkit-animation:inT 0.8s forwards;
        animation:inT 0.8s forwards;
    }
    i:nth-child(2) {
        -webkit-animation:inM 0.8s forwards;
        animation:inM 0.8s forwards;
    }
    i:nth-child(3) {
        -webkit-animation:inBtm 0.8s forwards;
        animation:inBtm 0.8s forwards;
    }
    }
    }
    @-webkit-keyframes inM{
        50%{-webkit-transform:rotate(0deg);}
        100%{-webkit-transform:rotate(45deg);}
    }
    @keyframes inM{
        50%{transform:rotate(0deg);}
        100%{transform:rotate(45deg);}
    }

    @-webkit-keyframes outM{
        50%{-webkit-transform:rotate(0deg);}
        100%{-webkit-transform:rotate(45deg);}
    }
    @keyframes outM{
        50%{transform:rotate(0deg);}
        100%{transform:rotate(45deg);}
    }

    @-webkit-keyframes inT{
        0%{-webkit-transform: translateY(0px) rotate(0deg);}
        50%{-webkit-transform: translateY(9px) rotate(0deg);}
        100%{-webkit-transform: translateY(9px) rotate(135deg);}
    }
    @keyframes inT{
        0%{transform: translateY(0px) rotate(0deg);}
        50%{transform: translateY(9px) rotate(0deg);}
        100%{transform: translateY(9px) rotate(135deg);}
    }

    @-webkit-keyframes outT{
        0%{-webkit-transform: translateY(0px) rotate(0deg);}
        50%{-webkit-transform: translateY(9px) rotate(0deg);}
        100%{-webkit-transform: translateY(9px) rotate(135deg);}
    }
    @keyframes outT{
        0%{transform: translateY(0px) rotate(0deg);}
        50%{transform: translateY(9px) rotate(0deg);}
        100%{transform: translateY(9px) rotate(135deg);}
    }

    @-webkit-keyframes inBtm{
        0%{-webkit-transform: translateY(0px) rotate(0deg);}
        50%{-webkit-transform: translateY(-9px) rotate(0deg);}
        100%{-webkit-transform: translateY(-9px) rotate(135deg);}
    }
    @keyframes inBtm{
        0%{transform: translateY(0px) rotate(0deg);}
        50%{transform: translateY(-9px) rotate(0deg);}
        100%{transform: translateY(-9px) rotate(135deg);}
    }

    @-webkit-keyframes outBtm{
        0%{-webkit-transform: translateY(0px) rotate(0deg);}
        50%{-webkit-transform: translateY(-9px) rotate(0deg);}
        100%{-webkit-transform: translateY(-9px) rotate(135deg);}
    }
    @keyframes outBtm{
        0%{transform: translateY(0px) rotate(0deg);}
        50%{transform: translateY(-9px) rotate(0deg);}
        100%{transform: translateY(-9px) rotate(135deg);}
    }

    .navMenu {
        overflow: hidden;
        width: 0;
        -webkit-transition:width, 0.2s ease;
        -moz-transition: width, 0.2s ease;
        -ms-transition: width, 0.2s ease;
        -o-transition: width, 0.2s ease;
        transition: width, 0.2s ease;
    }

    .navMenu.active {
        width: 100%;
        -webkit-transition:width, 0.2s ease;
        -moz-transition: width, 0.2s ease;
        -ms-transition: width, 0.2s ease;
        -o-transition: width, 0.2s ease;
        transition: width, 0.2s ease;
        border-bottom: 7px solid #CCA876;
    }

    .navMenu.unactive {
    }
</style>