<template>
    <div class="site">
        
        <!-- Site Header -->
        <site-header></site-header>

        <!-- Post List -->
        <post-list></post-list>

        <!-- Site Footer -->
        <site-footer></site-footer>

    </div>
</template>

<script>
    import SiteHeader from './SiteHeader';
    import PostList from './PostList';
    import SiteFooter from './SiteFooter';
    export default {
        components: {
            SiteHeader,
            PostList, 
            SiteFooter
        }
    }
</script>

<style lang="sass">

    @-webkit-viewport {width: device-width;}
    @-mos-viewport {width: device-width;}
    @-ms-viewport {width: device-width;}
    @-o-viewport {width: device-width;}
    @viewport {width: device-width;}

    *, *:before, *:after, input[type="search"] {
        box-sizing: border-box;
    }

    .screen-reader-text {
        display: none;
        visibility: hidden;
    }

    .container {
        padding: 20px;
        width: 100%;

        &--flex {
            display: flex;
            flex-wrap: wrap;
        }
    }

</style>