// import { BiCalendarPlus } from "react-icons/bi";
import { useState } from 'react';

const SettlementForm = ({ onSendAppointment }) => {

  const clearData = {
    rowId: '',
    custometName: '',
    startDate: ''
  }

  let [formData, setFormData] = useState(clearData)

  function formDataPublish() {
    const settlementInfo = {
      id: formData.rowId,
      custometName: formData.custometName,
      startDate: formData.startDate
    }
    console.log("push request for:" + settlementInfo.id + ":" + settlementInfo.custometName);
    setFormData(clearData);
  }

  return (
    <div>
      {/* <button onClick={console.log("add appointment button click")} className="">
        <div>Add Appointment</div>
      </button> */}
      <div className="">
        <div className="">
          <label htmlFor="customerName" className="">
            Customer Name
        </label>
          <div className="">
            <input type="text" name="customerName" id="customerName"
              onChange={(event) => { setFormData({ ...formData, customerName: event.target.value }) }}
              value={formData.customerName}
              className="" />
          </div>
        </div>

        <div className="">
          <label htmlFor="startDate" className="">
            Apt Date
        </label>
          <div className="">
            <input type="date" name="startDate" id="startDate"
              onChange={(event) => { setFormData({ ...formData, startDate: event.target.value }) }}
              value={formData.startDate}
              className="" />
          </div>
        </div>

        <div className="">
          <div className="">
            <button type="submit" onClick={formDataPublish} className="">
              Submit
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettlementForm