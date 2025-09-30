
import React from 'react';
import type { ContactMethod, Mechanism } from './types';

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
  </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);


export const CONTACT_METHODS: ContactMethod[] = [
  {
    title: 'Presencial',
    icon: <LocationIcon />,
    details: [
      { label: 'Dirección', value: 'Calle 10 No. 7-06 parque principal' },
      { value: 'Candelaria – Valle del Cauca, Colombia' },
    ],
  },
  {
    title: 'Telefónico',
    icon: <PhoneIcon />,
    details: [
      { label: 'Fijo', value: '+(57) 6022600968', href: 'tel:+576022600968' },
      { label: 'Celular', value: '+(57) 3105472471', href: 'tel:+573105472471' },
      { value: 'Lunes a viernes de 8:00 a.m. a 4:00 p.m.' },
      { label: 'Línea Anticorrupción', value: '01-800-0912667' },
    ],
  },
  {
    title: 'Virtual',
    icon: <GlobeIcon />,
    details: [
      { label: 'Sitio Web', value: 'iensecan.edu.co', href: 'https://iensecan.edu.co/index.php/inicio/' },
      { label: 'Peticiones, quejas y reclamos', value: 'Formulario en línea', href: 'https://iensecan.edu.co/?page_id=24942' },
    ],
  },
  {
    title: 'Redes Sociales',
    icon: <UsersIcon />,
    details: [
        { label: 'Facebook', value: 'IENSECAN', href: 'https://www.facebook.com/IENSECAN/' },
        { label: 'X (Twitter)', value: '@IENSECAN', href: 'https://x.com/IENSECAN' },
    ]
  },
  {
    title: 'Correo Electrónico',
    icon: <MailIcon />,
    details: [
        { label: 'Correo Institucional', value: 'rectoria@iensecan.edu.co', href: 'mailto:rectoria@iensecan.edu.co' },
        { label: 'Notificaciones Judiciales', value: 'rectoria@iensecan.edu.co', href: 'mailto:rectoria@iensecan.edu.co' },
    ]
  },
  {
      title: 'Cuentas de Interacción',
      icon: <LocationIcon />,
      details: [
          { label: 'Peticiones, quejas, reclamos, denuncias y sugerencias', value: 'Ver formulario', href: 'https://iensecan.edu.co/?page_id=24942'}
      ]
  }
];

export const MINTIC_MECHANISMS: Mechanism[] = [
  {
    title: 'Audiencias públicas',
    description: 'Foros abiertos realizados de cara a la ciudadanía, en los que se informa y se responden preguntas sobre el funcionamiento de la entidad.',
  },
  {
    title: 'Audiencia pública de rendición de cuentas',
    description: 'Espacios para la rendición de cuentas, de encuentro y reflexión final sobre los resultados de la gestión de un periodo.',
  },
  {
    title: 'Rendición de cuentas',
    description: 'Deber que tienen las autoridades de la administración pública de responder públicamente, ante las exigencias que haga la ciudadanía, por el manejo de los recursos, las decisiones y la gestión realizada en el ejercicio del poder que les ha sido delegado.',
  },
];

export const OTHER_MECHANISMS: Mechanism[] = [
    {
        title: 'Veeduría ciudadana',
        description: 'Mecanismo democrático de representación que le permite a los ciudadanos o a las diferentes organizaciones comunitarias, ejercer vigilancia sobre la gestión pública.',
    },
    {
        title: 'Acción de cumplimiento',
        description: 'Mecanismo de protección de derechos; esta acción protege el principio de legalidad y eficacia del ordenamiento jurídico.',
    },
    {
        title: 'Acción de tutela',
        description: 'Mecanismo mediante el cual toda persona puede reclamar ante los jueces la protección inmediata de sus derechos constitucionales fundamentales, cuando estos resultan vulnerados o amenazados por la acción o la omisión de cualquier autoridad pública o de los particulares en los casos establecidos en la ley.',
    },
    {
        title: 'Consultas',
        description: 'Petición que se presenta a las autoridades para manifestar su parecer sobre materias relacionadas con sus atribuciones y competencias. El plazo máximo para responderlas es de 30 días.',
    },
    {
        title: 'Denuncia',
        description: 'Documento en que se da noticia a la autoridad competente de la comisión de un delito o de una falta.',
    },
    {
        title: 'Petición o derechos de petición',
        description: 'Derecho que tiene toda persona para solicitar o reclamar ante las autoridades competentes por razones de interés general o interés particular para elevar solicitudes respetuosas de información y/o consulta y para obtener pronta resolución de las mismas.',
    },
    {
        title: 'Queja',
        description: 'Cualquier expresión verbal, escrita o en medio digital de insatisfacción con la conducta o la acción de los servidores públicos o de los particulares que llevan a cabo una función estatal y que requiere una respuesta. (Las quejas deben ser resueltas, atendidas o contestadas dentro de los quince (15) días siguientes a la fecha de su presentación).',
    },
    {
        title: 'Reclamo',
        description: 'Cualquier expresión verbal, escrita o en medio digital, de insatisfacción referida a la prestación de un servicio o la deficiente atención de una autoridad pública, es decir, es una declaración formal por el incumplimiento de un derecho que ha sido perjudicado o amenazado, ocasionado por la deficiente prestación o suspensión injustificada del servicio. (Los reclamos deben ser resueltos, atendidos o contestados dentro de los quince (15) días siguientes a la fecha de su presentación).',
    },
    {
        title: 'Sugerencia',
        description: 'Cualquier expresión verbal, escrita o en medio digital de recomendación entregada por el ciudadano, que tiene por objeto mejorar los servicios que presta el Ministerio para racionalizar el empleo de los recursos o hacer más participativa la gestión pública. (En un término de diez (10) días se informará sobre la viabilidad de su aplicación).',
    },
    {
        title: 'Trámite',
        description: 'Conjunto o serie de pasos o acciones reguladas por el Estado, que deben efectuar los usuarios para adquirir un derecho o cumplir con una obligación prevista o autorizada por la ley.',
    },
];
