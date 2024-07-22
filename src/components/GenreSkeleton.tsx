import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GenreSkeleton() {
  return (
    <Card width="150px" borderRadius={10} marginY={"10px"}>
      <Skeleton />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GenreSkeleton;
