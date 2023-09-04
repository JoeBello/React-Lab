import { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import MaterialLink from "@mui/material/Link"
import Toolbar from "@mui/material/Toolbar"
import MenuIcon from "@mui/icons-material/Menu"
import { Link, Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { routes } from "../routes"

const DRAWER_WIDTH = 240

function DrawerContent() {
	return (
		<div>
			<Toolbar />
			<Divider />
			<List>
				{routes.map(({ path, label, Icon }, idx) => (
					<MaterialLink
						color="inherit"
						underline="none"
						component={Link}
						key={`${idx}-${label}`}
						to={path}
					>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<Icon />
								</ListItemIcon>
								<ListItemText primary={label} />
							</ListItemButton>
						</ListItem>
					</MaterialLink>
				))}
			</List>
		</div>
	)
}

export default function Shell() {
	const [mobileOpen, setMobileOpen] = useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Toaster />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
					ml: { sm: `${DRAWER_WIDTH}px` },
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
					<MaterialLink
						underline="none"
						color="inherit"
						variant="h6"
						component={Link}
						to="/"
					>
						React Lab
					</MaterialLink>
				</Toolbar>
			</AppBar>
			<Box component="nav" sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}>
				<Drawer
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{ keepMounted: true }}
					sx={{
						display: { xs: "block", sm: "none" },
						width: DRAWER_WIDTH,
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: DRAWER_WIDTH,
						},
					}}
					variant="temporary"
				>
					<DrawerContent />
				</Drawer>
				<Drawer
					sx={{
						display: { xs: "none", sm: "block" },
						width: DRAWER_WIDTH,
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: DRAWER_WIDTH,
						},
					}}
					variant="permanent"
				>
					<DrawerContent />
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					mt: 12,
					mb: 3,
					mx: { sm: 8 },
					width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
				}}
			>
				<Outlet />
			</Box>
		</Box>
	)
}
