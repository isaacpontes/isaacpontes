import ServiceCard from '../components/ServiceCard'
import { FaChartLine, FaDesktop, FaHandsHelping, FaServer, FaShoppingCart, FaTelegram } from 'react-icons/fa'
import { IoConstruct, IoRocket } from 'react-icons/io5'

export default function Services() {
  return (
    <>
      <section className="section has-background-light">
        <div className="container">
          <h3 className="title">
            Como posso te ajudar?
          </h3>
          <p className="subtitle">
            Precisa de um site incrível? Um e-commerce? Uma aplicação web inovadora?
            <span className="is-block">Eu sou a pessoa certa para tirar suas melhores ideias do papel!</span>
          </p>
          <div className="columns">
            <div className="column is-one-quarter">
              <ServiceCard
                cardIcon={ <FaDesktop/> }
                title="Criação de Sites"
                description="Tenha uma presença marcante na internet e garanta uma experiência única para seus clientes."
              >
                <a href="/contact" className="button is-link">
                  Saiba mais
                </a>
              </ServiceCard>

            </div>
            <div className="column is-one-quarter">
              <ServiceCard
                cardIcon={ <FaShoppingCart/> }
                title="E-Commerce"
                description="Venda para todo o Brasil e aumente seu lucro através de uma loja virtual rápida e feita para as suas necessidades."
              >
                <a href="/contact" className="button is-link">
                  Saiba mais
                </a>
              </ServiceCard>
            </div>
            <div className="column is-one-quarter">
              <ServiceCard
                cardIcon={ <IoRocket/> }
                title="Landing Pages"
                description="Impulsione suas campanhas, capture leads e aumente suas conversões através de páginas de destino eficientes."
              >
                <a href="/contact" className="button is-link">
                  Saiba mais
                </a>
              </ServiceCard>
            </div>
            <div className="column is-one-quarter">
              <ServiceCard
                cardIcon={ <FaServer/> }
                title="Aplicações Web"
                description="Transforme suas ideias em aplicações reais para serem usadas por qualquer pessoa e em qualquer lugar."
              >
                <a href="/contact" className="button is-link">
                  Saiba mais
                </a>
              </ServiceCard>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-quarter">
              <ServiceCard
                cardIcon={ <FaChartLine/> }
                title="Otimização SEO"
                description="Faça seu site ser encontrado pelas ferramentas de pesquisa e melhore o tráfego orgânico nas suas páginas."
              >
                <a href="/contact" className="button is-link">
                  Saiba mais
                </a>
              </ServiceCard>
            </div>
            <div className="column is-one-quarter">
              <ServiceCard
                cardIcon={ <IoConstruct/> }
                title="Manutenção"
                description="Já possui um site que precisa de ajustes? Sem problemas, posso te ajudar a colocar sua página de volta nos trilhos."
              >
                <a href="/contact" className="button is-link">
                  Saiba mais
                </a>
              </ServiceCard>
            </div>
            <div className="column is-one-quarter">
              <ServiceCard
                cardIcon={ <FaHandsHelping/> }
                title="Consultoria"
                description="Já sabe o que quer mas ainda não por onde começar? Não se preocupe, posso te mostrar os melhores caminhos."
              >
                <a href="/contact" className="button is-link">
                  Saiba mais
                </a>
              </ServiceCard>
            </div>
            <div className="column is-one-quarter">
              <ServiceCard
                cardIcon={ <FaTelegram /> }
                title="Alguma pergunta?"
                description="Está perdido? Não sabe nem por onde começar? Entre em contato direto comigo e eu tiro todas as suas dúvidas."
              >
                <a href="https://t.me/isaacpontes_dev" className="button is-primary">
                  Entrar em contato
                </a>
              </ServiceCard>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}