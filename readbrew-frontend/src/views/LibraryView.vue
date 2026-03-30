<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const books = ref([])
const currentPage = ref(0)
const totalPages = ref(1)
const isLoading = ref(false)

const getHighQualityUrl = (url) => {
  if (!url || typeof url !== 'string' || (!url.startsWith('http://') && !url.startsWith('https://'))) {
      return 'https://placehold.co/400x600...'; 
  }
  return url.replace('http://', 'https://').replace('zoom=1', 'zoom=2').replace('&edge=curl', '');
}
const handleImageError = (event) => {
    
  event.target.src = 'https://placehold.co/400x600/E1D5C9/3C322C?text=Sem+Capa+disponível+:(&font=lora';
}

const fetchBooks = async (page = 0) => {
  if (isLoading.value) return;
  isLoading.value = true;
  
  try {

    //const baseUrl = import.meta.env.VITE_API_BASE_URL
    const baseUrl = 'http://localhost:8080';
    const response = await axios.get(`${baseUrl}/api/v1/public/library?page=${page}&size=30`);
    
    if (page === 0) {
      books.value = response.data.content;
    } else {
      books.value = [...books.value, ...response.data.content];
    }

    currentPage.value = response.data.number;
    totalPages.value = response.data.totalPages;
  } catch (error) {
   console.error("Não foi possível carregar o acervo no momento. Tente novamente mais tarde.");
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  fetchBooks(0)
})
</script>

<template>
  <div class="min-h-screen bg-dusty-olive text-charcoal-brown font-sans selection:bg-dusty-olive selection:text-white flex flex-col">
    
    <div class="sticky top-6 z-50 px-4 md:px-6 w-full max-w-7xl mx-auto flex justify-center">
      <header class="w-full bg-dark-lava/40 backdrop-blur-md border border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.15)] px-6 lg:px-8 py-3 flex justify-between items-center transition-all duration-300">
        <div class="text-2xl lg:text-3xl font-black text-caramel flex items-center gap-3 tracking-tight cursor-pointer hover:scale-105 transition-transform drop-shadow-md">
          <span class="text-3xl lg:text-4xl">☕</span>
          <span class="hidden sm:inline text-white">READBREW</span>
          <span class="inline sm:hidden text-white">RB</span>
        </div>
        
        <nav class="hidden md:flex gap-8 lg:gap-10 items-center text-sm md:text-base font-bold text-white/90 tracking-widest uppercase">
          <a href="#" class="hover:text-coffee transition-all">Cafeteria</a>
          <a href="#" class="text-caramel border-b-2 border-caramel">Biblioteca</a>
        </nav>

        <div class="flex gap-4 lg:gap-6 items-center">
          <router-link to="/login" class="text-sm md:text-base font-bold text-white/90 hover:text-coffee tracking-wider uppercase transition-colors">Entrar</router-link>
          <router-link to="/register" class="bg-caramel text-paper-white border border-white/30 px-6 py-2 lg:px-8 lg:py-2.5 text-sm md:text-base font-black uppercase tracking-wider rounded-full hover:bg-dusty-olive transition-all shadow-lg">
            Criar Conta
          </router-link>
        </div>
      </header>
    </div>

    <main class="flex-1 w-full max-w-7xl mx-auto px-6 pt-32 pb-12">
      
      <h1 class="text-3xl font-black text-white uppercase mb-8 border-b-4 border-white/10 pb-4">
        Sua Biblioteca Virtual
      </h1>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        <div v-for="book in books" :key="book.id" class="bg-paper-white border-4 border-charcoal-brown p-4 rounded-xl shadow-[8px_8px_0_0_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-transform flex flex-col h-full">
          
          <div 
            class="aspect-[2/3] w-full relative mb-4 cursor-pointer [perspective:1000px] group" 
            @click="book.flipped = !book.flipped"
          >
            <div 
              class="w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d]"
              :class="book.flipped ? '[transform:rotateY(180deg)]' : ''"
            >
              
              <div class="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-dark-lava/10 rounded-lg flex items-center justify-center border-2 border-charcoal-brown/5 overflow-hidden">
                <img 
                  :src="getHighQualityUrl(book.thumbnailUrl)" 
                  :alt="book.title"
                  @error="handleImageError" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div class="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-caramel border-2 border-charcoal-brown rounded-lg p-3 flex flex-col shadow-inner overflow-hidden">
                <h4 class="font-black text-[10px] md:text-xs text-charcoal-brown uppercase border-b-2 border-charcoal-brown/20 pb-1 mb-2 text-center">
                  Sinopse
                </h4>
                <p class="text-[10px] md:text-[11px] text-charcoal-brown/90 leading-tight text-justify overflow-y-auto pr-1 custom-scrollbar">
                  {{ book.description || 'Nenhuma descrição disponível para este livro.' }}
                </p>
                
                <div class="mt-auto text-center pt-2">
                  <span class="text-[8px] uppercase font-black opacity-50 tracking-widest">Virar ↺</span>
                </div>
              </div>

            </div>
          </div>

          <div class="flex-1 flex flex-col">
            <p class="font-black text-primary uppercase text-xs truncate mb-1" :title="book.title">{{ book.title }}</p>
            <p class="text-[10px] font-bold text-dusty-olive uppercase truncate" :title="book.authors?.join(', ')">{{ book.authors?.join(', ') || 'Autor Desconhecido' }}</p>
          </div>
        </div>

      </div>

      <div v-if="currentPage < totalPages - 1" class="flex justify-center mt-12">
        <button 
          @click="fetchBooks(currentPage + 1)" 
          :disabled="isLoading"
          class="bg-caramel text-paper-white border-4 border-charcoal-brown px-8 py-3 font-black uppercase tracking-widest shadow-[6px_6px_0_0_#1A1614] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-50">
          {{ isLoading ? 'Buscando...' : 'Mais Livros ☕' }}
        </button>
      </div>

    </main>
 
    <footer class="bg-[#1A1614] w-full">
      <div class="max-w-7xl mx-auto px-6 pb-12">
        <div class="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="text-2xl md:text-3xl lg:text-3xl font-black text-white tracking-tight">☕ READBREW</div>
          <ul class="flex gap-8 text-sm md:text-base font-bold text-beige-khaki uppercase tracking-widest">
            <li><a href="https://github.com/matiasmov" class="hover:text-caramel transition-colors">GitHub</a></li>
            <li><a href="#" class="hover:text-caramel transition-colors">Sobre</a></li>
          </ul>
        </div>
        <div class="mt-8 pt-6 border-t border-[#3C322C] text-center text-xs font-bold text-sand uppercase tracking-widest opacity-60">
          <p>Desenvolvido com café, © 2026 ReadBrew.</p>
          <p>@matias.mov</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<style scoped>

* {
  font-family: 'Courier New', Courier, monospace; 
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(60, 50, 44, 0.3);
  border-radius: 10px;
}
</style>