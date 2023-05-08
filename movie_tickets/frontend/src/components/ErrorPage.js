import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
      <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1 className="mt-3">Oooopssy doopsy</h1>
                <p> Sorry Some ERROR {error.statusText} {error.Message}</p>
            </div>
        </div>

      </div>  
    );
}