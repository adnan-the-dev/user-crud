import React, { useEffect, useState } from 'react'
import "../Table-style/Table.css"
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

    const [popUp, setPopUp] = useState(false)


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
        setPopUp(false)
    }



    function deleteData(i) {
        let total = [array]
        total.splice(i, 1)
        setArray(total)
    }

    function updateData(i) {
        console.log(array[i], "hwllo");
        let editData = array[i]

        setInputData(editData.name)
        setHouse(editData.number)
        setNumber(editData.number)

        const userEditData = {
            name: inpuData,
            house: house,
            number: number
        }

        array[i] = userEditData

    }

    return (
        <>
            <div className='input-data'>


                <h1>user managment</h1>
                <button onClick={() => (setPopUp(true))} >Add Data</button>

            </div>


            <table border={1}>
                <tbody>
                    <tr>
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
                                <th>{item.number}</th>
                                <th>{item.number}</th>
                                <th><button onClick={() => updateData(i)}>update</button></th>
                                <th><button onClick={() => deleteData(i)}>Delete</button></th>
                            </tr>
                        ))}
                </tbody>    
            </table >

            {popUp ? (<div className='mid-popup'>
                <div className='pop-up'>
                    <input type="text" value={inpuData || ""} placeholder='Enter name' autoComplete='off' name='name' onChange={nameChange} />
                    <input type="number" value={house || ""} placeholder='Enter house number' name='number' onChange={houseChange} />
                    <input type="number" value={number || ""} placeholder='Enter number' name='number' onChange={numberChange} />
                    <button onClick={Data}>Submit</button>
                </div>
            </div>) : null

            }



        </>

    )
}

export default Table