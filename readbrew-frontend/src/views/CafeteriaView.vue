<template>
  <div class="min-h-screen bg-beige-khaki text-charcoal-brown font-sans pb-24 selection:bg-dusty-olive selection:text-white">
 
    <header class="bg-primary border-b-4 border-charcoal-brown sticky top-0 z-50">
      <div class="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div class="text-2xl font-black text-caramel flex items-center gap-3 tracking-tight hover:scale-105 transition-transform cursor-pointer">
          <span class="text-3xl pixelated-img">☕</span> READBREW
        </div>
        
        <nav class="hidden md:flex gap-6 items-center text-sm font-bold text-beige-khaki tracking-widest uppercase">
          <a href="#" class="hover:text-caramel transition-colors">A Cafeteria</a>
          <a href="#" class="hover:text-caramel transition-colors">Clube do Livro</a>
        </nav>

        <div class="flex gap-4 items-center">
          <router-link to="/login" class="text-sm font-bold text-beige-khaki hover:text-white tracking-wider uppercase">Entrar</router-link>
          
          <router-link to="/register" class="bg-green-dried-sage text-charcoal-brown border-2 border-charcoal-brown border-b-4 px-6 py-2 font-black uppercase tracking-wider hover:bg-dusty-olive hover:text-beige-khaki active:border-b-2 active:translate-y-[2px] transition-all">
            Criar Conta
          </router-link>
        </div>
      </div>
    </header>
     </div>
    </template>
