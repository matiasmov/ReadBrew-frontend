<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { registerUser } from '../services/authService'

const router = useRouter()

const form = reactive({
  username: '',
  email: '',
  password: ''
})

const errorMessage = ref('')
const isLoading = ref(false)

const handleRegister = async () => {
  errorMessage.value = ''
  isLoading.value = true

  try {
  
    const data = await registerUser(form.username, form.email, form.password)
    
    if (data && data.token) {
      localStorage.setItem('readbrew_token', data.token)
    }

    router.push('/')
    
  } catch (error) {
    errorMessage.value = error.message || 'Erro ao criar conta. Tente novamente.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-sand text-charcoal-brown font-sans flex items-center justify-center p-6 selection:bg-dusty-olive selection:text-white relative">
    
    <router-link to="/" class="absolute top-6 left-6 md:top-8 md:left-8 bg-paper-white border-2 border-charcoal-brown rounded-full px-5 py-2.5 text-charcoal-brown font-black uppercase tracking-widest hover:bg-caramel hover:text-paper-white shadow-[4px_4px_0_0_var(--color-charcoal-brown)] transition-all flex items-center gap-2 hover:-translate-x-1 hover:-translate-y-1 duration-300 z-50">
      <span class="text-xl">➔</span> <span class="hidden sm:inline">Voltar ao início</span>
    </router-link>

    <div class="w-full max-w-4xl bg-paper-white border-4 border-charcoal-brown rounded-3xl shadow-[12px_12px_0_0_var(--color-charcoal-brown)] flex flex-col md:flex-row overflow-hidden relative z-10 mt-12 md:mt-0">
      
      <div class="w-full md:w-7/12 p-8 md:p-12 bg-paper-white flex flex-col justify-center order-2 md:order-1">
        <div class="mb-8 border-b-4 border-charcoal-brown/15 pb-6">
          <h1 class="text-3xl md:text-4xl font-black uppercase text-charcoal-brown mb-2 tracking-tight">Criar Conta</h1>
          <p class="text-dusty-olive font-bold">Faça sua carteirinha do clube do livro.</p>
        </div>

        <div v-if="errorMessage" class="mb-6 bg-[#ffb3b3] border-4 border-red-800 rounded-2xl p-4 text-red-900 font-bold text-sm uppercase tracking-wider shadow-[4px_4px_0_0_#991b1b] flex items-center gap-3">
          <span class="text-xl">⚠</span> {{ errorMessage }}
        </div>

        <form @submit.prevent="handleRegister" class="flex flex-col gap-5">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-black uppercase text-charcoal-brown tracking-wider">Como quer ser chamado?</label>
            <input v-model="form.username" type="text" required minlength="3" placeholder="Seu Apelido ou Nome" class="w-full bg-[#F9F6F0] border-4 border-charcoal-brown rounded-2xl p-4 font-bold text-charcoal-brown placeholder-charcoal-brown/30 focus:outline-none focus:border-caramel focus:-translate-y-1 transition-all shadow-[4px_4px_0_0_var(--color-charcoal-brown)]" />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm font-black uppercase text-charcoal-brown tracking-wider">Seu Melhor E-mail</label>
            <input v-model="form.email" type="email" required placeholder="novo.leitor@readbrew.com" class="w-full bg-[#F9F6F0] border-4 border-charcoal-brown rounded-2xl p-4 font-bold text-charcoal-brown placeholder-charcoal-brown/30 focus:outline-none focus:border-caramel focus:-translate-y-1 transition-all shadow-[4px_4px_0_0_var(--color-charcoal-brown)]" />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm font-black uppercase text-charcoal-brown tracking-wider">Crie uma Senha Secreta</label>
            <input v-model="form.password" type="password" required minlength="6" placeholder="••••••••" class="w-full bg-[#F9F6F0] border-4 border-charcoal-brown rounded-2xl p-4 font-bold text-charcoal-brown placeholder-charcoal-brown/30 focus:outline-none focus:border-caramel focus:-translate-y-1 transition-all shadow-[4px_4px_0_0_var(--color-charcoal-brown)]" />
          </div>

          <button type="submit" :disabled="isLoading" class="mt-4 w-full bg-caramel text-charcoal-brown border-4 border-charcoal-brown rounded-full px-8 py-4 text-lg md:text-xl font-black uppercase tracking-wider hover:bg-brown-caramel hover:text-paper-white active:translate-y-[4px] active:shadow-none transition-all shadow-[6px_6px_0_0_var(--color-charcoal-brown)] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0 disabled:active:shadow-[6px_6px_0_0_var(--color-charcoal-brown)]">
            {{ isLoading ? 'Preparando mesa...' : 'Pegar minha caneca!' }}
          </button>
        </form>

        <div class="mt-8 text-center">
          <p class="text-sm font-bold text-dusty-olive">
            Já tem uma mesa reservada? 
            <router-link to="/login" class="text-caramel font-black hover:text-charcoal-brown uppercase tracking-widest ml-1 border-b-2 border-caramel hover:border-charcoal-brown transition-colors">
              Entrar
            </router-link>
          </p>
        </div>
      </div>

      <div class="hidden md:flex md:w-5/12 bg-dried-sage border-l-4 border-charcoal-brown p-8 flex-col items-center justify-center text-center relative order-1 md:order-2">
        <div class="w-32 h-32 lg:w-40 lg:h-40 bg-paper-white border-4 border-charcoal-brown rounded-full flex items-center justify-center mb-6 transform rotate-3 hover:rotate-1 transition-transform duration-300 shadow-[8px_8px_0_0_var(--color-charcoal-brown)]">
          <span class="text-6xl lg:text-7xl pixelated-img">📖</span>
        </div>
        
        <h2 class="text-3xl lg:text-4xl font-black uppercase text-paper-white mb-4 leading-tight drop-shadow-[2px_2px_0_var(--color-charcoal-brown)]">
          Bem-vindo<br/>ao Clube!
        </h2>
        <p class="text-sm font-bold text-charcoal-brown px-4">
          Prepare-se para cultivar novos hábitos. Uma jornada de mil páginas começa com o primeiro gole de café.
        </p>
      </div>

    </div>
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