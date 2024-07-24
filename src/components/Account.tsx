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
import { cn } from '@/lib/utils'
import { User } from 'lucide-react'
import { useState } from 'react'

const Account = () => {
	const [currentForm, setCurrentForm] = useState<
		'register' | 'verify' | 'login'
	>('login')

	const handleFormSwitch = (form: 'register' | 'verify' | 'login') => {
		setCurrentForm(form)
	}

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

				{currentForm === 'register' && (
					<RegisterForm onSwitch={() => handleFormSwitch('verify')} />
				)}
				{currentForm === 'verify' && (
					<VerifyOtpForm onSwitch={() => handleFormSwitch('login')} />
				)}
				{currentForm === 'login' && <LoginForm />}
			</DialogContent>
		</Dialog>
	)
}

export default Account
