import { Spinner as BoostrapSpinner } from 'react-bootstrap';

const Spinner: React.FC = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <BoostrapSpinner animation="border" variant="dark" />
        </div>
    )
}

export default Spinner;