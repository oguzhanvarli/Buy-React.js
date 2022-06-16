import React, { useEffect } from 'react'
import Tooltip from '@mui/material/Tooltip';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

function Cart() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const count = useSelector((state) => state.cart.value)
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
   
    
    return (
        <>
        <Link to='/cart'>
            <Box className='d-flex'>
                <Tooltip title="Go Cart" className="cart-icon">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <LocalMallIcon color="white" fontSize="large" />
                    </IconButton>
                </Tooltip>
                <span className='badge badge-warning' id='lblCartCount'>{count}</span>
            </Box>
            </Link>
        </>
    )
}

export default Cart