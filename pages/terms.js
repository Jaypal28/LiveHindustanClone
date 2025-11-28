import Head from 'next/head'

const sections = [
  {
    title: 'Acceptance of Terms',
    copy:
      'By viewing or using the LiveHindustan Clone demo, you agree that the experience is provided “as is” for educational purposes. Do not treat the content as real news or rely on it for investment, health, or travel decisions.',
  },
  {
    title: 'Content Ownership',
    copy:
      'The mock articles and assets in /data/articles.json are fictional. If you substitute them with real stories, ensure you have rights to distribute that content and that you comply with the original publisher’s policies.',
  },
  {
    title: 'Permitted Use',
    copy:
      'You may clone, edit, or deploy this project for assignments, personal demos, or internal evaluations. Selling it as a real news product without validating facts, adding moderation, and updating policies is prohibited.',
  },
  {
    title: 'Limitation of Liability',
    copy:
      'The authors of this demo are not responsible for any loss or damages that result from using the code or ideas herein. Deploy it at your own risk, especially if you plug in live APIs or user-generated data.',
  },
  {
    title: 'Changes',
    copy:
      'These terms may be updated as the project evolves. When you extend or fork the codebase, replace this write-up with your own legal text describing distribution rights, user responsibilities, and contact info.',
  },
]

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions — LiveHindustan Clone</title>
        <meta name="description" content="Usage guidelines for the LiveHindustan Clone demo project." />
      </Head>
      <section className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-red">Terms</p>
          <h1 className="text-3xl font-bold text-gray-900">Terms &amp; Conditions</h1>
          <p className="mt-3 text-gray-600">
            Please read these demo terms before reusing the project. Update them when you go into production.
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



