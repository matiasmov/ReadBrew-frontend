<template>
  <div class="min-h-screen bg-beige-khaki text-charcoal-brown font-sans flex items-center justify-center p-6 selection:bg-dusty-olive selection:text-beige-khaki">
    
    <router-link to="/" class="absolute top-6 left-6 text-primary font-black uppercase tracking-widest hover:text-caramel transition-colors flex items-center gap-2 hover:-translate-x-1 duration-300">
      <span class="text-xl">⬅</span> Voltar à Cafeteria
    </router-link>

    <div class="w-full max-w-4xl bg-white border-4 border-primary shadow-[12px_12px_0_0_var(--color-primary)] flex flex-col md:flex-row overflow-hidden relative z-10">
      
      <div class="hidden md:flex md:w-5/12 bg-dried-sage border-r-4 border-primary p-8 flex-col items-center justify-center text-center relative">
        <div class="w-36 h-36 bg-beige-khaki border-4 border-primary border-dashed flex items-center justify-center mb-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300 shadow-sm">
          <span class="text-6xl pixelated-img">☕</span>
        </div>
        <h2 class="text-3xl font-black uppercase text-primary mb-3 leading-tight">Sua mesa<br/>está pronta!</h2>
        <p class="text-sm font-bold text-dusty-olive px-4">
          O café já está passando. Entre para registrar suas novas leituras e ver o que seus amigos estão lendo.
        </p>
      </div>

      <div class="w-full md:w-7/12 p-8 md:p-12 bg-[#F9F6F0]">
        
        <div class="mb-8 border-b-4 border-primary pb-4">
          <h1 class="text-4xl font-black uppercase text-primary mb-2 tracking-tight">Entrar</h1>
          <p class="text-dusty-olive font-bold">Que bom ver você de novo no ReadBrew.</p>
        </div>

        <div v-if="errorMessage" class="mb-6 bg-red-100 border-4 border-red-800 p-4 text-red-800 font-bold text-sm uppercase tracking-wider shadow-[4px_4px_0_0_#991b1b] flex items-center gap-3">
          <span class="text-xl">⚠</span> {{ errorMessage }}
        </div>

        <form @submit.prevent="handleLogin" class="flex flex-col gap-6">
          
          <div class="flex flex-col gap-2">
            <label class="text-sm font-black uppercase text-primary tracking-wider">Seu E-mail</label>
            <input 
              v-model="form.email"
              type="email" 
              required
              placeholder="leitor@readbrew.com" 
              class="w-full bg-white border-4 border-primary p-3 font-bold text-primary placeholder-primary/30 focus:outline-none focus:border-caramel focus:-translate-y-1 transition-all shadow-sm" 
            />
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex justify-between items-end">
              <label class="text-sm font-black uppercase text-primary tracking-wider">Senha</label>
              <span class="text-xs font-black text-dusty-olive/50 uppercase tracking-widest cursor-not-allowed" title="Em breve!">
                Esqueceu?
              </span>
            </div>
            <input 
              v-model="form.password"
              type="password" 
              required
              placeholder="••••••••" 
              class="w-full bg-white border-4 border-primary p-3 font-bold text-primary placeholder-primary/30 focus:outline-none focus:border-caramel focus:-translate-y-1 transition-all shadow-sm" 
            />
          </div>

          <button 
            type="submit" 
            :disabled="isLoading"
            class="mt-6 w-full bg-green-dried-sage text-charcoal-brown border-4 border-primary border-b-[6px] px-8 py-4 text-xl font-black uppercase tracking-wider hover:bg-dusty-olive hover:text-beige-khaki active:border-b-4 active:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isLoading ? 'Servindo café...' : 'Vamos lá!' }}
          </button>
          
        </form>

        <div class="mt-8 text-center">
          <p class="text-sm font-bold text-dusty-olive">
            Ainda não tem sua caneca? 
            <router-link to="/register" class="text-primary hover:text-caramel uppercase tracking-widest ml-1 border-b-2 border-primary hover:border-caramel transition-colors">
              Registrar
            </router-link>
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { loginUser } from '../services/authService'

const router = useRouter()

const form = reactive({
  email: '',
  password: ''
})

const errorMessage = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  errorMessage.value = ''
  isLoading.value = true

  try {
   
    await loginUser(form.email, form.password)
    
   
    router.push('/cafeteria') // i'll change to 'Timeline'
    
  } catch (error) {
   
    errorMessage.value = error.message
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.pixelated-img {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
* {
  font-family: 'Courier New', Courier, monospace; 
}
</style>