import { useParams } from "react-router-dom";
import useSlug from "../hooks/useSlug";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  console.log("sss", slug);
  const { data: game, isLoading, error } = useSlug(slug!);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
