import { Toast } from 'react-bootstrap';
import ReactLoading from "react-loading";

const MyToast = (mode: any) => {
    return (
        <Toast show={true} onClose={() => { }} className='d-flex justify-content-center align-items-center w-100'
            style={{ background: 'transparent', border: 'none', fontFamily: 'Georgia, serif' }}>
            <Toast.Header className='row' style={{ background: 'transparent', border: 'none' }}>
            </Toast.Header>
            <img src="/images/pngwing.com.png" className="rounded me-2" alt="..." style={{ width: '30%' }} />
            <Toast.Body className='row text-light d-flex flex-column justify-content-center align-items-center'>
                <div className='me-3'><h1>"What is this, a game of some sort?"</h1></div>
            </Toast.Body>
            <div><ReactLoading type="spin" color="#fff" /></div>
        </Toast>
    )
}

export default MyToast;