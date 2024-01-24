import styled from '@emotion/styled';
import {Box, Typography} from '@mui/material';

const Component=styled(Box)({
    width: '100%',
    height:580,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    paddingTop:47,
    objectFit:'cover'
});

const Heading=styled(Box)({
    fontWeight:600,
    fontSize:56
})

const SubHeading=styled(Box)({
    fontSize:28,
    padding:'0 0 5px 0'
})

const linkStyle={color:'#2997ff', padding:'0 30px', fontSize:20}
const Section=({data}) =>{

    return(
        <Component style={{background: `url(${data.imageURL}) 50% 50% no-repeat`}}>
            <Heading style={{color: data.headColor}}> 
                {data.heading}
            </Heading>
            <SubHeading style={{color: data.subHeadColor}}>{data.subHeading}</SubHeading>
            <Typography> 
                <Typography component='span' style={linkStyle}>Learn More &gt;</Typography>
                <Typography component='span' style={linkStyle}>Buy &gt;</Typography>
            </Typography>
        </Component>
    )
}

export default Section;