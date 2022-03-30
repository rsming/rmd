import { useState, useEffect } from 'react'
import SettlementForm from "./SettlementForm"
import Search from "./Search"
import SettlementInfoRow from "./SettlementInfoRow"

function App() {

  let [query, setQuery] = useState("");
  let [settlementList, setSettlementList] = useState([]);

  useEffect(() => {
    console.log(query, '- Has changed')
    if (query.length > 3) {
      console.log("search ...");
      console.log(`fetch data for ${query}`);
      fetch('./data.json')
        .then(response => response.json())
        .then(data => {
          setSettlementList(data)
        });
    } else {
      setSettlementList([]);
    }
  },[query])

  function onUpdateSettlementRequested(rowId) {
    console.log(`on update settlement: ${rowId}`);
    let settlmnt = settlementList[rowId];
    console.log(`update: ${settlmnt.rowId}`);
  }

  return (
    <div className="">
      <h1 className="" />
        {/* <BiCalendar className="inline-block text-red-400 align-top" />Your Appointments</h1> */}
      <SettlementForm
        onSendAppointment={myAppointment => setSettlementList([...settlementList, myAppointment])}
        lastId={settlementList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}
      />

      <Search query={query} onQueryChange={(myQuery) => setQuery(myQuery)} />

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
