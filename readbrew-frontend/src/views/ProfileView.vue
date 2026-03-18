<template>
  <div class="min-h-screen bg-beige-khaki text-charcoal-brown font-sans p-6 selection:bg-dusty-olive selection:text-beige-khaki pt-24">
    
    <router-link to="/" class="absolute top-8 left-8 text-primary font-black uppercase tracking-widest hover:text-caramel transition-colors flex items-center gap-2 hover:-translate-x-1 duration-300 z-50">
      <span class="text-2xl"></span> Voltar à timeline
    </router-link>

    <main class="max-w-6xl mx-auto md:grid md:grid-cols-12 gap-12 lg:gap-16">
  
      <aside class="md:col-span-4 lg:col-span-3 flex flex-col items-center md:items-start md:sticky md:top-24 h-fit">
        
        <div class="w-56 h-56 md:w-full aspect-square bg-white border-[6px] border-primary rounded-full overflow-hidden shadow-[1px_1px_0_0_var(--color-primary)] mb-8 transition-transform hover:scale-[1.02]">
           <img src="..\assets\icons\HomePageIcons\me_pixel_art.png" class="w-full h-full object-cover pixelated-img" alt="Profile" />
        </div>

        <div class="text-center md:text-left w-full">
          <h1 class="text-4xl font-black text-primary tracking-tight">@matiasmov</h1>
          <p class="text-xl font-bold text-dusty-olive mb-8 opacity-80">Nível 15 • título genérico</p>
        </div>

        <div class="w-full border-t-4 border-primary/10 pt-8">
          <h3 class="text-xs font-black uppercase tracking-[0.2em] mb-6 text-secondary">Estante de Troféus</h3>
          <div class="flex flex-wrap justify-center md:justify-start gap-4">
            
            <div title="Primeiro Café" class="w-16 h-16 bg-caramel border-4 border-primary rounded-full flex items-center justify-center text-3xl shadow-sm hover:-translate-y-1 transition-transform cursor-help">
              1
            </div>
            
            <div title="Leitor Voraz" class="w-16 h-16 bg-green-dried-sage border-4 border-primary rounded-full flex items-center justify-center text-3xl shadow-sm hover:-translate-y-1 transition-transform cursor-help">
              2
            </div>

            <div title="Madrugador" class="w-16 h-16 bg-brown-caramel border-4 border-primary rounded-full flex items-center justify-center text-3xl shadow-sm hover:-translate-y-1 transition-transform cursor-help">
              3
            </div>

          </div>
        </div>
      </aside>

      <section class="md:col-span-8 lg:col-span-9 mt-12 md:mt-0">
        <div class="border-4 border-dashed border-primary/20 rounded-3xl h-[600px] flex items-center justify-center">
          <p class="font-black uppercase text-primary/30 tracking-widest text-2xl">Área da Estante</p>
        </div>
      </section>

    </main>
  </div>  
</template>

<style scoped>
.pixelated-img {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}

* {
  font-family: 'Courier New', Courier, monospace;
}
</style>