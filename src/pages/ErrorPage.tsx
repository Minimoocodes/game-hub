import { Heading, Text, Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

interface Props {
  onSearch: (searchText: string) => void;
}

const ErrorPage = ({ onSearch }: Props) => {
  const error = useRouteError();

  return (
    <>
      <Navbar onSearch={onSearch} />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexpected error happened."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
