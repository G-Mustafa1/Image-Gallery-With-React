import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Link, Modal, TextField, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import axios from 'axios';
import Images from './components/Images';
import ImageSearch from './components/ImageSearch';
import Loader from './components/Loader';
import ImageDetail from './components/ImageDetail';
import Footer from './components/Footer';


function App() {
  const token = import.meta.env.VITE_ACCESS_KEY

  const [image, setImage] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [navSearch, setNavSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [chosen, setChosen] = useState(null);

  console.log(error);


  useEffect(() => {
    fetchApi();
  }, [])

  const fetchApi = async () => {
    setLoading(true);
    try {
      const api = await axios.get(`https://api.unsplash.com/photos/?per_page=30&client_id=${token}`);
      const data = api.data;
      setImage(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  const seacrhImage = async (query) => {
    if (!query) return;

    setLoading(true);
    try {
      const api = await axios.get(`https://api.unsplash.com/search/photos/?query=${query}&per_page=30&client_id=${token}`);
      const data = api.data;
      setImage(data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (search.length > 10) {
        return setError({ message: "Please enter less than 10 characters" });
      }
      if (search.trim() !== "") {
        setError(null);
        seacrhImage(search);
      }
    }
  }

  const handleClick = () => {
    if (search.trim() === "") {
      return;
    }
    if (search.length > 10) {
      return setError("Please enter less than 10 characters");
    }
    setError(null);
    seacrhImage(search);
  }

  useEffect(() => {
    setError(null);
    if (navSearch.trim() !== "") {
      seacrhImage(navSearch);
    }
  }, [navSearch]);

  return (
    <Box>
      <Navbar search={navSearch} setSearch={setNavSearch} />
      <ImageSearch search={search} setSearch={setSearch} seacrhImage={handleClick} handleEnter={handleEnter} />
      <ImageDetail open={open} setOpen={setOpen} chosen={chosen} />
      {
        loading ? (
          <Loader />
        ) : error ? (
          <Box sx={{ textAlign: 'center', color: 'red', marginTop: 2 }}>
            <Typography fontSize="30px" variant='h2' component='h2'>{error.message || error || "Something went wrong!"}</Typography>
          </Box>
        ) : (
          <Images image={image} setOpen={setOpen} chosen={chosen} setChosen={setChosen} />
        )
      }
      <Footer />
    </Box>
  )
}

export default App
