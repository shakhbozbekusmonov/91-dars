import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { AccountContext } from '@/context/account.provider'
import { axiosInstance } from '@/services/api-client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

const schema = z.object({
	username: z.string().min(3, 'Username must be at least 3 characters'),
	email: z.string({ required_error: 'Email is required' }).email(),
	password: z.string().min(8, 'Password must be at least 8 characters'),
	confirm_password: z.string().min(8, 'Password must be at least 8 characters'),
})

type FormData = z.infer<typeof schema>

const RegisterForm = () => {
	const { handleFormSwitch } = useContext(AccountContext)

	const form = useForm<FormData>({
		resolver: zodResolver(schema),
	})

	const onSubmit = async (data: FormData) => {
		try {
			const res = await axiosInstance
				.post('/users/signup/', data)
				.then(res => res.data)

			if (res) {
				window.localStorage.setItem('access', res.access)
				window.localStorage.setItem('refresh', res.refresh)
			}

			form.reset()
			handleFormSwitch('verify')
		} catch (error) {
			toast.error((error as Error).message)
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input className='rounded-[4px]' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input className='rounded-[4px]' type='email' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input className='rounded-[4px]' type='password' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='confirm_password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<Input className='rounded-[4px]' type='password' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button className='block mx-auto' type='submit'>
					Register
				</Button>
			</form>
		</Form>
	)
}

export default RegisterForm
