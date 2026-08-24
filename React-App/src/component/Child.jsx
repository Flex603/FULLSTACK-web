import GrandChild  from "./Grandchild";

function Child({username}) {
    return <GrandChild username={username } />
}
export default Child