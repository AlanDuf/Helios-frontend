import React, {useState} from 'react';
import {Button, makeStyles, Modal, Backdrop, Container, CssBaseline, Typography, TextField, IconButton}
    from '@material-ui/core';
import AddBox from '@material-ui/icons/AddBox'


const useStyle = makeStyles(theme => ({
    button : {
        color: '#935d5d',
        justifyContent: 'center'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal_body: {
        color: '',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        width: '500px',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '10px'
    },
    form: {
        width: '90%',
        marginTop: theme.spacing(1),

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}))

const PopupNews = ({from, title, content}) => {
    const classes = useStyle()
    const [open, setOpen] = useState(false)


    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <IconButton
                variant="contained"
                className={classes.button}
                onClick={handleOpen}>
                {from === 'news' ? <AddBox /> : null}
            </IconButton>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }} >
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                          Add news
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="Title"
                                label="Title"
                                name="Title"
                                autoComplete="Title"
                                autoFocus
                                value={title}/>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="Content"
                                label="Content"
                                type="Content"
                                id="Content"
                                autoComplete="current-password" />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit} >
                                submit
                            </Button>
                        </form>
                    </div>
                </Container>
            </Modal>
        </div>
      );
}

export default PopupNews