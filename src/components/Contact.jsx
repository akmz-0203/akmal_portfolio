import { useState } from 'react'
import emailjs from 'emailjs-com'
import {
  Mail,
  MapPin,
  Phone,
  Link,
  GitBranch,
  X,
  Send,
  Loader2,
  CheckCircle,
  XCircle,
} from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@akmal.dev', href: 'mailto:hello@akmal.dev' },
  { icon: MapPin, label: 'Location', value: 'Kuala Lumpur, Malaysia', href: null },
  { icon: Phone, label: 'Phone', value: '+60 12-345 6789', href: 'tel:+60123456789' },
]

const socialLinks = [
  { icon: Link, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: GitBranch, href: 'https://github.com', label: 'GitHub' },
  { icon: X, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = (type, message) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 5000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      showToast('error', 'EmailJS configuration missing.')
      setLoading(false)
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      )

      showToast('success', 'Message sent successfully!')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      console.error('EmailJS Error:', error)
      showToast('error', 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full rounded-xl border border-slate-700/60 bg-slate-900/50 px-4 py-3 text-slate-200 placeholder-slate-500 backdrop-blur-md transition-colors focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20'

  return (
    <section id="contact" className="relative bg-slate-950 py-20 sm:py-28">
      <div className="relative mx-auto max-w-3xl px-4">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-8 backdrop-blur-md"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClass}
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
              placeholder="Your Email"
            />
          </div>

          <div className="mt-6">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={inputClass}
              placeholder="Subject"
            />
          </div>

          <div className="mt-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${inputClass} resize-none`}
              placeholder="Your Message"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3.5 text-sm font-semibold text-white"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>

      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 rounded-xl px-5 py-4 ${
            toast.type === 'success'
              ? 'bg-green-600 text-white'
              : 'bg-red-600 text-white'
          }`}
        >
          {toast.message}
        </div>
      )}
    </section>
  )
}