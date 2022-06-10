import { graphql } from "graphql";
import { request,gql } from "graphql-request";

const graphqlAPI : any = process.env.NEXT_PUBLIC__GRAPHCMS_ENDPOINT;

export const getPosts = async () =>{

    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              excerpt
              createdAt
              slug
              title
              featuredImage {
                url
              }
              categories {
                slug
                name
              }
            }
          }
        }
      }
    `

    const results  =  await request(graphqlAPI, query)
    return results.postsConnection.edges;
}