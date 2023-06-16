import { useState } from 'react'
import {
	AppBar,
	Box,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography
} from '@mui/material'
import {
	Mail as MailIcon,
	Menu as MenuIcon,
	MoveToInbox as InboxIcon
} from '@mui/icons-material'


const DRAWER_WIDTH = 240

const drawer = (
	<div>
		<Toolbar />
		<Divider />
		<List>
			{
				["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))
			}
		</List>
		<Divider />
		<List>
			{
				["All mail", "Trash", "Spam"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))
			}
		</List>
	</div>
)

export default function App() {
	const [mobileOpen, setMobileOpen] = useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
					ml: { sm: `${DRAWER_WIDTH}px` }
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						React Lab
					</Typography>
				</Toolbar>
			</AppBar>
				<Drawer
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{ keepMounted: true }}
					sx={{
						display: { xs: "block", sm: "none" },
						width: DRAWER_WIDTH,
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: DRAWER_WIDTH
						}
					}}
					variant="temporary"
				>
					{drawer}
				</Drawer>
				<Drawer
					sx={{
						display: { xs: "none", sm: "block" },
						width: DRAWER_WIDTH,
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: DRAWER_WIDTH
						}
					}}
					variant="permanent"
				>
					{drawer}
				</Drawer>
		</Box>
	)
}
