
import { useState, useContext } from 'react';
import { BlogContext } from './BlogContext';
import axiosConfig from './axiosConfig';
import {
    Box, Card,
    CardContent, Grid, IconButton,
    TextField, Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import Error from './Error';


function EditPostPage() {
    const { post } = useContext(BlogContext);
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const navigate = useNavigate();


    if (post == null) {
        return (
            <Error message="No blog post found. Go back and try again" />
        )
    }

    const handleClick = (e) => {
        e.preventDefault();
        axiosConfig.put(`/blogs/${post.id}/`,
            {
                title: title,
                snippet: body.substring(0, 150),
                body: body,
                timestamp: post.timestamp
            })
            .then(res => {
                console.log(res);
                navigate('/blog');

            }
            )
            .catch(err => {
                console.log(err);
            }
            )
    }

    return (
        <Box
            className='home-page'
            minHeight={"100vh"}
        >
            <Grid
                container
                paddingTop={25}
                paddingX={4}
            >
                <Grid
                    item
                    xs={12}
                    paddingX={"15%"}
                >
                    <Card>
                        <CardContent>
                            <form>
                                <Grid
                                    container
                                    spacing={4}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                    >
                                        <Typography variant="h3" color={"primary"}>
                                            Edit Post
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                    >
                                        <TextField
                                            id="outlined-basic"
                                            label="Title"
                                            variant="outlined"
                                            fullWidth
                                            onChange={(e) => setTitle(e.target.value)}
                                            value={title}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                    >
                                        <TextField
                                            id="outlined-basic"
                                            label="Body"
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            onChange={(e) => setBody(e.target.value)}
                                            value={body}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                    >
                                        <IconButton
                                            variant="contained"
                                            color="primary"
                                            onClick={handleClick}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box >
    )
}


export default EditPostPage;