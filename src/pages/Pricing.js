import React from 'react';
import { Input } from 'antd';

const planos = [
  {
    id: 1,
    title: 'Gratuito',
    price: '0,00',
    color: '#0070c9',
    content: [
      '4 Renderizações por dia',
      '3 Opções de fontes',
    ],
    buyed: true,
  },
  {
    id: 1,
    title: 'Pro',
    price: '9,99',
    color: '#30D159',
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
        <h1>R$ {item.price}</h1>
        <p style={{fontSize: '16pt'}}>
          Este plano contém:
        </p>
        {
          item.content.map(item => (
            <>
              <span>
                {item}
              </span> <br/>
            </>
          ))
        }
        </div>
        <div className="buyBtn" style={{backgroundColor: item.buyed ? '#8E8E93' : '#30D159'}}>
          <span style={{fontSize: '15pt'}}>
          {
            item.buyed ?
            'Comprado' :
            <>
            Comprar
            </>
          }
          </span>
        </div>
      </div>
          ))
        }
      </div>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <label style={{width: '20em', textAlign: 'center', fontSize: '14pt'}}>
        Tem um código promocional? Insira-o aqui:
      </label>
      <Input className="inputCustom" placeholder="XXX-XXX-XXX-XXX" />
      <div className="buyBtn" style={{backgroundColor: '#0070c9', width: '20em', borderRadius: '0 0 0.5em 0.5em', padding: '0' }}>
        <span style={{fontSize: '14pt'}}>
        Resgatar
        </span>
      </div>
      </div>
      <br/>
      <h1 className="pageTitle" style={{lineHeight: '1em'}} >Por que adiquirir o plano <span className="proWord">Pro?</span></h1>
      </div>
    </div>
  )
}