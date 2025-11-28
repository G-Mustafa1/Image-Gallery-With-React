import { ThumbUp } from '@mui/icons-material'
import { Box, Modal } from '@mui/material'
import React from 'react'

const ImageDetail = ({ open, setOpen, chosen }) => {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            sx={{
                backdropFilter: "blur(6px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: "20px 10px"
            }}
        >
            <Box
                sx={{
                    bgcolor: "white",
                    borderRadius: "12px",
                    width: "90%",
                    maxWidth: "800px",
                    outline: "none",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    boxShadow: 4,
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <img
                        src={chosen?.urls?.regular}
                        alt={chosen?.alt_description}
                        className="w-full md:object-cover md:h-[400px] object-contain h-[200px]"
                    />
                </Box>
                <Box sx={{ flex: 1, p: 3 }}>
                    <h2 className="sm:text-2xl text-lg font-bold">
                        {chosen?.alt_description || "Untitled Image"}
                    </h2>
                    <p className="text-gray-700 text-sm  mt-2">
                        {chosen?.description || "No description available."}
                    </p>

                    <p className="mt-4 text-sm text-gray-600">
                        <b>Photographer:</b> {chosen?.user?.name}
                    </p>

                    <p className="mt-1 text-sm text-gray-600 flex items-center gap-2.5">
                        <ThumbUp/> {chosen?.likes}
                    </p>

                    {chosen?.location?.name && (
                        <p className="mt-1 text-sm text-gray-600">
                            <b>Location:</b> {chosen?.location?.name}
                        </p>
                    )}

                    <a
                        href={chosen?.links?.html}
                        target="_blank"
                        className="mt-4 inline-block text-blue-600 underline"
                    >
                        View on Unsplash
                    </a>

                    <button
                        onClick={() => setOpen(false)}
                        className="mt-5 w-full bg-blue-500 text-white py-2 rounded"
                    >
                        Close
                    </button>
                </Box>
            </Box>
        </Modal >
    )
}

export default ImageDetail
