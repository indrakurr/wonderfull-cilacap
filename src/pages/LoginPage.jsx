import image from "../assets/destination.jpg";
import FormLogin from "../components/FormLogin";

function LoginPage() {
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row" style={{ height: "100%" }}>
        <div
          className="col-6"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="col-6 my-auto">
          <h2 className="text-center mb-3">Admin Login</h2>
          <div className="row">
            <div className="col-10 mx-auto">
              <FormLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
