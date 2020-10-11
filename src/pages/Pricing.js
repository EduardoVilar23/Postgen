import React from 'react';
import Menu from '../Components/Menu';

const planos = [
  {
    id: 1,
    title: 'Gratuito',
    color: '#30D159',
    content: [
      '4 Renderizações por dia',
      '3 Opções de fontes',
    ],
    buyed: true,
  },
  {
    id: 1,
    title: 'Pro',
    color: '#FF9F0A',
    content: [
      'Número de renderizações ilimitado',
      'Todas as opções de fontes',
    ],
    buyed: false,
  }
]

export default function Pricing() {
  return(
    <div className="AppBackground">
      {/* <Menu/> */}
      <div className="pricesPageFormat">

      <h1 className="pageTitle">Preços</h1>
      <p className="pageDescription">
        Avalie os planos e escolha o que melhor satisfazer você.
      </p>
      <div
      className="arroundPrices"
      >
        {
          planos.map(item => (
      <div className="cardPrice">
        <div className="cardPriceTop">
        <h1 style={{color: item.color, fontSize: '30pt'}}>
          {item.title}
        </h1>
        <p style={{fontSize: '16pt'}}>
          Este plano contém:
        </p>
        {
          item.content.map(item => (
            <>
              <span>
                {item}
              </span>
            </>
          ))
        }
        </div>
        <div className="buyBtn" style={{backgroundColor: item.buyed ? '#8E8E93' : '#30D159'}}>
          <span style={{fontSize: '15pt'}}>
          {
            item.buyed ?
            'Comprado' :
            'Comprar'
          }
          </span>
        </div>
      </div>
          ))
        }
      </div>
      <h1 className="pageTitle">Por que adiquirir o plano <span className="proWord">Pro?</span></h1>
      </div>
    </div>
  )
}