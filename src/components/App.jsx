import { useState, useEffect } from 'react'
import SettlementForm from "./SettlementForm"
import Search from "./Search"
import SettlementInfoRow from "./SettlementInfoRow"
import { clearData, searchStatusInitialMessage } from './DataAccess'

function App() {

  let [formData, setFormData] = useState(clearData)
  let [query, setQuery] = useState("");
  let [searchStatus, setSearchStatus] = useState(searchStatusInitialMessage);
  let [settlementList, setSettlementList] = useState([]);

  useEffect(() => {
    console.log(query, '- Has changed')
    if (query.length > 3) {
      console.log(`fetch data for ${query}`);
      fetch('./data.json')
        .then(response => response.json())
        .then(data => {
          setSettlementList(data);
          setSearchStatus(`Found ${data.length} records for '${query}'`)
        });
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
    <div className="">
      <h1 className="" />
        {/* <BiCalendar className="inline-block text-red-400 align-top" />Your Appointments</h1> */}
      <SettlementForm formData={formData} setFormData={setFormData} onPostSettlementRequested={onPostSettlementRequested} />

      <Search query={query} onQueryChange={(myQuery) => setQuery(myQuery)} searchStatus={searchStatus} />

      <ul className="">
        {settlementList.map(settlement => (
            <SettlementInfoRow key={settlement.rowId}
              settlement={settlement}
              onUpdateSettlement={(settlementId) => onUpdateSettlementRequested(settlementId)}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
