import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import useUser from '@/hooks/useUser'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'

const Profile = () => {
	const { data: user, error, isLoading } = useUser()

	console.log(user)

	if (error) return <p>{error.message}</p>

	if (isLoading) return <p>Loading...</p>

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				className={cn(
					buttonVariants({
						variant: 'outline',
					})
				)}
			>
				{user && user?.username}
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Billing</DropdownMenuItem>
				<DropdownMenuItem>Team</DropdownMenuItem>
				<DropdownMenuItem>Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default Profile
