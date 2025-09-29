
export default function UpdateStuff(props) {

        const displayStuffs = props.stuffData.map((stuff, index) => {
                return <tr key={index}>
                                <td>{stuff.name}</td>
                                <td className="table-buttons"><button onClick={() => putOneHandler(stuff)} className="put-button">Put 1</button> <button onClick={() => tookOneHandler(stuff)} className="took-button">Took 1</button></td>
                        </tr>
        })

        function putOneHandler(stuff) {
                stuff.quantity += 1
                console.log(stuff.quantity)
                props.checkEmptyStuffs()
                props.updateLocalStorage()
        }

        function tookOneHandler(stuff) {
                stuff.quantity -= 1
                console.log(stuff.quantity)
                props.checkEmptyStuffs()
                props.updateLocalStorage()
        }


        return (
                <section onClick={props.toggle} style={props.styles} className="modal-container">
                        <div onClick={event => event.stopPropagation()} className="modal-body">
                                <div className="modal-header">
                                        <h1>Update stuff in fridge</h1>
                                </div>

                                <div className="modal-content">
                                        <table className="update-table">
                                                <thead>
                                                        <tr>
                                                                <th>Stuffs</th>
                                                                <th></th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        {/* Data goes here: */}
                                                        {displayStuffs}
                                                </tbody>
                                        </table>
                                </div>
                        </div>
                </section>
        )
}