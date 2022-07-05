<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import SocialCard from "../components/SocialCard.vue";

export default {
  components: { Carousel, Slide, SocialCard },
};
</script>

<template>
  <main class="dark:bg-gray-800 bg-gray-100">
    <div class="mx-auto container pt-12">
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

      <title-component class="pt-8 pb-8">
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

      <title-component class="pt-8 pb-8">
        <template #text>
          <div>TO DO</div>
        </template>
      </title-component>
    </div>
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
