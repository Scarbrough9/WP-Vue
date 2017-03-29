<template>
    <a class="post-block" v-bind:data-id="post.id" href="#">
        <article>
            <h3 class="post-block__heading" v-html="post.title.rendered"></h3>
        </article>
    </a>
</template>

<script>
    const $ = require('jquery');

    export default {
        props: ['post'],
        mounted () {
            let vm = this;
        }
    }
</script>

<style lang="sass">

    .post-block {
        background-color: white;
        border: 1px solid #dadada;
        display: block;
        flex: 0 1 auto;
        margin-bottom: 20px;
        padding: 20px;
        width: calc(33% - 10px);

        &.active {
            background-color: cyan;
        }
    }

</style>