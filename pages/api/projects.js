import { gql } from "graphql-request";
import { graphcms } from "../../client";
export const getAllProjects = async () => {
  const getAllProjectsQuery = gql`
    {
      projects {
        id
        title
        tags
        source
        image {
          url
        }
      }
    }
  `;

  const { projects } = await graphcms.request(getAllProjectsQuery);

  return projects;
};
