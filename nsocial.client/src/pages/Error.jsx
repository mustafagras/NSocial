import { Link } from 'react-router-dom';

const Error = () => {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            <span className="text-danger">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <Link to="/" className="bg-primary font-medium text-gray hover:bg-opacity-70">
            Go Home
          </Link>
        </div>
      </div>
    );
  };
  
  export default Error;
  