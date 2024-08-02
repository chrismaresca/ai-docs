import React, { useState, useEffect } from "react";
import categorizeEditsByDate from "@/services/categorizeDates";
import { useProjectContext } from "@/context";
import EditInstanceComponent from "../../InstanceComponents/EditInstanceComponent";
import { EditInstance } from "@/types";

const ProjectEditsList: React.FC = () => {
  const { projectID } = useProjectContext();

  const [instances, setInstances] = useState<EditInstance[]>([
    {
      editId: "1",
      name: "Instance One",
      dateCreated: "2024-01-01",
      dateLastModified: "2024-07-21",
      editType: "Writing",
    },
    {
      editId: "12",
      name: "Instance 12",
      dateCreated: "2024-01-01",
      dateLastModified: "2024-07-28",
      editType: "Writing",
    },
    {
      editId: "13",
      name: "Instance 13",
      dateCreated: "2024-01-01",
      dateLastModified: "2024-07-27",
      editType: "Writing",
    },
    {
      editId: "2",
      name: "Instance Two",
      dateCreated: "2024-02-01",
      dateLastModified: "2024-07-21",
      editType: "Writing",
    },
    {
      editId: "3",
      name: "Instance Three",
      dateCreated: "2024-03-01",
      dateLastModified: "2024-07-21",
      editType: "Writing",
    },
    {
      editId: "4",
      name: "Instance Four",
      dateCreated: "2024-04-01",
      dateLastModified: "2024-07-21",
      editType: "Research",
    },
    // Add more instances as needed
  ]);

  useEffect(() => {
    // Fetch data logic here
    // Example:
    // fetch('api/endpoint')
    //   .then(response => response.json())
    //   .then(data => setInstances(data));
  }, []);

  const categories = categorizeEditsByDate(instances);

  return (
    <>
      {" "}
      {instances.map((instance) => (
        <EditInstanceComponent key={instance.editId} instance={instance} />
      ))}
    </>
  );
};

export default ProjectEditsList;
