import CustomNavbar from "./CustomNavbar";

const Base=({title="Welcome to our website",children})=>
{
    return(
        <div className="container-fluid p-0 m-0">
            <h1>This is header</h1>
            {children}
          <CustomNavbar/>
            
            

        </div>
    );
};
export default Base;