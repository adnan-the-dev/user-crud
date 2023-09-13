import React from 'react'
import "./graph.css"
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import dayjs from 'dayjs';
import { Box, Grid } from '@mui/material';
import { ChildGrid, HeaderBox, ParentBox, ParentGrid, PostionBox, SaleBox } from './Styled-component';

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

            <ParentGrid container >

                {/* *********************Create Box*************************** */}

                <ChildGrid item xl={3} lg={3} md={6} sm={12} xs={12} >
                    <SaleBox>


                        <Box
                            sx={{
                                bgcolor: 'background.paper',
                                boxShadow: 1,
                                borderRadius: 1,
                                p: 2,
                                // minWidth: 300,
                                width: 200,
                                height: 200,
                            }}
                        >
                            <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
                            <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                                98.3 K
                            </Box>
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
                        </Box>
                    </SaleBox>
                </ChildGrid>
                <ChildGrid item xl={3} lg={3} md={6} sm={12} xs={12} >
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            boxShadow: 1,
                            borderRadius: 1,
                            p: 2,
                            // minWidth: 300,
                            width: 200,
                            height: 200,
                        }}
                    >
                        <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
                        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                            98.3 K
                        </Box>
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
                    </Box>
                </ChildGrid>

                <ChildGrid item xl={3} lg={3} md={6} sm={12} xs={12} >
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            boxShadow: 1,
                            borderRadius: 1,
                            p: 2,
                            // minWidth: 300,
                            minWidth: 200,
                            height: 200,
                        }}
                    >
                        <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
                        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                            98.3 K
                        </Box>
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
                    </Box>
                </ChildGrid>


                <ChildGrid item xl={3} lg={3} md={6} sm={12} xs={12} >
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            boxShadow: 1,
                            borderRadius: 1,
                            p: 2,
                            // minWidth: 300,
                            width: 200,
                            height: 200,
                        }}
                    >
                        <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
                        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                            98.3 K
                        </Box>
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