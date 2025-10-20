import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PreguntasFrecuentesPage() {
  const faqs = [
    {
      question: "¿Cómo es la prueba sin cargo?",
      answer:
        "La instalación se realiza de forma remota y podés usar el sistema sin cargo durante 30 días. Coordinamos todo por WhatsApp para ayudarte a probarlo con tus propios datos o con ejemplos.",
    },
    {
      question: "¿Necesito internet para usarlo?",
      answer:
        "Para la versión de prueba es necesario tener conexión a internet. Una vez que contratás el sistema, podés elegir entre usar base de datos online o local. Con base local no necesitás estar conectado todo el tiempo, solo un día al comienzo de cada mes para validar el abono. En caso de usar base de datos online, se recomienda conexión por cable ya que las redes Wi-Fi suelen ser menos estables.",
    },
    {
      question: "¿Puedo usar el programa en el celular?",
      answer:
        "El sistema está diseñado exclusivamente para computadoras con Windows 10 u 11. No se puede abrir ni operar desde celulares o tablets, ya que necesita un entorno de PC para funcionar correctamente.",
    },
    {
      question: "¿Cómo se manejan las licencias por puesto?",
      answer:
        "El plan Básico incluye un solo puesto de trabajo. El plan Pro permite hasta cinco puestos simultáneos y la creación de usuarios con distintos permisos.",
    },
    {
      question: "¿Cómo puedo pagar?",
      answer: "Por transferencia bancaria o billetera virtual.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />

      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-12">Preguntas Frecuentes</h1>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg bg-card px-6 data-[state=open]:bg-card/80 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-white hover:text-primary hover:no-underline py-6 group">
                  <span className="text-lg font-medium group-hover:translate-x-1 transition-transform duration-300">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>

      <Footer />
    </div>
  )
}
