import { useState, useEffect } from 'react'
import SettlementForm from "./SettlementForm"
import Search from "./Search"
import SettlementInfoRow from "./SettlementInfoRow"
import { clearData, searchStatusInitialMessage, fetchData } from './DataAccess'

function App() {

  let [formData, setFormData] = useState(clearData)
  let [query, setQuery] = useState("");
  let [searchStatus, setSearchStatus] = useState(searchStatusInitialMessage);
  let [settlementList, setSettlementList] = useState([]);

  useEffect(() => {
    console.log(query, '- Has changed')
    if (query.length > 3) {
      console.log(`fetch data for ${query}`);
      fetchData(query, setSettlementList, setSearchStatus);
    } else {
      setSearchStatus(searchStatusInitialMessage);
      setSettlementList([]);
    }
  },[query])

  function onUpdateSettlementRequested(rowId) {
    console.log(`on update settlement: ${rowId}`);
    let settlmnt = settlementList[rowId];
    console.log(`update: ${settlmnt.rowId}`);
    setFormData(settlmnt);
  }

  function onPostSettlementRequested(settlement) {
    console.log(`on post settlement: ${settlement.rowId}:${settlement.startDate}`);
  }

  return (

    <div className="columns is-centered">
    <div className="column is-half">

    <div className="container">

     <div/>

      <div className="card card-content">
        <SettlementForm formData={formData} setFormData={setFormData} onPostSettlementRequested={onPostSettlementRequested} />
      </div>

      <div/>

      <div className="card card-content">
        <Search query={query} onQueryChange={(myQuery) => setQuery(myQuery)} searchStatus={searchStatus} />
        <table className="table">
          <thead>
            <tr>
              <th />
              <th><abbr title="Customer Name">Name</abbr></th>
              <th><abbr title="Start Date">Start Date</abbr></th>
            </tr>
          </thead>
          <tbody>
            { settlementList.map(settlement => (
                <SettlementInfoRow key={settlement.rowId} settlement={settlement}
                  onUpdateSettlement={(settlementId) => onUpdateSettlementRequested(settlementId)} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
