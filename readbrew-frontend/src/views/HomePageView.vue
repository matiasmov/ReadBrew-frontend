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

    <section class="max-w-5xl mx-auto px-4 pt-16 pb-12">
      <div class="bg-white border-4 border-primary p-8 md:p-12 shadow-[8px_8px_0_0_var(--color-primary)] flex flex-col-reverse md:flex-row items-center gap-10">
        
        <div class="flex-1 text-center md:text-left">
          <div class="inline-block bg-caramel border-2 border-primary px-3 py-1 text-xs font-black uppercase text-primary mb-6 tracking-widest">
            🤓 Novo por aqui?
          </div>
          <h1 class="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 text-primary leading-tight">
            Seu cantinho de leitura <br/> na internet.
          </h1>
          <p class="text-lg text-dusty-olive font-bold mb-8 leading-relaxed">
            Monte sua estante virtual, descubra qual café combina com o seu livro atual e cultive o hábito de ler em um ambiente super aconchegante.
          </p>
          
          <router-link to="/register" class="inline-block bg-dusty-olive text-beige-khaki border-4 border-primary border-b-[6px] px-8 py-4 text-lg font-black uppercase tracking-wider hover:bg-green-dried-sage hover:text-charcoal-brown active:border-b-4 active:translate-y-[2px] transition-all shadow-sm">
            Pegar minha mesa ☕
          </router-link>
        </div>

        <div class="flex-1 w-full flex justify-center">
          <div class="w-full max-w-[350px] aspect-square bg-dried-sage border-4 border-primary border-dashed flex flex-col items-center justify-center p-2 text-center transform rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden">
            
            <img 
              src="../assets/me_pixel_art.png" 
              alt="Minha Pixel Art Fofa"
              class="w-full h-full object-contain pixelated-img hover:scale-105 transition-transform duration-300"
            />
            
          </div>
        </div>

      </div>
    </section>

    <section class="max-w-5xl mx-auto px-4 mt-8">
      <h2 class="text-center text-2xl font-black uppercase text-primary mb-8 tracking-widest">O que tem no menu?</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="bg-white border-4 border-primary p-6 shadow-[6px_6px_0_0_var(--color-primary)] flex flex-col items-center text-center hover:-translate-y-2 transition-transform cursor-pointer">
          <div class="w-20 h-20 bg-brown-caramel border-4 border-primary rounded-full flex items-center justify-center mb-4 shadow-sm">
            <span class="text-3xl pixelated-img">📚</span>
          </div>
          <h3 class="text-xl font-black text-primary uppercase mb-2">Estante Virtual</h3>
          <p class="text-sm font-bold text-dusty-olive">
            Salve os livros que você quer ler, avalie os que já terminou e organize sua biblioteca com etiquetas fofas.
          </p>
        </div>

        <div class="bg-white border-4 border-primary p-6 shadow-[6px_6px_0_0_var(--color-primary)] flex flex-col items-center text-center hover:-translate-y-2 transition-transform cursor-pointer">
          <div class="w-20 h-20 bg-caramel border-4 border-primary rounded-full flex items-center justify-center mb-4 shadow-sm">
            <span class="text-3xl pixelated-img">☕</span>
          </div>
          <h3 class="text-xl font-black text-primary uppercase mb-2">Café e Match</h3>
          <p class="text-sm font-bold text-dusty-olive">
             Começou a ler um romance? Recomendo um Latte Macchiato. Suspense? Um Espresso puro. Combine leituras e bebidas!
          </p>
        </div>

        <div class="bg-white border-4 border-primary p-6 shadow-[6px_6px_0_0_var(--color-primary)] flex flex-col items-center text-center hover:-translate-y-2 transition-transform cursor-pointer">
          <div class="w-20 h-20 bg-green-dried-sage border-4 border-primary rounded-full flex items-center justify-center mb-4 shadow-sm">
            <span class="text-3xl -img">🌱</span>
          </div>
          <h3 class="text-xl font-black text-primary uppercase mb-2">Cultive Hábitos</h3>
          <p class="text-sm font-bold text-dusty-olive">
            Desbloqueie selos de conquistas (badges), personalize seu perfil e veja sua plantinha virtual crescer conforme a sua leitura!
          </p>
        </div>

      </div>
    </section>

    <section class="max-w-5xl mx-auto px-4 mt-16">
      <div class="bg-caramel border-4 border-primary p-6 md:p-8 shadow-[8px_8px_0_0_var(--color-primary)] relative">
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-beige-khaki/60 rotate-2 border border-primary/20"></div>
        
        <h2 class="text-2xl font-black uppercase text-primary mb-6 tracking-widest flex items-center gap-3">
          📌 Mural da Cafeteria <span class="text-sm font-bold normal-case text-primary/70">(Últimas resenhas)</span>
        </h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          <div class="bg-white border-2 border-primary p-4 shadow-sm hover:rotate-1 transition-transform">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-black text-secondary">@leitora_ana</span>
              <span class="text-xs">⭐⭐⭐⭐⭐</span>
            </div>
            <p class="text-sm font-bold text-charcoal-brown mb-3">"O Hobbit foi ainda melhor acompanhado de um chá de camomila."</p>
            <div class="flex gap-2">
              <span class="bg-beige-khaki px-2 py-0.5 border border-primary text-[10px] font-black uppercase">Fantasia</span>
              <span class="bg-beige-khaki px-2 py-0.5 border border-primary text-[10px] font-black uppercase">🍵 Chá</span>
            </div>
          </div>

          <div class="bg-[#F9F6F0] border-2 border-primary p-4 shadow-sm transform -rotate-1 hover:rotate-0 transition-transform">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-black text-secondary">@lucas_books</span>
              <span class="text-xs">⭐⭐⭐⭐</span>
            </div>
            <p class="text-sm font-bold text-charcoal-brown mb-3">"Suspense perfeito! Fiquei tão tenso que tive que virar um café preto forte!"</p>
            <div class="flex gap-2">
              <span class="bg-beige-khaki px-2 py-0.5 border border-primary text-[10px] font-black uppercase">Thriller</span>
              <span class="bg-beige-khaki px-2 py-0.5 border border-primary text-[10px] font-black uppercase">☕ Preto</span>
            </div>
          </div>

          <div class="bg-white border-2 border-primary p-4 shadow-sm transform rotate-1 hover:rotate-0 transition-transform hidden md:block">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-black text-secondary">@mari_arts</span>
              <span class="text-xs">⭐⭐⭐⭐⭐</span>
            </div>
            <p class="text-sm font-bold text-charcoal-brown mb-3">"Lendo romance de época cercada pelas minhas suculentas. Que paz."</p>
            <div class="flex gap-2">
              <span class="bg-beige-khaki px-2 py-0.5 border border-primary text-[10px] font-black uppercase">Romance</span>
              <span class="bg-beige-khaki px-2 py-0.5 border border-primary text-[10px] font-black uppercase"> ☕ Cappucino</span>
            </div>
          </div>
          

        </div>
      </div>
    </section>

