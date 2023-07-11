// Purpose: Projects page component for the application. 
import './Utilities.css';
import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    LinearProgress,
    IconButton
} from '@mui/material';

import LinkIcon from '@mui/icons-material/Link';

function Projects() {
    return (
        <Box
            className='projects-page'
            minHeight={"100vh"} 
        >
            <Grid
                container
                paddingX={"10%"}
                paddingY={"20%"}
            >
                <Grid
                    item xs={12}
                    paddingBottom={3}
                >
                    <Card 
                        sx={
                            {
                                textAlign: "left"
                            }
                        }
                    >
                        <CardContent
                        >
                            <Typography
                                variant="h3"
                                color={"primary"}
                            >
                                Lorem Ipsum
                            </Typography>
                            <Typography
                                variant="h4"
                                color={"secondary"}
                                paddingTop={2}
                            >
                                Description
                            </Typography>
                            <Typography variant="h6">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                            </Typography>
                            <Typography
                                variant="h4"
                                color={"secondary"}
                                paddingTop={2}
                            >
                                Skills
                            </Typography>
                            <Typography
                                variant="h6"
                                paddingBottom={3}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                            </Typography>
                            <LinearProgress
                                value={50}
                                variant="determinate"
                            />
                            <Grid container>
                                <Grid item xs={6}>

                                    <Typography
                                        variant="h6"
                                    >
                                        Progress
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} textAlign={"right"}>
                                    <IconButton
                                    >
                                        <LinkIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Projects;