export interface Task {
  tasks: string;
  responsable: string;
  delay: string;
  validation: boolean;
  note: string;
}

export interface MaintenancePlansInterface {
  hebdomadaire: Task[];
  mensuel: Task[];
  trimestriel: Task[];
  semestriel: Task[];
  annuel: Task[];
}

interface Machine {
  name: string;
  MaintenancePlans: MaintenancePlansInterface;
  documentation: { docName: string; content: string }[];
}

const machines: Machine[] = [
  {
    name: "Distillateur",
    MaintenancePlans: {
      hebdomadaire: [
        {
          tasks: "Task 1",
          responsable: "Admin",
          delay: "2024-09-04",
          validation: false,
          note: "URG",
        },
        {
          tasks: "Task 1",
          responsable: "Admin",
          delay: "2024-09-04",
          validation: false,
          note: "URG",
        },
      ],
      mensuel: [
        {
          tasks: "Task 1",
          responsable: "Admin",
          delay: "2024-09-04",
          validation: false,
          note: "URG",
        },
      ],
      trimestriel: [
        {
          tasks: "Task 1",
          responsable: "Admin",
          delay: "2024-09-04",
          validation: false,
          note: "URG",
        },
      ],
      semestriel: [
        {
          tasks: "Task 1",
          responsable: "Admin",
          delay: "2024-09-04",
          validation: false,
          note: "URG",
        },
      ],
      annuel: [
        {
          tasks: "Task 1",
          responsable: "Admin",
          delay: "2024-09-04",
          validation: false,
          note: "URG",
        },
      ],
    },
    documentation: [
      {
        docName: "Fiche de vie de la machine",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
      },
      {
        docName: "Manuel d'utilisation",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
      },
    ],
  },
  {
    name: "Réacteur",
    MaintenancePlans: {
      hebdomadaire: [
        {
          tasks: "Task 1",
          responsable: "Admin",
          delay: "2024-09-04",
          validation: false,
          note: "URG",
        },
      ],
      mensuel: [
        {
          tasks: "Task 1",
          responsable: "Admin",
          delay: "2024-09-04",
          validation: false,
          note: "URG",
        },
      ],
      trimestriel: [
        {
          tasks: "Task 1",
          responsable: "Admin",
          delay: "2024-09-04",
          validation: false,
          note: "URG",
        },
      ],
      semestriel: [
        {
          tasks: "Task 1",
          responsable: "Admin",
          delay: "2024-09-04",
          validation: false,
          note: "URG",
        },
      ],
      annuel: [
        {
          tasks: "Task 1",
          responsable: "Admin",
          delay: "2024-09-04",
          validation: false,
          note: "URG",
        },
      ],
    },
    documentation: [
      {
        docName: "Fiche de vie de la machine",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
      },
      {
        docName: "Manuel d'utilisation",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
      },
    ],
  },
  // {
  //   name: "Remplisseuse",
  //   MaintenancePlans: {
  //     hebdomadaire: [
  //       {
  //         tasks:
  //           "Contrôle état et centrage des pistons station d'alimentation ampoules",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Contrôle état des aiguilles et position station de remplissage et tâteur",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle état et position du coupeur et marteau",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle état des chalumeaux (soudage)",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Vérification des réglages et étalonnages (volumes, températures, Pression)",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Graissage des mécanismes (guides, pivots, etc.)",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     mensuel: [
  //       {
  //         tasks:
  //           "Contrôle et nettoyage des pinces accro et démontage si nécessaire pour changement",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Contrôle état du convoyeur et douilles transporteurs d'ampoules",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Contrôle état de fonctionnement des vannes de dosage et d'alimentation",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle étanchéité du circuit gaz",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôles d'étanchéité (fuites de gaz, de fluides)",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Inspection des systèmes de sécurité (capteurs, arrêts d'urgence)",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle et nettoyage des pinces accros",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     trimestriel: [
  //       {
  //         tasks: "Graissage des rampes glissières",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Contrôle et graissage des chaînes, engrenages, crémaillères et ressorts de rappel",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Graissage des cames. galets et roulements",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle état. Tension et alignement des courroies",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     semestriel: [
  //       {
  //         tasks: "Lubrification des leviers et support leviers",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Serrage des fixations des galets, bielles, ressorts",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Remplacement préventif des joints et pièces d'usure",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Révision des systèmes pneumatiques et hydrauliques",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle état des accouplements des arbres",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     annuel: [
  //       {
  //         tasks: "Vidange du réducteur inférieur et supérieur machine",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Graissage du collecteur et différentiel",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Graissage de la croix de malte",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle état des moteurs électriques",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Remplacement des composants critiques (aiguilles, régulateurs, etc)",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Contrôles approfondis (analyses vibratoires, géométrie des mécanismes, etc.)",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Dépoussiérage et serrage des cosses et contacts de l'armoire et boîtier électrique de commande",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //   },
  //   documentation: [
  //     {
  //       docName: "Fiche de vie de la machine",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
  //     },
  //     {
  //       docName: "Manuel d'utilisation",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
  //     },
  //   ],
  // },
  // {
  //   name: "Autoclave",
  //   MaintenancePlans: {
  //     hebdomadaire: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     mensuel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     trimestriel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     semestriel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     annuel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //   },
  //   documentation: [
  //     {
  //       docName: "Fiche de vie de la machine",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
  //     },
  //     {
  //       docName: "Manuel d'utilisation",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
  //     },
  //   ],
  // },
  // {
  //   name: "Mireuse",
  //   MaintenancePlans: {
  //     hebdomadaire: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     mensuel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     trimestriel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     semestriel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     annuel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //   },
  //   documentation: [
  //     {
  //       docName: "Fiche de vie de la machine",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
  //     },
  //     {
  //       docName: "Manuel d'utilisation",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
  //     },
  //   ],
  // },
  // {
  //   name: "Blistireuse",
  //   MaintenancePlans: {
  //     hebdomadaire: [
  //       {
  //         tasks: "Contrôle du niveau d'huile lubrificateur air comprimé",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Contrôle du niveau d'eau de refroidissement et purge et contrôle étanchéité du circuit",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Nettoyage des plaques chauffantes",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Nettoyage des outillages (moules, couteaux, etc.)",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Vérification des niveaux de lubrification",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle fonctionnement des lampes de signalisation",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     mensuel: [
  //       {
  //         tasks:
  //           "Contrôle étanchéité et état des vannes du circuit pneumatique",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Contrôle état des tambours guide et aluminium et positionnement des bagues",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Contrôle état des stations : moulage, scellage, découpage et état des pinces",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Inspection et réglage des systèmes de guidage",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôles d'usure des courroies et flexibles pneumatiques",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Nettoyage du filtre détendeur air comprimé",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     trimestriel: [
  //       {
  //         tasks: "Contrôle état et étanchéité de la pompe à eau",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Graissage des douilles, cames et paliers",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Nettoyage des axes de coulissement et contrôle joints",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle état, tension et graissage des chaînes",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Graissage des pignons",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Remplacement des lames de découpe",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Graissage des roulements et mécanismes",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Nettoyage et graissage des organes des pinces",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     semestriel: [
  //       {
  //         tasks: "Contrôle état des accouplements et goupillage",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Serrage des fixations cames, galets, bielles",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Révision des systèmes de chauffe (résistances, thermorégulation)",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle d'alignement des outillages",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Serrage des microcontacts et cosses électriques",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     annuel: [
  //       {
  //         tasks: "Vidange du réducteur machine",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle état des réducteurs auxiliaires (bruit)",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle état du moteur principal",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle et nettoyage de l'électrofrein",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle état des moteurs auxiliaires",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Dépoussiérage de l'armoire électrique et serrage des cosses et contacts",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Dépoussiérage des boites de commandes",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Nettoyage et contrôle des boutons poussoirs",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Remplacement des pièces d'usure critique (moules, rouleaux, etc.)",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôles géométriques et d'intégrité des structures",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //   },
  //   documentation: [
  //     {
  //       docName: "Fiche de vie de la machine",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
  //     },
  //     {
  //       docName: "Manuel d'utilisation",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
  //     },
  //   ],
  // },
  // {
  //   name: "Mis en ètuis",
  //   MaintenancePlans: {
  //     hebdomadaire: [
  //       {
  //         tasks: "Contrôle niveau d'huile lubrificateur air comprimé",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle état des cassettes et pinces",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle état du groupe pliage prospectus",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle fonctionnement des détecteurs de produit",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Nettoyage et dépoussiérage des mécanismes exposés",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Vérification du fonctionnement des capteurs",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle des lampes de signalisation",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     mensuel: [
  //       {
  //         tasks: "Inspection des câblages et connexions électriques",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Contrôle et serrage des fixations des bras et guides de fermeture étui",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Graissage des articulations et glissières",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     trimestriel: [
  //       {
  //         tasks:
  //           "Contrôle et graissage des axes et galets, douilles des poussoirs et cassettes",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Graissage des cames et pignons",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Graissage de la poulie expansible",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle et graissage des chaînes et engrenages",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle état, tension et alignement des courroies",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle tension et lubrification des ressorts pinces",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Réglages et calages des systèmes de pliage/ouverture",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle d'usure des surfaces de frottement",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Contrôle et graissage des axes et galets, douilles des poussoirs et cassettes",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     semestriel: [
  //       {
  //         tasks: "Serrage des galets, cames et contrôle état des leviers",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle état des accouplements et goupillages",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Révision des vérins pneumatiques/hydrauliques",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Réamorçages et remplacements de fluides",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Serrage des fixations microcontacts et carnes électriques",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     annuel: [
  //       {
  //         tasks: "Vidange réductrice",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Démontage et nettoyage des électrovannes",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle et nettoyage de l'électrofrein du moteur principal",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôle état du moteur électrique",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Remplacement des pièces d'usure (cylindres, bielles, etc.)",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks: "Contrôles de géométrie et de débattements",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //       {
  //         tasks:
  //           "Dépoussiérage et serrage des cosses et contrôle des équipements armoire électrique",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //   },
  //   documentation: [
  //     {
  //       docName: "Fiche de vie de la machine",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
  //     },
  //     {
  //       docName: "Manuel d'utilisation",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
  //     },
  //   ],
  // },
  // {
  //   name: "Mise en cartons",
  //   MaintenancePlans: {
  //     hebdomadaire: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     mensuel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     trimestriel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     semestriel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     annuel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //   },
  //   documentation: [
  //     {
  //       docName: "Fiche de vie de la machine",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
  //     },
  //     {
  //       docName: "Manuel d'utilisation",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
  //     },
  //   ],
  // },
  // {
  //   name: "Vignetteuse",
  //   MaintenancePlans: {
  //     hebdomadaire: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     mensuel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     trimestriel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     semestriel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     annuel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //   },
  //   documentation: [
  //     {
  //       docName: "Fiche de vie de la machine",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
  //     },
  //     {
  //       docName: "Manuel d'utilisation",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
  //     },
  //   ],
  // },
  // {
  //   name: "Imprimante à jet d'encre",
  //   MaintenancePlans: {
  //     hebdomadaire: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     mensuel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     trimestriel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     semestriel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //     annuel: [
  //       {
  //         tasks: "Task 1",
  //         responsable: "Admin",
  //         delay: "2024-09-04",
  //         validation: false,
  //         note: "URG",
  //       },
  //     ],
  //   },
  //   documentation: [
  //     {
  //       docName: "Fiche de vie de la machine",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
  //     },
  //     {
  //       docName: "Manuel d'utilisation",
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio nulla modi consequuntur recusandae ducimus. Impedit nihil, quis saepe illum repellat rerum ut quam. Dicta totam aspernatur repellat reprehenderit sunt error inventore nisi veritatis earum odio eveniet quis minus commodi, deserunt sapiente nihil, consequuntur velit. Consequatur minima voluptatum quod sapiente vitae ipsum, quae ducimus. Veritatis vel quasi facilis asperiores nam. Optio blanditiis recusandae placeat accusantium, quaerat, quasi minus itaque, vel tempora tenetur consectetur nostrum! Libero sequi quibusdam similique ducimus possimus animi non repellat laboriosam maxime dolor esse, incidunt excepturi soluta expedita alias minima nisi recusandae iusto! Ipsa provident repellendus distinctio rem perferendis nostrum maiores. Nostrum id sunt sequi minus nisi. Inventore, repudiandae doloribus fugit repellat vitae quam beatae ipsa dolores expedita mollitia praesentium soluta dolorum delectus voluptates voluptatum modi quia quaerat ex at itaque, iste architecto alias sunt? Dolores animi fuga aliquam rerum laudantium quisquam id? Repellat similique sunt officiis? ",
  //     },
  //   ],
  // },
];
export default machines;

machines.map(() => ({ TBF: 0, MTBF: 0, MTTR: 0, DISP: 0 }));
// to make sure the num of those objects matches
const reports = machines.map(() => ({ TBF: 0, MTBF: 0, MTTR: 0, DISP: 0.0 }));

export { reports };
