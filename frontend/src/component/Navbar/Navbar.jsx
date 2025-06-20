import React from 'react'
import { Badge, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className='PX-5 z-50 py-[.8rem] bg-[#add8e6] lg:px-20 flex justify-between'>
      <div className='relative'>
        <li className='logo font-semibold text-gray-600 text-2xl absolute left-0'>BiteAway</li>
        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
          {/* Other flex items */}
          </div>
          </div>
          
      <div className='flex items-center space-x-2 lg:space-x-10'>
        <div className=''>
          <IconButton>
            <SearchIcon SX={{fontSize:"1.5rem"}}/>
          </IconButton>

        </div>
        <div className=''>
          <Avatar sx={{bgcolor:"gray"}}>K</Avatar>

        </div>

        <div className=''>
          <IconButton>
            <Badge color='secondary' badgeContent={2}>
              <ShoppingCartIcon SX={{fontSize:"1.5rem"}}/>

            </Badge>
            
          </IconButton>
          

        </div>

      </div>

    </div>
  )
}
