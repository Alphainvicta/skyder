import React from "react";
import Service from "./service.jsx";
import iservice1 from "../../images/Levantamiento2.jpg";
import iservice2 from "../../images/creacion2.jpg";
import iservice3 from "../../images/empresas2.jpg";
import iservice4 from "../../images/Eventos2.jpg";

class Servicelist extends React.Component {
  constructor() {
    super();
    this.state = {
      services: [
        {
          title: "Levantamiento con Drone",
          description: "Supervisa y documenta tu proyecto",
          image: iservice1,
          details: (
            <div>
              Solución integral de supervisión panorámica para tus proyectos.
              <br />
              <br />
              Somos especialistas en maniobras difíciles y espacios reducidos.
              <br />
              <br />
              El material de foto y vídeo es ilimitado durante el tiempo de
              servicio.
            </div>
          ),
          cost: (
            <div>
              Supervisión de obra
              <br />
              Supervisión de instalación
              <br />
              Vista panorámica
              <br />
              Inspección de terrenos
              <br />
              Fotografía cartográfica
              <br />
              Vuelo en fábricas/naves/almacenes.
            </div>
          ),
          additional: (
            <div>
              Instalaciones industriales
              <br />
              Fábricas en interior y exterior
              <br />
              Construcciones y desarrollos
              <br />
              Bodegas
              <br />
              Páneles solares
              <br />
              Excavaciones
              <br />
              Terrenos y alrededores
            </div>
          ),
          link: "/services/servicio_drone",
          id: 0,
        },
        {
          title: "Contenido para redes sociales",
          description: "Plasmamos tu identidad en redes",
          image: iservice2,
          details: (
            <div>
              Somos tus aliados para encontrar la comunicación audiovisual
              adecuada para tu negocio.
              <br />
              <br />
              Llevamos un proceso de planeación, ejecución y entrega apegado a
              una estrategia de comunicación.
              <br />
              <br />
              Contamos con paquetes de producción por visita, así como paquetes
              de producción semanal, mensual y a largo plazo.
            </div>
          ),
          cost: (
            <div>
              Reels para Instagram/Tiktok
              <br />
              Foto y vídeo de producto
              <br />
              Foto y vídeo de catálogo
              <br />
              Foto y vídeo experiencia de servicio
              <br />
              Reviews y tutoriales
              <br />
              Video respuestas a preguntas frecuentes
              <br />
              Making process de tu producto
            </div>
          ),
          additional: (
            <div>
              Restaurantes y bares
              <br />
              Boutiques
              <br />
              Bazares
              <br />
              Academias
              <br />
              Gimnasios
              <br />
              Hoteles y spas
              <br />
              Casinos
              <br />
              <br />
              Sabemos que si no está en internet, no existe(s).
              <br />
              <br />
              Nuestra intención no es hacer anuncios sino historias que conectan
              con personas; estamos seguros que tu negocio tiene mucho que
              contar.
            </div>
          ),
          link: "/services/contenido_redes",
          id: 1,
        },
        {
          title: "Vídeo para empresas",
          description: "Transmitimos el valor de tu misión/visión",
          image: iservice3,
          details: (
            <div>
              Comparte tu mensaje con un tono profesional y de solidez.
              <br />
              <br />
              Incluye edición de calidad comercial, diseño de sonido y guión.
              <br />
              <br />
              Se trabaja bajo un proceso de planeación, ejecución y entrega,
              además de 2 rondas de revisiones.
            </div>
          ),
          cost: (
            <div>
              Vídeo institucional
              <br />
              Mensaje directivo
              <br />
              Foto y vídeo conmemorativo
              <br />
              Simulacros
              <br />
              Tour de proceso
              <br />
              Tutoriales y demostraciones
              <br />
              Avances de implementación
              <br />
              Reportes en vídeo
              <br />
              Material de comunicación interna
              <br />
              Video-manual de seguridad
            </div>
          ),
          additional: (
            <div>
              Hemos sido aliados de la comunicación efectiva para:
              <br />
              <br />
              Sector industrial
              <br />
              Universidades y escuelas
              <br />
              Conferencias y ponencias
              <br />
              Expos
            </div>
          ),
          link: "/services/video_empresas",
          id: 2,
        },
        {
          title: "Cobertura de eventos",
          description: "Capturamos la mejor experiencia de tu evento",
          image: iservice4,
          details: (
            <div>
              Inmortaliza tu evento y dale acceso a tu público a un resumen
              dinámico y preciso de lo que se vivió en tu evento.
              <br />
              <br />
              ¡No querrán perdérselo de nuevo!
              <br />
              <br />
              Contamos con foto y vídeo para todo tipo de ocasiones.
              <br />
              <br />
              Los tabuladores son por hora, media jornada y jornada completa e
              incuyen planeación de los momentos claves
              <br />
              <br />
              Aparta tu fecha y deja tu evento en manos de los expertos.
            </div>
          ),
          cost: (
            <div>
              Conciertos y live sessions
              <br />
              Inauguraciones y clausuras
              <br />
              Presentaciones de producto
              <br />
              Cocktails
              <br />
              Sex reveal y sociales
              <br />
              Ferias y Bazares
              <br />
              Eventos escolares
              <br />
              Eventos empresariales
              <br />
              Partidos y maratones
              <br />
              Torneos y dinámicas
              <br />
              Premiaciones y ceremonias
              <br />
              Marchas y desfiles
              <br />
              Pirotecnia y shows
            </div>
          ),
          additional: (
            <div>
              Estadios
              <br />
              Escuelas
              <br />
              Ligas deportivas
              <br />
              Salones de fiestas
              <br />
              Hoteles y Expos
              <br />
              Planners
              <br />
              Agencias de marketing
              <br />
              Centros comerciales
              <br />
              Espacios públicos
            </div>
          ),
          link: "/services/cobertura_eventos",
          id: 3,
        },
      ],
    };
  }

  render() {
    const pathname = this.props.path;
    const service = this.state.services.find(
      (service) => service.link === pathname
    );
    if (service) {
      return <Service {...service} />;
    } else {
      return null;
    }
  }
}

export default Servicelist;
