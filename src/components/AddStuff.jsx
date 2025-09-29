
export default function AddStuff(props) {

        function getInput(formData) {
                const isInputValid = formData.get("stuff-name") && formData.get("stuff-category") && formData.get("stuff-quantity") && (formData.get("stuff-quantity") > 0)
                if (isInputValid) {
                        props.addStuff(formData)
                }
                else {
                        alert("Please check your input!")
                }
        }

        return (
                <section onClick={props.toggle} style={props.styles} className="modal-container">
                        <div onClick={event => event.stopPropagation()} className="modal-body">
                                <div className="modal-header">
                                        <h1>Add / Put stuff in fridge</h1>
                                </div>

                                <div className="modal-content">
                                        <form action={getInput}>
                                                <label htmlFor="stuff-name" className="form-name-label">Stuff name</label>
                                                <input type="text" name="stuff-name" placeholder="i.e. chuckie" defaultValue="chuckie"/>

                                                <label htmlFor="stuff-category" className="form-category-label">Stuff category</label>
                                                <input type="text" name="stuff-category" placeholder="i.e. beverages" defaultValue="beverages"/>

                                                <label htmlFor="stuff-quantity" className="form-quantity-label">Stuff quantity</label>
                                                <input type="number" name="stuff-quantity" placeholder="i.e. 10" defaultValue={10}/>

                                                <input type="submit" value="Add stuff" onClick={props.toggle} />
                                        </form>
                                </div>

                        </div>
                </section>
        )
}