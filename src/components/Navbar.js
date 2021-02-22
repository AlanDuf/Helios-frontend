import {useState} from "react"
import {useHistory} from "react-router-dom"
import {AppBar, Toolbar, Typography, IconButton, Divider, List, ListItem,
    ListItemIcon, ListItemText, Drawer, makeStyles} from '@material-ui/core'
import {Home, CommentOutlined, AccountCircle, InsertChart, Menu, ArrowLeft} from '@material-ui/icons'


const style = makeStyles(theme => ({
    menu: {
        marginRight: theme.spacing(2)

    },
    typo: {
        flexGrow: 1
    },
    drawerToolBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
}))

const Navbar = props => {
    const classes = style()
    const history = useHistory()
    const [openDrawer, setOpenDrawer] = useState(false)

    const handleClickPage = page => {
        if (page === props.name)
            return

        history.push(page)
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menu}
                        onClick={() => setOpenDrawer(true)}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={classes.typo} >
                        {props.name}
                    </Typography>
                    <IconButton onClick={() => history.push("Profile")}>
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="persistent" anchor="left" open={openDrawer}>
                <div className={classes.drawerToolBar}>
                    <IconButton onClick={() => setOpenDrawer(false)}>
                        <ArrowLeft />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {
                        [
                            {name: "Dashboard", icon: <Home />},
                            {name: "Rating", icon: <CommentOutlined />},
                            {name: "Leaderboard", icon: <InsertChart />}
                        ].map(({name, icon}) => (
                            <ListItem button key={name} onClick={() => handleClickPage(name)}>
                                <ListItemIcon>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={name} />
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </div>
    )
}

export default Navbar