import React, { useState } from 'react'
import "../Table-style/Table.css"
import { Button, Dialog, IconButton, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import AddIcon from '@mui/icons-material/Add';

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

    // searchQuery section
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const filteredArray = array?.filter((array) =>
        searchQuery
            .toLowerCase()
            .split(' ')
            .every((term) => {
                return array?.name?.toLowerCase().includes(term);
            })
    );



    function Data() {

        const userData = {
            name: inpuData,
            house: house,
            number: number
        }
        setArray([...array, userData])
        setInputData("")
        setHouse("")
        setNumber("")
        handleClose()
    }



    function deleteData(i) {
        let total = [...array]
        total.splice(i, 1)
        setArray(total)
    }

    const [show, setShow] = useState(false)


    const handleClose = () => {
        setShow(false)
    }

    return (
        <>

            <div className='input-data'>

                <h1>User Managment</h1>
                <TextField
                    label="Search "
                    variant="outlined"
                    size="small"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <Button sx={{

                    background: 'blue'
                }} variant="contained" startIcon={<AddIcon />} onClick={() => (setShow(true))}>Add Data</Button>
                {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button> */}
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
                        filteredArray?.map((item, i) => (
                            <tr key={i}>
                                <th>{item.name}</th>
                                <th>{item.house}</th>
                                <th>{item.number}</th>
                                <th><UpdateIcon /></th>
                                <th><IconButton onClick={() => deleteData(i)} aria-label="delete" size="small">
                                    <DeleteIcon size="small" />
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