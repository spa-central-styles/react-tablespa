import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListGroup from 'react-bootstrap/ListGroup';




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
   setSelected(row.dos);
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


 
    const columns2 = [{
  dataField: 'id',
  text: 'Product ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Product Name',
  sort: true
}, {
  dataField: 'price',
  text: 'Product Price'
}];

 const columns = [{
   dataField: 'dos',
   text: 'DOS',
   sort: true
 },
 {
   dataField: 'patient',
   text: 'Patient',
   sort: true
 },
 {
   dataField: 'billedCharges',
   text: 'Billed Charges',
   sort: true
 },
 {
   dataField: 'adjustedPrice',
   text: 'Adjusted Price',
   sort: true
 },
 {
   dataField: 'payor',
   text: 'Payor',
   sort: true
 },
 {
   dataField: 'tin',
   text: 'TIN',
   sort: true
 },
 {
   dataField: 'providercontact',
   text: 'Provider Contact',
   sort: true
 },
 {
   dataField: 'isightclaim',
   text: 'Data iSight Claim #',
   sort: true
 },
 {
   dataField: 'sentdate',
   text: 'Sent Date',
   sort: true
 },
 {
   dataField: 'duedate',
   text: 'Due Date',
   sort: true
 },
 {
   dataField: 'detail',
   text: 'Line Detail',

 }];

// const [resultSet,setResultSet]=useState("");
 // useLayoutEffect(()=>{
 //   getAgreement();
 //   },[resultSet]);

const getAgreement = () =>
{

apiClient.requestAPI(configData.api.pendingAgreementAPI.type,
   configData.api.pendingAgreementAPI.name)
   .then((result) => {
   // if(result.data.length){
   //   setResultSet(result.data[0].patient);
   // console.log(result.data[0]);
   // }
 }); 

}


  
const resultSet=[{
 "dos": "03/25/2020",
 "patient": "Flinstone, Fred",
 "billedCharges": 1977.56,
 "adjustedPrice": 1546.12,
 "payor": "United",
 "tin":"11-1111111",
 "providercontact": "Rowe",
 "isightclaim":"10007366352",
 "sentdate":"05/08/2020",
 "duedate":"Today"


},
{
 "dos": "03/20/2020",
 "patient": "Flinstone, Rose",
 "billedCharges": 1977.56,
 "adjustedPrice": 1546.12,
 "payor": "Max",
 "tin":"11-1111111",
 "providercontact": "Lowenstien",
 "isightclaim":"10007326549",
 "sentdate":"05/09/2020",
 "duedate":"Expiring Soon"
},
{
 "dos": "03/27/2020",
 "patient": "Flinstone, Little",
 "billedCharges": 1977.56,
 "adjustedPrice": 1546.12,
 "payor": "United",
 "tin":"11-1111111",
 "providercontact": "Washington-Greene",
 "isightclaim":"10009457754",
 "sentdate":"05/09/2020",
 "duedate":"Next Business Day"
}
]

  return (

    <>

    { 
        <main className="flex-grow-1 p-3 bg-white border border-secondary flow-sm">

        
            <div className="table-responsive">
              <BootstrapTable
                 classes="small table-sm mb-0"
                 bootstrap4
                keyField='dos'
                data={resultSet}
                columns={columns}
                expandRow={expandRow}
                 selectRow={selectRowProp}
                    bordered={false}
                striped
                 />

            </div>



           
         

     
        </main>
     }
  
    </>
  
  )
    
}

export default Table;