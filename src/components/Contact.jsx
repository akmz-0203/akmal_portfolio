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

      showToast('success', 'Message sent successfully! I will get back to you soon.')
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
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
          <p className="mx-auto mt-6 max-w-2xl text-slate-300">
            Have a project in mind or want to collaborate? Send me a message and I&apos;ll respond
            as soon as possible.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT SIDE */}
          <div>
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-8 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-white">Contact Information</h3>

              <ul className="mt-8 space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10">
                      <Icon className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">{label}</p>
                      {href ? (
                        <a href={href} className="mt-1 block text-slate-200 hover:text-cyan-400">
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-slate-200">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-slate-800/60 pt-8">
                <p className="text-sm font-medium text-slate-500">Follow me</p>
                <div className="mt-4 flex gap-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-800/50 text-slate-400 hover:text-cyan-400"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div>
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
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Email"
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
                  placeholder="Message"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3.5 text-sm font-semibold text-white disabled:opacity-60"
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
        </div>
      </div>

      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 rounded-xl px-5 py-4 shadow-lg ${
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