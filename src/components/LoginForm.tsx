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
import { axiosInstance } from '@/services/api-client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

const schema = z.object({
	user_input: z.string({ required_error: 'Email or username is required' }),
	password: z.string().min(8, 'Password must be at least 8 characters'),
})

type FormData = z.infer<typeof schema>

const LoginForm = () => {
	const form = useForm<FormData>({
		resolver: zodResolver(schema),
	})

	const onSubmit = async (data: FormData) => {

		console.log(data)

		try {
			const res = await axiosInstance
				.post('/users/login/', data)
				.then(res => res.data)

			console.log(res)
			
			if (res) {
				window.localStorage.setItem('access', res.access)
				window.localStorage.setItem('refresh', res.refresh)
			}

			form.reset()
		} catch (error) {
				toast.error((error as Error).message)
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
				<FormField
					control={form.control}
					name='user_input'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email or Username</FormLabel>
							<FormControl>
								<Input className='rounded-[4px]' {...field} />
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

				<Button className='block mx-auto' type='submit'>
					Login
				</Button>
			</form>
		</Form>
	)
}

export default LoginForm
