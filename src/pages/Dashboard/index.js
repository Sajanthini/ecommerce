import React from 'react'
import DashboardBox from './components/dashboardBox'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
const Dashboard = () => {
  return (
    <>
      <div className='right-content'>
        <div className='row dashboardBoxWrapperRow'>
          <div className='col-8'>
            <div className='dashboardBoxWrapper d-flex'>
              <DashboardBox color={["#1da256", "#48d483"]} text='Total Users' number='277' topRightIcon={<PersonAddAltOutlinedIcon/>}/>
              <DashboardBox color={["#c012e2", "#eb64fe"]} text='Total Orders' number='277' topRightIcon={<PlaylistAddIcon/>}/>
              <DashboardBox color={["#2c78e5", "#60aff5"]} text='Total Products' number='277' topRightIcon={<ProductionQuantityLimitsOutlinedIcon/>}/>
              <DashboardBox color={["#e1950e", "#f3cd29"]} text='Total Reviews' number='277' topRightIcon={<ReviewsOutlinedIcon/>}/>
            </div>
          </div>

          <div className='col-4 pl-0'>
            <div className='box'>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard