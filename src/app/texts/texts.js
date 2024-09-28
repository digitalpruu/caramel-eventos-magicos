const title = "Caramel Eventos Mágicos";
const email = "carameleventoscolombia@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy muy interesado en los servicios de ${title} y me gustaría recibir más información. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!`
);
const numeroWhatsApp = "3507411111";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Caramel Eventos Mágicos, transformamos cualquier fiesta o evento social en una experiencia mágica e inolvidable. Con 25 años de experiencia, ofrecemos una amplia gama de servicios que incluyen animación, decoración, recreación, y shows de magia. Nos enfocamos en brindar un servicio excelente, puntual y personalizado para que tus celebraciones sean únicas.",
        description2: "Además, contamos con deliciosas opciones gastronómicas que incluyen postres fríos, tortas, pasabocas dulces y salados, así como estaciones de café y crispetas. Nuestro equipo de profesionales capacitados está aquí para convertir tus momentos importantes en recuerdos mágicos, rodeados de familiares y amigos.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Regalamos momentos mágicos",
            p2: "25 años creando experiencias inolvidables",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/Carameleventosmagicos/",
        instagram: "https://www.instagram.com/carameleventosmagicos/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};
export default textos;
