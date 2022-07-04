<script>
import InstagramFeed from "@/components/Instagram/InstagramFeed.vue";
export default {
  components: { InstagramFeed },
};
</script>

<template>
  <main>
    <div class="mx-auto container">
      <!-- O que esperar de nos -->

      <div class="flex justify-center mt-8">
        <img
          src="http://humannexus.pt/online/images/headers/o_que_esperar_de_nos.png"
          class="object-contain w-[28rem]"
          alt="..."
        />
      </div>

      <div
        class="flex flex-col md:flex-row place-items-center md:place-items-stretch justify-center gap-4 mt-8"
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
      <div class="px-5 py-6 mx-auto">
        <p class="bold text-2xl">O nosso instagram</p>
      </div>

      <instagram-feed nrItems="6" />
    </div>
  </main>
</template>
