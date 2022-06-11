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

export const getRecentPosts = async () =>{
  const query = gql`
    query GetPostDetails(){
      posts(
        orderBy:createdAt_ASC,
        last:3
      ){
        title
        featuredImage{
          url
        }
        createdAt
        slug
      }
    }
  `

  const results  =  await request(graphqlAPI, query)
  return results.posts;
}

export const getSimilarPosts =async () => {
  const query = gql`
    query GetPostDetails($slug:String!, $categories:[String!]){
      posts:(
        where:{slug_not:$slug, AND:categories_some:{slug_in:$categories}},
        last:3
        ){
          title
          featuredImage{
            url
          }
          createdAt
          slug
        }
    }
    `
  
  const results  =  await request(graphqlAPI, query)
  return results.posts;
}

export const getCategories =async () => {

  const query = gql `
    query GetCategories(){
      categories{
        name
        slug
      }
    }
  `

  const results  =  await request(graphqlAPI, query)
  return results.categories;
}