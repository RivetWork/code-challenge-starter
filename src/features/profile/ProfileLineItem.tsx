import { Box, Stack } from "@mui/material";
import { Profile } from "./profileUtils";

type ProfileLineItemArgs = {
  profile: Profile;
}

const ProfileLineItem = ({
  profile
}: ProfileLineItemArgs) => {
  return (
    <Stack direction={'row'} spacing={1}>
      <Box sx={{width: '5em', height: '5em', backgroundColor: '#EFEFEF'}}>
        Image
      </Box>
      <Stack spacing={1} style={{padding: '.5em 0' }}>
        <Box>
          <h3 style={{margin: 0}}>{profile.first_name} {profile.last_name}</h3>
        </Box>
        <Box>{profile.email} - {profile.phone} </Box>
      </Stack>
    </Stack>
  )
}

export { ProfileLineItem }