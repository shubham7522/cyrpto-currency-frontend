import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import btc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} overflow={"hidden"}>
      <motion.div style={{
        height:"80vh",
      }}
      animate={{
        translateY:"20px"
      }}
      transition={{
        duration:1,
        repeat:Infinity,
        repeatType:"reverse"
        
      }}>
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          filter={"grayscale(1)"}
          src={btc}
        />
      </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        m={"-20"}
      >
        XCrypto
      </Text>
    </Box>
  );
};

export default Home;
