import Head from 'next/head'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: null, message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // Placeholder submit: In production, replace with API call (e.g., Formspree, serverless function).
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill all fields before submitting.' })
      return
    }
    setStatus({ type: 'success', message: 'Thanks for reaching out! This demo form does not send emails yet.' })
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <Head>
        <title>Contact — LiveHindustan Clone</title>
        <meta name="description" content="Send us feedback about the LiveHindustan Clone demo experience." />
      </Head>
      <section className="space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-red">Contact</p>
          <h1 className="text-3xl font-bold text-gray-900">Let’s connect</h1>
          <p className="mt-3 text-gray-600">
            Questions about the project? Drop a note via this form. You can replace the handler with any API or email
            service you prefer.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl bg-white p-6 shadow-sm"
          aria-label="Contact form"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
              Full Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                placeholder="Jaypal Chaudhary"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
              Email Address
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Message
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              placeholder="Share feedback or a collaboration idea..."
              required
            />
          </label>

          <button
            type="submit"
            className="rounded-full bg-brand-red px-6 py-2 font-semibold text-white transition hover:bg-brand-dark focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
          >
            Send Message
          </button>

          {status.type && (
            <p
              className={`text-sm ${
                status.type === 'error' ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {status.message}
            </p>
          )}
        </form>

        <div className="space-y-2 text-gray-600">
          <p>Email: <a href="mailto:editor@livehindustanclone.com" className="text-brand-red underline">editor@livehindustanclone.com</a></p>
          <p>HQ: Lucknow (Demo), Uttar Pradesh</p>
        </div>
      </section>
    </>
  )
}



