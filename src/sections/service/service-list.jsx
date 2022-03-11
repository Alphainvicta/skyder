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
                details: 'Responde a las necesidades de supervisión de toda clase de obras y proyectos. Somos especialistas en maniobras difíciles y espacios reducidos. El servicio se cobra por hora, media jornada y jornada completa. El material de foto y vídeo es ilimitado durante el tiempo de servicio.',
                cost: <div>Supervisión de obra<br/>Supervisión de instalación<br/>Vista panorámica<br/>Inspección de terrenos<br/>Fotografía cartográfica<br/>Vuelo en interiores difíciles.</div>,
                additional: <div>Tenemos experiencia previa ofreciendo cobertura para:<br/>Instalaciones industriales<br/>Fábricas en interior y exterior<br/>Construcciones y desarrollos<br/>Bodegas<br/>Paneles solares<br/>Excavaciones<br/>Terrenos y alrededores</div>,
                link : '/services/servicio_drone',
                id : 0
            },
            {
                title : 'Contenido para redes sociales',
                description : 'Plasmamos tu identidad en redes',
                image : iservice2,
                details: 'Somos tus aliados para cubrir las necesidades de comunicación audiovisual de tu empresa. Llevamos un proceso de planeación, ejeución y entrega para crear material sustentado en una estrategia de comunicación. Contamos con paquetes de producción por visita, así como paquetes de producción semanal, mensual y a largo plazo.',
                cost: <div>Reels para Instagram/Tiktok<br/>Foto y vídeo de producto<br/>Foto y vídeo de catálogo<br/>Foto y vídeo experiencia de servicio<br/>Reviews y tutoriales<br/>Video respuestas a preguntas frecuentes<br/>Making process de tu producto</div>,
                additional: <div>Sabemos que si no está en internet, no existe(s). Tenemos experiencia diseñando contenido para empresas de productos y de servicios. Si no ves tu giro aquí ¡No te preocupes! Nuestra intención no es hacer anuncios sino historias que conectan con personas; estamos seguros que tu negocio tiene mucho que contar.<br/>Restaurantes y bares<br/>Boutiques<br/>Bazares<br/>Academias<br/>Gimnasios<br/>Hoteles y spas<br/>Casinos.</div>,
                link : '/services/contenido_redes',
                id : 1
            },
            {
                title : 'Vídeo para empresas',
                description : 'Transmitimos el valor de tu mensaje empresarial',
                image : iservice3,
                details: 'Este segmento de vídeo corporativo está pensado para que las empresas puedan compartir su mensaje con un tono profesional y de solidez. Las producciones de este tipo incluyen edición avanzada y son tabuladas por jornada o según el proyecto. Se trabaja bajo un proceso de planeación, ejecución y entrega, además de 2 rondas de revisiones. ',
                cost: <div>Vídeo intitucional<br/>Mensaje directivo<br/>Foto y vídeo conmemorativo<br/>Simulacros<br/>Tour de proceso<br/>Tutoriales y demostraciones<br/>Avances de implementación<br/>Reportes en vídeo<br/>Material de comunicación interna<br/>Video-manual de seguridad</div>,
                additional: <div>Hemos sido aliados de la comunicación efectiva para empresas del tipo:<br/>Sector industrial<br/>Universidades y escuelas<br/>Conferencias y ponencias<br/>Expos</div>,
                link : '/services/video_empresas',
                id : 2
            },
            {
                title : 'Cobertura de eventos',
                description : 'Capturamos la mejor experiencia de tu evento',
                image : iservice4,
                details: 'Sabemos capturar los momentos claves. Sin excepción. Inmortaliza tu evento y dale acceso a tu públilco a un resumen dinámico y con una narrativa precisa de lo que pasó en tu evento. ¡No querrán perdérselo de nuevo! Nuestro equipo está preparado con foto y vídeo para todo tipo de ocasiones. Los tabuladores son por hora, media jornada y jornada completa e incuyen planeación de los momentos claves y edición avanzada. Aparta tu fecha y deja tu evento en manos de los expertos.',
                cost: <div>Conciertos y live sessions<br/>Inauguraciones y clausuras<br/>Presentaciones de producto<br/>Cocktails<br/>Sex reveal y sociales<br/>Ferias y Bazares<br/>Eventos escolares<br/>Eventos empresariales<br/>Partidos y maratones<br/>Torneos y dinámicas<br/>Premiaciones y ceremonias<br/>Marchas y desfiles<br/>Pirotecnia y shows</div>,
                additional: <div>No tenemos límites cuando se trata del tipo de evento a cubrir, pero algunos ejemplos de empresas satisfechas son:<br/>Estadios<br/>Escuelas<br/>Ligas deportivas<br/>Salones de fiestas<br/>Hoteles y Expos<br/>Planners<br/>Agencias de marketing<br/>Centros comerciales<br/>Espacios públicos</div>,
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