<section class="max-w-5xl mx-auto px-4 mt-16 mb-12" data-aos="fade-up">
      <div class="bg-white border-4 border-primary p-8 md:p-12 shadow-[8px_8px_0_0_var(--color-primary)] flex flex-col md:flex-row gap-10 items-center">

        <div class="flex-1" data-aos="fade-right" data-aos-delay="200">
          <h3 class="text-xl font-black text-secondary uppercase mb-2 tracking-widest">Nossa Missão</h3>
          <h2 class="text-3xl md:text-4xl font-black text-primary uppercase leading-tight mb-4">
            Mais que um app, <br/>um refúgio.
          </h2>
          <p class="text-dusty-olive font-bold mb-6 leading-relaxed">
            A vida moderna é barulhenta. Criamos o ReadBrew para ser o seu momento de paz. Um lugar onde você pode se desconectar do caos, focar nos seus livros e veja as críticas de quem compartilha da mesma paixão.
          </p>
          <a href="#" class="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest hover:text-caramel transition-colors group">
            Conheça nossa história <span class="group-hover:translate-x-1 transition-transform">➡</span>
          </a>
        </div>

        <div class="flex-1 flex flex-col gap-6 w-full">

          <div class="bg-[#F9F6F0] border-2 border-primary p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform shadow-sm" data-aos="fade-left" data-aos-delay="300">
            <div class="w-12 h-12 shrink-0 bg-caramel border-2 border-primary rounded-full flex items-center justify-center text-xl pixelated-img">
              🤝
            </div>
            <div>
              <p class="font-black text-primary uppercase text-sm mb-1">Comunidade Real</p>
              <p class="text-xs font-bold text-dusty-olive">Encontre pessoas que amam os mesmos gêneros literários que você.</p>
            </div>
          </div>

          <div class="bg-[#F9F6F0] border-2 border-primary p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform shadow-sm" data-aos="fade-left" data-aos-delay="500">
            <div class="w-12 h-12 shrink-0 bg-green-dried-sage border-2 border-primary rounded-full flex items-center justify-center text-xl pixelated-img">
              🌱
            </div>
            <div>
              <p class="font-black text-primary uppercase text-sm mb-1">Crescimento Saudável</p>
              <p class="text-xs font-bold text-dusty-olive">Acompanhe seu progresso de leitura sem a pressão de algoritmos.</p>
            </div>
          </div>

          <div class="bg-[#F9F6F0] border-2 border-primary p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform shadow-sm" data-aos="fade-left" data-aos-delay="700">
            <div class="w-12 h-12 shrink-0 bg-brown-caramel border-2 border-primary rounded-full flex items-center justify-center text-xl pixelated-img">
              🕰️
            </div>
            <div>
              <p class="font-black text-primary uppercase text-sm mb-1">Seu Tempo, Suas Regras</p>
              <p class="text-xs font-bold text-dusty-olive">Sem distrações ou rolagem infinita. Apenas você, seu café e sua estante.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

   <section class="max-w-5xl mx-auto px-4 mt-24 mb-16">
      <h2 class="text-3xl font-black uppercase text-primary text-center mb-16 tracking-widest" data-aos="fade-down">
        O Fluxo do Sistema
      </h2> 

      <div class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">

        <div class="flex flex-col items-center w-full max-w-[260px] group" data-aos="zoom-in" data-aos-delay="100">
          <div class="w-20 h-20 rounded-full bg-green-dried-sage border-4 border-primary shadow-[4px_4px_0_0_var(--color-primary)] flex items-center justify-center mb-4 z-10 group-hover:-translate-y-2 transition-transform">
            <span class="text-3xl pixelated-img">📖</span>
          </div>
          
          <div class="bg-white border-2 border-primary p-5 shadow-[4px_4px_0_0_var(--color-primary)] text-center relative w-full mt-2">
            <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-caramel border-2 border-primary px-3 py-0.5 text-[10px] font-black uppercase tracking-widest text-primary">
              Passo 01
            </span>
            <h3 class="font-black text-primary uppercase text-sm mb-2">Iniciar Leitura()</h3>
            <p class="text-sm font-bold text-charcoal-brown leading-tight">
              O usuário seleciona um livro na estante virtual e inicia uma nova aventura.
            </p>
          </div>
        </div>

        <div class="text-4xl text-primary font-black pixelated-img animate-pulse my-2 md:my-0 md:mt-[-50px]" data-aos="fade-in" data-aos-delay="200">
          <span class="hidden md:block">➔</span>
          <span class="block md:hidden">⬇</span>
        </div>

        <div class="flex flex-col items-center w-full max-w-[260px] group" data-aos="zoom-in" data-aos-delay="300">
          <div class="w-20 h-20 rounded-full bg-caramel border-4 border-primary shadow-[4px_4px_0_0_var(--color-primary)] flex items-center justify-center mb-4 z-10 group-hover:-translate-y-2 transition-transform">
            <span class="text-3xl pixelated-img">☕</span>
          </div>
          
          <div class="bg-white border-2 border-primary p-5 shadow-[4px_4px_0_0_var(--color-primary)] text-center relative w-full mt-2">
            <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-caramel border-2 border-primary px-3 py-0.5 text-[10px] font-black uppercase tracking-widest text-primary">
              Passo 02
            </span>
            <h3 class="font-black text-primary uppercase text-sm mb-2">Gerar Match()</h3>
            <p class="text-sm font-bold text-charcoal-brown leading-tight">
              O sistema analisa o gênero do livro e recomenda a bebida quente perfeita para o clima.
            </p>
          </div>
        </div>

        <div class="text-4xl text-primary font-black pixelated-img animate-pulse my-2 md:my-0 md:mt-[-50px]" data-aos="fade-in" data-aos-delay="400">
          <span class="hidden md:block">➔</span>
          <span class="block md:hidden">⬇</span>
        </div>

        <div class="flex flex-col items-center w-full max-w-[260px] group" data-aos="zoom-in" data-aos-delay="500">
          <div class="w-20 h-20 rounded-full bg-dusty-olive border-4 border-primary shadow-[4px_4px_0_0_var(--color-primary)] flex items-center justify-center mb-4 z-10 group-hover:-translate-y-2 transition-transform">
            <span class="text-3xl pixelated-img">⭐</span>
          </div>
          
          <div class="bg-white border-2 border-primary p-5 shadow-[4px_4px_0_0_var(--color-primary)] text-center relative w-full mt-2">
            <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-caramel border-2 border-primary px-3 py-0.5 text-[10px] font-black uppercase tracking-widest text-primary">
              Passo 03
            </span>
            <h3 class="font-black text-primary uppercase text-sm mb-2">Concluir Missão()</h3>
            <p class="text-sm font-bold text-charcoal-brown leading-tight">
              A leitura é finalizada. O usuário ganha XP e a resenha vai para o mural da comunidade.
            </p>
          </div>
        </div>

      </div>
    </section>
  
    <footer class="bg-beige-khaki border-t-4 border-primary pt-10 pb-6 mt-24">
      <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div class="text-xl font-black text-primary flex items-center gap-2 tracking-tight">
          <span class="text-3xl pixelated-img"></span> READBREW
        </div>

        <ul class="flex flex-wrap justify-center gap-6 text-xs font-bold text-dusty-olive uppercase tracking-widest">
          <li><router-link to="/register" class="hover:text-caramel transition-colors">Criar Conta</router-link></li>
          <li><a href="#" class="hover:text-caramel transition-colors">GitHub</a></li>
          <li><a href="#" class="hover:text-caramel transition-colors">Termos de Uso</a></li>
        </ul>

      </div>

      <div class="max-w-5xl mx-auto px-6 mt-8 pt-6 border-t border-primary/20 text-center text-[10px] font-bold text-charcoal-brown uppercase tracking-widest">
        <p>Desenvolvido com ☕, código e pixel art. © 2026 ReadBrew.</p>
      </div>
    </footer>



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