import React from 'react'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import dayjs from 'dayjs';
import { Box, Grid, Typography } from '@mui/material';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import LineStyleOutlinedIcon from '@mui/icons-material/LineStyleOutlined';
import { BorderBox, BoxGrid, BoxIcon, BoxesGrid, ButtonBox, ChildGrid, HeaderBox, IconTypography, NumberBox, ParentBox, ParentGrid, PostionBox, SaleBox } from './Styled-component';

function Graph() {

    const today = dayjs();
    const tomorrow = dayjs().add(1, 'day');

    const outSale = [
        { name: "shadow 1", sale: "1499", grow: 3 },
        { name: "shadow 1", sale: "1499", grow: 3 },
        { name: "shadow 1", sale: "1499", grow: 3 },
        { name: "shadow 1", sale: "1499", grow: 3 },
        { name: "shadow 1", sale: "1499", grow: 3 },
        { name: "shadow 1", sale: "1499", grow: 3 },
        { name: "shadow 1", sale: "1499", grow: 3 },
    ]

    // const outSale = [
    //     { name: "shadow 1", sale: "1499", grow: 3 },
    //     { name: "shadow 1", sale: "1499", grow: 3 },
    //     { name: "shadow 1", sale: "1499", grow: 3 },
    //     { name: "shadow 1", sale: "1499", grow: 3 },
    //     { name: "shadow 1", sale: "1499", grow: 3 },
    //     { name: "shadow 1", sale: "1499", grow: 3 },
    //     { name: "shadow 1", sale: "1499", grow: 3 },
    // ]
    return (
        <ParentBox>
            <HeaderBox>
                <PostionBox>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                            <DatePicker
                                label=""
                                slotProps={{ textField: { size: 'small' } }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </PostionBox>
            </HeaderBox>

            {/* *********************Create Box*************************** */}
            <ParentGrid container >

                <ChildGrid item xl={3} lg={3} md={6} sm={12} xs={12} >
                    <SaleBox>
                        <Box
                            sx={{
                                bgcolor: 'background.paper',
                                boxShadow: 1,
                                borderRadius: 3,
                                p: 2,
                                // minWidth: 300,
                                width: 180,
                                height: 180,
                            }}
                        >
                            <BoxIcon>
                                <IconTypography>
                                    <StickyNote2OutlinedIcon />
                                </IconTypography>
                                <Box sx={{ color: 'text.secondary' }}>Total orders</Box>
                            </BoxIcon>

                            <NumberBox>
                                <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                                    342
                                </Box>
                            </NumberBox>

                            <NumberBox>
                                <Box
                                    component={TrendingUpIcon}
                                    sx={{ color: 'success.dark', fontSize: 16, verticalAlign: 'sub' }}
                                />
                                <Box
                                    sx={{
                                        color: 'success.dark',
                                        display: 'inline',
                                        fontWeight: 'medium',
                                        mx: 0.5,
                                    }}
                                >
                                    18.77%
                                </Box>
                                <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
                                    vs. last week
                                </Box>
                                <ButtonBox>
                                    <Typography>
                                        View detail
                                    </Typography>

                                    <Typography>
                                        <KeyboardArrowRightOutlinedIcon />
                                    </Typography>
                                </ButtonBox>
                            </NumberBox>
                        </Box>
                    </SaleBox>
                </ChildGrid>

            </ParentGrid>
            {/* ********************************Graph Box************************** */}

            <BoxesGrid container>

                <BoxGrid item xl={8} lg={8} md={6} sm={12} xs={12}>

                    <Box sx={{
                        display: 'flex',
                        flexWrap: "wrap"
                    }}>
                        {outSale.map((out, i) => (
                            <Box key={i}
                                sx={{
                                    boxShadow: 3,
                                    // width: '8rem',
                                    // height: '5rem',

                                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                    p: 1,
                                    m: 1,
                                    borderRadius: 2,
                                    textAlign: 'center',
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                            >
                                <Typography>
                                    {out.name}
                                </Typography>
                                <Box display='flex' alignItems="center" gap='5px'>
                                    <Typography>
                                        {out.sale}
                                    </Typography>
                                    <Typography sx={{ fontSize: '12px', color: "#73CB50" }}>
                                        {out.grow > 0 ? `+${out.grow}%` : `${out.grow}%`}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>



                </BoxGrid>
                <BoxGrid item xl={4} lg={4} md={6} sm={12} xs={12}><h2>hello</h2></BoxGrid>
            </BoxesGrid>

        </ParentBox>

    )
}

export default Graph