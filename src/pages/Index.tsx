import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import FeatureList from "@/components/FeatureList";
import bannerSite from "@/assets/banner-criacao-site.png";
import bannerApp from "@/assets/banner-app.png";

const Index = () => {
  const whatsappLink = "https://wa.me/5511950968892";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section - Atendimento IA */}
      <Section id="ia" title="Atendimento com Inteligência Artificial" variant="hero">
        <ServiceCard className="text-center">
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Automatize seu WhatsApp com IA para atendimento 24 horas.
              <br />
              Revolucione o atendimento ao cliente com tecnologia de ponta.
            </p>
            <FeatureList
              features={[
                "🤖 Responde clientes automaticamente",
                "🤖 Envia preços, localização, horários e mais",
                "🤖 Personalizável conforme seu negócio",
                "🤖 Integração completa com WhatsApp Business",
              ]}
            />
            <div className="pt-6">
              <Button variant="whatsapp" size="lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  🚀 Quero um Assistente IA
                </a>
              </Button>
            </div>
          </div>
        </ServiceCard>
      </Section>

      {/* Sites Section */}
      <Section id="sites" title="Criação de Sites" variant="feature">
        <ServiceCard>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sites modernos, responsivos e com foco em resultados.
                Transformamos sua presença digital com design profissional.
              </p>
              <FeatureList
                features={[
                  "💻 Design responsivo para todos os dispositivos",
                  "⚡ Performance otimizada e carregamento rápido",
                  "🎨 Interface moderna e profissional",
                  "📱 Compatível com dispositivos móveis",
                ]}
              />
              <Button variant="hero" size="lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Criar Meu Site
                </a>
              </Button>
            </div>
            <div className="order-first md:order-last">
              <img
                src={bannerSite}
                alt="Banner Criação de Sites"
                className="w-full rounded-lg shadow-card animate-float"
              />
            </div>
          </div>
        </ServiceCard>
      </Section>

      {/* Apps Section */}
      <Section id="apps" title="Criação de Aplicativos" variant="hero">
        <ServiceCard>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transformamos suas ideias em aplicativos para Android, iOS e PWA.
                Tecnologia de ponta para o seu negócio.
              </p>
              <FeatureList
                features={[
                  "📱 Aplicativos nativos para Android e iOS",
                  "🌐 Progressive Web Apps (PWA)",
                  "🔧 Funcionalidades personalizadas",
                  "☁️ Integração com serviços em nuvem",
                ]}
              />
              <Button variant="cta" size="lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Desenvolver Meu App
                </a>
              </Button>
            </div>
            <div>
              <img
                src={bannerApp}
                alt="Banner Criação de App"
                className="w-full rounded-lg shadow-card animate-float"
              />
            </div>
          </div>
        </ServiceCard>
      </Section>

      {/* Manutenção Section */}
      <Section id="manutencao" title="Manutenção de Computadores e Notebooks" variant="feature">
        <ServiceCard className="text-center">
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Formatamos, limpamos e otimizamos seu equipamento.
              <br />
              Atendimento rápido e seguro para seu computador.
            </p>
            <FeatureList
              features={[
                "🔧 Formatação e instalação de sistema",
                "🧹 Limpeza física e digital",
                "⚡ Otimização de performance",
                "🛡️ Instalação de antivírus e segurança",
                "💾 Backup e recuperação de dados",
              ]}
            />
            <Button variant="hero" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Solicitar Manutenção
              </a>
            </Button>
          </div>
        </ServiceCard>
      </Section>

      {/* Pagamentos Section */}
      <Section id="pagamentos" title="Pagamentos via API" variant="hero">
        <ServiceCard className="text-center">
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Integrações com PIX, boletos, cartões e muito mais para seu sistema.
              <br />
              Simplifique as transações do seu negócio.
            </p>
            <FeatureList
              features={[
                "💳 Integração com cartões de crédito e débito",
                "💰 PIX instantâneo e automático",
                "📄 Geração de boletos bancários",
                "🔐 Segurança PCI compliance",
                "📊 Dashboard de controle financeiro",
              ]}
            />
            <Button variant="cta" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Integrar Pagamentos
              </a>
            </Button>
          </div>
        </ServiceCard>
      </Section>

      {/* Contato Section */}
      <Section id="contato" title="Fale com a Gente" variant="feature">
        <ServiceCard className="text-center">
          <div className="space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estamos prontos para te atender no WhatsApp.
              <br />
              Transforme seu negócio com soluções digitais inteligentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="whatsapp" size="lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  💬 Falar com Especialista
                </a>
              </Button>
              <div className="text-muted-foreground">
                <p className="font-medium">WhatsApp: (11) 95096-8892</p>
              </div>
            </div>
          </div>
        </ServiceCard>
      </Section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border/50 py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground">
            © 2025 - Soluções com Inteligência Artificial | WhatsApp: (11) 95096-8892
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;