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
              <li>Supervisión de obra</li>
              <br />
              <li>Supervisión de instalación</li>
              <br />
              <li>Vista panorámica</li>
              <br />
              <li>Inspección de terrenos</li>
              <br />
              <li>Fotografía cartográfica</li>
              <br />
              <li>Vuelo en fábricas/naves/almacenes</li>
            </div>
          ),
          additional: (
            <div>
              <li>Instalaciones industriales</li>
              <br />
              <li>Fábricas en interior y exterior</li>
              <br />
              <li>Construcciones y desarrollos</li>
              <br />
              <li>Bodegas</li>
              <br />
              <li>Páneles solares</li>
              <br />
              <li>Excavaciones</li>
              <br />
              <li>Terrenos y alrededores</li>
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
              <li>Reels para Instagram/Tiktok</li>
              <br />
              <li>Foto y vídeo de producto</li>
              <br />
              <li>Foto y vídeo de catálogo</li>
              <br />
              <li>Foto y vídeo experiencia de servicio</li>
              <br />
              <li>Reviews y tutoriales</li>
              <br />
              <li>Video respuestas a preguntas frecuentes</li>
              <br />
              <li>Making process de tu producto</li>
            </div>
          ),
          additional: (
            <div>
              <li>Restaurantes y bares</li>
              <br />
              <li>Boutiques</li>
              <br />
              <li>Bazares</li>
              <br />
              <li>Academias</li>
              <br />
              <li>Gimnasios</li>
              <br />
              <li>Hoteles y spas</li>
              <br />
              <li>Casinos</li>
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
              <li>Vídeo institucional</li>
              <br />
              <li> Mensaje directivo</li>
              <br />
              <li>Foto y vídeo conmemorativo</li>
              <br />
              <li>Simulacros</li>
              <br />
              <li>Tour de proceso</li>
              <br />
              <li>Tutoriales y demostraciones</li>
              <br />
              <li>Avances de implementación</li>
              <br />
              <li>Reportes en vídeo</li>
              <br />
              <li>Material de comunicación interna</li>
              <br />
              <li>Video-manual de seguridad</li>
            </div>
          ),
          additional: (
            <div>
              Hemos sido aliados de la comunicación efectiva para:
              <br />
              <br />
              <li>Sector industrial</li>
              <br />
              <li>Universidades y escuelas</li>
              <br />
              <li>Conferencias y ponencias</li>
              <br />
              <li>Expos</li>
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
              <li>Conciertos y live sessions</li>
              <br />
              <li>Inauguraciones y clausuras</li>
              <br />
              <li>Presentaciones de producto</li>
              <br />
              <li>Cocktails</li>
              <br />
              <li>Sex reveal y sociales</li>
              <br />
              <li>Ferias y Bazares</li>
              <br />
              <li>Eventos escolares</li>
              <br />
              <li>Eventos empresariales</li>
              <br />
              <li>Partidos y maratones</li>
              <br />
              <li>Torneos y dinámicas</li>
              <br />
              <li>Premiaciones y ceremonias</li>
              <br />
              <li>Marchas y desfiles</li>
              <br />
              <li>Pirotecnia y shows</li>
            </div>
          ),
          additional: (
            <div>
              <li>Estadios</li>
              <br />
              <li>Escuelas</li>
              <br />
              <li>Ligas deportivas</li>
              <br />
              <li>Salones de fiestas</li>
              <br />
              <li>Hoteles y Expos</li>
              <br />
              <li>Planners</li>
              <br />
              <li>Agencias de marketing</li>
              <br />
              <li>Centros comerciales</li>
              <br />
              <li>Espacios públicos</li>
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
