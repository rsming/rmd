// import { EDIT ICON } from "icon library"

const SettlementInfoRow = ({ settlement, onUpdateSettlement }) => {
  return (
    <tr className="">
      <td className="" title="Edit settlement" onClick={() => onUpdateSettlement(settlement.rowId)}>
        <button className="button is-primary is-outlined is-small">
          <span className="icon is-small">
            <i className="fas fa-edit" />
          </span>
        </button>
      </td>
      <td className="">{settlement.customerName}</td>
      <td className="">{settlement.startDate}</td>
    </tr>
  )
}

export default SettlementInfoRow