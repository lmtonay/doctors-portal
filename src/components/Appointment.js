import React, { useState } from 'react';
import { Col, Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';
import Button from './util/Button';
import { Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    backgroundColor: 'white',
    border: 0,
    borderRadius: "5px",
    boxShadow: "0 0 10px grey",
    padding: "20px 40px",
    textAlign: 'center'
};

export default function Appointment({ data, date }) {
    const { name, time, space } = data;
    const times = time.split("||")

    const [activeTime, setActiveTime] = useState("Select")

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Col xs={12} md={4}>
                <div className="m-3 shadow-sm p-4 text-center">
                    <b><h5 style={{ color: '#32d1d1' }}>{name}</h5></b>
                    <div className="my-3">
                        <small>Time 1: {times[0]}</small> <br />
                        <small>Time 2: {times[1]}</small> <br />
                    </div>
                    <small className='fw-bold'>{space} SPACES AVAILABLE</small>
                    <Button onClick={handleOpen} className="my-3 button">Book Appointment</Button>
                </div>
            </Col>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div
                    // @ts-ignore
                    style={style}>
                    <h3>{name}</h3>
                    <form className="text-start my-5">
                        <input type="text" placeholder="Patient Name" className="form-control my-2 shadow-none" required />
                        <input type="text" placeholder="Mobile Number" className="form-control my-2 shadow-none" required />
                        <input type="text" placeholder="Age" className="form-control my-2 shadow-none" required />
                        <InputGroup className="my-2">
                            <FormControl placeholder="Choose Date and Time" disabled value={`Date: ${date.toDateString()}, Time: ${activeTime === 'Select' ? 'Not Selected' : activeTime}`} />
                            <DropdownButton
                                title={activeTime}
                                id="input-group-dropdown-2"
                                align="end"
                            >
                                {
                                    times.map(time => <Dropdown.Item onClick={() => setActiveTime(time)}>{time}</Dropdown.Item>)
                                }
                            </DropdownButton>
                        </InputGroup>
                        <Button type="submit" style={{width: '100%'}}>Book Appointment</Button>
                    </form>
                </div>
            </Modal>
        </>
    );
}