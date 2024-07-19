import { Button } from '@/components/ui/button'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'
import { APIClient } from '@/services/api-client'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const apiClient = new APIClient('/account/verify-otp/')

const VerifyOtpForm = ({ onSwitch }: { onSwitch: () => void }) => {
	const [countdown, setCountdown] = useState(120) // 2 minutes in seconds
	const [canResend, setCanResend] = useState(false)
	const [otp, setOtp] = useState('')

	useEffect(() => {
		if (countdown > 0) {
			const timerId = setInterval(() => {
				setCountdown(prev => prev - 1)
			}, 1000)
			return () => clearInterval(timerId)
		} else {
			setCanResend(true)
		}
	}, [countdown])

	const onSubmit = async () => {
		const email = window.localStorage.getItem('user-email')

		try {
			const res = await apiClient.post({
				code: otp,
				email: email,
				verify_type: 'register',
			})
			console.log(res)
			onSwitch()
		} catch (error) {
			toast.error((error as Error).message)
		}

		onSwitch()
	}

	const handleResendOtp = () => {
		setCountdown(120)
		setCanResend(false)
		// Add your resend OTP logic here
		console.log('OTP resent')
	}

	return (
		<div className='flex flex-col space-y-3 items-center'>
			<Label>One time password</Label>
			<InputOTP maxLength={6} onChange={e => setOtp(e)}>
				{[...Array(6)].map((_, index) => (
					<InputOTPGroup key={index}>
						<InputOTPSlot index={index} />
					</InputOTPGroup>
				))}
			</InputOTP>

			{countdown > 0 ? (
				<p>{`Please wait ${Math.floor(countdown / 60)}:${(
					'0' +
					(countdown % 60)
				).slice(-2)} to resend OTP`}</p>
			) : (
				<Button type='button' onClick={handleResendOtp} disabled={!canResend}>
					Resend OTP
				</Button>
			)}

			<Button type='submit' onClick={onSubmit} disabled={otp.length < 6}>
				Verify
			</Button>
		</div>
	)
}

export default VerifyOtpForm
