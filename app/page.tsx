import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Smartphone, Zap, Users, Award, Calendar } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transformamos suas <span className="text-orange-600">ideias</span> em{" "}
              <span className="text-orange-500">realidade digital</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Desde 2022, criamos sites modernos, aplicativos e integrações WhatsApp que impulsionam o crescimento do
              seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Ver Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white bg-transparent"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços em Destaque */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-orange-600">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Soluções completas para sua presença digital</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-500 transition-colors duration-300 hover:shadow-lg hover:shadow-orange-100">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-orange-700">Desenvolvimento Web</CardTitle>
                <CardDescription>Sites modernos, responsivos e otimizados para conversão</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Landing Pages</li>
                  <li>• E-commerce</li>
                  <li>• Sistemas Web</li>
                  <li>• Blogs e Portais</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors duration-300 hover:shadow-lg hover:shadow-orange-100">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-orange-700">Integração WhatsApp</CardTitle>
                <CardDescription>Automatize seu atendimento e vendas via WhatsApp</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Chatbots Inteligentes</li>
                  <li>• API WhatsApp Business</li>
                  <li>• Automação de Vendas</li>
                  <li>• Suporte 24/7</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors duration-300 hover:shadow-lg hover:shadow-orange-100">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-orange-700">Aplicativos Mobile</CardTitle>
                <CardDescription>Apps nativos e híbridos para iOS e Android</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• React Native</li>
                  <li>• Flutter</li>
                  <li>• PWA</li>
                  <li>• Publicação nas Stores</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre a Empresa */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-200 text-orange-700 border-orange-300 mb-4">Nossa História</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Inovando desde <span className="text-orange-600">2022</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nascemos com a missão de democratizar a tecnologia para pequenas e médias empresas. Em poucos anos, já
                ajudamos centenas de negócios a crescerem no ambiente digital.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                  <div className="text-gray-600">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-gray-600">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="p-6 text-center hover:shadow-lg hover:shadow-orange-100 transition-shadow">
                  <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold">Equipe Especializada</h3>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg hover:shadow-orange-100 transition-shadow">
                  <Award className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold">Qualidade Garantida</h3>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="p-6 text-center hover:shadow-lg hover:shadow-orange-100 transition-shadow">
                  <Zap className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold">Entrega Rápida</h3>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg hover:shadow-orange-100 transition-shadow">
                  <Code className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold">Tecnologia Moderna</h3>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para transformar seu negócio?</h2>
          <p className="text-xl text-white mb-8">
            Agende uma consulta gratuita e descubra como podemos ajudar você a crescer no digital.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 hover:text-orange-700">
            <Calendar className="mr-2 h-5 w-5" />
            Agendar Consulta Gratuita
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
