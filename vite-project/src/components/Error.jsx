import { useRouteError } from "react-router-dom";
function Error(){
     const err=useRouteError();
    console.log(err);
    return(
      
        <>
        <h1>error page</h1>
        <h2>{err.status}</h2>
        <h3>{err.statusText}</h3>
        </>
    );
}
export default Error;