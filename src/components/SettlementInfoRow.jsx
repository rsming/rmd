// import { EDIT ICON } from "icon library"

const SettlementInfoRow = ({ settlement, onUpdateSettlement }) => {
  return (
    <li className="">
      <button onClick={() => onUpdateSettlement(settlement.rowId)} type="button" className="">
        EDIT ICON
      </button>
      <div className="">
        <span className="">{settlement.customerName}</span>
        <span className="">{settlement.startDate}</span>
      </div>
    </li>
  )
}

export default SettlementInfoRow