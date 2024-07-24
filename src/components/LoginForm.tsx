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
import { APIClient } from '@/services/api-client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

const schema = z.object({
	email: z.string({ required_error: 'Email is required' }).email(),
	password: z.string().min(8, 'Password must be at least 8 characters'),
})

type FormData = z.infer<typeof schema>

const apiClient = new APIClient('/users/login/')

const LoginForm = () => {
	const form = useForm<FormData>({
		resolver: zodResolver(schema),
	})

	const onSubmit = async (data: FormData) => {
		try {
			const res = await apiClient.post(data)

			console.log(res)

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

				<Button className='block mx-auto' type='submit'>
					Login
				</Button>
			</form>
		</Form>
	)
}

export default LoginForm
