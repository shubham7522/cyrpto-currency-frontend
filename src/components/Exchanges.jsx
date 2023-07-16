import React, { useEffect } from "react";
import axios from "axios";
import { server } from "../index";
import { useState } from "react";
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from './ErrorComponent'
import ExchangeCard from "./ExchangeCard";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
      const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
        console.log(data)
      } catch (error) {
        setLoading(false);
        setError(true)
        
      }
    };
    fetchExchanges();
  }, []);
  if (error) return <ErrorComponent messages={'Error while loading Exchanges'} />
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
                key={i.id}
                alt={i.name}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;
