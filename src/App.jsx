import { gql, useQuery } from "@apollo/client"

function App() {
  const QL = gql`
    query {
  authors{
    name,
    id,
    email,
    slug
  },
  posts{
    title,
    description{
      text
    },
    cover {
      url
    }
    
  }
}
  `
  const {loading , data} = useQuery(QL)
  console.log(data)
  return (
    <>
      <h1 className="text-yellow-700"> ssسلام</h1>
    </>
  )
}

export default App
