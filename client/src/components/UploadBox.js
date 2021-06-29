import {Form} from 'react-bootstrap'
const UploadBox = (props) => {
    return (
        <>
        <div className="ta-file-upload text-center p-4 border-bottom ta-pointer">   
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-file-earmark-image mb-4" viewBox="0 0 16 16">
                <path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                <path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5V14zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4z"/>
            </svg>
            <h6 className="mb-0">Drop your files here / or click here to manually insert</h6>
            <Form>
                <Form.Group>
                    <Form.File onChange={(e)=>props.handleChange(e.target.files)} multiple="multiple" id="exampleFormControlFile1" label="Example file input" />
                </Form.Group>
            </Form>
        </div>
        </>
    )
}
export default UploadBox