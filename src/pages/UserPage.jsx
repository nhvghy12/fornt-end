import React, { useState  } from "react";
import { Table, Input,Button,Menu,Dropdown } from "antd";
import { EditOutlined,CloseCircleOutlined,FilterOutlined} from '@ant-design/icons';

export  function UserPage(){
 const [loading,setLoading] = useState(false);
  const [page,setPage] =useState(1);
  const [pageSize,setPageSize] =useState(10);
  
  
  const columns = [
    {
        title: 'Staff code',
        dataIndex: 'staffcode',
        key: 'staffcode',
        sortable: true,
        sorter: (a,b)=>{
          if (a.fullname > b.fullname) {
            return -1;
        }
        if (b.fullname > a.fullname) {
            return 1;
        }
        return 0;
        }
      },
      {
        title: 'Full Name',
        dataIndex: 'fullname',
        key: 'fullname',
        sorter: (a,b)=>{
          if (a.fullname > b.fullname) {
            return -1;
        }
        if (b.fullname > a.fullname) {
            return 1;
        }
        return 0;
        }
      },
      {
        title: 'UserName',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: 'Joined Date',
        dataIndex: 'joineddate',
        key: 'joineddate',
        sorter: (a,b)=>{
          if (a.joineddate> b.joineddate) {
            return -1;
        }
        if (b.joineddate > a.joineddate) {
            return 1;
        }
        return 0;
        }
    
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        sorter: (a,b)=>{
          if (a.type> b.type) {
            return -1;
        }
        if (b.type > a.type) {
            return 1;
        }
        return 0;
        }
      },
      {
        title: '',
        dataIndex: 'action',
        key: '',
        
         
      },
]

const data = [
  {staffcode:"LA0001"
,fullname:"Nguyen Van Phuc"
,username:"phucnv"
,joineddate:"2015" 
,type:"staff",
action: [<EditOutlined style={{marginRight:'15px'}}/>,<CloseCircleOutlined style={{color:'red'}}/>]

},
{staffcode:"LA0002"
,fullname:"Abc"
,username:"sasa"
,joineddate:"2018" 
,type:"admin"}
]

const pagination = {
    current: page,
    pageSize: pageSize,
    total: 100,
    pageSizeOptions : [5,10,15,20],
    className:"ant-btn-dangerous",
    dangerous: true,
    onChange: (page,pageSize) => {
      setPage(page);
      setPageSize(pageSize);
    }
    
    
  }
   
       return (
           <>
            <Dropdown.Button placement="bottom" icon={<FilterOutlined />}
             overlay={<Menu>
               <Menu.Item>Staff</Menu.Item>
               <Menu.Item>Admin</Menu.Item>
             </Menu>}
            >
             Type
            </Dropdown.Button>
           <Input.Search  placeholder="input search text" style={{ width: 200 }} 
            
           />
           <Button  style={{ background:"#e30c18",color:"white"}}>Create new user </Button> 
           <Table 
            
            columns={columns}
            pagination = {pagination}
            dataSource={data}
            
           />
           </>
       )
   
    
}