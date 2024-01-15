'use client'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

import { z } from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

import { Input } from '@/components/ui/input'
import { Fox, FoxActionName } from '@/components/Models/Fox'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  message: z.string().min(1, 'Message is required'),
})
type FormValues = z.infer<typeof schema>

const Contact = () => {
  const form = useForm<FormValues>({ resolver: zodResolver(schema) })

  const { handleSubmit, reset } = form

  const [loading, setLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] =
    useState<FoxActionName>('idle')

  const handleFocus = () => setCurrentAnimation('walk')
  const handleBlur = () => setCurrentAnimation('idle')

  async function sendMessage(data: FormValues) {
    try {
      setLoading(true)
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          to_name: 'Marwan Ezzat',
          from_email: data.email,
          to_email: 'Marwan.ezzat.badawi@gmail.com',
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      )
      setLoading(false)
      toast.success('Thank you for your message :)')
      reset({
        name: '',
        email: '',
        message: '',
      })
      setCurrentAnimation('idle')
    } catch (error) {
      setLoading(false)
      console.error(error)
      setCurrentAnimation('idle')
      toast.error("I didn't receive your message :(")
    }
  }

  const onSubmit: SubmitHandler<FormValues> = data => {
    setLoading(true)
    setCurrentAnimation('hit')
    sendMessage(data)
  }

  return (
    <section className="relative flex flex-col text-primary lg:flex-row">
      <div className="flex min-w-[50%] flex-1 flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-8"
          >
            <div className="grid w-full gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        {...field}
                        onFocus={handleFocus}
                        onBlur={e => {
                          handleBlur()
                          field.onBlur()
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid w-full gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Email"
                        {...field}
                        onFocus={handleFocus}
                        onBlur={e => {
                          handleBlur()
                          field.onBlur()
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid w-full gap-4">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your Message"
                        {...field}
                        onFocus={handleFocus}
                        onBlur={e => {
                          handleBlur()
                          field.onBlur()
                        }}
                        className="resize-none"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              disabled={loading}
              className="w-full text-lg font-bold"
              type="submit"
            >
              {loading ? 'Sending' : 'Send'}
              {
                <Loader2
                  className={`animate-spin ${
                    loading ? 'inline-block' : 'hidden'
                  }`}
                />
              }
            </Button>
          </form>
        </Form>
      </div>

      <div className="h-[350px] w-full md:h-[550px] lg:h-auto lg:w-1/2">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={null}>
            <Fox
              animation={currentAnimation}
              position={[0.5, 0, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.7, 0.7, 0.7]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
