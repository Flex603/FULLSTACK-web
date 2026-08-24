import useFetch from "./useFetch";

function Users() {
 const { data, loading, error } =
useFetch("https://jsonplaceholder.typicode.com/posts");
 if (loading) return <p>loading...</p>;

if (error) return <p>{error}</p>;

 return (
   <ul>
     {data.slice(0, 5).map((post) => (
       <li key={post.id}>{post.title}</li>
     ))}
    </ul>
 );
}

export default Users;