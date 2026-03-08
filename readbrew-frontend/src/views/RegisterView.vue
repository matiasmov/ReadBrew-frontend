<template>
  <div class="min-h-screen bg-beige-khaki text-charcoal-brown font-sans flex items-center justify-center p-6 selection:bg-dusty-olive selection:text-beige-khaki">
    
    <router-link to="/" class="absolute top-6 left-6 text-primary font-black uppercase tracking-widest hover:text-caramel transition-colors flex items-center gap-2 hover:-translate-x-1 duration-300 z-20">
      <span class="text-xl">⬅</span> Voltar à Cafeteria
    </router-link>

    <div class="w-full max-w-4xl bg-white border-4 border-primary shadow-[12px_12px_0_0_var(--color-primary)] flex flex-col md:flex-row overflow-hidden relative z-10 mt-8 md:mt-0">
      
      <div class="w-full md:w-7/12 p-8 md:p-12 bg-paper-white order-2 md:order-1">
        
        <div class="mb-8 border-b-4 border-primary pb-4">
          <h1 class="text-4xl font-black uppercase text-primary mb-2 tracking-tight">Criar Conta</h1>
          <p class="text-dusty-olive font-bold">Faça sua carteirinha do clube do livro.</p>
        </div>

        <div v-if="errorMessage" class="mb-6 bg-red-100 border-4 border-red-800 p-4 text-red-800 font-bold text-sm uppercase tracking-wider shadow-[4px_4px_0_0_#991b1b] flex items-center gap-3">
          <span class="text-xl">⚠</span> {{ errorMessage }}
        </div>

        <form @submit.prevent="handleRegister" class="flex flex-col gap-5">
          
          <div class="flex flex-col gap-2">
            <label class="text-sm font-black uppercase text-primary tracking-wider">Como quer ser chamado?</label>
            <input 
              v-model="form.username"
              type="text" 
              required
              minlength="3"
              placeholder="Seu Apelido ou Nome" 
              class="w-full bg-white border-4 border-primary p-3 font-bold text-primary placeholder-primary/30 focus:outline-none focus:border-caramel focus:-translate-y-1 transition-all shadow-sm" 
            />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm font-black uppercase text-primary tracking-wider">Seu Melhor E-mail</label>
            <input 
              v-model="form.email"
              type="email" 
              required
              placeholder="novo.leitor@readbrew.com" 
              class="w-full bg-white border-4 border-primary p-3 font-bold text-primary placeholder-primary/30 focus:outline-none focus:border-caramel focus:-translate-y-1 transition-all shadow-sm" 
            />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm font-black uppercase text-primary tracking-wider">Crie uma Senha Secreta</label>
            <input 
              v-model="form.password"
              type="password" 
              required
              minlength="6"
              placeholder="••••••••" 
              class="w-full bg-white border-4 border-primary p-3 font-bold text-primary placeholder-primary/30 focus:outline-none focus:border-caramel focus:-translate-y-1 transition-all shadow-sm" 
            />
          </div>

          <button 
            type="submit" 
            :disabled="isLoading"
            class="mt-4 w-full bg-caramel text-primary border-4 border-primary border-b-[6px] px-8 py-4 text-xl font-black uppercase tracking-wider hover:bg-brown-caramel hover:text-beige-khaki active:border-b-4 active:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isLoading ? 'Preparando mesa...' : 'Pegar minha caneca!' }}
          </button>
          
        </form>

        <div class="mt-8 text-center">
          <p class="text-sm font-bold text-dusty-olive">
            Já tem uma mesa reservada? 
            <router-link to="/login" class="text-primary hover:text-caramel uppercase tracking-widest ml-1 border-b-2 border-primary hover:border-caramel transition-colors">
              Entrar
            </router-link>
          </p>
        </div>

      </div>

      <div class="hidden md:flex md:w-5/12 bg-caramel border-l-4 border-primary p-8 flex-col items-center justify-center text-center relative order-1 md:order-2">
        <div class="w-36 h-36 bg-beige-khaki border-4 border-primary border-dashed flex items-center justify-center mb-6 transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-sm">
          <span class="text-6xl pixelated-img">📖</span>
        </div>
        <h2 class="text-3xl font-black uppercase text-primary mb-3 leading-tight">Bem-vindo<br/>ao Clube!</h2>
        <p class="text-sm font-bold text-primary/80 px-4">
          Prepare-se para cultivar novos hábitos. Uma jornada de mil páginas começa com o primeiro gole de café.
        </p>
      </div>

    </div>
  </div>
</template>

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
    
    
    if (data.token) {
      localStorage.setItem('readbrew_token', data.token)
    }


    router.push('/')
    
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