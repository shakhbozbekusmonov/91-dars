import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'
import { buttonVariants } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import VerifyOtpForm from '@/components/VerifyOtpForm'
import { AccountContext } from '@/context/account.provider'
import { cn } from '@/lib/utils'
import { User } from 'lucide-react'
import { useContext } from 'react'

const Account = () => {
	const { currentForm } = useContext(AccountContext)

	return (
		<Dialog>
			<DialogTrigger
				className={cn(
					buttonVariants({
						size: 'icon',
					})
				)}
			>
				<User />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Account</DialogTitle>
				</DialogHeader>

				{currentForm === 'register' && <RegisterForm />}
				{currentForm === 'verify' && <VerifyOtpForm />}
				{currentForm === 'login' && <LoginForm />}
			</DialogContent>
		</Dialog>
	)
}

export default Account
