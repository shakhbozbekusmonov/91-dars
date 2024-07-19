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
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
	first_name: z.string().min(3, 'First name must be at least 3 characters'),
	last_name: z.string().min(3, 'Last name must be at least 3 characters'),
	email: z.string({ required_error: 'Email is required' }).email(),
	password: z.string().min(8, 'Password must be at least 8 characters'),
})

type FormData = z.infer<typeof schema>

const RegisterForm = ({ onSwitch }: { onSwitch: () => void }) => {
	const form = useForm<FormData>({
		resolver: zodResolver(schema),
	})

	const onSubmit = (data: FormData) => {
		console.log(data)
		form.reset()

		onSwitch()
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
				<FormField
					control={form.control}
					name='first_name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>First Name</FormLabel>
							<FormControl>
								<Input className='rounded-[4px]' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='last_name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Last Name</FormLabel>
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

				<Button className='block mx-auto' type='submit'>
					Register
				</Button>
			</form>
		</Form>
	)
}

export default RegisterForm
