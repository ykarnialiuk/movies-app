import React, { useState } from 'react';
import { Offcanvas, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setFilterQuery } from '../slices/filterSlice';

interface SidebarProps {
    show: boolean;
    onHide: () => void;
}
const countOfYears = 35;

const Sidebar: React.FC<SidebarProps> = ({ show, onHide }) => {
    const [selectedYear, setSelectedYear] = useState('');
    const dispatch = useDispatch();

    const year = (new Date()).getFullYear();
    const years = Array.from({ length: countOfYears }, (_, i) => year - i);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setFilterQuery(selectedYear));
    };

    return (
        <Offcanvas show={show} onHide={onHide} placement="end" className="bg-light">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Filters</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={handleSubmit} className="p-3">
                    <Form.Group controlId="selectYear" className="mb-4">
                        <Form.Label className="fw-bold">Years</Form.Label>
                        <Form.Control
                            as="select"
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="shadow-sm"
                        >
                            <option>All years</option>
                            {years.map(year => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button type="submit" className="px-4 shadow" style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}>
                            Apply
                        </Button>
                    </div>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Sidebar;
