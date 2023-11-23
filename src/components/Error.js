import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <section className="py-12">
      <div className="col-sm-10 col-sm-offset-1  text-center">
        <div className="bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] bg-center h-[400px]">
          <h1 className="text-center text-[80px]">404</h1>
        </div>
        <div className="contant_box_404">
          <h3 className="text-[30px]">Look like you're lost</h3>
          <p>the page you are looking for not avaible!</p>
          <Link
            to="/"
            className="bg-[#39ac31] px-5 py-3 text-white inline-block my-3 uppercase text-sm font-semibold"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Error;
