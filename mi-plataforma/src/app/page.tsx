'use client'
import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, CartesianGrid } from 'recharts';
import { TrendingUp, TrendingDown, AlertCircle, Download, User, Bell, Info, Calendar, Search, Plus, ChevronDown, Mic, Paperclip, Eye, ArrowRight, Send, CheckCircle } from 'lucide-react';

const PlatformMockup = () => {
  const [activeSection, setActiveSection] = useState('Portafolio');
  const [activeTab, setActiveTab] = useState('Renta fija');
  const [centerExpanded, setCenterExpanded] = useState(true);
  const [showAsistenteConversation, setShowAsistenteConversation] = useState(false);
  const [asistenteMessages, setAsistenteMessages] = useState([]);
  
  // Portafolio tabs
  const portfolioTabs = ['Renta fija', 'Renta variable', 'Alternativos', 'Derivados', 'Divisas', 'Crédito'];
  
  // Bitácora tabs
  const bitacoraTabs = ['Registro de inversiones', 'Tesis e hipótesis', 'Recomendaciones', 'Participantes', 'Estados financieros'];
  
  // Recomendador tabs
  const recomendadorTabs = ['Monitoreo y portafolio', 'Señales y oportunidades', 'Recomendaciones emitidas', 'Escenarios y simulación'];
  
  // Regulación tabs
  const regulacionTabs = ['Métricas generales', 'Límites por activo', 'Concentración', 'Geográficos', 'Régimen por Siefore', 'Reportes CONSAR', 'Violaciones'];
  
  // Get current tabs based on active section
  const getCurrentTabs = () => {
    if (activeSection === 'Portafolio') return portfolioTabs;
    if (activeSection === 'Bitácora de inversiones') return bitacoraTabs;
    if (activeSection === 'Recomendador') return recomendadorTabs;
    if (activeSection === 'Regulación') return regulacionTabs;
    return [];
  };

  // Handle section change
  const handleSectionChange = (section) => {
    setActiveSection(section);
    if (section === 'Portafolio') {
      setActiveTab('Renta fija');
    } else if (section === 'Bitácora de inversiones') {
      setActiveTab('Registro de inversiones');
    } else if (section === 'Recomendador') {
      setActiveTab('Monitoreo y portafolio');
    } else if (section === 'Regulación') {
      setActiveTab('Métricas generales');
    } else if (section === 'Asistente') {
      setShowAsistenteConversation(false);
    }
  };

  // Renta Fija Data
  const rentaFijaComposition = [
    { name: 'Gobierno', value: 40, color: '#2DD4BF' },
    { name: 'Corporativo', value: 30, color: '#14B8A6' },
    { name: 'Banca', value: 20, color: '#0D9488' },
    { name: 'Otros', value: 10, color: '#0F766E' }
  ];
  
  const rentaFijaMaturity = [
    { year: '2025', value: 18 },
    { year: '2026', value: 16 },
    { year: '2027', value: 25 },
    { year: '2028', value: 24 },
    { year: '2029', value: 18 },
    { year: '2030', value: 6 }
  ];

  const rentaFijaPerformance = [
    { month: '1M', portafolio: 15, benchmark: 16 },
    { month: '3M', portafolio: 14, benchmark: 21 },
    { month: '6M', portafolio: 18, benchmark: 23 },
    { month: '1A', portafolio: 11, benchmark: 20 },
    { month: '2A', portafolio: 17, benchmark: 18 },
    { month: '3A', portafolio: 7, benchmark: 13 },
    { month: '4A', portafolio: 12, benchmark: 15 },
    { month: '5A', portafolio: 9, benchmark: 3 },
    { month: '6A', portafolio: 11, benchmark: 10 }
  ];

  const rentaFijaHoldings = [
    { emisor: 'PEMEX', tipo: 'Mbonos', rating: 'A+', vencimiento: '12/10/2025', monto: '$25,500M', yield: '9.2%', duracion: '4.2' },
    { emisor: 'BBVA México', tipo: 'Corporativo', rating: 'AAA', vencimiento: '25/12/2025', monto: '$15,200M', yield: '10.1%', duracion: '2.8' },
    { emisor: 'Gobierno federal', tipo: 'Corporativo', rating: 'BBB+', vencimiento: '10/05/2026', monto: '$12,800M', yield: '11.5%', duracion: '3.5' },
    { emisor: 'América Móvil', tipo: 'Corporativo', rating: 'CC+', vencimiento: '28/08/2026', monto: '$10,500M', yield: '9.8%', duracion: '2.1' },
    { emisor: 'CFE México', tipo: 'Gobierno', rating: 'C', vencimiento: '05/10/2028', monto: '$9,200M', yield: '9.5%', duracion: '5.8' }
  ];

  // Renta Variable Data
  const rentaVariableGeo = [
    { name: 'Estados Unidos', value: 45, color: '#2DD4BF' },
    { name: 'México', value: 25, color: '#14B8A6' },
    { name: 'Europa', value: 18, color: '#0D9488' },
    { name: 'Asia', value: 8, color: '#0F766E' },
    { name: 'Otros', value: 4, color: '#065F46' }
  ];

  const rentaVariableSector = [
    { sector: 'Tecnología', value: 25 },
    { sector: 'Financiero', value: 19 },
    { sector: 'Consumo', value: 15 },
    { sector: 'Salud', value: 12 },
    { sector: 'Industrial', value: 10 },
    { sector: 'Otros', value: 14 }
  ];

  const rentaVariableAcciones = [
    { ticker: 'AAPL', empresa: 'Apple Inc.', sector: 'Tecnología', pais: 'Estados Unidos', valor: '$3,750M', peso: '4.2%', rendimiento: '+12.5%' },
    { ticker: 'MSFT', empresa: 'Microsoft Corp.', sector: 'Tecnología', pais: 'Estados Unidos', valor: '$3,395M', peso: '3.8%', rendimiento: '+18.2%' },
    { ticker: 'AMXL', empresa: 'América Móvil', sector: 'Comunicación', pais: 'México', valor: '$2,858M', peso: '3.2%', rendimiento: '+8.7%' },
    { ticker: 'WMX', empresa: 'Walmart México', sector: 'Hipermercado', pais: 'México', valor: '$2,590M', peso: '2.9%', rendimiento: '+15.3%' },
    { ticker: 'GOGL', empresa: 'Alphabet Inc.', sector: 'Tecnología', pais: 'Estados Unidos', valor: '$2,411M', peso: '2.7%', rendimiento: '+22.1%' }
  ];

  // Alternativos Data
  const alternativosIRR = [
    { year: '2018', value: 16 },
    { year: '2019', value: 15 },
    { year: '2020', value: 19 },
    { year: '2021', value: 14 },
    { year: '2022', value: 13 },
    { year: '2023', value: 10 }
  ];

  const alternativosCashFlow = [
    { quarter: 'Q1 2024', capitalCalls: -2, distributions: 2 },
    { quarter: 'Q2 2024', capitalCalls: -3, distributions: 2.5 },
    { quarter: 'Q3 2024', capitalCalls: -2.5, distributions: 2 },
    { quarter: 'Q4 2024', capitalCalls: -1, distributions: 3 }
  ];

  const alternativosPerformance = [
    { tvpi: 1.1, irr: 8.5, size: 30 },
    { tvpi: 1.4, irr: 15.8, size: 50 },
    { tvpi: 1.5, irr: 12.5, size: 40 },
    { tvpi: 1.7, irr: 15.2, size: 35 }
  ];

  const alternativosFondos = [
    { fondo: 'Blackstone Capital Partners VIII', manager: 'Blackstone', vintage: '2022', tipo: 'Private Equity', comprometido: '$8,500M', irr: '+16.2%', tvpi: '1.38x' },
    { fondo: 'Brookfield Infrastructure Fund V', manager: 'Brookfield', vintage: '2021', tipo: 'Infraestructura', comprometido: '$6,200M', irr: '+12.8%', tvpi: '1.52x' },
    { fondo: 'KKR Global Impact Fund', manager: 'KKR', vintage: '2023', tipo: 'Impact', comprometido: '$5,800M', irr: '+8.5%', tvpi: '1.15x' },
    { fondo: 'Vista Equity Partners Fund IX', manager: 'Vista', vintage: '2022', tipo: 'Tech PE', comprometido: '$4,500M', irr: '+18.9%', tvpi: '1.62x' },
    { fondo: 'Apollo Natural Resources Fund', manager: 'Apollo', vintage: '2020', tipo: 'Natural Resources', comprometido: '$3,900M', irr: '+14.7%', tvpi: '1.7x' }
  ];

  // Derivados Data
  const derivadosSubyacente = [
    { name: 'IRS TIIE', value: 35, color: '#2DD4BF' },
    { name: 'FX Forwards', value: 30, color: '#14B8A6' },
    { name: 'IRS USD', value: 20, color: '#0D9488' },
    { name: 'Opciones', value: 10, color: '#0F766E' },
    { name: 'Otros', value: 5, color: '#065F46' }
  ];

  const derivadosContraparte = [
    { name: 'BBVA', value: 6 },
    { name: 'Citibanamex', value: 4.5 },
    { name: 'HSBC', value: 3.5 },
    { name: 'JP Morgan', value: 3 },
    { name: 'Santander', value: 2.5 }
  ];

  const derivadosSensibilidad = [
    { scenario: '-200bp', value: -650 },
    { scenario: '-150bp', value: -380 },
    { scenario: '-100bp', value: -180 },
    { scenario: '-50bp', value: -50 },
    { scenario: '0', value: 0 },
    { scenario: '+50bp', value: 200 },
    { scenario: '+100bp', value: 480 },
    { scenario: '+150bp', value: 650 },
    { scenario: '+200bp', value: 750 }
  ];

  const derivadosTable = [
    { tipo: 'Swap', subyacente: 'IRS TIIE 28D', contraparte: 'BBVA', vencimiento: '2026-08-15', nocional: '$5,200M', mtm: '+125M', colateral: '$450M' },
    { tipo: 'Forward', subyacente: 'USD/MXN', contraparte: 'Citibanamex', vencimiento: '2025-12-20', nocional: '$3,800M', mtm: '-42M', colateral: '$320M' },
    { tipo: 'Swap', subyacente: 'IRS USD Sofr', contraparte: 'HSBC', vencimiento: '2027-03-10', nocional: '$2,900M', mtm: '+88M', colateral: '$280M' },
    { tipo: 'Option', subyacente: 'Put S&P 500', contraparte: 'JP Morgan', vencimiento: '2025-06-18', nocional: '$2,500M', mtm: '+65M', colateral: '$180M' },
    { tipo: 'Forward', subyacente: 'EUR/MXN', contraparte: 'Santander', vencimiento: '2025-11-05', nocional: '$1,600M', mtm: '-18M', colateral: '$145M' }
  ];

  // Divisas Data
  const divisasExposure = [
    { name: 'USD', value: 50, color: '#2DD4BF' },
    { name: 'EUR', value: 20, color: '#14B8A6' },
    { name: 'GBP', value: 12, color: '#0D9488' },
    { name: 'CAD', value: 10, color: '#0F766E' },
    { name: 'JPY', value: 5, color: '#065F46' },
    { name: 'Otras', value: 3, color: '#064E3B' }
  ];

  const divisasBrutoNeto = [
    { currency: 'USD', bruta: 68, neta: 20 },
    { currency: 'EUR', bruta: 12, neta: 2 },
    { currency: 'GBP', bruta: 5, neta: 1 },
    { currency: 'CAD', bruta: 3, neta: 0.5 },
    { currency: 'JPY', bruta: 2, neta: 0.3 }
  ];

  const divisasSensibilidad = [
    { scenario: 'USD -5%', value: -250 },
    { scenario: 'USD -1%', value: -50 },
    { scenario: 'Actual', value: 0 },
    { scenario: 'USD +1%', value: 150 },
    { scenario: 'USD +5%', value: 900 }
  ];

  const divisasTable = [
    { divisa: 'USD', exposicionBruta: '$68,500M', cobertura: '$48,200M', exposicionNeta: '$20,300M', porcentaje: '42.5%', tcSpot: '17.85', impacto: '+$203M' },
    { divisa: 'EUR', exposicionBruta: '$12,300M', cobertura: '$9,800M', exposicionNeta: '$2,500M', porcentaje: '7.6%', tcSpot: '19.42', impacto: '+$25M' },
    { divisa: 'GBP', exposicionBruta: '$5,800M', cobertura: '$4,200M', exposicionNeta: '$1,600M', porcentaje: '3.6%', tcSpot: '22.15', impacto: '+$16M' },
    { divisa: 'CAD', exposicionBruta: '$3,200M', cobertura: '$2,100M', exposicionNeta: '$1,100M', porcentaje: '2.0%', tcSpot: '12.85', impacto: '+$11M' },
    { divisa: 'JPY', exposicionBruta: '$2,500M', cobertura: '$1,800M', exposicionNeta: '$700M', porcentaje: '1.5%', tcSpot: '0.12', impacto: '+$7M' }
  ];

  // Crédito Data
  const creditoRating = [
    { rating: 'AAA', value: 25 },
    { rating: 'AA', value: 30 },
    { rating: 'A', value: 22 },
    { rating: 'BBB', value: 17 },
    { rating: 'BB', value: 4 },
    { rating: 'B', value: 2 }
  ];

  const creditoSector = [
    { name: 'Energía', value: 35, color: '#2DD4BF' },
    { name: 'Banca', value: 25, color: '#14B8A6' },
    { name: 'Telecomunicaciones', value: 20, color: '#0D9488' },
    { name: 'Utilities', value: 12, color: '#0F766E' },
    { name: 'Otros', value: 8, color: '#065F46' }
  ];

  const creditoSpreads = [
    { month: 'Ene', BBB: 185, A: 110, AAA: 95 },
    { month: 'Feb', BBB: 190, A: 115, AAA: 98 },
    { month: 'Mar', BBB: 195, A: 118, AAA: 100 },
    { month: 'Abr', BBB: 200, A: 122, AAA: 105 },
    { month: 'May', BBB: 205, A: 125, AAA: 108 },
    { month: 'Jun', BBB: 210, A: 130, AAA: 112 },
    { month: 'Jul', BBB: 215, A: 135, AAA: 118 },
    { month: 'Ago', BBB: 218, A: 138, AAA: 120 },
    { month: 'Sep', BBB: 220, A: 140, AAA: 122 },
    { month: 'Oct', BBB: 222, A: 142, AAA: 125 },
    { month: 'Nov', BBB: 225, A: 145, AAA: 128 },
    { month: 'Dic', BBB: 228, A: 148, AAA: 130 }
  ];

  const creditoTable = [
    { emisor: 'PEMEX', sector: 'Energía', ratingSP: 'BBB-', ratingMoodys: 'Baa3', monto: '$10,500M', spread: '165 bps', cambio: '-2 bps' },
    { emisor: 'CFE', sector: 'Utilities', ratingSP: 'AAA', ratingMoodys: 'Aaa', monto: '$10,500M', spread: '165 bps', cambio: '-5 bps' },
    { emisor: 'BBVA México', sector: 'Banca', ratingSP: 'AA+', ratingMoodys: 'Aa2', monto: '$10,500M', spread: '165 bps', cambio: '+8 bps' },
    { emisor: 'América Móvil', sector: 'Telecomunicaciones', ratingSP: 'A+', ratingMoodys: 'A1', monto: '$10,500M', spread: '165 bps', cambio: '-2 bps' },
    { emisor: 'CEMEX', sector: 'Materiales', ratingSP: 'BBB', ratingMoodys: 'Baa2', monto: '$10,500M', spread: '165 bps', cambio: '+12 bps' }
  ];

  // REGULACIÓN DATA

  // Métricas Generales
  const regulacionExposicionContraparte = [
    { name: 'SB Inicial', value: 6 },
    { name: 'SB 0-36', value: 6 },
    { name: 'SB 37-45', value: 6 },
    { name: 'SB 46-59', value: 6 },
    { name: 'SB 60+', value: 6 }
  ];

  const regulacionLimitesCriticos = [
    { nombre: 'Renta variable extranjera', porcentaje: 95, color: '#FCA5A5' },
    { nombre: 'Concentración por emisor', porcentaje: 80, color: '#FDE047' },
    { nombre: 'Inmersión en derivados', porcentaje: 45, color: '#86EFAC' }
  ];

  const regulacionAlertasRecientes = [
    { siefore: 'SB Inicial', tipo: 'RV extranjero', severidad: 'Amarilla' },
    { siefore: 'SB 0-36', tipo: 'Concentración', severidad: 'Amarilla' },
    { siefore: 'SB 37-45', tipo: 'Límite geográfico', severidad: 'Amarilla' },
    { siefore: 'SB 46-59', tipo: 'Concentración', severidad: 'Amarilla' }
  ];

  // Límites por Activo
  const regulacionLimitesActivoDetalle = [
    { tipo: 'Renta variable nacional', limiteConsar: '80%', exposicionActual: '68.0%', consumido: '85%', margen: '12.0%', estatus: 'Alerta' },
    { tipo: 'Renta variable extranjera', limiteConsar: '50%', exposicionActual: '43.5%', consumido: '87%', margen: '6.5%', estatus: 'Alerta' },
    { tipo: 'Deuda gubernamental', limiteConsar: '100%', exposicionActual: '45.0%', consumido: '45%', margen: '55.0%', estatus: 'Normal' },
    { tipo: 'Deuda corporativa AAA-A', limiteConsar: '100%', exposicionActual: '30.0%', consumido: '30%', margen: '70%', estatus: 'Normal' },
    { tipo: 'Capital privado', limiteConsar: '20%', exposicionActual: '12.0%', consumido: '60%', margen: '8.0%', estatus: 'Normal' },
    { tipo: 'Infraestructura y fibras', limiteConsar: '10%', exposicionActual: '5.0%', consumido: '50%', margen: '5.0%', estatus: 'Normal' },
    { tipo: 'Derivados (nocional)', limiteConsar: '10%', exposicionActual: '4.5%', consumido: '45%', margen: '5.5%', estatus: 'Normal' },
    { tipo: 'Inversión extranjera total', limiteConsar: '70%', exposicionActual: '52.0%', consumido: '74%', margen: '18.0%', estatus: 'Alerta' }
  ];

  // Concentración
  const regulacionSensibilidadFX = [
    { name: 'Gob. Federal', value: 9 },
    { name: 'BBVA', value: 7 },
    { name: 'América Móvil', value: 6 },
    { name: 'PEMEX', value: 5.5 },
    { name: 'Walmart', value: 5 },
    { name: 'CFE', value: 4.5 },
    { name: 'Citi', value: 4.5 },
    { name: 'FEMSA', value: 4 }
  ];

  const regulacionConcentracionDetalle = [
    { emisor: 'Gobierno Federal', tipo: 'Soberano', grupo: '-', valor: '$28,500M', activoNeto: '8.2%', limite: '10%', consumido: '82%', estatus: 'Alerta' },
    { emisor: 'BBVA México', tipo: 'Banca', grupo: 'Grupo BBVA', valor: '$18,700M', activoNeto: '5.4%', limite: '6%', consumido: '90%', estatus: 'Alerta' },
    { emisor: 'América Móvil', tipo: 'Corporativo', grupo: 'Grupo Carso', valor: '$15,200M', activoNeto: '4.4%', limite: '5%', consumido: '88%', estatus: 'Alerta' },
    { emisor: 'PEMEX', tipo: 'Paraestatal', grupo: '-', valor: '$12,800M', activoNeto: '3.7%', limite: '5%', consumido: '74%', estatus: 'Normal' },
    { emisor: 'Walmart de México', tipo: 'Corporativo', grupo: 'Walmart Inc.', valor: '$10,500M', activoNeto: '3.0%', limite: '5%', consumido: '60%', estatus: 'Normal' },
    { emisor: 'CFE', tipo: 'Paraestatal', grupo: '-', valor: '$9,200M', activoNeto: '2.6%', limite: '5%', consumido: '52%', estatus: 'Normal' },
    { emisor: 'Citibanamex', tipo: 'Banca', grupo: 'Grupo Citi', valor: '$8,900M', activoNeto: '2.6%', limite: '6%', consumido: '43%', estatus: 'Normal' },
    { emisor: 'FEMSA', tipo: 'Corporativo', grupo: '-', valor: '$7,500M', activoNeto: '2.2%', limite: '5%', consumido: '44%', estatus: 'Normal' }
  ];

  // Geográficos
  const regulacionDistribucionGeo = [
    { name: 'México', value: 48, color: '#2DD4BF' },
    { name: 'Estados Unidos', value: 35, color: '#14B8A6' },
    { name: 'Europa', value: 13, color: '#0D9488' },
    { name: 'Otros', value: 4, color: '#0F766E' }
  ];

  const regulacionExposicionMoneda = [
    { name: 'MXN', value: 48, color: '#14B8A6' },
    { name: 'USD', value: 35, color: '#2DD4BF' },
    { name: 'EUR', value: 13, color: '#0D9488' },
    { name: 'GBP', value: 3, color: '#0F766E' },
    { name: 'CAD', value: 1, color: '#065F46' }
  ];

  const regulacionLimitesGeograficos = [
    { pais: 'Estados Unidos', valor: '$122,200M', activoNeto: '35.2%', limiteConsar: '40%', consumido: '88%', margen: '4.8%', estatus: 'Alerta' },
    { pais: 'Unión Europea', valor: '$44,400M', activoNeto: '12.8%', limiteConsar: '30%', consumido: '43%', margen: '17.2%', estatus: 'Normal' },
    { pais: 'Canadá', valor: '$11,100M', activoNeto: '3.2%', limiteConsar: '10%', consumido: '32%', margen: '6.8%', estatus: 'Normal' },
    { pais: 'Japón', valor: '$8,700M', activoNeto: '2.5%', limiteConsar: '10%', consumido: '25%', margen: '7.5%', estatus: 'Normal' },
    { pais: 'Reino Unido', valor: '$6,900M', activoNeto: '2.0%', limiteConsar: '10%', consumido: '20%', margen: '8.0%', estatus: 'Normal' },
    { pais: 'China', valor: '$5,200M', activoNeto: '1.5%', limiteConsar: '8%', consumido: '19%', margen: '6.5%', estatus: 'Normal' },
    { pais: 'Otros mercados emergentes', valor: '$3,800M', activoNeto: '1.1%', limiteConsar: '5%', consumido: '22%', margen: '3.9%', estatus: 'Normal' },
    { pais: 'Total extranjero', valor: '$180,500M', activoNeto: '52.0%', limiteConsar: '70%', consumido: '74%', margen: '18.0%', estatus: 'Alerta' }
  ];

  // Régimen por Siefore
  const regulacionComposicionSiefore = [
    { name: 'Deuda Gub.', actual: 52, limite: 30 },
    { name: 'Deuda Corp.', actual: 28, limite: 30 },
    { name: 'RV Nacional', actual: 12, limite: 15 },
    { name: 'RV Extranjero', actual: 5, limite: 5 },
    { name: 'Alternativos', actual: 2, limite: 5 },
    { name: 'Otros', actual: 1, limite: 5 }
  ];

  const regulacionRegimenInversion = [
    { clase: 'Deuda gubernamental', minimo: '30%', maximo: '100%', actual: '52.0%', consumido: '31%', estatus: 'Normal' },
    { clase: 'Deuda corporativa (AAA-A)', minimo: '0%', maximo: '60%', actual: '28.0%', consumido: '47%', estatus: 'Normal' },
    { clase: 'Renta variable nacional', minimo: '0%', maximo: '15%', actual: '12.0%', consumido: '80%', estatus: 'Alerta' },
    { clase: 'Renta variable extranjera', minimo: '0%', maximo: '5%', actual: '3.5%', consumido: '70%', estatus: 'Normal' },
    { clase: 'Alternativos', minimo: '0%', maximo: '5%', actual: '2.5%', consumido: '50%', estatus: 'Normal' },
    { clase: 'Mercancías', minimo: '0%', maximo: '5%', actual: '0.0%', consumido: '0%', estatus: 'Normal' },
    { clase: 'Divisas e instrumentos bursatilizados', minimo: '0%', maximo: '10%', actual: '2.0%', consumido: '20%', estatus: 'Normal' },
    { clase: 'Derivados (nocional/activo neto)', minimo: '0%', maximo: '10%', actual: '3.2%', consumido: '32%', estatus: 'Normal' }
  ];

  // Bitácora Data
  const investments = [
    { 
      title: 'Compra Bonos 2032', 
      return: '+2.3%', 
      status: 'Activa', 
      statusColor: 'green',
      author: 'Luis Pérez - Senior Analyst', 
      time: 'Hoy, 15:40 hrs',
      pending: true
    },
    { 
      title: 'Compra Bonos 2032', 
      return: '-1.2%', 
      status: 'Cerrada', 
      statusColor: 'gray',
      author: 'Luis Pérez - Senior Analyst', 
      time: 'Hoy, 15:40 hrs',
      pending: false
    },
    { 
      title: 'Compra Bonos 2032', 
      return: '+2.3%', 
      status: 'Cerrada', 
      statusColor: 'gray',
      author: 'Luis Pérez - Senior Analyst', 
      time: 'Hoy, 15:40 hrs',
      pending: false
    },
    { 
      title: 'Compra Bonos 2032', 
      return: '-1.7%', 
      status: 'Cerrada', 
      statusColor: 'gray',
      author: 'Luis Pérez - Senior Analyst', 
      time: 'Hoy, 15:40 hrs',
      pending: false
    }
  ];

  const hypotheses = [
    {
      date: '28/01/2025',
      hypothesis: 'Rally en tecnología post-earnings',
      assetClass: 'Renta variable',
      expectedReturn: '8-10%',
      actualReturn: '+2.3%',
      status: 'Convertida',
      analyst: '10%'
    },
    {
      date: '15/01/2025',
      hypothesis: 'Comprensión spreads PEMEX',
      assetClass: 'Renta fija',
      expectedReturn: '+50 bps',
      actualReturn: '+65 bps',
      status: 'Convertida',
      analyst: '10%'
    },
    {
      date: '10/01/2025',
      hypothesis: 'Oportunidad en REITs mexicanos',
      assetClass: 'Alternativos',
      expectedReturn: '15%',
      actualReturn: '-',
      status: 'En evaluación',
      analyst: '10%'
    },
    {
      date: '20/12/2024',
      hypothesis: 'Short USD/MXN pre-selecciones',
      assetClass: 'FX',
      expectedReturn: '5%',
      actualReturn: '-2.1%',
      status: 'Descartada',
      analyst: '10%'
    }
  ];

  // Recomendador Data
  const notifications = [
    {
      title: 'Decisión Banxico (2 hrs)',
      description: 'Consenso espera recorte de 25 bps. Impacto estimado: +0.8% en bonos locales.',
      color: 'cyan',
      buttons: ['Ver', 'Cerrar']
    },
    {
      title: 'Bonos corporativos PEMEX 2031',
      description: "SpUpgrade inminente de Moody's. Fundamentales mejorando vs mercado sobrevendido por sentimiento.",
      color: 'green',
      buttons: ['Accionable', 'Cerrar']
    },
    {
      title: 'Drawdown detectado',
      description: 'Portafolio de alternativos: -3.2% en las últimas 24 horas.',
      color: 'orange',
      buttons: ['Analizar', 'Cerrar']
    },
    {
      title: 'Límite regulatorio crítico',
      description: 'Siefore Básica 60: Renta variable internacional al 94% del límite.',
      color: 'red',
      buttons: ['Rebalancear', 'Cerrar']
    }
  ];

  const sieforeMatrix = [
    { siefore: 'Básica 0', r: '4.2%', sigma: '2.1%', rendimiento: '1.5%', aum: '1.2%' },
    { siefore: 'Básica 45', r: '6.8%', sigma: '4.3%', rendimiento: '0.8%', aum: '2.6%' },
    { siefore: 'Básica 60', r: '8.3%', sigma: '6.7%', rendimiento: '2.1%', aum: '0.5%' },
    { siefore: 'Básica 75', r: '9.1%', sigma: '8.2%', rendimiento: '1.3%', aum: '1.5%' }
  ];

  const assetClassPerformance = [
    { name: 'Renta fija', value: 2.5 },
    { name: 'Renta variable', value: 4.2 },
    { name: 'FX', value: 5.0 },
    { name: 'Alternativos', value: 4.8 },
    { name: 'Derivados', value: 3.5 }
  ];

  // Función para renderizar labels en gráficos de dona
  const renderLabelContent = (entry) => {
    return `${entry.value}%`;
  };

  const getStatusBadge = (status) => {
    const styles = {
      'Convertida': 'bg-green-50 text-green-700',
      'En evaluación': 'bg-yellow-50 text-yellow-700',
      'Descartada': 'bg-red-50 text-red-700'
    };
    return styles[status] || 'bg-gray-50 text-gray-700';
  };

  const renderPortfolioContent = () => {
    switch (activeTab) {
      case 'Renta fija':
        return (
          <>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-amber-900">Alerta de concentración.</span>
                <span className="text-amber-800"> La exposición al sector bancario supera el límite recomendado del 25%.</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <MetricCard label="Duración promedio" value="4.8 años" change="0.1%" trend="up" />
              <MetricCard label="Valor total" value="$142.5M" change="2.1%" trend="up" />
              <MetricCard label="Rendimiento mensual" value="9.8%" change="2.1%" trend="down" />
              <MetricCard label="Vencimiento promedio" value="6.2 años" change="0.5 años" trend="down" />
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <ChartCard title="Composición por tipo de emisora">
                <div className="flex items-center justify-center mb-6">
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie 
                        data={rentaFijaComposition} 
                        cx="50%" 
                        cy="50%" 
                        innerRadius={80} 
                        outerRadius={120} 
                        paddingAngle={2} 
                        dataKey="value"
                        label={renderLabelContent}
                        labelLine={false}
                      >
                        {rentaFijaComposition.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <Legend items={rentaFijaComposition} />
              </ChartCard>

              <ChartCard title="Perfil de vencimientos">
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={rentaFijaMaturity}>
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <Tooltip cursor={{ fill: 'rgba(45, 212, 191, 0.1)' }} />
                    <Bar dataKey="value" fill="#2DD4BF" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>

            <ChartCard title="Curva de rendimiento">
              <div className="mb-4 flex justify-end gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Portafolio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-200 rounded-full"></div>
                  <span className="text-sm text-gray-600">Benchmark</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={rentaFijaPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="portafolio" stroke="#14B8A6" strokeWidth={2} dot={{ fill: '#14B8A6', r: 4 }} />
                  <Line type="monotone" dataKey="benchmark" stroke="#99F6E4" strokeWidth={2} dot={{ fill: '#99F6E4', r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <DataTable title="Holdings" columns={['Emisor', 'Tipo', 'Rating', 'Vencimiento', 'Monto', 'Yield', 'Duración']} data={rentaFijaHoldings} />
          </>
        );

      case 'Renta variable':
        return (
          <>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-amber-900">Alerta sectorial.</span>
                <span className="text-amber-800"> Sobreexposición en tecnología (28% vs 20% benchmark).</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <MetricCard label="Valor de mercado" value="$89.3B" change="3.5%" trend="up" sublabel="Capitalización total" />
              <MetricCard label="Tracking error" value="2.4%" change="0.3%" trend="up" sublabel="vs benchmark" />
              <MetricCard label="Beta" value="9.8%" change="0.02%" trend="down" sublabel="Beta del portafolio" />
              <MetricCard label="Volatilidad" value="18.5%" change="1.2%" trend="up" sublabel="Desviación estándar anual" />
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <ChartCard title="Exposición geográfica">
                <div className="flex items-center justify-center mb-6">
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie 
                        data={rentaVariableGeo} 
                        cx="50%" 
                        cy="50%" 
                        innerRadius={80} 
                        outerRadius={120} 
                        paddingAngle={2} 
                        dataKey="value"
                        label={renderLabelContent}
                        labelLine={false}
                      >
                        {rentaVariableGeo.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <Legend items={rentaVariableGeo} />
              </ChartCard>

              <ChartCard title="Distribución sectorial">
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={rentaVariableSector}>
                    <XAxis dataKey="sector" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 11 }} angle={-15} textAnchor="end" height={60} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#2DD4BF" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>

            <ChartCard title="Rendimiento vs Benchmark">
              <div className="mb-4 flex justify-end gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Portafolio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-200 rounded-full"></div>
                  <span className="text-sm text-gray-600">Benchmark</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={rentaFijaPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="portafolio" stroke="#14B8A6" strokeWidth={2} dot={{ fill: '#14B8A6', r: 4 }} />
                  <Line type="monotone" dataKey="benchmark" stroke="#99F6E4" strokeWidth={2} dot={{ fill: '#99F6E4', r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <DataTable title="Acciones" columns={['Ticker', 'Empresa', 'Sector', 'País', 'Valor', 'Peso', 'Rendimiento']} data={rentaVariableAcciones} />
          </>
        );

      case 'Alternativos':
        return (
          <>
            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-6 flex items-start gap-3">
              <Info className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-cyan-900">Capital pendiente.</span>
                <span className="text-cyan-800"> $12.5B en compromisos de capital pendientes de llamada.</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <MetricCard label="Capital comprometido" value="$45.2B" change="5.8%" trend="up" sublabel="Total comprometido" />
              <MetricCard label="IRR promedio" value="14.3%" change="1.2%" trend="up" sublabel="Tasa interna de retorno" />
              <MetricCard label="TVPI" value="1.45x" change="0.06x" trend="up" sublabel="Total value to paid-in" />
              <MetricCard label="DPI" value="0.82x" change="0.15x" trend="up" sublabel="Distributions to paid-in" />
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <ChartCard title="Evolución de IRR por vintage">
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={alternativosIRR}>
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#2DD4BF" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard title="Flujos de capital">
                <div className="mb-4 flex justify-end gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-teal-400 rounded"></div>
                    <span className="text-sm text-gray-600">Capital calls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-teal-600 rounded"></div>
                    <span className="text-sm text-gray-600">Distribuciones</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={alternativosCashFlow}>
                    <XAxis dataKey="quarter" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="capitalCalls" fill="#5EEAD4" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="distributions" fill="#14B8A6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>

            <ChartCard title="Comparativos de performance por fondo">
              <ResponsiveContainer width="100%" height={300}>
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis type="number" dataKey="tvpi" name="TVPI" domain={[1, 1.8]} axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <YAxis type="number" dataKey="irr" name="IRR" domain={[5, 20]} axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter data={alternativosPerformance} fill="#2DD4BF">
                    {alternativosPerformance.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={`rgba(45, 212, 191, ${0.4 + (entry.size / 100)})`} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </ChartCard>

            <DataTable title="Portafolio de fondos alternativos" columns={['Fondo', 'Manager', 'Vintage', 'Tipo', 'Comprometido', 'IRR', 'TVPI']} data={alternativosFondos} />
          </>
        );

      case 'Derivados':
        return (
          <>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-red-900">Margen insuficiente.</span>
                <span className="text-red-800"> La contraparte HSBC requiere colateral adicional de $850M.</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <MetricCard label="Exposición neta" value="$32.8B" change="2.3%" trend="down" sublabel="Nocional total" />
              <MetricCard label="Market-to-market" value="$485M" change="$125M" trend="up" sublabel="MTM total" />
              <MetricCard label="Colaterales" value="$2.1B" change="8.5%" trend="up" sublabel="Garantías depositadas" />
              <MetricCard label="P&L diario" value="+$42M" change="saldo vs ayer" trend="up" sublabel="Ganancia del día" />
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <ChartCard title="Exposición por subyacente">
                <div className="flex items-center justify-center mb-6">
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie 
                        data={derivadosSubyacente} 
                        cx="50%" 
                        cy="50%" 
                        innerRadius={80} 
                        outerRadius={120} 
                        paddingAngle={2} 
                        dataKey="value"
                        label={renderLabelContent}
                        labelLine={false}
                      >
                        {derivadosSubyacente.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <Legend items={derivadosSubyacente} />
              </ChartCard>

              <ChartCard title="Exposición por contraparte">
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={derivadosContraparte}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#2DD4BF" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>

            <ChartCard title="Análisis de sensibilidad">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Impacto en MTM (M MXN)</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={derivadosSensibilidad} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <YAxis type="category" dataKey="scenario" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} width={80} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#2DD4BF" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <DataTable title="Portafolio de derivados" columns={['Tipo', 'Subyacente', 'Contraparte', 'Vencimiento', 'Notional', 'MTM', 'Colateral']} data={derivadosTable} />
          </>
        );

      case 'Divisas':
        return (
          <>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-amber-900">Desviación de política.</span>
                <span className="text-amber-800"> Exposición neta a USD 3.5% por encima del objetivo.</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <MetricCard label="Exposición bruta USD" value="$68.5B" change="1.8%" trend="up" sublabel="Equivalente MXN" />
              <MetricCard label="Exposición EUR" value="$12.3B" change="0.3%" trend="down" sublabel="Equivalente" />
              <MetricCard label="Ratio de cobertura" value="72%" change="3%" trend="up" sublabel="% de exposición cubierta" />
              <MetricCard label="Impacto FX YTD" value="+$1.8M" change="favorable" trend="up" sublabel="Ganancia cambiaria" />
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <ChartCard title="Exposición por divisa">
                <div className="flex items-center justify-center mb-6">
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie 
                        data={divisasExposure} 
                        cx="50%" 
                        cy="50%" 
                        innerRadius={80} 
                        outerRadius={120} 
                        paddingAngle={2} 
                        dataKey="value"
                        label={renderLabelContent}
                        labelLine={false}
                      >
                        {divisasExposure.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <Legend items={divisasExposure} />
              </ChartCard>

              <ChartCard title="Exposición bruta vs neta">
                <div className="mb-4 flex justify-end gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-teal-400 rounded"></div>
                    <span className="text-sm text-gray-600">Exposición bruta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-teal-600 rounded"></div>
                    <span className="text-sm text-gray-600">Exposición neta</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={divisasBrutoNeto}>
                    <XAxis dataKey="currency" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="bruta" fill="#5EEAD4" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="neta" fill="#14B8A6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>

            <ChartCard title="Análisis de sensibilidad FX">
              <div className="mb-4 flex justify-end gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-400 rounded"></div>
                  <span className="text-sm text-gray-600">Capital calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-600 rounded"></div>
                  <span className="text-sm text-gray-600">Distribuciones</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={divisasSensibilidad}>
                  <XAxis dataKey="scenario" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#2DD4BF" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <DataTable title="Portafolio de divisas" columns={['Divisa', 'Exposición bruta', 'Cobertura', 'Exposición neta', '% Portafolio', 'TC spot', 'Impacto +/-1%']} data={divisasTable} />
          </>
        );

      case 'Crédito':
        return (
          <>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-red-900">Downgrade detectado.</span>
                <span className="text-red-800"> PEMEX rebajado de BBB a BBB- por S&P Global.</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <MetricCard label="Spread promedio" value="285 bps" change="15bps" trend="up" sublabel="Spread promediado" />
              <MetricCard label="Valor total" value="$12.3B" change="1.7%" trend="down" sublabel="Cartera de crédito" />
              <MetricCard label="Rating promedio" value="A-" change="de A-" trend="down" sublabel="Calificación media" />
              <MetricCard label="Pérdida esperada" value="0.82%" change="0.02%" trend="up" sublabel="Expected loss" />
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <ChartCard title="Distribución por rating">
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={creditoRating}>
                    <XAxis dataKey="rating" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#2DD4BF" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard title="Concentración sectorial">
                <div className="flex items-center justify-center mb-6">
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie 
                        data={creditoSector} 
                        cx="50%" 
                        cy="50%" 
                        innerRadius={80} 
                        outerRadius={120} 
                        paddingAngle={2} 
                        dataKey="value"
                        label={renderLabelContent}
                        labelLine={false}
                      >
                        {creditoSector.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <Legend items={creditoSector} />
              </ChartCard>
            </div>

            <ChartCard title="Evolución de spreads por categoría">
              <div className="mb-4 flex justify-end gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">BBB</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">A</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-200 rounded-full"></div>
                  <span className="text-sm text-gray-600">AAA</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={creditoSpreads}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="BBB" stroke="#14B8A6" strokeWidth={2} dot={{ fill: '#14B8A6', r: 3 }} />
                  <Line type="monotone" dataKey="A" stroke="#5EEAD4" strokeWidth={2} dot={{ fill: '#5EEAD4', r: 3 }} />
                  <Line type="monotone" dataKey="AAA" stroke="#CCFBF1" strokeWidth={2} dot={{ fill: '#CCFBF1', r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <DataTable title="Cartera de crédito - top emisores" columns={['Emisor', 'Sector', 'Rating S&P', "Rating Moody's", 'Monto', 'Spread', 'Cambio 30d']} data={creditoTable} />
          </>
        );

      default:
        return null;
    }
  };

  const renderBitacoraContent = () => {
    if (activeTab === 'Registro de inversiones') {
      return (
        <>
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  defaultValue="20/10/25"
                  className="text-sm text-gray-700 outline-none w-24"
                />
              </div>
              
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none">
                <option>Estatus: Todos</option>
                <option>Activa</option>
                <option>Cerrada</option>
              </select>
              
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none">
                <option>Activo: Todos</option>
                <option>Activas</option>
                <option>Inactivas</option>
              </select>
              
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none">
                <option>Portafolio: Todos</option>
                <option>Renta Fija</option>
                <option>Renta Variable</option>
              </select>
              
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none">
                <option>Conciliados: Todos</option>
                <option>Sí</option>
                <option>No</option>
              </select>
              
              <div className="ml-auto">
                <button className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Download className="w-4 h-4" />
                  <span className="text-sm">Descargar excel</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <MetricCard 
              label="Inversiones totales" 
              value="187" 
              change="+12%" 
              trend="up"
              sublabel="Rendimiento mensual"
            />
            <MetricCard 
              label="Volumen operado" 
              value="$8.4B" 
              change="+15.3%" 
              trend="up"
              sublabel="vs mes anterior"
            />
            <MetricCard 
              label="Tasa de éxito" 
              value="93.2%" 
              change="+2.1% YTD" 
              trend="up"
              sublabel=""
            />
            <MetricCard 
              label="Conciliaciones pendientes" 
              value="24" 
              change="3 vencidas" 
              trend="down"
              sublabel=""
              alert={true}
            />
          </div>

          <div className="space-y-3">
            {investments.map((inv, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-semibold text-gray-900">{inv.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      inv.return.startsWith('+') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                    }`}>
                      {inv.return}
                    </span>
                    {inv.pending && (
                      <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-50 text-yellow-700">
                        Conciliación pendiente
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        inv.statusColor === 'green' ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                      <span className="text-sm text-gray-600">{inv.status}</span>
                    </div>
                    <span className="text-sm text-gray-400">{inv.time}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mt-2">{inv.author}</p>
              </div>
            ))}
          </div>
        </>
      );
    }

    if (activeTab === 'Tesis e hipótesis') {
      return (
        <>
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1">
                <input 
                  type="text"
                  placeholder="Buscar por nombre"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
              
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none">
                <option>Tipo: Todas</option>
                <option>Renta Fija</option>
                <option>Renta Variable</option>
                <option>Alternativos</option>
              </select>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">Nueva hipótesis de inversión</h3>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <input 
                      type="text"
                      placeholder="Buscar por emisor, tipo o rating"
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                    <span className="text-sm">Descargar excel</span>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Título de la hipótesis
                  </label>
                  <input 
                    type="text"
                    placeholder="Título de la hipótesis"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Ejemplo: Oportunidad en bonos corporativos mexicanos AAA
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción detallada
                  </label>
                  <textarea 
                    placeholder="Describe la hipótesis, drivers, riesgos, y retorno esperado..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Asset class
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500">
                      <option>Selecciona una opción</option>
                      <option>Renta Fija</option>
                      <option>Renta Variable</option>
                      <option>Alternativos</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Retorno esperado
                    </label>
                    <input 
                      type="text"
                      placeholder="Retorno esperado"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Horizonte
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500">
                      <option>Selecciona una opción</option>
                      <option>Corto plazo</option>
                      <option>Mediano plazo</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <span className="text-sm">Guardar cambios</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-900">Historial de hipótesis</h3>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Buscar por emisor, tipo o rating"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Download className="w-4 h-4" />
                  <span className="text-sm">Descargar excel</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Fecha</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Hipótesis</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Asset class</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Retorno esperado</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Retorno real</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Estatus</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Analista</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {hypotheses.map((hyp, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">{hyp.date}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{hyp.hypothesis}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{hyp.assetClass}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{hyp.expectedReturn}</td>
                      <td className="px-4 py-4 text-sm">
                        {hyp.actualReturn === '-' ? (
                          <span className="text-gray-400">-</span>
                        ) : (
                          <span className={`flex items-center gap-1 ${
                            hyp.actualReturn.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {hyp.actualReturn}
                            {hyp.actualReturn.startsWith('+') ? (
                              <TrendingUp className="w-3 h-3" />
                            ) : hyp.actualReturn.startsWith('-') && hyp.actualReturn !== '-' ? (
                              <TrendingDown className="w-3 h-3" />
                            ) : null}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBadge(hyp.status)}`}>
                          {hyp.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">{hyp.analyst}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Pagination />
          </div>
        </>
      );
    }

    return null;
  };

  const renderRecomendadorContent = () => {
    if (activeTab === 'Monitoreo y portafolio') {
      const getNotificationColor = (color) => {
        const colors = {
          cyan: 'bg-cyan-500',
          green: 'bg-green-500',
          orange: 'bg-orange-500',
          red: 'bg-red-500'
        };
        return colors[color] || 'bg-gray-500';
      };

      return (
        <>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Valor en riesgo</span>
                <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  En vivo
                </span>
              </div>
              <div className="text-3xl font-semibold text-gray-900 mb-2">
                $312.5M
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-gray-500">vs ayer</span>
                <span className="text-green-600">+8.3%</span>
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Tracking error</span>
                <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  En vivo
                </span>
              </div>
              <div className="text-3xl font-semibold text-gray-900 mb-2">
                0.92%
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-gray-500">vs semana pasada</span>
                <span className="text-red-600">-0.05%</span>
                <TrendingDown className="w-4 h-4 text-red-600" />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Sharpe ratio</span>
                <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  En vivo
                </span>
              </div>
              <div className="text-3xl font-semibold text-gray-900 mb-2">
                1.34
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-gray-500">vs Q4 2024</span>
                <span className="text-green-600">+0.12%</span>
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-600">Límites consumidos</span>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  En vivo
                </span>
              </div>
              <div className="text-3xl font-semibold text-gray-900 mb-2">
                18
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-orange-600">2 cerca del límite real</span>
                <AlertCircle className="w-4 h-4 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Notificaciones</h3>
              <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                En vivo
              </span>
            </div>

            <div className="space-y-4">
              {notifications.map((notif, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className={`w-2 h-2 ${getNotificationColor(notif.color)} rounded-full mt-2 flex-shrink-0`}></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">{notif.title}</h4>
                    <p className="text-sm text-gray-600">{notif.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">
                      {notif.buttons[0]}
                    </button>
                    <button className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">
                      {notif.buttons[1]}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Matriz de riesgo-retorno por Siefore</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Siefore</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">R</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">σ</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Rendimiento YTD</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">AUM</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {sieforeMatrix.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-sm text-gray-900">{row.siefore}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{row.r}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{row.sigma}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{row.rendimiento}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{row.aum}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Performance por Asset Class (últimos 30 días)</h3>
                <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-700 outline-none">
                  <option>Período: YTD</option>
                  <option>Período: 1M</option>
                  <option>Período: 3M</option>
                  <option>Período: 6M</option>
                </select>
              </div>
              
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={assetClassPerformance}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 11 }} angle={0} textAnchor="middle" />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#5EEAD4" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      );
    }

    return null;
  };

  const renderAsistenteContent = () => {
    const suggestedPrompts = [
      "Muéstrame el performance del portafolio del último mes",
      "Simula un escenario de stress test con tasas de interés +100 bps",
      "¿Cuáles son las recomendaciones de inversión del sistema para hoy?",
      "Genera un reporte de análisis de riesgo-retorno del portafolio"
    ];

    const handlePromptClick = (prompt) => {
      setShowAsistenteConversation(true);
      setAsistenteMessages([
        {
          type: 'user',
          text: 'cual es la exposición actual de la siefore básica 60 en renta variable y como estamos respecto a los límites regulatorios?',
          time: '10:25 AM'
        },
        {
          type: 'assistant',
          text: 'Analizando la exposición actual de la Siefore Básica 60 en renta variable:',
          time: 'Hace 1 minuto',
          data: {
            metrics: [
              { label: 'Renta variable nacional', value: '18.5%', limit: 'Límite: 20%', consumed: 'Consumido: 92.5%' },
              { label: 'Renta variable Interna...', value: '42.3%', limit: 'Límite: 20%', consumed: 'Consumido: 92.5%' },
              { label: 'Renta total variable', value: '$60.8%', limit: 'Límite: 20%', consumed: 'Consumido: 92.5%' }
            ],
            alert: 'La exposición en renta variable internacional está al 94% del límite regulatorio CONSAR. Recomiendo considerar un rebalanceo preventivo.',
            table: [
              { componente: 'SPY US Equity', valor: '$1,876.4M', portafolio: '12.3%', mtd: '+2.8%', trend: 'up' },
              { componente: 'EEM Emerging', valor: '$1,234.5M', portafolio: '8.1%', mtd: '+1.5%', trend: 'up' },
              { componente: 'NAFTRAC MX', valor: '$2,456.7M', portafolio: '16.1%', mtd: '+0.3%', trend: 'down' }
            ],
            followUp: '¿Te gustaría que ejecute una simulación de rebalanceo o prefieres ver opciones de reducción de exposición?',
            actions: ['Simular rebalanceo', 'Ver opciones de reducción', 'Análisis detallado', 'Generar reporte']
          }
        }
      ]);
    };

    if (!showAsistenteConversation) {
      // Vista Inicio
      return (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <div className="w-full max-w-3xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-semibold text-gray-900 mb-3">Descubre SurAi</h2>
              <p className="text-lg text-gray-500">Tu interfaz conversacional, sin pasos complicados.</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 flex items-center gap-3">
              <Paperclip className="w-5 h-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Escribe lo que necesites..."
                className="flex-1 text-gray-600 outline-none"
              />
              <Mic className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>

            <div className="space-y-3 mb-8">
              {suggestedPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePromptClick(prompt)}
                  className="w-full bg-white border border-gray-200 rounded-lg p-4 text-left hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-between group"
                >
                  <span className="text-gray-600">{prompt}</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>

            <p className="text-center text-sm text-gray-400">
              SurAi puede cometer errores. Por favor valida las respuestas.
            </p>
          </div>
        </div>
      );
    }

    // Vista Conversación
    return (
      <div className="flex flex-col h-[calc(100vh-220px)]">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">SurAi 1.0</span>
            <span className="text-xs text-gray-400">17 feb</span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowAsistenteConversation(false)}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <Eye className="w-4 h-4" />
              <span>Historial</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto mb-6 space-y-6">
          {asistenteMessages.map((message, idx) => (
            <div key={idx}>
              {message.type === 'user' ? (
                <div className="flex justify-end mb-2">
                  <div className="max-w-2xl">
                    <div className="flex items-center justify-end gap-2 mb-1">
                      <span className="text-xs text-gray-500">{message.time}</span>
                      <span className="text-sm font-medium text-gray-700">Usted</span>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <p className="text-gray-800">{message.text}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="max-w-4xl">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-700">SurAi</span>
                  </div>
                  
                  <div className="bg-teal-50 rounded-lg p-4 mb-4">
                    <p className="text-gray-800">{message.text}</p>
                  </div>

                  {message.data && (
                    <>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {message.data.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="bg-white border border-gray-200 rounded-lg p-4">
                            <p className="text-xs text-gray-600 mb-2">{metric.label}</p>
                            <p className="text-3xl font-semibold text-gray-900 mb-2">{metric.value}</p>
                            <p className="text-xs text-gray-500">{metric.limit}</p>
                            <p className="text-xs text-gray-500">{metric.consumed}</p>
                          </div>
                        ))}
                      </div>

                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-amber-900">Alerta.</span>
                          <span className="text-amber-800"> {message.data.alert}</span>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                        <h4 className="font-semibold text-gray-900 mb-4">Renta variable Siefore básica 60</h4>
                        <table className="w-full">
                          <thead className="border-b border-gray-200">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Componente</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Valor Mercado</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">% Portafolio</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">MTD</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {message.data.table.map((row, rIdx) => (
                              <tr key={rIdx}>
                                <td className="px-4 py-4 text-sm text-gray-900">{row.componente}</td>
                                <td className="px-4 py-4 text-sm text-gray-900">{row.valor}</td>
                                <td className="px-4 py-4 text-sm text-gray-900">{row.portafolio}</td>
                                <td className="px-4 py-4 text-sm">
                                  <span className={`flex items-center gap-1 ${row.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                    {row.mtd}
                                    {row.trend === 'up' ? (
                                      <TrendingUp className="w-3 h-3" />
                                    ) : (
                                      <TrendingDown className="w-3 h-3" />
                                    )}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-teal-50 rounded-lg p-4 mb-4">
                        <p className="text-gray-800">{message.data.followUp}</p>
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500">{message.time}</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {message.data.actions.map((action, aIdx) => (
                          <button
                            key={aIdx}
                            className="px-4 py-2 text-sm bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                          >
                            {action}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center gap-3">
            <Paperclip className="w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Escribe lo que necesites..."
              className="flex-1 text-gray-600 outline-none"
            />
            <Mic className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>
        </div>
      </div>
    );
  };

  const renderRegulacionContent = () => {
    switch (activeTab) {
      case 'Métricas generales':
        return (
          <div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-green-800">
                <strong>Estado general.</strong> Todas las Siefores en cumplimiento regulatorio. Última actualización: Hoy 09:15 hrs.
              </span>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Estatuscumplimiento</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="text-lg font-semibold text-gray-900">En cumplimiento</div>
                </div>
                <div className="text-sm text-gray-500">
                  Siefores cumpliendo: <span className="font-medium">5 de 5</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Alertas activas</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">3</div>
                <div className="text-sm text-gray-500">
                  Alertas amarillas: <span className="text-yellow-600 font-medium">3 amarillas</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Reportes pendientes</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">2</div>
                <div className="text-sm text-gray-500">
                  Próximo vencimiento: <span className="font-medium">11/oct/2025</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">última validación</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">09:15 hrs</div>
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-gray-500">Sincronización Aladdín:</span>
                  <span className="text-green-600 font-medium">Activa</span>
                </div>
              </div>
            </div>

            <ChartCard title="Exposición por contraparte">
              <div className="flex items-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                  <span className="text-gray-700">Límites en verde</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <span className="text-gray-700">Alertas amarillas</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={regulacionExposicionContraparte}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 11 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#5EEAD4" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Consumo de límites críticos</h3>
                <div className="space-y-6">
                  {regulacionLimitesCriticos.map((limite, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{limite.nombre}</span>
                        <span className="text-sm font-semibold text-gray-900">{limite.porcentaje}% Consumido</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div 
                          className="h-3 rounded-full transition-all" 
                          style={{ width: `${limite.porcentaje}%`, backgroundColor: limite.color }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Alertas Recientes</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Siefore</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Tipo</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Severidad</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {regulacionAlertasRecientes.map((alerta, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-4 py-4 text-sm text-gray-900">{alerta.siefore}</td>
                          <td className="px-4 py-4 text-sm text-gray-900">{alerta.tipo}</td>
                          <td className="px-4 py-4">
                            <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                              {alerta.severidad}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Límites por activo':
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Siefore:</span>
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>SB Inicial</option>
                  <option>SB 0-36</option>
                  <option>SB 37-45</option>
                  <option>SB 46-59</option>
                  <option>SB 60+</option>
                </select>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4" />
                <span className="text-sm">Descargar excel</span>
              </button>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <span className="text-sm text-yellow-800">
                <strong>Alerta.</strong> Renta variable extranjera en SB 0-36 AL 87% del límite permitido.
              </span>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Renta variable</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">$89.3B</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Nacional</span>
                    <div className="flex items-center gap-2">
                      <span className="text-red-600">80%</span>
                      <span className="text-gray-500">Consumidos</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-red-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Extranjera</span>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-600">50%</span>
                      <span className="text-gray-500">Consumidos</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Renta fija</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">$142.5B</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Gubernamental</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">45%</span>
                      <span className="text-gray-500">Consumidos</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Corporativa</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">30%</span>
                      <span className="text-gray-500">Consumidos</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Alternativos</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">$45.2B</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Capital privado</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">45%</span>
                      <span className="text-gray-500">Consumidos</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Infraestructura</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">30%</span>
                      <span className="text-gray-500">Consumidos</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Derivados</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">$23.8B</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Límite nocional</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">45%</span>
                      <span className="text-gray-500">Consumidos</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Cobertura</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">5%</span>
                      <span className="text-gray-500">Consumidos</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <DataTable 
              title="Detalle de límites por activo SB 0-36"
              columns={['Tipo de activo', 'Límite CONSAR', 'Exposición actual', '% Consumido', 'Margen disponible', 'Estatus']}
              data={regulacionLimitesActivoDetalle}
            />
          </div>
        );

      case 'Concentración':
        return (
          <div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <span className="text-sm text-yellow-800">
                <strong>Concentración elevada.</strong> Grupo financiero BBVA al 82% del límite máximo permitido.
              </span>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Por emisor individual</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">8.2%</div>
                <div className="text-sm text-gray-500 mb-1">Máxima concentración</div>
                <div className="text-sm text-gray-700">
                  Gobierno federal<br />
                  <span className="text-gray-500">Límite: 10% (activo neto)</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Por grupo financiero</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">8.7%</div>
                <div className="text-sm text-gray-500 mb-1">Máxima concentración</div>
                <div className="text-sm text-gray-700">
                  Grupo BBVA<br />
                  <span className="text-gray-500">Límite: 10% (activo neto)</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Por contraparte</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">3.2%</div>
                <div className="text-sm text-gray-500 mb-1">Máxima concentración</div>
                <div className="text-sm text-gray-700">
                  HSBC México<br />
                  <span className="text-gray-500">Límite: 10% (derivados)</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Por sector</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">28%</div>
                <div className="text-sm text-gray-500 mb-1">Máxima concentración</div>
                <div className="text-sm text-gray-700">
                  Tecnología<br />
                  <span className="text-gray-500">Límite: 10% (recomendados)</span>
                </div>
              </div>
            </div>

            <ChartCard title="Análisis de sensibilidad FX">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={regulacionSensibilidadFX} layout="vertical">
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <YAxis dataKey="name" type="category" width={120} axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#5EEAD4" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <DataTable 
              title="Concentración por emisor-detalle"
              columns={['Emisor', 'Tipo', 'Grupo', 'Valor', '% Activo neto', 'Límite', '% Consumido', 'Estatus']}
              data={regulacionConcentracionDetalle}
            />
          </div>
        );

      case 'Geográficos':
        return (
          <div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <span className="text-sm text-yellow-800">
                <strong>Concentración geográfica.</strong> Exposición a Estados Unidos al 88% del límite máximo en SB 46-59.
              </span>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Inversión extranjera total</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">52%</div>
                <div className="text-sm text-gray-500 mb-2">% del activo neto</div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Límite: 70%</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-600">74%</span>
                    <span className="text-gray-500">Consumidos</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '74%' }}></div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Estados Unidos</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">35.2%</div>
                <div className="text-sm text-gray-500 mb-2">% del activo neto</div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Límite: 40%</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-600">88%</span>
                    <span className="text-gray-500">Consumidos</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Europa</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">12.8%</div>
                <div className="text-sm text-gray-500 mb-2">% del activo neto</div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Límite: 30%</span>
                  <div className="flex items-center gap-1">
                    <span className="text-green-600">43%</span>
                    <span className="text-gray-500">Consumidos</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '43%' }}></div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Asia-Pacífico</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">4.0%</div>
                <div className="text-sm text-gray-500 mb-2">% del activo neto</div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Límite: 15%</span>
                  <div className="flex items-center gap-1">
                    <span className="text-green-600">27%</span>
                    <span className="text-gray-500">Consumidos</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '27%' }}></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <ChartCard title="Distribución geográfica">
                <div className="flex items-center justify-center mb-6">
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie 
                        data={regulacionDistribucionGeo} 
                        cx="50%" 
                        cy="50%" 
                        innerRadius={80} 
                        outerRadius={120} 
                        paddingAngle={2} 
                        dataKey="value"
                        label={renderLabelContent}
                        labelLine={false}
                      >
                        {regulacionDistribucionGeo.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <Legend items={regulacionDistribucionGeo} />
              </ChartCard>

              <ChartCard title="Exposición por moneda">
                <div className="flex items-center justify-center mb-6">
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie 
                        data={regulacionExposicionMoneda} 
                        cx="50%" 
                        cy="50%" 
                        innerRadius={80} 
                        outerRadius={120} 
                        paddingAngle={2} 
                        dataKey="value"
                        label={renderLabelContent}
                        labelLine={false}
                      >
                        {regulacionExposicionMoneda.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <Legend items={regulacionExposicionMoneda} />
              </ChartCard>
            </div>

            <DataTable 
              title="Límites geográficos por país - detalle"
              columns={['País/Región', 'Valor', '% Activo neto', 'Límite CONSAR', '% Consumido', 'Margen', 'Estatus']}
              data={regulacionLimitesGeograficos}
            />
          </div>
        );

      case 'Régimen por Siefore':
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Siefore:</span>
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>SB Inicial</option>
                  <option>SB 0-36</option>
                  <option>SB 37-45</option>
                  <option>SB 46-59</option>
                  <option>SB 60+</option>
                </select>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4" />
                <span className="text-sm">Descargar excel</span>
              </button>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm text-green-800">
                <strong>Estado.</strong> SB Inicial en cumplimiento total con régimen de inversión CONSAR.
              </span>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Activos bajo gestión</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">$52.3B</div>
                <div className="text-sm text-gray-500">SB Inicial</div>
                <div className="text-sm text-gray-700 mt-1">
                  Trabajadores: <span className="font-medium">2.8M</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Rendimiento YTD</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">+8.5%</div>
                <div className="text-sm text-gray-500">Enero - octubre</div>
                <div className="flex items-center gap-1 text-sm mt-1">
                  <span className="text-gray-700">vs benchmark:</span>
                  <span className="text-green-600 flex items-center gap-1">
                    +0.8%
                    <TrendingUp className="w-3 h-3" />
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Volatilidad</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">12.3%</div>
                <div className="text-sm text-gray-500">Desviación estándar</div>
                <div className="text-sm text-gray-700 mt-1">
                  Límite regulatorio: <span className="font-medium">15%</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Cumplimiento</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-500">Límites en verde</div>
                <div className="flex items-center gap-1 text-sm mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-green-600 font-medium">Cumpliendo</span>
                </div>
              </div>
            </div>

            <ChartCard title="Composición SB Inicial vs Límites CONSAR">
              <div className="flex items-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                  <span className="text-gray-700">Posición actual</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-blue-400"></div>
                  <span className="text-gray-700">Límite máximo</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={regulacionComposicionSiefore}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 11 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="actual" fill="#5EEAD4" name="Posición actual" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="limite" fill="#93C5FD" name="Límite máximo" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <DataTable 
              title="Régimen de inversión - SB Inicial"
              columns={['Clase de activo', 'Límite mínimo', 'Límite máximo', 'Posición actual', '% Consumido', 'Estatus']}
              data={regulacionRegimenInversion}
            />
          </div>
        );

      case 'Reportes CONSAR':
        return (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Reportes CONSAR</h3>
            <p className="text-gray-600 text-center max-w-md">
              Esta sección contendrá los reportes regulatorios para CONSAR. Próximamente disponible.
            </p>
          </div>
        );

      case 'Violaciones':
        return (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Violaciones Regulatorias</h3>
            <p className="text-gray-600 text-center max-w-md">
              Esta sección mostrará el historial de violaciones a límites regulatorios. Próximamente disponible.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Plataforma</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Sincronizado Hoy, 15:40 hrs</span>
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-teal-500 rounded-full"></span>
          </div>
          <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Usuario</span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={handleSectionChange}
          centerExpanded={centerExpanded}
          setCenterExpanded={setCenterExpanded}
        />

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">{activeSection}</h2>
            {activeSection === 'Portafolio' && (
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4" />
                <span className="text-sm">Exportar vista</span>
              </button>
            )}
            {activeSection === 'Bitácora de inversiones' && activeTab === 'Registro de inversiones' && (
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                <span className="text-sm">Conciliar inversiones</span>
              </button>
            )}
            {activeSection === 'Bitácora de inversiones' && activeTab === 'Tesis e hipótesis' && (
              <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                <Plus className="w-4 h-4" />
                <span className="text-sm">Crear hipótesis</span>
              </button>
            )}
          </div>

          {/* Tabs */}
          {activeSection !== 'Asistente' && getCurrentTabs().length > 0 && (
            <div className="flex gap-6 border-b border-gray-200 mb-6">
              {getCurrentTabs().map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                    activeTab === tab 
                      ? 'text-gray-900' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Dynamic Content */}
          {activeSection === 'Portafolio' && renderPortfolioContent()}
          {activeSection === 'Bitácora de inversiones' && renderBitacoraContent()}
          {activeSection === 'Recomendador' && renderRecomendadorContent()}
          {activeSection === 'Regulación' && renderRegulacionContent()}
          {activeSection === 'Asistente' && renderAsistenteContent()}
        </main>
      </div>
    </div>
  );
};

// Reusable Components
const Sidebar = ({ activeSection, onSectionChange, centerExpanded, setCenterExpanded }) => (
  <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
    <div className="space-y-1">
      <div className="mb-4">
        <button 
          onClick={() => setCenterExpanded(!centerExpanded)}
          className="flex items-center justify-between w-full text-teal-600 font-medium mb-2 px-3 py-2 hover:bg-teal-50 rounded-lg"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-teal-600 rounded"></div>
            <span className="text-sm">Centro de inteligencia</span>
          </div>
          <ChevronDown className={`w-4 h-4 transition-transform ${centerExpanded ? '' : '-rotate-90'}`} />
        </button>
        
        {centerExpanded && (
          <div className="ml-4 space-y-1">
            <div 
              onClick={() => onSectionChange('Portafolio')}
              className={`px-3 py-2 rounded-lg text-sm cursor-pointer ${
                activeSection === 'Portafolio'
                  ? 'bg-teal-50 text-teal-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Portafolio
            </div>
            <div className="text-gray-600 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm cursor-pointer">
              Notificias
            </div>
            <div className="text-gray-600 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm cursor-pointer">
              Modelos
            </div>
            <div className="text-gray-600 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm cursor-pointer">
              Diligencia
            </div>
            <div 
              onClick={() => onSectionChange('Regulación')}
              className={`px-3 py-2 rounded-lg text-sm cursor-pointer ${
                activeSection === 'Regulación'
                  ? 'bg-teal-50 text-teal-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Regulación
            </div>
            <div className="text-gray-600 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm cursor-pointer">
              Historial
            </div>
          </div>
        )}
      </div>
      
      <div className="pt-4 border-t border-gray-200 space-y-1">
        <div 
          onClick={() => onSectionChange('Bitácora de inversiones')}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer ${
            activeSection === 'Bitácora de inversiones'
              ? 'bg-teal-50 text-teal-700 font-medium'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <div className="w-4 h-4 border-2 border-gray-400 rounded"></div>
          <span>Bitácora de inversiones</span>
        </div>
        <div 
          onClick={() => onSectionChange('Recomendador')}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer ${
            activeSection === 'Recomendador'
              ? 'bg-teal-50 text-teal-700 font-medium'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <div className="w-4 h-4 border-2 border-gray-400 rounded"></div>
          <span>Recomendador</span>
        </div>
        <div 
          onClick={() => onSectionChange('Asistente')}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer ${
            activeSection === 'Asistente'
              ? 'bg-teal-50 text-teal-700 font-medium'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <div className="w-4 h-4 border-2 border-gray-400 rounded"></div>
          <span>Asistente</span>
        </div>
      </div>
    </div>
  </aside>
);

const MetricCard = ({ label, value, change, trend, sublabel, alert }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-gray-600">{label}</span>
      <button className="text-gray-400 hover:text-gray-600">
        <Info className="w-4 h-4" />
      </button>
    </div>
    <div className="text-3xl font-semibold text-gray-900 mb-2">
      {value}
    </div>
    <div className="flex items-center gap-1 text-sm">
      <span className="text-gray-500">{sublabel || 'vs mes anterior'}</span>
      {!alert && (
        <>
          <span className={trend === 'up' ? 'text-green-600' : 'text-red-600'}>
            {change}
          </span>
          {trend === 'up' ? (
            <TrendingUp className="w-4 h-4 text-green-600" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-600" />
          )}
        </>
      )}
      {alert && (
        <span className="flex items-center gap-1 text-red-600">
          {change}
          <AlertCircle className="w-4 h-4" />
        </span>
      )}
    </div>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
    {children}
  </div>
);

const Legend = ({ items }) => (
  <div className="flex items-center justify-center gap-6 flex-wrap">
    {items.map((item, idx) => (
      <div key={idx} className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
        <span className="text-sm text-gray-700">{item.name}</span>
      </div>
    ))}
  </div>
);

const DataTable = ({ title, columns, data }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <Info className="w-4 h-4 text-gray-400" />
      </div>
      <div className="flex items-center gap-3">
        <input 
          type="text" 
          placeholder="Buscar por emisor, tipo o rating" 
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Download className="w-4 h-4" />
          <span className="text-sm">Descargar excel</span>
        </button>
      </div>
    </div>
    
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              {Object.values(row).map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-4 text-sm text-gray-900">
                  {cellIdx === 2 && typeof cell === 'string' && (cell.includes('+') || cell.includes('-') || /^[A-Z]+[+-]?$/.test(cell)) ? (
                    <span className={`px-2 py-1 rounded text-xs font-medium ${cell.startsWith('+') ? 'text-green-700 bg-green-50' : cell.startsWith('-') ? 'text-red-700 bg-red-50' : 'text-gray-700 bg-gray-100'}`}>
                      {cell}
                    </span>
                  ) : cellIdx === 6 && typeof cell === 'string' && (cell.includes('+') || cell.includes('-')) ? (
                    <span className={`flex items-center gap-1 ${cell.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {cell}
                      {cell.startsWith('+') ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    </span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    <Pagination />
  </div>
);

const Pagination = () => (
  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
    <span className="text-sm text-gray-600">5 de 25 clientes</span>
    <div className="flex items-center gap-2">
      <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 text-gray-400">
        &lt;
      </button>
      {[1, 2, 3, 4, 5].map(num => (
        <button
          key={num}
          className={`w-8 h-8 flex items-center justify-center border rounded ${
            num === 1
              ? 'border-teal-500 bg-teal-50 text-teal-600'
              : 'border-gray-300 hover:bg-gray-50 text-gray-700'
          }`}
        >
          {num}
        </button>
      ))}
      <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 text-gray-700">
        &gt;
      </button>
    </div>
  </div>
);

export default PlatformMockup;