import UpdateStuff from './UpdateStuff'
import AddStuff from './AddStuff'
import { useEffect, useState } from 'react'
import stuffData from '../stuffData.js'

export default function Main() {
        const [stuffs, setNewStuff] = useState([...stuffData])

        useEffect(saveToLocalStorage, [stuffs])

        function checkEmptyStuffs() {
                for (const stuff of stuffs) {
                        removeEmptyStuff(stuff)
                }
        }

        function removeEmptyStuff(stuff) {
                if (stuff.quantity <= 0) {
                        stuffs.splice(stuffs.indexOf(stuff), stuffs.indexOf(stuff))
                        if (stuffs.indexOf(stuff) === 0) {
                                stuffs.pop()
                        }
                        console.log(stuff)
                }
        }

        function saveToLocalStorage() {
                localStorage.setItem("storedStuffData", JSON.stringify(stuffs))
        }

        const displayStuffs = stuffs.map((stuff, index) => {
                return  <tr key={index}>
                                <td>{stuff.name}</td>
                                <td>{stuff.category}</td>
                                <td className='quantity-table-col'>{stuff.quantity}</td>
                        </tr>
        
        })

        function addStuff(formData) {
                setNewStuff(prevStuffs => [...prevStuffs, {
                        name: (formData.get("stuff-name").toLowerCase()),
                        category: (formData.get("stuff-category").toLowerCase()),
                        quantity: parseInt(formData.get("stuff-quantity"))
                }]);
        }

        const [isAddModalVisible, setIsAddModalVisible] = useState(false)
        const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false)

        function toggleAddModal() {
                setIsAddModalVisible(prev => !prev)
        }

        function toggleUpdateModal() {
                setIsUpdateModalVisible(prev => !prev)
        }

        return (
                <main>
                        <AddStuff addStuff={addStuff} styles={{display: isAddModalVisible ? "flex" : "none"}} toggle={toggleAddModal}/>
                        <UpdateStuff checkEmptyStuffs={checkEmptyStuffs} updateLocalStorage={saveToLocalStorage} stuffData={stuffs} styles={{display: isUpdateModalVisible ? "flex" : "none"}} toggle={toggleUpdateModal}/>
                        <div className="buttons-div">
                                <button className="add-stuff-button" onClick={toggleAddModal}>Add stuff</button>
                                <button className="update-stuff button" onClick={toggleUpdateModal}>Update stuff</button>
                        </div>
                        <div className="table-div">                                
                                <table>
                                        <thead>
                                                <tr>
                                                        <th>Stuffs</th>
                                                        <th>Category</th>
                                                        <th className='quantity-table-col'>Quantity</th>
                                                </tr>
                                        </thead>
                                        <tbody>
                                                {/* Display stuffs here */}
                                                {displayStuffs}
                                        </tbody>
                                </table>
                        </div>
                </main>
        )
}