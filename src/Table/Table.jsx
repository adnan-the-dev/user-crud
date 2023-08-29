import React, { useEffect, useState } from 'react'
import "../Table-style/Table.css"
import { Button, Dialog, DialogActions, DialogTitle, IconButton, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

function Table() {

    const [array, setArray] = useState([])

    const [inpuData, setInputData] = useState("")
    const nameChange = (e) => {
        setInputData(e.target.value)
    }

    const [house, setHouse] = useState("")
    const houseChange = (e) => {
        setHouse(e.target.value)
    }

    const [number, setNumber] = useState("")
    const numberChange = (e) => {
        setNumber(e.target.value)
    }

    // const [popUp, setPopUp] = useState(false)


    function Data() {

        const userData = {
            name: inpuData,
            House: house,
            number: number
        }
        setArray([...array, userData])
        setInputData("")
        setHouse("")
        setNumber("")
        // setPopUp(false)
        handleClose()
    }



    function deleteData(i) {
        let total = [...array]
        total.splice(i, 1)
        setArray(total)
    }

    const [show, setShow] = useState(false)

    console.log(show);

    const handleClose = () => {
        setShow(false)
    }

    return (
        <>

            {/* <button onClick={() => { setShow(true) }}>Dialog</button> */}
            <div className='input-data'>

                {/* {popUp ? (<div className='mid-popup'>

                </div>) : null

                } */}

                <h1>User Managment</h1>
                <TextField size='small' id="outlined-basic" label="Search" variant="outlined" />

                <Button sx={{

                    background: 'blue'
                }} variant="contained" onClick={() => (setShow(true))}>Add Data</Button>
            </div>


            <table border={1}>
                <tbody>
                    <tr style={{ background: 'blue', color: 'white', height: '30px', fontSize: '17px' }}>
                        <th>Name</th>
                        <th>House</th>
                        <th>Number</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>

                    {
                        array?.map((item, i) => (
                            <tr key={i}>
                                <th>{item.name}</th>
                                <th>{item.house}</th>
                                <th>{item.number}</th>
                                <th></th>
                                <th><IconButton onClick={() => deleteData(i)} aria-label="delete" size="large">
                                    <DeleteIcon />
                                </IconButton>
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table >

            <Dialog onClose={handleClose} open={show}>
                <div className='pop-up'>
                    <input type="text" value={inpuData || ""} placeholder='Enter name' autoComplete='off' name='name' onChange={nameChange} />
                    <input type="text" value={house || ""} placeholder='Enter house number' name='number' onChange={houseChange} />
                    <input type="number" value={number || ""} placeholder='Enter number' name='number' onChange={numberChange} />
                    <Button onClick={Data} variant="contained" color="success">
                        Submit
                    </Button>
                </div>


            </Dialog>
        </>



    )
}

export default Table