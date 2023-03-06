import Page, {fetchLinks} from "@/components/Page";

export default function ({links}) {
  return <Page links={links}/>
}

export async function getServerSideProps() {
  return await fetchLinks()
}
