import { Card, CardContent, Typography } from "@mui/material";
import { SessionInfo } from "@/types/SessionInfo";

export const SessionCard = ({ session }: { session: SessionInfo }) => {
  return (
    <Card className="session-card">
      <CardContent>
        <Typography variant="h6">Sljedeće na redu u kalendaru</Typography>
        <Typography variant="body2">{session.activity}</Typography>
        <Typography variant="body2">
          {session.date.toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};
