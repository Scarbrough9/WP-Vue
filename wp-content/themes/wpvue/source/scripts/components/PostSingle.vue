<template>
    <article class="post-single">
        <h3 class="post-block__heading" v-html="postSingleData.title.rendered"></h3>
        <div class="wysiwyg" v-html="postSingleData.content.rendered"></div>
    </article>
</template>

<script>
    const $ = require('jquery');

    export default {
        props: ['postSingleData'],
        mounted () {
            let vm = this;
        }
    }
</script>

<style lang="sass">

    .post-single {
        padding: 40px;
    }

</style>