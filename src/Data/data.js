import room1 from "../assets/img/jpeg/details-1.jpeg";
import room2 from "../assets/img/jpeg/details-2.jpeg";
import room3 from "../assets/img/jpeg/details-3.jpeg";
import room4 from "../assets/img/jpeg/details-4.jpeg";
import img1 from "../assets/img/jpeg/room-1.jpeg";
import img2 from "../assets/img/jpeg/room-2.jpeg";
import img3 from "../assets/img/jpeg/room-3.jpeg";
import img4 from "../assets/img/jpeg/room-4.jpeg";
import img5 from "../assets/img/jpeg/room-5.jpeg";
import img6 from "../assets/img/jpeg/room-6.jpeg";
import img7 from "../assets/img/jpeg/room-7.jpeg";
import img8 from "../assets/img/jpeg/room-8.jpeg";
import img9 from "../assets/img/jpeg/room-9.jpeg";
import img10 from "../assets/img/jpeg/room-10.jpeg";
import img11 from "../assets/img/jpeg/room-11.jpeg";
import img12 from "../assets/img/jpeg/room-12.jpeg";

const data = [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "simple economica",
      slug: "single-economy",
      type: "single",
      price: 100,
      size: 200,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Habitación diseñada específicamente para una sola persona, proporcionando un espacio privado y cómodo. Generalmente, está equipada con una cama individual, un escritorio para trabajar o estudiar, y un armario o cajonera para almacenar ropa y otros artículos personales. La decoración suele ser sencilla pero elegante, optimizando el uso del espacio disponible. Este tipo de habitación es ideal para estancias cortas o largas, ofreciendo una atmósfera acogedora y funcional. Perfecta para viajeros, estudiantes o profesionales en desplazamiento, la single-room combina confort y practicidad, adaptándose a las necesidades de quienes buscan un refugio íntimo y bien diseñado.",
      extras: [
        "Almohadas mullidas y ropa de cama transpirable",
        "Toallas de baño suaves y de gran tamaño",
        "Artículos de tocador de tamaño completo y con pH equilibrado",
        "Refrigerios de cortesía",
        "Seguridad adecuada",
        "Internet",
        "Camas cómodas",
      ],
      images: [
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "simple basica",
      slug: "single-basic",
      type: "single",
      price: 150,
      size: 250,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Habitación simple y funcional, ideal para una sola persona. Diseñada para ofrecer comodidad sin complicaciones, suele contar con una cama individual, un escritorio para trabajar o estudiar y un armario pequeño para almacenamiento. La decoración es minimalista y práctica, con mobiliario esencial para maximizar el espacio disponible. Aunque básica, esta habitación proporciona un entorno acogedor y privado, perfecto para estancias cortas o largas. Es una opción económica y eficiente, ideal para viajeros, estudiantes o profesionales que buscan un espacio tranquilo y cómodo sin lujos adicionales, adaptándose a sus necesidades cotidianas.",
      extras: [
        "Almohadas mullidas y ropa de cama transpirable",
        "Toallas de baño suaves y de gran tamaño",
        "Artículos de tocador de tamaño completo y con pH equilibrado",
        "Refrigerios de cortesía",
        "Seguridad adecuada",
        "Internet",
        "Camas cómodas",
      ],
      images: [
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "simple standard",
      slug: "single-standard",
      type: "single",
      price: 250,
      size: 300,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Habitación de espacio acogedor y funcional diseñado para una sola persona, ofreciendo una estancia cómoda con un toque de estilo. Equipado con una cama individual, esta habitación incluye un escritorio para trabajar o estudiar y un armario amplio para almacenar ropa y pertenencias. La decoración es moderna y elegante, creando un ambiente agradable y relajante. Los detalles como iluminación adecuada y mobiliario bien distribuido maximizan el confort y la eficiencia del espacio. Ideal tanto para estancias cortas como prolongadas, la single.standard habitación combina practicidad y confort, satisfaciendo las necesidades de quienes buscan un refugio íntimo y bien equipado.",
      extras: [
        "Almohadas mullidas y ropa de cama transpirable",
        "Toallas de baño suaves y de gran tamaño",
        "Artículos de tocador de tamaño completo y con pH equilibrado",
        "Refrigerios de cortesía",
        "Seguridad adecuada",
        "Internet",
        "Camas cómodas",
      ],
      images: [
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "simple deluxe",
      slug: "single-deluxe",
      type: "single",
      price: 300,
      size: 400,
      capacity: 1,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        "Habitación de espacio lujoso y bien diseñado para una sola persona, proporcionando un alto nivel de comodidad y estilo. Equipado con una cama individual de alta calidad, incluye un escritorio elegante y un amplio armario para almacenamiento. La decoración es sofisticada, con muebles modernos y detalles decorativos que crean una atmósfera relajante y exclusiva. Además, ofrece comodidades adicionales como un televisor de pantalla plana, una cafetera y artículos de baño premium. Ideal para estancias cortas o largas, la single.deluxe habitación combina lujo y funcionalidad, proporcionando un refugio exclusivo para quienes buscan una experiencia superior.",
      extras: [
        "Almohadas mullidas y ropa de cama transpirable",
        "Toallas de baño suaves y de gran tamaño",
        "Artículos de tocador de tamaño completo y con pH equilibrado",
        "Refrigerios de cortesía",
        "Seguridad adecuada",
        "Internet",
        "Camas cómodas",
      ],
      images: [
        {
          fields: {
            file: {
              url: img4,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      name: "doble economica",
      slug: "double-economy",
      type: "double",
      price: 200,
      size: 300,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Habitación con un espacio práctico y asequible diseñado para dos personas. Cuenta con una cama doble cómoda o dos camas individuales, un escritorio para trabajar o estudiar, y un armario para almacenamiento. La decoración es sencilla pero funcional, optimizando el uso del espacio disponible. Esta habitación es ideal para viajeros con presupuesto ajustado que buscan comodidad sin lujos, ofreciendo una estancia acogedora y conveniente. Perfecta para estancias cortas o prolongadas, la double-economy habitación proporciona un entorno agradable y bien organizado, adaptándose a las necesidades de parejas, amigos o compañeros de viaje que valoran la economía y el confort.",
      extras: [
        "Almohadas mullidas y ropa de cama transpirable",
        "Toallas de baño suaves y de gran tamaño",
        "Artículos de tocador de tamaño completo y con pH equilibrado",
        "Refrigerios de cortesía",
        "Seguridad adecuada",
        "Internet",
        "Camas cómodas",
      ],
      images: [
        {
          fields: {
            file: {
              url: img5,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "6",
    },
    fields: {
      name: "doble basica",
      slug: "double-basic",
      type: "double",
      price: 250,
      size: 350,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Habitación es un espacio funcional y cómodo diseñado para dos personas. Equipada con una cama doble o dos camas individuales, incluye un escritorio práctico y un armario suficiente para almacenamiento. La decoración es simple y eficiente, centrada en la comodidad y el uso óptimo del espacio. Ideal para viajeros que buscan una estancia cómoda sin lujos innecesarios, esta habitación ofrece un entorno agradable y acogedor. Perfecta para estancias cortas o largas, la double-basic habitación combina practicidad y confort, proporcionando una solución económica y satisfactoria para parejas, amigos o compañeros de viaje que valoran la simplicidad y la funcionalidad.",
      extras: [
        "Almohadas mullidas y ropa de cama transpirable",
        "Toallas de baño suaves y de gran tamaño",
        "Artículos de tocador de tamaño completo y con pH equilibrado",
        "Refrigerios de cortesía",
        "Seguridad adecuada",
        "Internet",
        "Camas cómodas",
      ],
      images: [
        {
          fields: {
            file: {
              url: img6,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "7",
    },
    fields: {
      name: "doble standard",
      slug: "double-standard",
      type: "double",
      price: 300,
      size: 400,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Habitación con un espacio equilibrado y cómodo diseñado para dos personas. Equipada con una cama doble o dos camas individuales, cuenta con un escritorio funcional y un armario amplio para almacenamiento. La decoración es moderna y atractiva, creando un ambiente acogedor y relajante. Esta habitación también ofrece comodidades adicionales como televisión de pantalla plana, conexión Wi-Fi gratuita y artículos de baño esenciales. Ideal para estancias tanto cortas como largas, la double-standard habitación combina confort y estilo, proporcionando un refugio perfecto para parejas, amigos o compañeros de viaje que buscan una estancia agradable y bien equipada..",
      extras: [
        "Almohadas mullidas y ropa de cama transpirable",
        "Toallas de baño suaves y de gran tamaño",
        "Artículos de tocador de tamaño completo y con pH equilibrado",
        "Refrigerios de cortesía",
        "Seguridad adecuada",
        "Internet",
        "Camas cómodas",
      ],
      images: [
        {
          fields: {
            file: {
              url: img7,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "8",
    },
    fields: {
      name: "doble deluxe",
      slug: "double-deluxe",
      type: "double",
      price: 400,
      size: 500,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Un refugio lujoso y espacioso diseñado para dos personas. Equipado con una cama king-size o dos camas queen-size de alta calidad, cuenta con un escritorio elegante y un amplio armario para almacenamiento. La decoración es sofisticada y moderna, con detalles decorativos que crean un ambiente exclusivo y relajante. Ofrece comodidades adicionales como televisión de pantalla plana, minibar, cafetera, y artículos de baño premium. Ideal para estancias cortas o largas, la double-deluxe habitación combina lujo y confort, proporcionando una experiencia superior para parejas, amigos o compañeros de viaje que buscan el máximo nivel de comodidad y estilo.",
      extras: [
        "Almohadas mullidas y ropa de cama transpirable",
        "Toallas de baño suaves y de gran tamaño",
        "Artículos de tocador de tamaño completo y con pH equilibrado",
        "Refrigerios de cortesía",
        "Seguridad adecuada",
        "Internet",
        "Camas cómodas",
      ],
      images: [
        {
          fields: {
            file: {
              url: img8,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "9",
    },
    fields: {
      name: "familiar economica",
      slug: "family-economy",
      type: "family",
      price: 300,
      size: 500,
      capacity: 3,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Habitación es una opción práctica y asequible diseñada para familias. Equipada con una cama doble y una o dos camas individuales, ofrece espacio suficiente para acomodar a todos cómodamente. La decoración es simple pero funcional, optimizando el uso del espacio disponible. Incluye un escritorio, un armario amplio y comodidades básicas como televisión y Wi-Fi gratuito. Ideal para estancias cortas o largas, esta habitación proporciona un entorno acogedor y bien organizado. Perfecta para familias que buscan una solución económica sin sacrificar el confort, la family-economy habitación asegura una estancia cómoda y agradable para todos.",
      extras: [
        "Almohadas mullidas y ropa de cama transpirable",
        "Toallas de baño suaves y de gran tamaño",
        "Artículos de tocador de tamaño completo y con pH equilibrado",
        "Refrigerios de cortesía",
        "Seguridad adecuada",
        "Internet",
        "Camas cómodas",
      ],
      images: [
        {
          fields: {
            file: {
              url: img9,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "10",
    },
    fields: {
      name: "familiar basica",
      slug: "family-basic",
      type: "family",
      price: 350,
      size: 550,
      capacity: 4,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Opción cómoda y funcional diseñada para alojar a familias. Equipada con una cama doble y una o dos camas individuales, proporciona suficiente espacio para todos. La decoración es sencilla y práctica, centrada en maximizar el confort y la eficiencia del espacio. Incluye un escritorio, un armario amplio y comodidades esenciales como televisión y Wi-Fi gratuito. Ideal para estancias cortas o prolongadas, esta habitación ofrece un entorno acogedor y bien organizado. Perfecta para familias que buscan comodidad y funcionalidad sin lujos, la family-basic habitación asegura una estancia agradable y confortable para todos los miembros.",
      extras: [
        "Almohadas mullidas y ropa de cama transpirable",
        "Toallas de baño suaves y de gran tamaño",
        "Artículos de tocador de tamaño completo y con pH equilibrado",
        "Refrigerios de cortesía",
        "Seguridad adecuada",
        "Internet",
        "Camas cómodas",
      ],
      images: [
        {
          fields: {
            file: {
              url: img10,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "11",
    },
    fields: {
      name: "familiar standard",
      slug: "family-standard",
      type: "family",
      price: 400,
      size: 600,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Habitación de espacio acogedor y bien equipado, diseñado para alojar a familias con comodidad. Equipada con una cama doble y dos camas individuales, ofrece suficiente espacio para todos los miembros. La decoración es moderna y atractiva, creando un ambiente cálido y relajante. Cuenta con un escritorio funcional, un armario amplio y comodidades adicionales como televisión de pantalla plana, Wi-Fi gratuito y artículos de baño esenciales. Ideal para estancias cortas o prolongadas, esta habitación combina confort y estilo, proporcionando un refugio perfecto para familias que buscan una estancia agradable y bien organizada, asegurando comodidad y satisfacción para todos.",
      extras: [
        "Almohadas mullidas y ropa de cama transpirable",
        "Toallas de baño suaves y de gran tamaño",
        "Artículos de tocador de tamaño completo y con pH equilibrado",
        "Refrigerios de cortesía",
        "Seguridad adecuada",
        "Internet",
        "Camas cómodas",
      ],
      images: [
        {
          fields: {
            file: {
              url: img11,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "12",
    },
    fields: {
      name: "familiar deluxe",
      slug: "family-deluxe",
      type: "family",
      price: 500,
      size: 700,
      capacity: 6,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Espacio lujoso y amplio diseñado para ofrecer el máximo confort a las familias. Equipada con una cama king-size y dos camas individuales, proporciona un entorno elegante y relajante. La decoración es sofisticada y moderna, con muebles de alta calidad y detalles decorativos exquisitos. Cuenta con un escritorio, un armario amplio y comodidades adicionales como televisión de pantalla plana, minibar, cafetera y artículos de baño premium. Ideal para estancias tanto cortas como largas, esta habitación combina lujo y funcionalidad, proporcionando una experiencia superior para familias que buscan una estancia memorable y confortable.",
      extras: [
        "Almohadas mullidas y ropa de cama transpirable",
        "Toallas de baño suaves y de gran tamaño",
        "Artículos de tocador de tamaño completo y con pH equilibrado",
        "Refrigerios de cortesía",
        "Seguridad adecuada",
        "Internet",
        "Camas cómodas",
      ],
      images: [
        {
          fields: {
            file: {
              url: img12,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "13",
    },
    fields: {
      name: "presidencial",
      slug: "presidential-room",
      type: "presidential",
      price: 600,
      size: 1000,
      capacity: 10,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "La máxima expresión de lujo y exclusividad, diseñada para ofrecer una experiencia inigualable. Equipada con una cama king-size y áreas de estar y comedor separadas, proporciona un amplio espacio para relajarse y entretenerse. La decoración es elegante y sofisticada, con muebles de alta calidad y obras de arte selectas. Incluye comodidades de primera clase como televisión de pantalla plana, minibar, cafetera, bañera de hidromasaje y artículos de baño premium. Además, ofrece servicios adicionales como mayordomo personal y acceso a áreas VIP. Ideal para estancias de negocios o placer, la presidential habitación asegura una experiencia única y memorable.",
      extras: [
        "Almohadas mullidas y ropa de cama transpirable",
        "Toallas de baño suaves y de gran tamaño",
        "Artículos de tocador de tamaño completo y con pH equilibrado",
        "Refrigerios de cortesía",
        "Seguridad adecuada",
        "Internet",
        "Camas cómodas",
      ],
      images: [
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
];

export default data;
