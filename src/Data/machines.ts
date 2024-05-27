const machines = [
  {
    name: "Distillateur",
    MaintenancePlans: [
      {
        tasks: "Task 1",
        Responsable: "Admin",
        delay: "5j",
        validation: false,
        note: "URG",
      },
      {
        tasks: "Task 2",
        Responsable: "Admin",
        delay: "5j",
        validation: false,
        note: "URG",
      },
      {
        tasks: "Task 3",
        Responsable: "Admin",
        delay: "5j",
        validation: false,
        note: "URG",
      },
    ],
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
    MaintenancePlans: [
      {
        tasks: "Task 1",
        Responsable: "Admin",
        delay: "5j",
        validation: false,
        note: "URG",
      },
    ],
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
  // // ps: JUST TO MAKE THING EASSY
  // {
  //   name: "Remplisseuse",
  //   MaintenancePlans: [
  //     {
  //       tasks: "Task 1",
  //       Responsable: "Admin",
  //       delay: "5j",
  //       validation: false,
  //       note: "URG",
  //     },
  //   ],
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
  //   MaintenancePlans: [
  //     {
  //       tasks: "Task 1",
  //       Responsable: "Admin",
  //       delay: "5j",
  //       validation: false,
  //       note: "URG",
  //     },
  //   ],
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
  //   MaintenancePlans: [
  //     {
  //       tasks: "Task 1",
  //       Responsable: "Admin",
  //       delay: "5j",
  //       validation: false,
  //       note: "URG",
  //     },
  //   ],
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
  //   MaintenancePlans: [
  //     {
  //       tasks: "Task 1",
  //       Responsable: "Admin",
  //       delay: "5j",
  //       validation: false,
  //       note: "URG",
  //     },
  //   ],
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
  //   MaintenancePlans: [
  //     {
  //       tasks: "Task 1",
  //       Responsable: "Admin",
  //       delay: "5j",
  //       validation: false,
  //       note: "URG",
  //     },
  //   ],
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
  //   MaintenancePlans: [
  //     {
  //       tasks: "Task 1",
  //       Responsable: "Admin",
  //       delay: "5j",
  //       validation: false,
  //       note: "URG",
  //     },
  //   ],
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
  //   MaintenancePlans: [
  //     {
  //       tasks: "Task 1",
  //       Responsable: "Admin",
  //       delay: "5j",
  //       validation: false,
  //       note: "URG",
  //     },
  //   ],
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
  //   MaintenancePlans: [
  //     {
  //       tasks: "Task 1",
  //       Responsable: "Admin",
  //       delay: "5j",
  //       validation: false,
  //       note: "URG",
  //     },
  //   ],
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

// to make sure the num of those é objects matches
const reports = machines.map(() => ({ TBF: 0, MTBF: 0, MTTR: 0, DISP: 0 }));

export { reports };
