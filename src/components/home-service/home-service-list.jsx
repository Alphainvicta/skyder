import React from 'react'
import Hservice from './home-service.jsx'
import iservice1 from '../../images/Levantamiento1.jpg';
import iservice2 from '../../images/creacion1.jpg';
import iservice3 from '../../images/empresas1.jpg';
import iservice4 from '../../images/Eventos1.jpg';

class Homelist extends React.Component {
    constructor() {
        super();
        this.state = {
            services : [{
                title : 'Levantamiento con Drone',
                description : '¿Buscas un vistazo aéreo de tu proyecto? Ofrecemos operaciones con Drone a tu medida.',
                image : iservice1,
<<<<<<< HEAD
                link : '/services/servicio_drone',
                id : 0
=======
                link : '/services/brand_&_digital',
                id : 'home-service-1'
>>>>>>> c41d3159382565af5d00760de1adefa45e77bae6
            },
            {
                title : 'Contenido para redes sociales',
                description : 'Paquetes diseñados para ayudarte a encontrar tu identidad audiovisual y conectar con tus clientes.',
                image : iservice2,
<<<<<<< HEAD
                link : '/services/contenido_redes',
                id : 1
=======
                link : '/services/graphic_design',
                id : 'home-service-2'
>>>>>>> c41d3159382565af5d00760de1adefa45e77bae6
            },
            {
                title : 'Vídeo para Empresas',
                description : 'Soluciones de vídeo profesional a la medida, que capturan el mensaje de tu organización.',
                image : iservice3,
<<<<<<< HEAD
                link : '/services/video_empresas',
                id : 2
=======
                link : '/services/advertising',
                id : 'home-service-3'
>>>>>>> c41d3159382565af5d00760de1adefa45e77bae6
            },
            {
                title : 'Cobertura de eventos',
                description : 'La mejor experiencia de tu evento en foto y vídeo. Comparte tus memorias con un mayor público potencial.',
                image : iservice4,
<<<<<<< HEAD
                link : '/services/cobertura_eventos',
                id : 3
=======
                link : '/services/visual_identity',
                id : 'home-service-4'
>>>>>>> c41d3159382565af5d00760de1adefa45e77bae6
            }]
        }
    }
    render() {
        return (    
            this.state.services.map(({ id, ...servicesprops }) => (
                    <Hservice key={ id } { ...servicesprops } />
            ))
        )
    }
}

export default Homelist;