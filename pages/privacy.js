import Head from 'next/head'

const sections = [
  {
    title: '1. Overview',
    copy:
      'This LiveHindustan Clone is a demo project that showcases layout, routing, and data-fetching patterns in Next.js. We do not collect, store, or share personal information. Any names, stories, or categories shown on the site are part of a local mock dataset.',
  },
  {
    title: '2. Data Sources',
    copy:
      'All articles are pulled from the JSON file located at /data/articles.json. The file lives in your repository, so no data ever leaves your machine unless you deploy it. When deployed, you are responsible for ensuring the content complies with your jurisdiction’s privacy rules.',
  },
  {
    title: '3. Cookies & Analytics',
    copy:
      'This prototype does not include analytics, trackers, or cookies. If you integrate Google Analytics, Meta Pixel, or any other tracking library later, you should update this page with the type of data collected and opt-out instructions.',
  },
  {
    title: '4. Third-Party Media',
    copy:
      'Images are fetched from Unsplash CDN via remote patterns allowed in next.config.mjs. These public images are used solely for demonstration. If you replace them with user-uploaded assets, ensure the files respect copyright and data-protection laws.',
  },
  {
    title: '5. Contact & Updates',
    copy:
      'For any clarifications related to this demo privacy statement, please reach out via the Contact page. If this project is forked or reused, update the privacy policy to match your actual data practices.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — LiveHindustan Clone</title>
        <meta name="description" content="Privacy commitments for the LiveHindustan Clone demo project." />
      </Head>
      <section className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-red">Privacy</p>
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-3 text-gray-600">
            This page explains how the demo handles data today and what you must update if you plug in real services.
          </p>
        </div>

        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm">
          {sections.map((section) => (
            <article key={section.title} className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              <p className="text-gray-600">{section.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}



