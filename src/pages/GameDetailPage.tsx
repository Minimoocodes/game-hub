import { useParams } from "react-router-dom";
import useSlug from "../hooks/useSlug";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  console.log("sss", slug);
  const { data: game, isLoading, error } = useSlug(slug!);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
