import { Box, Divider, Stack } from "@mui/material";
import { useSelector } from "react-redux"
import { ProfileLineItem } from "./ProfileLineItem";
import { profileList } from "./profileSlice";

const ProfileList = () => {
  const profiles = useSelector(profileList)
  console.log('posts?', profiles);
  return (
    <Stack divider={<Divider/>}>
      { profiles && profiles.map((profile)=>(
        <Box sx={{padding: '.5em'}} key={profile.email}>
          <ProfileLineItem profile={profile} />
        </Box>
      ))}
    </Stack>
  )
}

export { ProfileList }