import { Card, CardContent, Button } from "@mui/material";

export const CandidateListCard = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardContent>
        <Button variant="contained" color="primary" onClick={onClick}>
          POGLEDAJ LISTU KANDIDATA
        </Button>
      </CardContent>
    </Card>
  );
};
