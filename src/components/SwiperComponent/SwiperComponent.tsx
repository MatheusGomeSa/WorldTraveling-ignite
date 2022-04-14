import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box, Flex, Stack, Text, Link } from "@chakra-ui/react";

interface SlideProps {
    id: string;
    ImageSrc: string;
    Country: string;
    Text: string;
}

interface SwiperComponentProps {
    SwiperSlideArray?: SlideProps[] | null;
}



export function SwiperComponent({ SwiperSlideArray = null }: SwiperComponentProps) {


    return (
        <Box as='div' >

            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
                {SwiperSlideArray && (
                    SwiperSlideArray?.map(slide => {
                        return (
                            <SwiperSlide key={slide.id} style={{ listStyle: "none" }} >
                                <Link href={`continent/${slide.id}`} textDecor='none' _hover={{ textDecor: 'none' }} >
                                    <Flex align="center" justify="center" h={400} bgImage={slide.ImageSrc} backgroundSize='cover' color='white'>
                                        <Stack spacing={10}>
                                            <Text fontSize={['2xl', '3xl']} textAlign="center" fontWeight='bold'>{slide.Country}</Text>
                                            <Text fontSize={['lg', 'xl']} textAlign="center">{slide.Text}</Text>
                                        </Stack>
                                    </Flex>
                                </Link>
                            </SwiperSlide>
                        )
                    }))}

            </Swiper>
        </Box >
    );
}