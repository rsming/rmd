import { clearData } from './DataAccess'

const SettlementForm = ({formData, setFormData, onPostSettlementRequested}) => {

  function clearForm() {
    console.log('clear form');
    setFormData(clearData);
  }

  function formDataPublish() {
    const settlementInfo = {
      rowId: formData.rowId,
      custometName: formData.custometName,
      startDate: formData.startDate
    }
    console.log("push request for:" + settlementInfo.id + ":" + settlementInfo.custometName);
    onPostSettlementRequested(settlementInfo);
    setFormData(clearData);
  }

  return (

    <div>

      <div className="field">
        <label htmlFor="customerName" className="label">Customer Name</label>
        <div className="control has-icons-left has-icons-right">
          <input type="text" className="input is-success"
              name="customerName" id="customerName"
              onChange={(event) => { setFormData({ ...formData, customerName: event.target.value }) }}
              value={formData.customerName}
              placeholder="Customer first and last names" />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label htmlFor="startDate" className="label">Start Date</label>
        <div className="control has-icons-left has-icons-right">
          <input type="date" className="input is-success"
            name="startDate" id="startDate"
            onChange={(event) => { setFormData({ ...formData, startDate: event.target.value }) }}
            value={formData.startDate} />
          <span className="icon is-small is-left">
            <i className="fas fa-calendar"></i>
          </span>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={clearForm}>Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light"onClick={formDataPublish}>Clear</button>
        </div>
      </div>

    </div>
  )
}

export default SettlementForm