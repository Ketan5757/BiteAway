import { Grid } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const RestaurantDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-600 py-2 mt-10'>Home/Italy/Italian Taste/ Restaurant/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item sx={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover'
                        src="https://images.pexels.com/photos/243078/pexels-photo-243078.jpeg?_gl=1*ygju3r*_ga*MTMwNTIyNTM5LjE3NDk5Nzk2MjM.*_ga_8JE65Q40S6*czE3NTA1MTIzOTMkbzUkZzEkdDE3NTA1MTI3NjUkajQ3JGwwJGgw" 
                        alt="" />

                    </Grid>
                    <Grid item sx={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover'
                        src="https://images.pexels.com/photos/5216394/pexels-photo-5216394.jpeg?_gl=1*11b1gfe*_ga*MTMwNTIyNTM5LjE3NDk5Nzk2MjM.*_ga_8JE65Q40S6*czE3NTA1MTIzOTMkbzUkZzEkdDE3NTA1MTI4ODQkajUkbDAkaDA" 
                        alt="" />

                    </Grid>

                    <Grid item sx={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover'
                        src="https://images.pexels.com/photos/5953500/pexels-photo-5953500.jpeg?_gl=1*10334ez*_ga*MTMwNTIyNTM5LjE3NDk5Nzk2MjM.*_ga_8JE65Q40S6*czE3NTA1MTIzOTMkbzUkZzEkdDE3NTA1MTI4MzAkajU5JGwwJGgw" 
                        alt="" />

                    </Grid>

                </Grid>
            </div>
            <div className='pt-3 pb-5 '>
                <h1 className='text-4xl font-semibold'>Italian Taste</h1>
                <p className='text-gray-600 flex items-center gap-3'>
                    <LocationOnIcon/>
                    <span>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi doloremque, placeat, dignissimos vero odio ab doloribus officia 
                        repudiandae ullam totam deserunt dolor quam voluptate iusto fugiat numquam quisquam tempora quas?
                    </span>
                </p>
                <p className='text-gray-600 flex items-center gap-3'>
                    <CalendarTodayIcon/>
                    <span>
                        Mon-Sun 9:00 AM -11:30 PM(Today)
                    </span>
                </p>

            </div>
        </section>

    </div>
  )
}

export default RestaurantDetails