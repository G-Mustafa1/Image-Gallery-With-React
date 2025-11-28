import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const ImageSearch = ({ search, setSearch, seacrhImage, handleEnter }) => {
    return (
        <Box className="container mx-auto" marginTop={10} sx={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px" }}>
            <TextField
                onKeyDown={(e) => handleEnter(e)}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                sx={{ width: "70%" }} id="outlined-basic" label="Search" variant="outlined" />
            <Button
                onClick={seacrhImage} variant="contained">Search</Button>
        </Box>
    )
}

export default ImageSearch
