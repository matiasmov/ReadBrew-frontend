<template>
  <div class="min-h-screen bg-beige-khaki text-charcoal-brown font-sans pb-16 md:pb-24 lg:pb-32 selection:bg-dusty-olive selection:text-white">
    
    <header class="bg-primary border-b-4 border-charcoal-brown sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 flex justify-between items-center">
        
        <div class="text-2xl md:text-3xl lg:text-4xl font-black text-caramel flex items-center gap-2 md:gap-3 lg:gap-4 tracking-tight hover:scale-105 transition-transform cursor-pointer">
          <span class="text-3xl md:text-4xl lg:text-5xl pixelated-img">☕</span> 
          <span class="hidden sm:inline">READBREW</span>
          <span class="inline sm:hidden">RB</span>
        </div>
        
        <nav class="hidden md:flex gap-6 md:gap-7 lg:gap-8 items-center text-base md:text-lg font-bold text-beige-khaki tracking-widest uppercase">
          <a href="#" class="hover:text-caramel transition-colors">A Cafeteria</a>
          <a href="#" class="hover:text-caramel transition-colors">Clube do Livro</a>
        </nav>

        <div class="flex gap-4 md:gap-5 lg:gap-6 items-center">
          <router-link to="/login" class="text-sm md:text-base lg:text-lg font-bold text-beige-khaki hover:text-white tracking-wider uppercase">Entrar</router-link>
          
          <router-link to="/register" class="bg-green-dried-sage text-charcoal-brown border-2 border-charcoal-brown border-b-4 px-4 py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3 text-sm md:text-base lg:text-lg font-black uppercase tracking-wider hover:bg-dusty-olive hover:text-beige-khaki active:border-b-2 active:translate-y-[2px] transition-all">
            Criar Conta
          </router-link>
        </div>
      </div>
    </header>

    <section class="max-w-6xl mx-auto px-4 md:px-6 lg:px-6 pt-6 md:pt-8 lg:pt-10 pb-8 md:pb-12 lg:pb-16">
      <div class="bg-white border-4 border-primary p-6 md:p-10 lg:p-14 shadow-[6px_6px_0_0_var(--color-primary)] md:shadow-[9px_9px_0_0_var(--color-primary)] lg:shadow-[12px_12px_0_0_var(--color-primary)] flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 lg:gap-12">
        
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 md:mb-6 lg:mb-8 text-primary leading-tight">
            Seu cantinho de leitura <br/> na internet.
          </h1>
          <p class="text-base md:text-lg lg:text-xl text-dusty-olive font-bold mb-6 md:mb-8 lg:mb-10 leading-relaxed">
            Monte sua estante virtual, descubra qual café combina com o seu livro atual e cultive o hábito de ler em um ambiente aconchegante.
          </p>
          
          <router-link to="/register" class="inline-block bg-dusty-olive text-beige-khaki border-4 border-primary border-b-[6px] md:border-b-[7px] lg:border-b-[8px] px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 text-lg md:text-xl lg:text-2xl font-black uppercase tracking-wider hover:bg-green-dried-sage hover:text-charcoal-brown active:border-b-4 active:translate-y-[2px] transition-all shadow-sm">
            Pegar minha mesa
          </router-link>
        </div>

        <div class="flex-1 w-full flex justify-center">
          <div class="w-full max-w-[280px] md:max-w-[350px] lg:max-w-[400px] aspect-square bg-dried-sage border-4 border-primary border-dashed flex flex-col items-center justify-center p-2 md:p-2.5 lg:p-3 text-center transform rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden">
            <img 
              src="../assets/icons/HomePageIcons/me_pixel_art.png" 
              alt="Minha Pixel"
              class="w-full h-full object-contain pixelated-img hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 md:px-6 lg:px-6 mt-8 md:mt-10 lg:mt-12">
      <h2 class="text-center text-2xl md:text-3xl lg:text-4xl font-black uppercase text-primary mb-8 md:mb-10 lg:mb-12 tracking-widest">O que tem no menu?</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
        
        <div class="bg-white border-4 border-primary p-6 md:p-7 lg:p-8 shadow-[6px_6px_0_0_var(--color-primary)] md:shadow-[7px_7px_0_0_var(--color-primary)] lg:shadow-[8px_8px_0_0_var(--color-primary)] flex flex-col items-center text-center hover:-translate-y-2 transition-transform cursor-pointer">
          <div class="w-20 h-20 md:w-24 md:h-24 lg:w-26 lg:h-26 bg-brown-caramel border-4 border-primary rounded-full flex items-center justify-center mb-4 md:mb-5 lg:mb-6 shadow-sm">
            <img 
              src="../assets/icons/HomePageIcons/ic_book_fairytale.png" 
              alt="Livro"
              class="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 class="text-xl md:text-2xl lg:text-3xl font-black text-primary uppercase mb-2 md:mb-2.5 lg:mb-3">Estante Virtual</h3>
          <p class="text-sm md:text-base lg:text-lg font-bold text-dusty-olive leading-relaxed">
            Salve os livros que você quer ler, avalie os que já terminou e organize sua biblioteca com etiquetas fofas.
          </p>
        </div>

        <div class="bg-white border-4 border-primary p-6 md:p-7 lg:p-8 shadow-[6px_6px_0_0_var(--color-primary)] md:shadow-[7px_7px_0_0_var(--color-primary)] lg:shadow-[8px_8px_0_0_var(--color-primary)] flex flex-col items-center text-center hover:-translate-y-2 transition-transform cursor-pointer">
          <div class="w-20 h-20 md:w-24 md:h-24 lg:w-26 lg:h-26 bg-caramel border-4 border-primary rounded-full flex items-center justify-center mb-4 md:mb-5 lg:mb-6 shadow-sm">
            <img 
              src="../assets/icons/HomePageIcons/ic_coffee_bean.png" 
              alt="Café"
              class="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 class="text-xl md:text-2xl lg:text-3xl font-black text-primary uppercase mb-2 md:mb-2.5 lg:mb-3">Café e Match</h3>
          <p class="text-sm md:text-base lg:text-lg font-bold text-dusty-olive leading-relaxed">
             Começou a ler um romance? Por que não um Latte Macchiato? Suspense? Um Espresso duplo. Combine leituras e bebidas!
          </p>
        </div>

        <div class="bg-white border-4 border-primary p-6 md:p-7 lg:p-8 shadow-[6px_6px_0_0_var(--color-primary)] md:shadow-[7px_7px_0_0_var(--color-primary)] lg:shadow-[8px_8px_0_0_var(--color-primary)] flex flex-col items-center text-center hover:-translate-y-2 transition-transform cursor-pointer">
          <div class="w-20 h-20 md:w-24 md:h-24 lg:w-26 lg:h-26 bg-green-dried-sage border-4 border-primary rounded-full flex items-center justify-center mb-4 md:mb-5 lg:mb-6 shadow-sm">
            <img 
              src="../assets/icons/HomePageIcons/ic_tea_green.png" 
              alt="Chá"
              class="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 class="text-xl md:text-2xl lg:text-3xl font-black text-primary uppercase mb-2 md:mb-2.5 lg:mb-3">Cultive Hábitos</h3>
          <p class="text-sm md:text-base lg:text-lg font-bold text-dusty-olive leading-relaxed">
            Desbloqueie selos de conquistas, personalize seu perfil e descubra o que seus mutuais estão fazendo pela timeline.
          </p>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 md:px-6 lg:px-6 mt-16 md:mt-20 lg:mt-24">
      <div class="bg-caramel border-4 border-primary p-6 md:p-10 lg:p-12 shadow-[8px_8px_0_0_var(--color-primary)] md:shadow-[10px_10px_0_0_var(--color-primary)] lg:shadow-[12px_12px_0_0_var(--color-primary)] relative">
        <div class="absolute -top-3 md:-top-3.5 lg:-top-4 left-1/2 -translate-x-1/2 w-24 md:w-28 lg:w-32 h-6 md:h-7 lg:h-8 bg-beige-khaki/60 rotate-2 border-2 border-primary/20"></div>
        
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-black uppercase text-primary mb-6 md:mb-7 lg:mb-8 tracking-widest flex flex-col md:flex-row md:items-center gap-2 md:gap-3 lg:gap-4 text-center md:text-left">
          Mural da Cafeteria <span class="text-sm md:text-base lg:text-lg font-bold normal-case text-primary/70">(Últimas resenhas)</span>
        </h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          
          <div class="bg-white border-2 border-primary p-4 md:p-5 lg:p-6 shadow-sm hover:rotate-1 transition-transform">
            <div class="flex items-center justify-between mb-2 md:mb-2.5 lg:mb-3">
              <span class="text-xs md:text-sm lg:text-base font-black text-secondary">@leitora_sofia</span>
              <span class="text-xs md:text-sm lg:text-base">⭐⭐⭐⭐⭐</span>
            </div>
            <p class="text-sm md:text-base lg:text-lg font-bold text-charcoal-brown mb-3 md:mb-3.5 lg:mb-4 leading-relaxed">"Suspense perfeito! Fiquei tão tenso que tive que virar um café preto forte!"</p>
            <div class="flex gap-2 md:gap-2.5 lg:gap-3">
              <span class="bg-beige-khaki px-2 md:px-2.5 py-0.5 md:py-1 border border-primary text-[10px] md:text-xs lg:text-sm font-black uppercase">Fantasia</span>
              <span class="bg-beige-khaki px-2 md:px-2.5 py-0.5 md:py-1 border border-primary text-[10px] md:text-xs lg:text-sm font-black uppercase">☕ Macchiato</span>
            </div>
          </div>

          <div class="bg-[#F9F6F0] border-2 border-primary p-4 md:p-5 lg:p-6 shadow-sm transform -rotate-1 hover:rotate-0 transition-transform">
            <div class="flex items-center justify-between mb-2 md:mb-2.5 lg:mb-3">
              <span class="text-xs md:text-sm lg:text-base font-black text-secondary">@Mari_arts</span>
              <span class="text-xs md:text-sm lg:text-base">⭐⭐⭐⭐</span>
            </div>
            <p class="text-sm md:text-base lg:text-lg font-bold text-charcoal-brown mb-3 md:mb-3.5 lg:mb-4 leading-relaxed">"O Hobbit foi ainda melhor acompanhado de um chá de camomila."</p>
            <div class="flex gap-2 md:gap-2.5 lg:gap-3">
              <span class="bg-beige-khaki px-2 md:px-2.5 py-0.5 md:py-1 border border-primary text-[10px] md:text-xs lg:text-sm font-black uppercase">Thriller</span>
              <span class="bg-beige-khaki px-2 md:px-2.5 py-0.5 md:py-1 border border-primary text-[10px] md:text-xs lg:text-sm font-black uppercase">🍵 Chá</span>
            </div>
          </div>

          <div class="bg-white border-2 border-primary p-4 md:p-5 lg:p-6 shadow-sm transform rotate-1 hover:rotate-0 transition-transform hidden md:block">
            <div class="flex items-center justify-between mb-2 md:mb-2.5 lg:mb-3">
              <span class="text-xs md:text-sm lg:text-base font-black text-secondary">@menoQuenteDosLivros</span>
              <span class="text-xs md:text-sm lg:text-base">⭐⭐⭐⭐⭐</span>
            </div>
            <p class="text-sm md:text-base lg:text-lg font-bold text-charcoal-brown mb-3 md:mb-3.5 lg:mb-4 leading-relaxed">"ótimo romance para se ver em um domingo à noite. Que paz terrível."</p>
            <div class="flex gap-2 md:gap-2.5 lg:gap-3">
              <span class="bg-beige-khaki px-2 md:px-2.5 py-0.5 md:py-1 border border-primary text-[10px] md:text-xs lg:text-sm font-black uppercase">Romance</span>
              <span class="bg-beige-khaki px-2 md:px-2.5 py-0.5 md:py-1 border border-primary text-[10px] md:text-xs lg:text-sm font-black uppercase padding">☕ Cappucino</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 md:px-6 lg:px-6 mt-16 md:mt-20 lg:mt-24 mb-12 md:mb-14 lg:mb-16" data-aos="fade-up">
      <div class="bg-white border-4 border-primary p-6 md:p-10 lg:p-16 shadow-[8px_8px_0_0_var(--color-primary)] md:shadow-[10px_10px_0_0_var(--color-primary)] lg:shadow-[12px_12px_0_0_var(--color-primary)] flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 items-center">

        <div class="flex-1 text-center md:text-left" data-aos="fade-right" data-aos-delay="200">
          <h3 class="text-xl md:text-2xl lg:text-3xl font-black text-secondary uppercase mb-2 md:mb-3 lg:mb-4 tracking-widest">Nossa Missão</h3>
          <h2 class="text-3xl md:text-4xl lg:text-5xl md:text-6xl font-black text-primary uppercase leading-tight mb-4 md:mb-5 lg:mb-6">
            Mais que um app, <br/>um refúgio.
          </h2>
          <p class="text-base md:text-lg lg:text-xl text-dusty-olive font-bold mb-6 md:mb-7 lg:mb-8 leading-relaxed">
            A vida moderna é barulhenta. Criamos o ReadBrew para ser o seu momento de paz. Um lugar onde você pode se desconectar do caos, focar nos seus livros e veja as críticas de quem compartilha da mesma paixão.
          </p>
          <a href="#" class="inline-flex items-center gap-2 md:gap-2.5 lg:gap-3 text-lg md:text-xl lg:text-2xl text-primary font-black uppercase tracking-widest hover:text-caramel transition-colors group">
            Conheça nossa história
          </a>
        </div>

        <div class="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-8 w-full">

          <div class="bg-[#F9F6F0] border-2 border-primary p-4 md:p-5 lg:p-6 flex items-center gap-4 md:gap-6 lg:gap-8 hover:-translate-y-1 transition-transform shadow-sm" data-aos="fade-left" data-aos-delay="300">
            <div class="w-16 h-16 md:w-22 md:h-22 lg:w-26 lg:h-26 shrink-0 bg-caramel border-2 md:border-[3px] border-primary rounded-full flex items-center justify-center text-xl md:text-2xl lg:text-3xl">
              <img 
                src="../assets/icons/HomePageIcons/ic_handshake.png" 
                alt="Aperto"
                class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <p class="font-black text-primary uppercase text-sm md:text-base lg:text-lg mb-1 md:mb-1.5 lg:mb-2">Comunidade Real</p>
              <p class="text-xs md:text-sm lg:text-base font-bold text-dusty-olive">Encontre pessoas que amam os mesmos gêneros literários que você.</p>
            </div>
          </div>

          <div class="bg-[#F9F6F0] border-2 border-primary p-4 md:p-5 lg:p-6 flex items-center gap-4 md:gap-6 lg:gap-8 hover:-translate-y-1 transition-transform shadow-sm" data-aos="fade-left" data-aos-delay="500">
            <div class="w-16 h-16 md:w-22 md:h-22 lg:w-26 lg:h-26 shrink-0 bg-green-dried-sage border-2 md:border-[3px] border-primary rounded-full flex items-center justify-center text-xl md:text-2xl lg:text-3xl">
              <img 
                src="../assets/icons/HomePageIcons/ic_time_book.png"  
                alt="Livro_tempo"
                class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <p class="font-black text-primary uppercase text-sm md:text-base lg:text-lg mb-1 md:mb-1.5 lg:mb-2">Crescimento Saudável</p>
              <p class="text-xs md:text-sm lg:text-base font-bold text-dusty-olive">Acompanhe seu progresso de leitura sem a pressão de algoritmos.</p>
            </div>
          </div>

          <div class="bg-[#F9F6F0] border-2 border-primary p-4 md:p-5 lg:p-6 flex items-center gap-4 md:gap-6 lg:gap-8 hover:-translate-y-1 transition-transform shadow-sm" data-aos="fade-left" data-aos-delay="700">
            <div class="w-16 h-16 md:w-22 md:h-22 lg:w-26 lg:h-26 shrink-0 bg-brown-caramel border-2 md:border-[3px] border-primary rounded-full flex items-center justify-center text-xl md:text-2xl lg:text-3xl">
              <img 
                src="../assets/icons/HomePageIcons/ic_bookshelf.png" 
                alt="Estante"
                class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <p class="font-black text-primary uppercase text-sm md:text-base lg:text-lg mb-1 md:mb-1.5 lg:mb-2">Relaxe sua mente</p>
              <p class="text-xs md:text-sm lg:text-base font-bold text-dusty-olive">Sem distrações ou rolagem infinita. Apenas você, seu café e sua estante.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 md:px-6 lg:px-6 mt-16 md:mt-24 lg:mt-32 mb-12 md:mb-16 lg:mb-20">
      <div class="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-10">

        <div class="flex flex-col items-center w-full max-w-[280px] md:max-w-[310px] lg:max-w-[340px] group" data-aos="zoom-in" data-aos-delay="100">
          <div class="w-20 h-20 md:w-24 md:h-24 lg:w-26 lg:h-26 rounded-full bg-green-dried-sage border-4 border-primary shadow-[4px_4px_0_0_var(--color-primary)] md:shadow-[5px_5px_0_0_var(--color-primary)] lg:shadow-[6px_6px_0_0_var(--color-primary)] flex items-center justify-center mb-4 md:mb-5 lg:mb-6 z-10 group-hover:-translate-y-2 transition-transform">
            <img 
              src="../assets/icons/HomePageIcons/ic_shelf.png" 
              alt="Estante"
              class="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div class="bg-white border-2 border-primary p-5 md:p-6 lg:p-8 shadow-[4px_4px_0_0_var(--color-primary)] md:shadow-[5px_5px_0_0_var(--color-primary)] lg:shadow-[6px_6px_0_0_var(--color-primary)] text-center relative w-full mt-2 md:mt-2.5 lg:mt-3">
            <span class="absolute -top-3 md:-top-3.5 lg:-top-4 left-1/2 -translate-x-1/2 bg-caramel border-2 border-primary px-3 md:px-3.5 lg:px-4 py-0.5 md:py-1 text-[10px] md:text-xs lg:text-sm font-black uppercase tracking-widest text-primary">
              Passo 01
            </span>
            <h3 class="font-black text-primary uppercase text-sm md:text-lg lg:text-xl mb-2 md:mb-2.5 lg:mb-3">Início</h3>
            <p class="text-sm md:text-base lg:text-lg font-bold text-charcoal-brown leading-tight">
              O usuário seleciona um livro e o adiciona na sua própria estante virtual, podendo iniciá-lo                                                                                                                                                                                                                              
            </p>
          </div>
        </div>

        <div class="text-4xl md:text-5xl lg:text-6xl text-primary font-black pixelated-img animate-pulse my-2 md:my-0 md:mt-[-50px] lg:mt-[-60px]" data-aos="fade-in" data-aos-delay="200">
          <span class="hidden md:block">➔</span>
          <span class="block md:hidden">⬇</span>
        </div>

        <div class="flex flex-col items-center w-full max-w-[280px] md:max-w-[310px] lg:max-w-[340px] group" data-aos="zoom-in" data-aos-delay="300">
          <div class="w-20 h-20 md:w-24 md:h-24 lg:w-26 lg:h-26 rounded-full bg-caramel border-4 border-primary shadow-[4px_4px_0_0_var(--color-primary)] md:shadow-[5px_5px_0_0_var(--color-primary)] lg:shadow-[6px_6px_0_0_var(--color-primary)] flex items-center justify-center mb-4 md:mb-5 lg:mb-6 z-10 group-hover:-translate-y-2 transition-transform">
            <img 
              src="../assets/icons/HomePageIcons/ic_coffee_botton.png" 
              alt="Café Botão"
              class="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div class="bg-white border-2 border-primary p-5 md:p-6 lg:p-8 shadow-[4px_4px_0_0_var(--color-primary)] md:shadow-[5px_5px_0_0_var(--color-primary)] lg:shadow-[6px_6px_0_0_var(--color-primary)] text-center relative w-full mt-2 md:mt-2.5 lg:mt-3">
            <span class="absolute -top-3 md:-top-3.5 lg:-top-4 left-1/2 -translate-x-1/2 bg-caramel border-2 border-primary px-3 md:px-3.5 lg:px-4 py-0.5 md:py-1 text-[10px] md:text-xs lg:text-sm font-black uppercase tracking-widest text-primary">
              Passo 02
            </span>
            <h3 class="font-black text-primary uppercase text-sm md:text-lg lg:text-xl mb-2 md:mb-2.5 lg:mb-3">Combinação</h3>
            <p class="text-sm md:text-base lg:text-lg font-bold text-charcoal-brown leading-tight">
              O sistema analisa o gênero do livro e recomenda a bebida ideal para o clima.
            </p>
          </div>
        </div>

        <div class="text-4xl md:text-5xl lg:text-6xl text-primary font-black pixelated-img animate-pulse my-2 md:my-0 md:mt-[-50px] lg:mt-[-60px]" data-aos="fade-in" data-aos-delay="400">
          <span class="hidden md:block">➔</span>
          <span class="block md:hidden">⬇</span>
        </div>

        <div class="flex flex-col items-center w-full max-w-[280px] md:max-w-[310px] lg:max-w-[340px] group" data-aos="zoom-in" data-aos-delay="500">
          <div class="w-20 h-20 md:w-24 md:h-24 lg:w-26 lg:h-26 rounded-full bg-dusty-olive border-4 border-primary shadow-[4px_4px_0_0_var(--color-primary)] md:shadow-[5px_5px_0_0_var(--color-primary)] lg:shadow-[6px_6px_0_0_var(--color-primary)] flex items-center justify-center mb-4 md:mb-5 lg:mb-6 z-10 group-hover:-translate-y-2 transition-transform">
            <img 
              src="../assets/icons/HomePageIcons/ic_feedback.png" 
              alt="Feedback"
              class="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div class="bg-white border-2 border-primary p-5 md:p-6 lg:p-8 shadow-[4px_4px_0_0_var(--color-primary)] md:shadow-[5px_5px_0_0_var(--color-primary)] lg:shadow-[6px_6px_0_0_var(--color-primary)] text-center relative w-full mt-2 md:mt-2.5 lg:mt-3">
            <span class="absolute -top-3 md:-top-3.5 lg:-top-4 left-1/2 -translate-x-1/2 bg-caramel border-2 border-primary px-3 md:px-3.5 lg:px-4 py-0.5 md:py-1 text-[10px] md:text-xs lg:text-sm font-black uppercase tracking-widest text-primary">
              Passo 03
            </span>
            <h3 class="font-black text-primary uppercase text-sm md:text-lg lg:text-xl mb-2 md:mb-2.5 lg:mb-3">Resenha</h3>
            <p class="text-sm md:text-base lg:text-lg font-bold text-charcoal-brown leading-tight">
              A leitura é finalizada. O usuário ganha XP e a resenha vai para o mural da comunidade.
            </p>
          </div>
        </div>

      </div>
    </section>
  
    <footer class="bg-beige-khaki border-t-4 border-primary pt-8 md:pt-10 lg:pt-12 pb-6 md:pb-7 lg:pb-8 mt-16 md:mt-24 lg:mt-32">
      <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-7 lg:gap-8">

        <div class="text-2xl md:text-3xl lg:text-3xl font-black text-primary flex items-center gap-2 md:gap-3 lg:gap-3 tracking-tight">
          <span class="text-4xl md:text-5xl lg:text-5xl pixelated-img">☕</span> READBREW
        </div>

        <ul class="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 text-sm md:text-base lg:text-base font-bold text-dusty-olive uppercase tracking-widest">
          <li><a href="https://github.com/matiasmov" class="hover:text-caramel transition-colors">GitHub</a></li>
          <li><a href="#" class="hover:text-caramel transition-colors">Sobre</a></li>
        </ul>

      </div>

      <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 mt-6 md:mt-8 lg:mt-10 pt-6 md:pt-7 lg:pt-8 border-t border-primary/20 text-center text-xs md:text-sm lg:text-sm font-bold text-charcoal-brown uppercase tracking-widest">
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