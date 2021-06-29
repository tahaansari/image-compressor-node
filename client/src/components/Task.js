import {ProgressBar} from 'react-bootstrap';
const Task = (props) => {
    return (
        <>
        <div className="border-bottom ">
          <div className="d-flex align-items-center justify-content-between px-3 py-3 container">
            <div className="px-3">
              {props.name}
            </div>
            <div className="d-flex align-items-center flex-fill px-3">
              <span className="text-danger">
                {props.size} MB
              </span>
              <div className="flex-fill mx-3">
                  <ProgressBar variant="success" animated now="100" />
              </div>
              <span className="text-success">346.3 KB</span>
            </div>
            <div className="d-flex align-items-center px-3">
              <span className="font-weight-bold">−62%</span>
              <button type="button" className="btn btn-link ml-2">Download</button>
            </div>
          </div>
        </div>
        </>
    )
}

export default Task
