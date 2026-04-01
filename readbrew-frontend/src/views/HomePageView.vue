<template>
  <div class="min-h-screen bg-sand text-charcoal-brown font-sans selection:bg-dusty-olive selection:text-white flex flex-col">
    
    <div class="sticky top-6 z-50 px-4 md:px-6 w-full max-w-7xl mx-auto flex justify-center">
      <header class="w-full bg-dark-lava/40 backdrop-blur-md border border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.15)] px-6 lg:px-8 py-3 flex justify-between items-center transition-all duration-300">
        
        <div class="text-2xl lg:text-3xl font-black text-caramel flex items-center gap-3 tracking-tight cursor-pointer hover:scale-105 transition-transform drop-shadow-md">
          <router-link to="/"><span class="text-3xl lg:text-4xl">☕</span></router-link> <!--i used emojis because I don't have my own logo yet-->
          <router-link to="/" class="hidden sm:inline text-white">READBREW</router-link> <!--idk why not going, but i'll fixing this (<router-link>)-->
          <span class="inline sm:hidden text-white">RB</span> <!--mainly for mobile-->
        </div>
        
        <nav class="hidden md:flex gap-8 lg:gap-10 items-center text-sm md:text-base font-bold text-white/90 tracking-widest uppercase">
          <router-link to="/cafeteria" class="hover:text-coffee hover:text-shadow-sm transition-all">Cafeteria</router-link>
          <router-link to="/library" class="hover:text-coffee hover:text-shadow-sm transition-all">Biblioteca</router-link>
        </nav>

        <div class="flex gap-4 lg:gap-6 items-center">
          <router-link to="/login" class="text-sm md:text-base font-bold text-white/90 hover:text-coffee tracking-wider uppercase transition-colors">Entrar</router-link>
          
          <router-link to="/register" class="bg-caramel text-paper-white border border-white/30 px-6 py-2 lg:px-8 lg:py-2.5 text-sm md:text-base font-black uppercase tracking-wider rounded-full hover:bg-dusty-olive hover:scale-105 active:scale-95 transition-all shadow-lg">
            Criar Conta
          </router-link>
        </div>

      </header>
    </div>

    
      <section class="max-w-7xl mx-auto px-6 pt-16 lg:pt-24 pb-12 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-8 text-primary leading-[1.1] border-l-8 border-caramel pl-6 md:pl-8 text-left">
            Seu ritmo. <br/>
            Sua estante.
          </h1>
          <p class="text-xl md:text-2xl text-dusty-olive font-bold mb-10 leading-relaxed max-w-2xl text-left pl-6 md:pl-8">
            Monte sua estante virtual, descubra qual café combina com o seu livro atual e cultive o hábito de ler em um ambiente aconchegante. Esqueça a pressão social e a rolagem infinita.
          </p>
          <div class="text-left pl-6 md:pl-8">
            <router-link to="/register" class="inline-block bg-dusty-olive text-beige-khaki border-4 border-charcoal-brown rounded-lg shadow-[8px_8px_0_0_var(--color-charcoal-brown)] px-10 py-5 text-xl font-black uppercase tracking-widest hover:bg-green-dried-sage hover:text-charcoal-brown active:border-b-4 active:translate-y-[2px] transition-all hover:-rotate-1">
              Puxar uma cadeira
            </router-link>
          </div>
        </div>

        <div class="w-full max-w-[400px] bg-[#F5E49C] border-4 border-charcoal-brown p-2.5 c-2xl flex flex-col items-center justify-center text-center transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-[12px_12px_0_0_var(--color-charcoal-brown)] shrink-0 mt-10 md:mt-0 rounded-2xl">
          <div class="w-full h-full rounded-xl overflow-hidden flex items-center justify-center">
            <img 
              src="../assets/icons/HomePageIcons/me_pixel_art.png" 
              alt="Mascote ReadBrew PixelArt"
              class="w-full h-auto object-contain pixelated-img hover:scale-102 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-6 mt-16 md:mt-24 mb-16 lg:mb-20">
        <h2 class="text-left text-3xl font-black uppercase text-primary mb-12 border-b-4 border-charcoal-brown pb-4 tracking-widest">No nosso Cardápio</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          
          <div class="md:col-span-5 md:row-span-2 bg-paper-white border-4 border-charcoal-brown rounded-2xl p-8 lg:p-12 shadow-[12px_12px_0_0_var(--color-charcoal-brown)] flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1">
            <div class="w-24 h-24 lg:w-32 lg:h-32 bg-[#D7C7A2] border-4 border-charcoal-brown rounded-full flex items-center justify-center mb-6 lg:mb-8 shadow-[6px_6px_0_0_var(--color-charcoal-brown)] shrink-0">
              <img src="../assets/icons/HomePageIcons/ic_book_fairytale.png" alt="Ícone Livro Esboçado" class="w-16 h-16 lg:w-20 lg:h-20 object-contain" />
            </div>
            <h3 class="text-2xl lg:text-3xl font-black text-primary uppercase mb-4 tracking-tight">Estante Virtual</h3>
            <p class="text-lg lg:text-xl font-bold text-dusty-olive leading-relaxed">
              Salve os livros que você quer ler, avalie os que já terminou e organize sua biblioteca com etiquetas fofas. Crie o seu espaço sagrado de literatura.
            </p>
          </div>

          <div class="md:col-span-7 bg-[#F9F6F0] border-4 border-charcoal-brown rounded-2xl p-6 md:p-8 shadow-[12px_12px_0_0_var(--color-charcoal-brown)] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 transition-transform hover:-translate-y-1">
            <div class="w-20 h-20 lg:w-24 lg:h-24 shrink-0 bg-caramel border-4 border-charcoal-brown rounded-full flex items-center justify-center shadow-[6px_6px_0_0_var(--color-charcoal-brown)]">
              <img src="../assets/icons/HomePageIcons/ic_coffee_bean.png" alt="Ícone Grão de Café" class="w-12 h-12 lg:w-16 lg:h-16 object-contain" />
            </div>
            <div class="flex-1 flex flex-col justify-center h-full">
              <h3 class="text-xl lg:text-2xl font-black text-primary uppercase mb-2 tracking-tight">Café e Match</h3>
              <p class="text-base lg:text-lg font-bold text-dusty-olive leading-relaxed">
                 Suspense combina com Espresso duplo. Combine leituras e bebidas de acordo com a vibe da sua história!
              </p>
            </div>
          </div>

          <div class="md:col-span-7 bg-paper-white border-4 border-charcoal-brown rounded-2xl p-6 md:p-8 shadow-[12px_12px_0_0_var(--color-charcoal-brown)] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 transition-transform hover:-translate-y-1">
            <div class="w-20 h-20 lg:w-24 lg:h-24 shrink-0 bg-green-dried-sage border-4 border-charcoal-brown rounded-full flex items-center justify-center shadow-[6px_6px_0_0_var(--color-charcoal-brown)]">
              <img src="../assets/icons/HomePageIcons/ic_tea_green.png" alt="Ícone Xícara de Chá" class="w-12 h-12 lg:w-16 lg:h-16 object-contain" />
            </div>
            <div class="flex-1 flex flex-col justify-center h-full">
              <h3 class="text-xl lg:text-2xl font-black text-primary uppercase mb-2 tracking-tight">Cultive Hábitos</h3>
              <p class="text-base lg:text-lg font-bold text-dusty-olive leading-relaxed">
                Desbloqueie selos, personalize seu perfil e descubra o que seus mutuais estão lendo sem algoritmos rolando infinitamente.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section class="max-w-7xl mx-auto px-6 mt-20 md:mt-6 md:mb-25">
        <div class="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8 lg:gap-10">

          <div class="flex flex-col items-center w-full max-w-[280px] md:max-w-[310px] lg:max-w-[340px] group mx-auto md:mx-0" data-aos="zoom-in" data-aos-delay="100">
            <div class="w-20 h-20 md:w-24 md:h-24 lg:w-26 lg:h-26 rounded-full bg-green-dried-sage border-4 border-charcoal-brown shadow-[6px_6px_0_0_var(--color-charcoal-brown)] flex items-center justify-center mb-4 md:mb-5 lg:mb-6 z-10 group-hover:-translate-y-2 transition-transform shrink-0">
              <img src="../assets/icons/HomePageIcons/ic_shelf.png" alt="Estante" class="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            
            <div class="flex-1 bg-paper-white border-4 border-charcoal-brown rounded-2xl p-5 md:p-6 lg:p-8 shadow-[8px_8px_0_0_var(--color-charcoal-brown)] text-center relative w-full mt-2 lg:mt-3">
              <span class="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-caramel border-2 border-charcoal-brown px-3 md:px-4 py-0.5 md:py-1 text-[10px] md:text-xs lg:text-sm font-black uppercase tracking-widest text-primary shadow-[2px_2px_0_0_var(--color-charcoal-brown)]">
                Passo 01
              </span>
              <h3 class="font-black text-primary uppercase text-sm md:text-lg lg:text-xl mb-2 lg:mb-3">Início</h3>
              <p class="text-sm md:text-base lg:text-lg font-bold text-charcoal-brown leading-tight">
                Você seleciona um livro e o adiciona na sua própria estante virtual, podendo iniciar a leitura mais tarde.
              </p>
            </div>
          </div>

          <div class="text-4xl md:text-5xl lg:text-6xl text-primary font-black animate-pulse my-4 md:my-0 md:mt-[30px] lg:mt-[35px] flex items-center justify-center self-center" data-aos="fade-in" data-aos-delay="200">
            <span class="hidden md:block">➔</span>
            <span class="block md:hidden">⬇</span>
          </div>

          <div class="flex flex-col items-center w-full max-w-[280px] md:max-w-[310px] lg:max-w-[340px] group mx-auto md:mx-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="w-20 h-20 md:w-24 md:h-24 lg:w-26 lg:h-26 rounded-full bg-caramel border-4 border-charcoal-brown shadow-[6px_6px_0_0_var(--color-charcoal-brown)] flex items-center justify-center mb-4 md:mb-5 lg:mb-6 z-10 group-hover:-translate-y-2 transition-transform shrink-0">
              <img src="../assets/icons/HomePageIcons/ic_coffee_botton.png" alt="Café Botão" class="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            
            <div class="flex-1 bg-[#F9F6F0] border-4 border-charcoal-brown rounded-2xl p-5 md:p-6 lg:p-8 shadow-[8px_8px_0_0_var(--color-charcoal-brown)] text-center relative w-full mt-2 lg:mt-3">
              <span class="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-caramel border-2 border-charcoal-brown px-3 md:px-4 py-0.5 md:py-1 text-[10px] md:text-xs lg:text-sm font-black uppercase tracking-widest text-primary shadow-[2px_2px_0_0_var(--color-charcoal-brown)]">
                Passo 02
              </span>
              <h3 class="font-black text-primary uppercase text-sm md:text-lg lg:text-xl mb-2 lg:mb-3">Combinação</h3>
              <p class="text-sm md:text-base lg:text-lg font-bold text-charcoal-brown leading-tight">
                O sistema analisa o gênero do livro e recomenda a bebida ideal para o clima.
              </p>
            </div>
          </div>

          <div class="text-4xl md:text-5xl lg:text-6xl text-primary font-black animate-pulse my-4 md:my-0 md:mt-[30px] lg:mt-[35px] flex items-center justify-center self-center" data-aos="fade-in" data-aos-delay="400">
            <span class="hidden md:block">➔</span>
            <span class="block md:hidden">⬇</span>
          </div>

          <div class="flex flex-col items-center w-full max-w-[280px] md:max-w-[310px] lg:max-w-[340px] group mx-auto md:mx-0" data-aos="zoom-in" data-aos-delay="500">
            <div class="w-20 h-20 md:w-24 md:h-24 lg:w-26 lg:h-26 rounded-full bg-dusty-olive border-4 border-charcoal-brown shadow-[6px_6px_0_0_var(--color-charcoal-brown)] flex items-center justify-center mb-4 md:mb-5 lg:mb-6 z-10 group-hover:-translate-y-2 transition-transform shrink-0">
              <img src="../assets/icons/HomePageIcons/ic_feedback.png" alt="Feedback" class="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            
            <div class="flex-1 bg-paper-white border-4 border-charcoal-brown rounded-2xl p-5 md:p-6 lg:p-8 shadow-[8px_8px_0_0_var(--color-charcoal-brown)] text-center relative w-full mt-2 lg:mt-3">
              <span class="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-caramel border-2 border-charcoal-brown px-3 md:px-4 py-0.5 md:py-1 text-[10px] md:text-xs lg:text-sm font-black uppercase tracking-widest text-primary shadow-[2px_2px_0_0_var(--color-charcoal-brown)]">
                Passo 03
              </span>
              <h3 class="font-black text-primary uppercase text-sm md:text-lg lg:text-xl mb-2 lg:mb-3">Resenha</h3>
              <p class="text-sm md:text-base lg:text-lg font-bold text-charcoal-brown leading-tight">
                A leitura é finalizada. Você ganha XP e a sua crítica vai para o mural da comunidade.
              </p>
            </div>
          </div>

        </div>
      </section>
  <div class="bg-dusty-olive bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#9fb490] via-dusty-olive to-dusty-olive flex-1 flex flex-col justify-between">
      
      <section class="max-w-7xl mx-auto w-full px-6 pt-20 md:pt-16 pb-12 md:pb-16" data-aos="fade-up">
        <div class="bg-paper-white border-4 border-charcoal-brown p-6 md:p-10 lg:p-16 rounded-3xl shadow-[12px_12px_0_0_var(--color-charcoal-brown)] flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 items-center">

          <div class="flex-1 text-center md:text-left" data-aos="fade-right" data-aos-delay="200">
            <h3 class="text-xl md:text-2xl lg:text-3xl font-black text-secondary uppercase mb-2 md:mb-3 lg:mb-4 tracking-widest">Nossa Missão</h3>
            <h2 class="text-3xl md:text-4xl lg:text-5xl md:text-6xl font-black text-primary uppercase leading-tight mb-4 md:mb-5 lg:mb-6">
              Mais que um app, <br/>um refúgio.
            </h2>
            <p class="text-lg md:text-xl text-dusty-olive font-bold mb-6 md:mb-7 lg:mb-8 leading-relaxed">
              A vida moderna é barulhenta. Criamos o ReadBrew para ser o seu momento de paz. Um lugar onde você pode se desconectar do caos, focar nos seus livros e ver as críticas de quem compartilha da mesma paixão.
            </p>
            <a href="#" class="inline-flex items-center gap-2 md:gap-2.5 lg:gap-3 text-lg md:text-xl lg:text-2xl text-primary font-black uppercase tracking-widest hover:text-caramel transition-colors group">
              Conheça nossa história
            </a>
          </div>

          <div class="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-8 w-full">
            <div class="bg-paper-white rounded-2xl border-3 border-charcoal-brown p-4 md:p-5 lg:p-6 flex items-center gap-4 md:gap-6 lg:gap-8 hover:-translate-y-1 transition-transform shadow-[4px_4px_0_0_var(--color-charcoal-brown)]" data-aos="fade-left" data-aos-delay="300">
              <div class="w-16 h-16 md:w-22 md:h-22 lg:w-26 lg:h-26 shrink-0 bg-caramel border-2 md:border-[3px] border-charcoal-brown rounded-full flex items-center justify-center shadow-[4px_4px_0_0_var(--color-charcoal-brown)]">
                <img src="../assets/icons/HomePageIcons/ic_handshake.png" alt="Aperto de Mão" class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain" />
              </div>
              <div>
                <p class="font-black text-primary uppercase text-sm md:text-base lg:text-lg mb-1">Comunidade Real</p>
                <p class="text-xs md:text-sm lg:text-base font-bold text-dusty-olive">Encontre pessoas que amam os mesmos gêneros literários que você.</p>
              </div>
            </div>

            <div class="bg-paper-white rounded-2xl border-3 border-charcoal-brown p-4 md:p-5 lg:p-6 flex items-center gap-4 md:gap-6 lg:gap-8 hover:-translate-y-1 transition-transform shadow-[4px_4px_0_0_var(--color-charcoal-brown)]" data-aos="fade-left" data-aos-delay="500">
              <div class="w-16 h-16 md:w-22 md:h-22 lg:w-26 lg:h-26 shrink-0 bg-green-dried-sage border-2 md:border-[3px] border-charcoal-brown rounded-full flex items-center justify-center shadow-[4px_4px_0_0_var(--color-charcoal-brown)]">
                <img src="../assets/icons/HomePageIcons/ic_bookshelf.png" alt="Relógio e Livro" class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain" />
              </div>
              <div>
                <p class="font-black text-primary uppercase text-sm md:text-base lg:text-lg mb-1">Crescimento Saudável</p>
                <p class="text-xs md:text-sm lg:text-base font-bold text-dusty-olive">Acompanhe seu progresso sem a pressão de algoritmos.</p>
              </div>
            </div>

            <div class="bg-paper-white rounded-2xl border-3 border-charcoal-brown p-4 md:p-5 lg:p-6 flex items-center gap-4 md:gap-6 lg:gap-8 hover:-translate-y-1 transition-transform shadow-[4px_4px_0_0_var(--color-charcoal-brown)]" data-aos="fade-left" data-aos-delay="700">
              <div class="w-16 h-16 md:w-22 md:h-22 lg:w-26 lg:h-26 shrink-0 bg-brown-caramel border-2 md:border-[3px] border-charcoal-brown rounded-full flex items-center justify-center shadow-[4px_4px_0_0_var(--color-charcoal-brown)]">
                <img src="../assets/icons/HomePageIcons/ic_time_book.png" alt="Estante de Livros" class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain" />
              </div>
              <div>
                <p class="font-black text-primary uppercase text-sm md:text-base lg:text-lg mb-1">Relaxe sua mente</p>
                <p class="text-xs md:text-sm lg:text-base font-bold text-dusty-olive">Sem distrações ou rolagem infinita. Apenas você, seu café e sua estante.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section class="max-w-7xl mx-auto px-6 mt-20 md:mb-30 md:mt-12">
        <div class="bg-caramel border-4 border-charcoal-brown rounded-2xl p-6 md:p-10 lg:p-12 shadow-[12px_12px_0_0_var(--color-charcoal-brown)] relative">
          
          <div class="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 w-28 md:w-36 h-6 md:h-8 bg-beige-khaki/70 backdrop-blur-sm rotate-2 border-2 border-charcoal-brown/20 shadow-sm"></div>
          
          <div class="flex flex-col md:flex-row justify-between md:items-center mb-8 border-b-4 border-charcoal-brown/15 pb-6">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-black uppercase text-primary tracking-widest flex items-center gap-2">
              Mural das avaliações
            </h2>
            <span class="text-sm md:text-base font-bold text-primary/80 uppercase tracking-widest bg-paper-white px-4 py-2 border-2 border-charcoal-brown rounded-lg shadow-[4px_4px_0_0_var(--color-charcoal-brown)] mt-4 md:mt-0 w-fit">
              Últimas resenhas
            </span>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            
            <div class="bg-paper-white border-4 border-charcoal-brown p-6 rounded-lg shadow-[6px_6px_0_0_var(--color-charcoal-brown)] hover:rotate-1 transition-transform transform -rotate-2 flex flex-col h-full">
              <div class="flex items-center justify-between mb-3 border-b-2 border-charcoal-brown/10 pb-2">
                <span class="text-sm font-black text-secondary">@leitora_sofia</span>
                <span class="text-sm">⭐⭐⭐⭐⭐</span>
              </div>
              <p class="text-base font-bold text-charcoal-brown mb-4 leading-relaxed">"Suspense perfeito! Fiquei tão tenso que tive que virar um café preto forte!"</p>
              <div class="flex gap-2 mt-auto">
                <span class="bg-paper-white px-2 py-1 border border-charcoal-brown text-[10px] font-black uppercase shadow-[2px_2px_0_0_var(--color-charcoal-brown)]">Fantasia</span>
                <span class="bg-paper-white px-2 py-1 border border-charcoal-brown text-[10px] font-black uppercase shadow-[2px_2px_0_0_var(--color-charcoal-brown)]">☕ Macchiato</span>
              </div>
            </div>

            <div class="bg-paper-white border-4 border-charcoal-brown p-6 rounded-lg shadow-[6px_6px_0_0_var(--color-charcoal-brown)] hover:-rotate-1 transition-transform transform rotate-1 flex flex-col h-full">
              <div class="flex items-center justify-between mb-3 border-b-2 border-charcoal-brown/10 pb-2">
                <span class="text-sm font-black text-secondary">@Mari_arts</span>
                <span class="text-sm">⭐⭐⭐⭐</span>
              </div>
              <p class="text-base font-bold text-charcoal-brown mb-4 leading-relaxed">"O Hobbit foi ainda melhor acompanhado de um chá de camomila."</p>
              <div class="flex gap-2 mt-auto">
                <span class="bg-paper-white px-2 py-1 border border-charcoal-brown text-[10px] font-black uppercase shadow-[2px_2px_0_0_var(--color-charcoal-brown)]">Thriller</span>
                <span class="bg-paper-white px-2 py-1 border border-charcoal-brown text-[10px] font-black uppercase shadow-[2px_2px_0_0_var(--color-charcoal-brown)]">🍵 Chá</span>
              </div>
            </div>

            <div class="hidden md:flex bg-paper-white border-4 border-charcoal-brown p-6 rounded-lg shadow-[6px_6px_0_0_var(--color-charcoal-brown)] hover:rotate-1 transition-transform transform -rotate-1 flex-col h-full">
              <div class="flex items-center justify-between mb-3 border-b-2 border-charcoal-brown/10 pb-2">
                <span class="text-sm font-black text-secondary">@menoQuente</span>
                <span class="text-sm">⭐⭐⭐</span>
              </div>
              <p class="text-base font-bold text-charcoal-brown mb-4 leading-relaxed">"Ótimo romance para se ver em um domingo à noite. Que paz terrível."</p>
              <div class="flex gap-2 mt-auto">
                <span class="bg-paper-white px-2 py-1 border border-charcoal-brown text-[10px] font-black uppercase shadow-[2px_2px_0_0_var(--color-charcoal-brown)]">Romance</span>
                <span class="bg-paper-white px-2 py-1 border border-charcoal-brown text-[10px] font-black uppercase shadow-[2px_2px_0_0_var(--color-charcoal-brown)]">☕ Cappucino</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>
          </div>
    

  
    <footer class="bg-[#1A1614] w-full mt-auto">
      <div class="max-w-7xl mx-auto px-6 pb-12">
        
        <div class=" border-coffee pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
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
.pixelated-img {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}

* {
  font-family: 'Courier New', Courier, monospace; 
}
</style>