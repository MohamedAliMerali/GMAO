import machines from "../../../Data/machines";

const MachineDocuments = () => {
  return (
    <div>
      {/* // todo: you can make it with summary object */}
      {/* Machines name */}
      <div className="list-group mb-6">
        {machines.map((machine, index) => (
          <a
            key={index}
            href={"#" + machine.name}
            className="list-group-item list-group-item-action mb-1 rounded-4"
          >
            {machine.name}
          </a>
        ))}
      </div>

      {/* doc */}
      {machines.map((machine, index) => (
        <ul key={index}>
          <li id={machine.name} className="mb-12">
            <h2 className="text-center font-medium text-4xl py-2 bg-slate-100 rounded-full">
              {machine.name}
            </h2>
            <ul>
              {machine.documentation.map((doc, index) => (
                <li key={index}>
                  <h3 className="font-medium text-3xl pb-2 pt-4">
                    {doc.docName}:
                  </h3>
                  <p className="ml-6">{doc.content}</p>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MachineDocuments;
