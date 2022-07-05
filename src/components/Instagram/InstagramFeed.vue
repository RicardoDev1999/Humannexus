<script>
import InstagramFeedItem from "@/components/Instagram/InstagramFeedItem.vue";

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
            thumbnailSrc:
              "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/291000327_541025877724373_1606811833989774305_n.jpg?stp=dst-jpg_e15_s640x640&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=MhQkszZ5lEQAX_vqE5k&tn=qkqh8iLQuzD4cCTq&edm=APU89FABAAAA&ccb=7-5&oh=00_AT-x7WUhayOjJBjK9o_efZWgKZakMN5J-h4OKoCFYCH85w&oe=62CBD2E4&_nc_sid=86f79a",
            isVideo: v.node.is_video,
          })).slice(-props.nrItems)
        : []
    );

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
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });

    return { feed };
  },
};
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
