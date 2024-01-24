import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { applelogo, navData } from '../constants/constant';
import { Box, Typography, styled } from '@mui/material';

const Component =styled(Box)({
    backgroundColor:"#f5f5f7",
    height:44
});
const NavBar= styled(Box)({
    display : 'flex',
    height : '100%',
    width : '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    '& > *':{
        color: 'rgba(0,0,0,0.8)',
        fontweight:600,
        opacity: 0.8,
        padding: '0 21px',
        fontSize:'0.8rem'
    }
});
const Header=()=>{

    return(
        <Component>
            <NavBar>
                <img src={applelogo} alt="logo" style={{width:15}} />
                {
                    navData.map(nav=>(
                        <Typography>{nav}</Typography>
                    ))
                }
                <SearchIcon fontSize='small'/>
                <ShoppingBagIcon fontSize='small'/>
            </NavBar>
        </Component>
    )
}

export default Header;

