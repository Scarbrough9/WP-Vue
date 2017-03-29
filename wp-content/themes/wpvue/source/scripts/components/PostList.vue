<template>
    <section class="post-list">
        <div class="container container--flex">
            <post-block v-for="post in loadedPosts" :key="post.id" v-bind:post="post"></post-block>
        </div>
        <div id="post-single-block" class="post-single-block" v-bind:class="{ active: postSingleOpen }">
            <button class="post-single-block__toggle" v-on:click="closePost">Close Button</button>
            <post-single v-if="postSingleOpen" v-bind:postSingleData="postSingleData"></post-single>
        </div>
    </section>
</template>

<script>
    const $ = require('jquery');
    import PostBlock from './PostBlock';
    import PostSingle from './PostSingle';

    export default {
        components: {
            PostBlock,
            PostSingle
        },
        data () {
            return {
                postSingleOpen: false,
                postSingleData: false,
                loading: true,
                finished: false,
                currentPage: 1,
                totalPages: null,
                posts: [],
            }
        },
        mounted () {
            let vm = this;
            vm.fetchPosts();
            $('body').on('click', '.post-block', function(event) {
                event.preventDefault();
                let postId = $(this).data('id');
                vm.openPost(postId);
            });
        },
        methods: {
            fetchPosts() {
                let vm = this;

                $.getJSON("/wp-json/wp/v2/posts?per_page=9", function(data, status, response) {

                    // Add data to the post list
                    vm.posts = vm.posts.concat(data);

                    // Get the total pages value
                    vm.totalPages = response.getResponseHeader('X-WP-TotalPages');
                    
                    // See if more posts are remaining
                    if(vm.currentPage < vm.totalPages) {
                        vm.currentPage++;
                    } else {
                        vm.finished = true;
                    }
                });
            },
            openPost(postId) {
                let vm = this;
                
                $.getJSON("/wp-json/wp/v2/posts/" + postId, function(data, status, response) {

                    // Add data to the post list
                    vm.postSingleData = data;
                    vm.postSingleOpen = true;

                });
            },
            closePost(event) {
                event.preventDefault();
                let vm = this;
                vm.postSingleOpen = false;
            }
        },
        computed: {
            loadedPosts() {
                let vm = this;
                return vm.posts;
            }
        }
    }
</script>

<style lang="sass">

    .post-list {
        position: relative;

        > .container--flex {
            justify-content: space-between;
            position: relative;
            z-index: 1;
        }
    }

    .post-single-block {
        background-color: white;
        height: 100%;
        opacity: 0;
        overflow: scroll;
        pointer-events: none;
        position: absolute;
        top: 0; left: 0;
        transform: scale(.33);
        transition: opacity .3s 0s, transform .3s 0s, visibility 0s .3s;
        visibility: hidden;
        width: 100%;
        z-index: 2;

        &.active {
            opacity: 1;
            pointer-events: auto;
            transform: scale(1);
            transition: opacity .3s .05s, transform .3s .05s, visibility 0s 0s;
            visibility: visible;
        }
    }

</style>