import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
  return (
    <Card className='w-full max-w-[18rem]'>
      <div className={`${true ? 'cursor-pointer' : "cursor-not-allowed"} relative`}>
        <img
          className='w-full h-[10rem] rounded-t-md object-cover'
          src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?_gl=1*xez1na*_ga*MTMwNTIyNTM5LjE3NDk5Nzk2MjM.*_ga_8JE65Q40S6*czE3NTA0Mjc5MjUkbzQkZzEkdDE3NTA0Mjc5NDMkajQyJGwwJGgw"
          alt=""
        />

        <Chip
          size='small'
          className='absolute top-2 left-2'
          color={true ? "success" : "error"}
          label={true ? "open" : "closed"}
        />
      </div>

      <div className='p-4 text-part lg:flex w-full justify-between'>
        <div className='space-y-1'>
          <p className='font-semibold text-lg'>Itailan Taste</p>
          <p className='text-gray-500 text-sm'>
            Craving authentic Italian? Come taste the tradition.
          </p>
        </div>
        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  )
}

export default RestaurantCard
