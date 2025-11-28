import { Masonry } from '@mui/lab'
import { Box } from '@mui/material'
import React from 'react'

const Images = ({ image, setOpen, setChosen }) => {
    return (
        <Box className="container mx-auto" sx={{ display: "flex", justifyContent: "center", padding: "15px 20px" }}>
            <Masonry spacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
                {image.map((item) => (
                    <img
                        key={item.id}
                        src={item.urls.regular}
                        alt={item.alt_description || "image"}
                        className="rounded-md shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02]"
                        onClick={() => {
                            setChosen(item);
                            setOpen(true);
                        }}
                    />

                ))}
            </Masonry>
        </Box>
    )
}

export default Images
