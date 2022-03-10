import React from 'react'
import Service from './service.jsx'
import iservice1 from '../../images/Levantamiento2.jpg';
import iservice2 from '../../images/creacion2.jpg';
import iservice3 from '../../images/empresas2.jpg';
import iservice4 from '../../images/Eventos2.jpg';


class Servicelist extends React.Component{
    constructor() {
        super();
        this.state = {
            services : [{
                title : 'Levantamiento con Drone',
                description : 'Supervisa, documenta y obtén un panorama aéreo de tu proyecto',
                image : iservice1,
                details: 'Responde a las necesidades de supervisión de toda clase de obras y proyectos. Somos especialistas en maniobras difíciles y espacios reducidos. El servicio se cobra por hora, media jornada y jornada completa. El material de foto y vídeo es ilimitado durante el tiempo de servicio..',
                cost: 'Aplicaciones: Supervisión de obra\nSupervisión de instalación\nVista panorámica\nInspección de terrenos\nFotografía cartográfica\nVuelo en interiores difíciles.',
                additional: 'Tenemos experiencia previa ofreciendo cobertura para\nInstalaciones industriales\nFábricas en interior y exterior\nConstrucciones y desarrollos\nBodegas\nPaneles solares\nExcavaciones\nTerrenos y alrededores',
                link : '/services/servicio_drone',
                id : 0
            },
            {
                title : 'Contenido para redes sociales',
                description : 'Plasmamos tu identidad en redes',
                image : iservice2,
                details: 'Somos tus aliados para cubrir las necesidades de comunicación audiovisual de tu empresa. Llevamos un proceso de planeación-ejeución-edición y entrega para crear material que sustentado en una estrategia de comunicación. Contamos con paquetes de producción única o por visita, así como paquetes de producción semanal, mensual y a largo plazo.',
                cost: 'Reels para Instagram/Tiktok\nFoto y vídeo de producto\nFoto y vídeo de catálogo\nFoto y vídeo experiencia de servicio\nReviews y tutoriales\nVideo respuestas a preguntas frecuentes\nMaking process de tu producto',
                additional: 'Sabemos que si no está in internet, no existe(s). Tenemos experiencia diseñando contenido para empresas de productos y de servicios. Si no ves tu giro aquí ¡No te preocupes! Nuestra intención no es hacer anuncios sino historias que conectan con personas; estamos seguros que tu negocio tiene mucho que contar.\nRestaurantes y bares\nBoutiques\nBazares\nAcademias\nGimnasios\nHoteles y spas\nCasinos.',
                link : '/services/contenido_redes',
                id : 1
            },
            {
                title : 'Video para empresas',
                description : 'Transmitimos el valor de tu mensaje empresarial',
                image : iservice3,
                details: 'Este segmento de vídeo corporativo está pensado para que las empresas puedan compartir mensajes con un tono profesional y de solidez. Las producciones de este tipo incluyen edición avanzada y son tabuladas por jornada o según el proyecto. Se trabaja bajo un proceso de planeación,ejecución y entrega, además de 2 rondas de revisiones. ',
                cost: 'Vídeo intitucional\nMensaje directivo\nFoto y vídeo conmemorativo\nSimulacros\nTour de proceso\nTutoriales y demostraciones\nAvances de implementación\nReportes en vídeo\nMaterial de comunicación interna\nVideo Manual de seguridad.',
                additional: 'Hemos sido aliados de la comunicación efectiva para empresas del tipo\nSector industrial\nUniversidades y escuelas\nConferencias y ponencias\nExpos.',
                link : '/services/video_empresas',
                id : 2
            },
            {
                title : 'Cobertura de eventos',
                description : 'Capturamos la mejor experiencia de tu evento.',
                image : iservice4,
                details: 'Sabemos capturar los momentos claves. Sin excepción. inmortaliza tu evente y dale acceso a tu públilco a un resumen dinámico y con una narrativa precisa de lo que pasó en tu evento. ¡No querrán perdérselo de nuevo! Nuestro equipo está preparado con foto y vídeo para todo tipo de ocasiones. Los tabuladores son por hora, media jornada y jornada completa e incuyen planeación de los momentos claves y edición avanzada. Aparta tu fecha y deja tu evento en manos de los expertos.',
                cost: 'Conciertos y live sessions\nInauguraciones y clausuras\nPresentaciones de producto\nCocktails\nSex reveal y sociales\nFerias y Bazares\nEventos escolares\nEventos empresariales\nPartidos y maratones\nTorneos y dinámicas\nPremiaciones y ceremonias\nMarchas y desfiles\nPirotecnia y shows',
                additional: 'No tenemos límites cuando se trata del tipo de evento a cubrir, pero algunos ejemplos de empresas satisfechas son:\nEstadios\nEscuelas\nLigas deportivas\nSalones de fiestas\nHoteles y Expos\nPlanners\nAgencias de marketing\nCentros comerciales\nEspacios públicos',
                link : '/services/cobertura_eventos',
                id : 3
            }]
        }
    }

    render() {
        const pathname = this.props.path.pathname
        const service = this.state.services.find(service => service.link === pathname)
        if (service) {
            return <Service {...service} />
        }
        else{
            return null
        }
      }
}

export default Servicelist;