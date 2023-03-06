import ManualLinks from "@/components/ManualLinks";
import NextLinks from "@/components/NextLinks";

export default function ({links}) {
  return <>
    <div>
      <h2>Manual Links</h2>
      <ManualLinks links={links}/>
    </div>
    <div>
      <h2>Next Links</h2>
      <NextLinks links={links}/>
    </div>
  </>
}

// Simulate fetching page content
export async function fetchLinks() {
  const links = await new Promise((res) => {
    setTimeout(() => {
      res(['/some-random-pathname-1', '/some-random-pathname-2', '/some-random-pathname-3', '/some-random-pathname-4', '/some-random-pathname-5', '/some-random-pathname-6', '/some-random-pathname-7', '/some-random-pathname-8', '/some-random-pathname-9', '/some-random-pathname-10'])
    }, 200)
  })
  return {
    props: {
      links
    }
  }
}

