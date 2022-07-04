<script>
import InstagramFeedItem from "@/components/Instagram/InstagramFeedItem.vue";
import IconLoader from "@/components/icons/IconLoader.vue";

// import axios from "axios";
import { ref } from "vue";
import Feed from "@/assets/humannexus_feed.json";

export default {
  components: { InstagramFeedItem, IconLoader },
  props: {
    nrItems: {
      type: Number,
      default: 3,
    },
  },
  setup(props) {
    const feed = ref(
      props.nrItems > 0
        ? Feed.map((v) => ({
            postUrl: `https://www.instagram.com/p/${v.node.shortcode}`,
            thumbnailSrc: v.node.thumbnail_src,
            isVideo: v.node.is_video,
          })).slice(-props.nrItems)
        : []
    );

    return { feed };
  },
};

// const options = {
//   method: "GET",
//   url: "https://instagram130.p.rapidapi.com/account-feed",
//   params: { username: "clinica_humannexus" },
//   headers: {
//     "X-RapidAPI-Key": "f59ee3a3d6msh4b6bf830507a870p117a90jsn3627ef305f75",
//     "X-RapidAPI-Host": "instagram130.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     feed.value = response.data.map((v) => {
//       v.display_url, v.is_video;
//     });
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
</script>

<template>
  <section class="overflow-hidden text-gray-700">
    <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
      <div v-if="feed.length > 0">
        <div class="flex flex-wrap -m-1 md:-m-2">
          <template v-for="feedItem in feed">
            <!-- eslint-disable-next-line vue/valid-v-for -->
            <instagram-feed-item :item="feedItem" />
          </template>
        </div>
      </div>
      <div class="w-full flex flex-1 justify-center align-middle m-auto" v-else>
        <icon-loader />
      </div>
    </div>
  </section>
</template>
