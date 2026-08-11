import React, { useState, useRef } from 'react';
import { 
  HeartPulse, Activity, Stethoscope, Phone, MapPin, Clock, 
  ChevronDown, ArrowRight, ShieldCheck, UserCheck, Star, Menu, X, CheckCircle2,
  ChevronLeft, ChevronRight
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [showAllEspecialidades, setShowAllEspecialidades] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(null);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const sliderRef = useRef(null);

  const galleryImages = [
    "/estrutura/1.jpeg",
    "/estrutura/2.jpg",
    "/estrutura/3.jpg",
    "/estrutura/4.jpg",
    "/estrutura/5.jpg",
    "/estrutura/6.jpg",
    "/estrutura/7.jpg",
    "/estrutura/8.jpg",
    "/estrutura/9.jpg",
    "/estrutura/10.jpg",
    "/estrutura/11.jpg",
    "/estrutura/12.jpg"
  ];

  const nextLightboxImage = (e) => {
    e.stopPropagation();
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((lightboxImageIndex + 1) % galleryImages.length);
    }
  };

  const prevLightboxImage = (e) => {
    e.stopPropagation();
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((lightboxImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const baseWhatsApp = "https://wa.me/5511995588000?text=";
  const ctaGeral = `${baseWhatsApp}Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20na%20Petiva.`;
  const ctaHero = `${baseWhatsApp}Ol%C3%A1%21%20Vi%20o%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20cir%C3%BArgica%20para%20o%20meu%20pet.`;
  const ctaPassos = `${baseWhatsApp}Ol%C3%A1%21%20Estava%20lendo%20sobre%20o%20protocolo%20de%20cirurgia%20segura%20no%20site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas.`;
  const ctaEspecialidades = `${baseWhatsApp}Ol%C3%A1%21%20Vi%20as%20especialidades%20no%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20um%20procedimento.`;
  const ctaLocalizacao = `${baseWhatsApp}Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20o%20atendimento%20para%20agendar%20um%20hor%C3%A1rio%20na%20cl%C3%ADnica.`;
  const ctaFinal = `${baseWhatsApp}Ol%C3%A1%21%20Quero%20agendar%20uma%20consulta%20para%20garantir%20a%20sa%C3%BAde%20do%20meu%20pet.`;

  const trackWhatsAppClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'clique_whatsapp' });
  };

  const especialidades = [
    { nome: "Castração (Fêmeas e Machos)", desc: "Procedimento seguro para cães e gatos, prevenindo tumores, infecções uterinas e comportamentos indesejados.", cirurgia: true },
    { nome: "Profilaxia Odontológica", desc: "Limpeza de tártaro com ultrassom, prevenindo perda de dentes, dor intensa e infecções sistêmicas.", cirurgia: true },
    { nome: "Cirurgias de Tecidos Moles", desc: "Remoção de nódulos, biópsias, cirurgias gastrointestinais e do sistema reprodutor.", cirurgia: true },
    { nome: "Cirurgias Ortopédicas", desc: "Correção de fraturas, luxações e ruptura de ligamento cruzado com técnicas avançadas.", cirurgia: true },
    { nome: "Cirurgias Oncológicas", desc: "Remoção de tumores com margem de segurança e suporte cirúrgico avançado.", cirurgia: true },
    { nome: "Odontologia Especializada", desc: "Extrações dentárias complexas e tratamento de doenças periodontais graves sob anestesia segura.", cirurgia: true },
    { nome: "Cirurgias de Emergência", desc: "Intervenções rápidas e precisas para salvar vidas em casos críticos e agudos.", cirurgia: true },
  ];

  const faqs = [
    { q: "A anestesia é segura para o meu pet?", a: "Sim! Utilizamos anestesia inalatória, aliada ao suporte de ventilação mecânica e monitoramento multiparamétrico feito por um anestesista veterinário." },
    { q: "Qual a idade ideal para realizar a castração?", a: "Para cães de pequeno porte e gatos, recomenda-se a partir dos 5 a 6 meses. Para cães grandes, o protocolo pode variar. Agende uma avaliação para definirmos o momento exato e seguro." },
    { q: "Com qual idade devo fazer a primeira limpeza de tártaro?", a: "Não existe idade fixa, mas cães de pequeno porte precisam mais cedo (1 a 2 anos). O mau hálito e a gengiva vermelha são os principais alertas de que chegou a hora." },
    { q: "Quais são as formas de pagamento aceitas?", a: "Para sua facilidade, aceitamos cartões de crédito em até 12x, débito, Pix e transferência bancária." },
    { q: "Vocês realizam os exames pré-operatórios na clínica?", a: "Sim, realizamos todos os exames de sangue e cardiológicos necessários no nosso centro de diagnóstico para aprovação cirúrgica." }
  ];

  return (
    <div className="min-h-screen bg-surface font-sans text-text-body selection:bg-accent selection:text-white">
      {/* 1. HEADER STICKY */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src="/logo-cropped.png" alt="Petiva Centro Veterinário" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#especialidades" className="text-text-body hover:text-accent font-medium transition-colors">Especialidades</a>
              <a href="#sobre" className="text-text-body hover:text-accent font-medium transition-colors">Sobre Nós</a>
              <a href="#localizacao" className="text-text-body hover:text-accent font-medium transition-colors">Localização</a>
              <a href="#faq" className="text-text-body hover:text-accent font-medium transition-colors">F.A.Q</a>
              <a href="#contato" className="text-text-body hover:text-accent font-medium transition-colors">Contato</a>
            </nav>

            <div className="hidden md:flex">
              <a href={ctaGeral} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="group relative overflow-hidden bg-accent text-white border border-accent px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm hover:shadow-md inline-flex items-center justify-center">
                <span className="absolute left-0 top-0 w-0 h-full bg-[#1e8b8d] transition-all duration-500 ease-out group-hover:w-full z-0"></span>
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500">
                  Agendar Consulta
                </span>
              </a>
            </div>

            <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg absolute w-full">
            <a href="#especialidades" onClick={() => setIsMenuOpen(false)} className="block font-medium text-text-body">Especialidades</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="block font-medium text-text-body">Sobre Nós</a>
            <a href="#localizacao" onClick={() => setIsMenuOpen(false)} className="block font-medium text-text-body">Localização</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="block font-medium text-text-body">Contato</a>
            <a href={ctaGeral} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="block text-center bg-accent text-white px-6 py-3 rounded-lg font-semibold">Agendar Consulta</a>
          </div>
        )}
      </header>

      <main>
        {/* 2. HERO */}
        <section className="bg-white py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-surface text-primary font-semibold text-sm mb-6 border border-gray-200">
                  CENTRO CIRÚRGICO VETERINÁRIO NA VILA BUARQUE
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary leading-tight mb-6">
                  Cirurgias seguras, Profilaxia e Castração com <span className="text-accent">excelência</span>.
                </h1>
                <p className="text-lg md:text-xl text-text-body mb-8 leading-relaxed">
                  Infraestrutura de alta complexidade com centro cirúrgico avançado, anestesia inalatória e monitoramento intensivo. Máxima segurança para o procedimento do seu pet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={ctaHero} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="group relative overflow-hidden bg-accent text-white border-2 border-accent px-8 py-4 rounded-full font-bold text-lg text-center transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] inline-flex items-center justify-center gap-2">
                    <span className="absolute left-0 top-0 w-0 h-full bg-[#1e8b8d] transition-all duration-500 ease-out group-hover:w-full z-0"></span>
                    <span className="relative z-10 flex items-center gap-2 transition-colors duration-500">
                      AGENDAR AVALIAÇÃO CIRÚRGICA <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-accent/10 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
                <img 
                  src="/estrutura/f16606a4-35f5-4fca-999f-a268bf4bba8c.png" 
                  alt="Cachorrinho paciente no centro cirúrgico da Petiva" 
                  className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
                />
              </div>
            </div>
          </div>
        </section>

        
        {/* 2.5 BARRA DE CREDIBILIDADE */}
        <div className="bg-accent text-white py-4 border-b-4 border-[#1e8b8d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm md:text-base font-bold tracking-wide">
              <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-white/80" /> +5.000 Vidas Salvas</span>
              <span className="hidden md:inline-block w-1.5 h-1.5 bg-white/50 rounded-full"></span>
              <span className="flex items-center gap-2"><Activity className="w-5 h-5 text-white/80" /> Anestesia Inalatória Padrão Ouro</span>
              <span className="hidden md:inline-block w-1.5 h-1.5 bg-white/50 rounded-full"></span>
              <span className="flex items-center gap-2"><UserCheck className="w-5 h-5 text-white/80" /> Equipe de Especialistas</span>
            </div>
          </div>
        </div>
{/* 3. SINAIS DE ALERTA */}
        <section className="py-16 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-10">Sinais de que seu pet precisa de avaliação:</h2>
            <div className="space-y-4 text-left md:text-center">
              <p className="p-4 bg-white rounded-lg shadow-sm font-medium border-l-4 border-accent text-lg"><span className="text-primary font-bold">Mau hálito forte e persistente</span>, indicando avanço da doença periodontal e acúmulo de tártaro.</p>
              <p className="p-4 bg-white rounded-lg shadow-sm font-medium border-l-4 border-accent text-lg"><span className="text-primary font-bold">Gengivas avermelhadas ou sangrando</span> ao mastigar brinquedos ou ração.</p>
              <p className="p-4 bg-white rounded-lg shadow-sm font-medium border-l-4 border-accent text-lg"><span className="text-primary font-bold">Presença de nódulos (caroços)</span> na pele ou nas mamas que não estavam lá antes.</p>
              <p className="p-4 bg-white rounded-lg shadow-sm font-medium border-l-4 border-accent text-lg"><span className="text-primary font-bold">Dificuldade para andar ou mancar</span> de forma persistente, o que pode indicar necessidade de cirurgia ortopédica.</p>
              <p className="p-4 bg-white rounded-lg shadow-sm font-medium border-l-4 border-accent text-lg"><span className="text-primary font-bold">Crescimento de filhote (5 a 6 meses)</span>, marcando a época ideal para castração e prevenção de tumores.</p>
            </div>
          </div>
        </section>

        {/* 4. A VIRADA */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-white">Não trate sintomas isolados. <br/><span className="text-accent">Cuide da saúde integral</span> do seu pet.</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                <Activity className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl mb-2 text-white">Diagnóstico Integrado</h3>
                <p className="text-white/80">Análise completa que cruza especialidades para chegar à causa real do problema.</p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl mb-2 text-white">Tecnologia Minimamente Invasiva</h3>
                <p className="text-white/80">Endoscopia e equipamentos de ponta para intervenções seguras e recuperação rápida.</p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                <HeartPulse className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl mb-2 text-white">Ambiente Cat Friendly</h3>
                <p className="text-white/80">Estrutura e equipe adaptadas para reduzir drasticamente o estresse dos felinos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OS PILARES DE EXCELÊNCIA */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-16">A estrutura que o seu <span className="text-accent">melhor amigo merece</span></h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="group bg-surface rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <HeartPulse className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Anestesia Segura (Inalatória)</h3>
                <p className="text-lg text-text-body">Utilizamos anestesia inalatória com monitoramento multiparamétrico constante, minimizando riscos e garantindo um despertar suave e sem dor.</p>
              </div>
              
              <div className="group bg-surface rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Stethoscope className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Centro Cirúrgico Avançado</h3>
                <p className="text-lg text-text-body">Ambiente rigorosamente esterilizado com equipamentos de suporte à vida de ponta, preparado para castrações eletivas e cirurgias complexas.</p>
              </div>
              
              <div className="group bg-surface rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Activity className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Recuperação Humanizada</h3>
                <p className="text-lg text-text-body">Controle rigoroso de dor no pós-operatório e baias super confortáveis. Seu pet fica sob observação intensiva até estar 100% pronto para voltar.</p>
              </div>
            </div>
          </div>
        </section>

        
        {/* 5.5 PASSO A PASSO DA CIRURGIA */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-4">Como funciona a <span className="text-accent">Cirurgia Segura</span></h2>
            <p className="text-lg text-text-body text-center mb-16 max-w-2xl mx-auto">
              Sabemos que cirurgias e anestesias geram ansiedade. Veja nosso protocolo rígido passo a passo para garantir a vida do seu pet:
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative text-center">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-accent mb-6 relative z-10">
                  <span className="text-2xl font-heading font-bold text-primary">1</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary mb-3">Avaliação Pré-Cirúrgica</h3>
                <p className="text-text-body">Consulta detalhada para entender o histórico do pet, alinhar expectativas e avaliar o risco anestésico inicial.</p>
              </div>

              <div className="relative text-center">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-accent mb-6 relative z-10">
                  <span className="text-2xl font-heading font-bold text-primary">2</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary mb-3">Exames no Local</h3>
                <p className="text-text-body">Realizamos hemograma, exames bioquímicos e avaliações cardiológicas (Eletro e Eco) sem você precisar ir a outro lugar.</p>
              </div>

              <div className="relative text-center">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-accent mb-6 relative z-10">
                  <span className="text-2xl font-heading font-bold text-primary">3</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary mb-3">Centro Cirúrgico Padrão Ouro</h3>
                <p className="text-text-body">O procedimento é feito com anestesia inalatória e monitoramento multiparamétrico contínuo de sinais vitais por um anestesista.</p>
              </div>

              <div className="relative text-center">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-accent mb-6 relative z-10">
                  <span className="text-2xl font-heading font-bold text-primary">4</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary mb-3">Recuperação Sem Dor</h3>
                <p className="text-text-body">Controle de dor rigoroso em baias limpas e seguras. O pet só recebe alta quando estiver 100% acordado, estável e confortável.</p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <a href={ctaPassos} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="inline-block bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white px-10 py-3 rounded-xl font-bold transition-all shadow-sm hover:shadow-md">
                TIRAR DÚVIDAS COM A EQUIPE
              </a>
            </div>
          </div>
        </section>
{/* 9. DEPOIMENTOS DE TUTORES */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center md:text-left">O que dizem os <span className="text-accent">nossos pacientes</span></h2>
              <div className="flex gap-4 justify-center">
                <button onClick={scrollPrev} className="p-3 rounded-full bg-white text-primary hover:bg-accent hover:text-white shadow-sm border border-gray-100 transition-colors">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={scrollNext} className="p-3 rounded-full bg-white text-primary hover:bg-accent hover:text-white shadow-sm border border-gray-100 transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div 
              ref={sliderRef}
              className="flex overflow-x-auto gap-8 snap-x snap-mandatory pb-8 hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                { nome: "Mariana e a Mel (Poodle)", txt: "Estava morrendo de medo da anestesia para limpar o tártaro dela. A equipe foi maravilhosa, me explicou tudo, e a Mel voltou para casa super esperta!" },
                { nome: "Lucas e a Nina (Gata)", txt: "Castrei a Nina com a Dra. Talita. O corte foi super pequeno, no dia seguinte ela já estava brincando como se nada tivesse acontecido." },
                { nome: "Fernanda e o Thor (Golden)", txt: "Estrutura de primeiro mundo no centro cirúrgico. Fizeram a remoção de um nódulo do Thor com muita competência. A recuperação foi ótima." },
                { nome: "Roberto e o Simba (Gato)", txt: "A anestesia inalatória e o cuidado no pós-operatório fizeram toda a diferença. O Simba castrou e não sentiu dor alguma, indico de olhos fechados." },
                { nome: "Camila e o Bento (Spitz)", txt: "Tinha pavor de cirurgia, mas a transparência nos exames pré-operatórios me deu paz. A cirurgia ortopédica foi um sucesso absoluto." },
                { nome: "João e o Rex (SRD)", txt: "Excelente clínica, profissionais cirurgiões muito atenciosos. Me senti muito seguro ao deixar o Rex para a castração, deu tudo certo." },
                { nome: "Aline e o Frajola (Gato)", txt: "A limpeza de tártaro do Frajola salvou os dentinhos dele. Ele voltou a comer melhor no mesmo dia. A Dra. Talita é um amor de pessoa!" }
              ].map((dep, i) => (
                <div key={i} className="w-[280px] md:w-[320px] shrink-0 bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative snap-start flex flex-col">
                  <Star className="w-6 h-6 text-yellow-400 absolute top-6 right-6 fill-current" />
                  <p className="text-base italic text-text-body mb-6 relative z-10 pt-2 flex-grow">"{dep.txt}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center font-bold text-primary shrink-0">{dep.nome.charAt(0)}</div>
                    <span className="font-heading font-bold text-primary text-sm">{dep.nome}</span>
                  </div>
                </div>
              ))}
            </div>
            <style>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </section>

        {/* 8. SOBRE A DIRETORA CLÍNICA */}
        <section id="sobre" className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/foto-dra.jpg" 
                  alt="Dra. Talita Oliveira Rodrigues" 
                  className="rounded-2xl shadow-2xl w-full aspect-[3/4] md:aspect-[4/5] object-cover object-top"
                />
              </div>
              <div className="order-1 md:order-2">
                <span className="text-accent font-bold tracking-wider text-sm uppercase mb-4 block">Cirurgiã & Diretora Clínica</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Dra. Talita Oliveira Rodrigues</h2>
                
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Médica Veterinária formada pela PUC Minas, com vasta experiência em Cirurgia Geral de Tecidos Moles, Profilaxia Odontológica e Endoscopia.
                </p>
                
                <p className="text-lg mb-10 border-l-4 border-accent pl-6 py-2 text-white/80">
                  "Todo procedimento cirúrgico exige rigor máximo. No Petiva, aplicamos protocolos rígidos de anestesia e esterilização para garantir que seu pet acorde tranquilo e sem dor."
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                    <span className="block text-3xl font-heading font-bold text-accent mb-2">+Segurança</span>
                    <span className="text-sm font-medium text-white/90">Anestesia Inalatória e Monitoramento</span>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                    <span className="block text-3xl font-heading font-bold text-accent mb-2">100%</span>
                    <span className="text-sm font-medium text-white/90">Estrutura Cirúrgica de Ponta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TODAS AS ESPECIALIDADES */}
        <section id="especialidades" className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">Procedimentos com máxima <span className="text-accent">segurança clínica</span></h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(showAllEspecialidades ? especialidades : especialidades.slice(0, 6)).map((esp, i) => (
                <div key={i} className={`p-6 rounded-xl bg-white shadow-sm border ${esp.cirurgia ? 'border-accent/30 bg-accent/5' : 'border-gray-100'} hover:shadow-md transition-shadow`}>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <h3 className="font-heading font-bold text-xl text-primary">{esp.nome}</h3>
                  </div>
                  <p className="text-text-body">{esp.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              {!showAllEspecialidades ? (
                <button 
                  onClick={() => setShowAllEspecialidades(true)}
                  className="bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white px-10 py-3 rounded-xl font-bold transition-all shadow-sm hover:shadow-md"
                >
                  VER MAIS PROCEDIMENTOS
                </button>
              ) : (
                <button 
                  onClick={() => {
                    setShowAllEspecialidades(false);
                    const element = document.getElementById('especialidades');
                    if (element) {
                      const y = element.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className="bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white px-10 py-3 rounded-xl font-bold transition-all shadow-sm hover:shadow-md"
                >
                  VER MENOS PROCEDIMENTOS
                </button>
              )}
            </div>

            <div className="mt-8 flex justify-center">
              <a href={ctaEspecialidades} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="group relative overflow-hidden bg-accent text-white border-2 border-accent px-8 py-4 rounded-full font-bold text-lg text-center transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] inline-flex items-center justify-center gap-2">
                <span className="absolute left-0 top-0 w-0 h-full bg-[#1e8b8d] transition-all duration-500 ease-out group-hover:w-full z-0"></span>
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500">
                  AGENDAR CONSULTA <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* 8.5. ESTRUTURA GALERIA */}
        <section id="estrutura-galeria" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-4">Conheça nossa <span className="text-accent">Estrutura</span></h2>
            <p className="text-lg text-text-body text-center mb-12 max-w-2xl mx-auto">
              O ambiente perfeito e seguro para a recuperação do seu melhor amigo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {(showAllGallery ? galleryImages : galleryImages.slice(0, 6)).map((imgSrc, idx) => (
                <div 
                  key={idx} 
                  className="aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-lg transition-all group"
                  onClick={() => setLightboxImageIndex(idx)}
                >
                  <img 
                    src={imgSrc} 
                    alt={`Estrutura Clínica ${idx + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button 
                onClick={() => {
                  if (showAllGallery) {
                    setShowAllGallery(false);
                    // scroll back up a bit when closing
                    const element = document.getElementById('estrutura-galeria');
                    if (element) {
                      const y = element.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  } else {
                    setShowAllGallery(true);
                  }
                }}
                className="bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white px-10 py-3 rounded-xl font-bold transition-all shadow-sm hover:shadow-md"
              >
                {showAllGallery ? 'VER MENOS' : 'VER MAIS'}
              </button>
            </div>
          </div>
        </section>

        {lightboxImageIndex !== null && (
          <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setLightboxImageIndex(null)}>
            <button className="absolute top-6 right-6 text-white hover:text-accent transition-colors" onClick={() => setLightboxImageIndex(null)}>
              <X className="w-10 h-10" />
            </button>
            <button className="absolute left-6 text-white hover:text-accent transition-colors" onClick={prevLightboxImage}>
              <ChevronLeft className="w-12 h-12" />
            </button>
            <img 
              src={galleryImages[lightboxImageIndex]} 
              alt="Ampliada" 
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl" 
              onClick={(e) => e.stopPropagation()} 
            />
            <button className="absolute right-6 text-white hover:text-accent transition-colors" onClick={nextLightboxImage}>
              <ChevronRight className="w-12 h-12" />
            </button>
          </div>
        )}

        {/* 7. HISTÓRIA E PROPÓSITO */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Um sonho de família</h2>
                <p className="text-lg mb-4">A história do Centro Veterinário Petiva nasceu de um desejo compartilhado durante um dos momentos mais difíceis da história recente: a pandemia.</p>
                <p className="text-lg mb-4">Fundado pela Dra. Talita e seu pai, Alexandre, o objetivo sempre foi claro: criar um espaço onde a infraestrutura hospitalar se aliasse ao calor humano e ao atendimento próximo e respeitoso que cada tutor busca.</p>
                <p className="text-lg font-medium text-primary">Não somos apenas uma clínica, somos um ambiente de acolhimento focado na resolução.</p>
              </div>
              <div className="bg-surface p-10 rounded-2xl border-l-8 border-accent">
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Segurança e Bem-estar</h2>
                <blockquote className="text-xl italic text-text-body mb-6">
                  "Nosso compromisso é realizar procedimentos com risco minimizado, desde uma limpeza de tártaro até uma cirurgia complexa, garantindo que você entregue seu pet com confiança e o receba saudável e feliz."
                </blockquote>
                <div className="flex items-center gap-4 mt-8">
                  <ShieldCheck className="w-10 h-10 text-accent" />
                  <span className="font-heading font-bold text-lg text-primary">Cirurgia baseada em excelência e amor.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. FAQ */}
        <section id="faq" className="py-24 bg-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">Perguntas Frequentes</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center font-heading font-bold text-lg text-primary hover:bg-gray-50 transition-colors"
                  >
                    {faq.q}
                    <ChevronDown className={`w-5 h-5 text-accent transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-text-body text-lg border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. LOCALIZAÇÃO E HORÁRIOS */}
        <section id="localizacao" className="py-24 bg-white relative">
          <div className="absolute inset-0 bg-primary/5"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-primary rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white border-b-8 border-accent">
              <span className="inline-block py-1 px-4 rounded-full bg-accent/20 text-accent font-bold text-sm mb-6 border border-accent/50 uppercase tracking-widest">
                Atendimento Agendado
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-white">Nossa Estrutura</h2>
              
              <div className="flex flex-col items-center justify-center gap-3 mb-10">
                <MapPin className="w-8 h-8 text-accent" />
                <p className="text-xl font-medium text-white">Rua Santa Isabel, 68 - Vila Buarque<br/>São Paulo - SP, 01221-010</p>
                <a href="https://maps.app.goo.gl/zvXQAPYi3tbajJZTA" target="_blank" rel="noreferrer" className="text-accent hover:text-white underline font-medium mt-2">Abrir no Mapa</a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
                <a href={ctaLocalizacao} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="flex items-center justify-center text-white hover:opacity-75 transition-opacity" style={{width:'40px',height:'40px'}}>
                  <img src="/whatsapp-logo.png" alt="WhatsApp" style={{width:'40px',height:'40px',filter:'brightness(0) invert(1)',objectFit:'contain'}} />
                </a>
                <a href="https://www.instagram.com/petivavet/" target="_blank" rel="noreferrer" className="flex items-center justify-center text-white hover:opacity-75 transition-opacity" style={{width:'40px',height:'40px'}}>
                  <img src="/instagram-logo.png" alt="Instagram" style={{width:'40px',height:'40px',filter:'brightness(0) invert(1)',objectFit:'contain'}} />
                </a>
              </div>

              <div className="bg-white/10 rounded-xl p-6 mb-10 max-w-lg mx-auto">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-heading font-bold text-white">Horários</h3>
                </div>
                <div className="space-y-3 text-lg text-white/90">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span>Segunda a Sexta</span>
                    <span className="font-bold text-white">07:00h às 22:00h</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span>Sábados</span>
                    <span className="font-bold text-white">08:00h às 18:00h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span className="font-bold text-accent">Fechado</span>
                  </div>
                </div>
              </div>

              <a href={ctaLocalizacao} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="group relative overflow-hidden bg-accent text-white border-2 border-accent px-8 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center transition-all shadow-xl hover:scale-105 w-full md:w-auto">
                <span className="absolute left-0 top-0 w-0 h-full bg-[#1e8b8d] transition-all duration-500 ease-out group-hover:w-full z-0"></span>
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500">
                  FALAR COM ATENDIMENTO AGENDADO <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </span>
              </a>

              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm font-medium text-white/80">
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent"/> Estrutura segura</span>
                <span className="flex items-center gap-2"><UserCheck className="w-4 h-4 text-accent"/> Profissionais especializados</span>
                <span className="flex items-center gap-2"><Activity className="w-4 h-4 text-accent"/> Prontuário digital integrado</span>
              </div>
            </div>
          </div>
        </section>

        {/* 12. CTA FINAL */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
              Pronto para garantir uma vida mais longa e <span className="text-accent">saudável</span> para o seu pet?
            </h2>
            <a href={ctaFinal} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="group relative overflow-hidden bg-accent text-white border-2 border-accent px-10 py-6 rounded-full font-bold text-2xl inline-flex items-center justify-center transition-all shadow-xl hover:scale-105 mb-10 w-full md:w-auto">
              <span className="absolute left-0 top-0 w-0 h-full bg-[#1e8b8d] transition-all duration-500 ease-out group-hover:w-full z-0"></span>
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-500">
                Agende sua consulta agora <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </span>
            </a>
            
            <div className="flex flex-wrap justify-center gap-8 font-medium text-lg text-primary">
              <span className="flex items-center gap-2"><ShieldCheck className="w-6 h-6 text-accent"/> Ambiente seguro</span>
              <span className="flex items-center gap-2"><HeartPulse className="w-6 h-6 text-accent"/> Atendimento humanizado</span>
              <span className="flex items-center gap-2"><UserCheck className="w-6 h-6 text-accent"/> Especialistas médicos</span>
            </div>
          </div>
        </section>
      </main>

      {/* 13. FOOTER */}
      <footer id="contato" className="bg-primary text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/logo-cropped.png" alt="Petiva Centro Veterinário" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
          </div>
          
          <div className="text-center md:text-left text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Petiva Centro Veterinário. Todos os direitos reservados.</p>
            <p className="mt-1">Responsável Técnica: Dra. Talita Oliveira Rodrigues</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-sm text-gray-300 font-medium items-center">
            <div className="flex gap-6 items-center">
              <a href={ctaGeral} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick} className="hover:opacity-75 transition-opacity flex items-center">
                <img src="/whatsapp-logo.png" alt="WhatsApp" className="h-7 w-auto brightness-0 invert object-contain" />
              </a>
              <a href="https://www.instagram.com/petivavet/" target="_blank" rel="noreferrer" className="hover:opacity-75 transition-opacity flex items-center">
                <img src="/instagram-logo.png" alt="Instagram" className="h-7 w-auto brightness-0 invert object-contain" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 14. FLOATING WHATSAPP BUTTON */}
      <a 
        href={ctaGeral} 
        target="_blank" 
        rel="noreferrer" 
        onClick={trackWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Agendar consulta via WhatsApp"
      >
        <img src="/whatsapp-logo.png" alt="WhatsApp" className="w-10 h-10 brightness-0 invert object-contain" />
      </a>
    </div>
  );
}
