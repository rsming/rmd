
export const clearData = {
    rowId: '',
    customerName: '',
    startDate: ''
  }

export const searchStatusInitialMessage = 'Please enter search mask (more than 3 characters)';

export function fetchData(query, setSettlementList, setSearchStatus) {
  return fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      setSettlementList(data);
      setSearchStatus(`Found ${data.length} record(s) for '${query}'`)
  });

}