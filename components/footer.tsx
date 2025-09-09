import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Logo size="lg" />
            <p className="mt-4 text-gray-600 max-w-md">
              Desde 2022, criamos soluções digitais inovadoras para impulsionar seu negócio. Especialistas em
              desenvolvimento web e integração WhatsApp.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos" className="text-gray-600 hover:text-brand-orange transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-brand-orange transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-brand-orange transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-600 hover:text-brand-orange transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-2 text-brand-orange" />
                contato@expertsolutions.com
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2 text-brand-orange" />
                (11) 99999-9999
              </li>
              <li className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-brand-orange" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">© 2024 ExpertSolutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
