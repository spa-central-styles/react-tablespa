import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListGroup from 'react-bootstrap/ListGroup';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';



const Table = () => {
  const [isDisabled,setIsDisabled] = useState(true);
  const [selected,setSelected]=useState("");
  const [isReview,setIsReview]=useState("false");
  const [isComment,setIsComment]=useState("false");
  


  const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    onSelect:  handleOnSelect,
    onSelectAll: handleOnSelectAll,
    classes: 'row-selected'
  };

  const handleReviewClick = (e) => {
    e.preventDefault();
    setIsReview("true");
  }
  const handleReplyClick = (e) => {
    e.preventDefault();
   setIsComment("true");
  }

  function handleOnSelect(row, isSelect, rowIndex, e) {
    if(isSelect){
   setIsDisabled(false);
   setSelected(row.id);
   }
   else 
   setIsDisabled(true);
  
   
 }

 function handleOnSelectAll  (isSelect, rows, e)  {
   if(isSelect){
     setIsDisabled(false);
    }
   else
   setIsDisabled(true);
   
 }

 const expandRow = {
  renderer: row => (
    <div>
      <p>{ `This Expand row is belong to rowKey ${row.id}` }</p>
      <p>You can render anything here, also you can add additional data on every row object</p>
      <p>expandRow.renderer callback will pass the origin row object to you</p>
    </div>
  ),
  showExpandColumn : true
 
};


 
    const columns = [{
  dataField: 'id',
  text: 'Task ID',
  sort: true,
   filter: textFilter()
}, {
  dataField: 'name',
  text: 'Task Type',
  sort: true,
   filter: textFilter()
}, {
  dataField: 'status',
  text: 'Status',
   filter: textFilter()
},
 {
  dataField: 'assignee',
  text: 'Assignee',
   filter: textFilter()
}
];




  
const resultSet=[{
 "id": "123456",
 "name": "Ad hoc",
 "status": "Pending Review",
 "assignee": "Fred Flinstone"
},
{
 "id": "345335",
 "name": "Ad hoc",
 "status": "In Review",
 "assignee": "Fred Flinstone"
},
{
 "id": "45435435",
 "name": "Ad hoc",
 "status": "Pending Review",
 "assignee": "Greg Flinstone"
}
]

  return (

    <>

    { 
        <main className="flex-grow-1 p-3 bg-white border border-secondary flow-sm">

        
            <div className="table-responsive">
              <BootstrapTable
                 classes="small table-sm"
                 bootstrap4
                keyField='id'
                data={resultSet}
                columns={columns}
                 selectRow={selectRowProp}
                    bordered={false}
                    filter={ filterFactory() }
                striped
                 filterPosition="top"
              
                  />

            </div>



           
         

     
        </main>
     }
  
    </>
  
  )
    
}

export default Table;