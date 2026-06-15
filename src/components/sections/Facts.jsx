export default function Facts() {
  return (
    <div className="container-fluid facts-section">
      <div className="container">
        <div className="row gx-0">

          <div className="col-lg-4">
            <div className="facts-primary shadow d-flex align-items-center justify-content-center p-4">
              <div className="facts-icon bg-white">
                <i className="fa fa-users text-primary"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-white mb-0">Happy Clients</h5>
                <h1 className="text-white mb-0">9,035</h1>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="facts-light shadow d-flex align-items-center justify-content-center p-4">
              <div className="facts-icon bg-primary">
                <i className="fa fa-check text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-primary mb-0">Projects Done</h5>
                <h1 className="mb-0">2,796</h1>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="facts-primary shadow d-flex align-items-center justify-content-center p-4">
              <div className="facts-icon bg-white">
                <i className="fa fa-award text-primary"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-white mb-0">Win Awards</h5>
                <h1 className="text-white mb-0">345</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
