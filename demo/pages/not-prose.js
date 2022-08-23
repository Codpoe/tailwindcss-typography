import Head from 'next/head'
import MarkdownSampleShort from '../components/MarkdownSampleShort.mdx'

export default function Index() {
  return (
    <div className="antialiased text-gray-900">
      <Head>
        <title>Tailwind CSS Typography</title>
      </Head>
      <div className="grid grid-cols-2">
        <div className="bg-white dark:bg-slate-900">
          <article className="py-12 px-4 prose prose-slate prose-red dark:prose-invert mx-auto prose-headings:text-green-400">
            <h1>Prose</h1>
            <MarkdownSampleShort />
          </article>
        </div>
        <div className="bg-[#f1f1f1] dark:bg-slate-800">
          <article className="py-12 px-4 prose prose-slate prose-invert mx-auto not-prose">
            <h1>Not prose</h1>
            <MarkdownSampleShort />
          </article>
        </div>
      </div>
    </div>
  )
}

export const config = {
  unstable_runtimeJS: false,
}
