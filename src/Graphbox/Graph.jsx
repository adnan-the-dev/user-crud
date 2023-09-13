import React from 'react'
import "./graph.css"
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
import { BoxIcon, ButtonBox, ChildGrid, HeaderBox, IconTypography, NumberBox, ParentBox, ParentGrid, PostionBox, SaleBox } from './Styled-component';

function Graph() {

    const today = dayjs();
    const tomorrow = dayjs().add(1, 'day');
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
                            </NumberBox>
                        </Box>
                    </SaleBox>
                </ChildGrid>




                <ChildGrid item xl={3} lg={3} md={6} sm={12} xs={12} >
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
                            <Box sx={{ color: 'text.secondary' }}>Total sales</Box>
                        </BoxIcon>

                        <NumberBox>
                            <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                                $1290
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
                        </NumberBox>
                    </Box>
                </ChildGrid>

                <ChildGrid item xl={3} lg={3} md={6} sm={12} xs={12} >
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
                            <Box sx={{ color: 'text.secondary' }}>Net sales</Box>
                        </BoxIcon>

                        <NumberBox>
                            <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                                $1940
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
                        </NumberBox>
                    </Box>
                </ChildGrid>


                <ChildGrid item xl={3} lg={3} md={6} sm={12} xs={12} >
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
                            <IconTypography isCanceled={1}>
                                <HighlightOffOutlinedIcon />
                            </IconTypography>
                            <Box sx={{ color: 'text.secondary' }}>Cancelled orders</Box>
                        </BoxIcon>
                     

                        <NumberBox>
                            <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                                12
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

                     {/* *******************Card button section*************** */}

                     <ButtonBox>
                        <Typography>
                            View detail
                        </Typography>
                        <Typography>
                            <KeyboardArrowRightOutlinedIcon/>
                        </Typography>
                     </ButtonBox>

                           

                        </NumberBox>
                    </Box>
                </ChildGrid>

            </ParentGrid>



            {/* <div>
                <Box
                    sx={{
                        width: 300,
                        height: 300,
                        backgroundColor: 'primary.dark',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                />

            </div> */}
        </ParentBox>

    )
}

export default Graph