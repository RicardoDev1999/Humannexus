<script>
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

import SocialCard from "../components/SocialCard.vue";
import AutoIncrementer from "../components/AutoIncrementerComponent.vue";

import Specialties from "../assets/specialties.json";
import Testimoies from "../assets/testimonies.json";
import Performance from "../assets/performance.json";

export default {
  components: { AutoIncrementer, Carousel, Slide, SocialCard },
  setup() {
    const specialties = ref(Specialties);
    const testimonies = ref(Testimoies);
    const performance = ref(Performance);

    return { performance, specialties, testimonies };
  },
};
</script>

<template>
  <main class="dark:bg-gray-800 bg-gray-100">
    <section class="mx-auto container pt-12">
      <title-component>
        <template #text>
          <div class="text-4xl">Apresentamos</div>
        </template>
      </title-component>

      <carousel :items-to-show="1" :wrap-around="true" :autoplay="2500">
        <slide :key="1">
          <div class="carousel__item text-black dark:text-white text-xl">
            CONFIANÇA, SEGURANÇA E BEM ESTAR DOS PACIENTES
          </div>
        </slide>
        <slide :key="2">
          <div class="carousel__item text-black dark:text-white text-xl">
            SERVIÇOS E TRATAMENTOS DE CONFIANÇA
          </div>
        </slide>
        <slide :key="3">
          <div class="carousel__item text-black dark:text-white text-xl">
            TRATAMENTOS PARA PROMOVER QUALIDADE DE VIDA AOS PACIENTES
          </div>
        </slide>
      </carousel>

      <title-component class="pb-8">
        <template #text>
          <div>O que esperar de nós</div>
        </template>
      </title-component>

      <div
        class="flex flex-col lg:flex-row place-items-center lg:place-items-stretch justify-center gap-4"
      >
        <div
          class="flex flex-col basis-1/3 items-center max-w-sm pt-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            class="object-contain w-[18rem]"
            src="http://humannexus.pt/online/images/Inicio/Grupo_334.png"
            alt=""
          />
          <div class="p-5">
            <h1
              class="inline-block text-xl text-[#2dc1b8] font-semibold card-title"
            >
              Sobre nós
            </h1>
            <p class="text-base text-black dark:text-white mt-2">
              Criada em Janeiro de 2015, a
              <b class="text-[#2dc1b8]">Humannexus</b> é um espaço de
              <b class="text-[#2dc1b8]">saúde jovem e moderno</b>, com objetivos
              bem definidos e ideias inovadoras
            </p>
          </div>
        </div>

        <div
          class="flex flex-col basis-1/3 items-center max-w-sm pt-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            class="object-contain w-[17.5rem]"
            src="http://humannexus.pt/online/images/Inicio/Grupo_331.png"
            alt=""
          />
          <div class="p-5">
            <h1
              class="inline-block text-xl text-[#2dc1b8] font-semibold card-title"
            >
              Missão
            </h1>
            <p class="text-base text-black dark:text-white mt-2">
              Disponibilizar
              <b class="text-[#2dc1b8]">serviços e tratamentos</b>, merecedores
              da <b class="text-[#2dc1b8]">confiança</b>, com uma equipa
              especializada com vários anos de experiência, para
              <b class="text-[#2dc1b8]">promover qualidade de vida</b> dos
              pacientes.
            </p>
          </div>
        </div>

        <div
          class="flex flex-col basis-1/3 items-center max-w-sm pt-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            class="object-contain w-[18rem]"
            src="http://humannexus.pt/online/images/Inicio/Grupo_337.png"
            alt=""
          />
          <div class="p-5">
            <h1
              class="inline-block text-xl text-[#2dc1b8] font-semibold card-title"
            >
              Humannexus Estúdio
            </h1>
            <p class="text-base text-black dark:text-white mt-2">
              No nosso espaço é possí­vel encontrar diversos
              <b class="text-[#2dc1b8]">serviços de saúde</b>, tais como
              <b class="text-[#2dc1b8]"
                >Enfermagem ao Domicílio, Fisioterapia, Nutrição, Performance
                Desportiva, Psicologia e Terapia da Fala</b
              >.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col bg-[#ADF9F5] w-100 py-8 my-8 shadow-md">
      <div class="py-8">
        <title-component>
          <template #text>
            <div>Especialidades</div>
          </template>
        </title-component>
        <carousel :items-to-show="1" :wrap-around="true" :autoplay="3000">
          <slide v-for="(item, index) in specialties" :key="index">
            <div class="carousel__item">
              <div class="flex flex-col justify-center lg:w-2/3 xl:w-1/2 px-4">
                <span
                  class="text-black dark:text-white font-medium text-2xl drop-shadow-md"
                  >{{ item.title }}</span
                >
                <span
                  class="text-black dark:text-white font-light text-lg pt-4"
                  >{{ item.description }}</span
                >
              </div>
            </div>
          </slide>
        </carousel>
      </div>
      <div class="pt-4 pb-24">
        <title-component class="pb-16">
          <template #text>
            <div>Porque Humannexus?</div>
          </template>
        </title-component>
        <div class="flex flex-col lg:flex-row justify-center align-middle">
          <template v-for="(item, index) in performance" :key="item.identifier">
            <div
              class="flex flex-col justify-center align-middle mx-auto px-auto"
              :class="[
                { 'mt-24 lg:mt-0': index > 0 },
                { 'mb-24 lg:mb-0': index < performance.lengt - 1 },
              ]"
            >
              <div class="flex flex-1 justify-center text-center">
                <auto-incrementer
                  class="text-3xl text-black border-b-2 border-b-[#22D1CA] pb-4 mb-4 drop-shadow-md"
                  :countUpTo="item.value"
                  secondsToFinish="2"
                />
              </div>
              <span class="text-xl font-medium">{{ item.key }}</span>
            </div>
          </template>
        </div>
      </div>
      <div class="py-8">
        <title-component>
          <template #text>
            <div>Testemunhos</div>
          </template>
        </title-component>
        <carousel :items-to-show="1" :wrap-around="true" :autoplay="5000">
          <slide v-for="(item, index) in testimonies" :key="index">
            <div class="carousel__item">
              <div class="flex flex-col jusitfy-center lg:w-2/3 xl:w-1/2 px-4">
                <span
                  class="text-black dark:text-white font-medium text-xl drop-shadow-md"
                  >{{ item.title }}</span
                >
                <span
                  class="text-black dark:text-white font-light text-lg pt-4"
                  >{{ item.description }}</span
                >
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </section>

    <section class="mx-auto container py-8">
      <title-component class="py-8">
        <template #text>
          <div>Redes Sociais</div>
        </template>
      </title-component>

      <div
        class="flex flex-col md:flex-row place-items-center md:place-items-stretch justify-center gap-4"
      >
        <social-card
          identifier="@clinica_humannexus"
          href="https://www.instagram.com/clinica_humannexus/"
        >
          <template #icon>
            <div>
              <instagram-icon class="w-24" />
            </div>
          </template>
        </social-card>

        <social-card
          identifier="#Humannexuslda"
          href="https://www.facebook.com/Humannexuslda/"
        >
          <template #icon>
            <div>
              <facebook-icon class="w-24" />
            </div>
          </template>
        </social-card>
      </div>
    </section>
  </main>
</template>

<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: transparent;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
