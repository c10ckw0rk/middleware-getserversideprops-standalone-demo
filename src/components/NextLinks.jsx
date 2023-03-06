import {useRouter} from "next/router";
import Link from "next/link";

export default function NextLinks({links}) {
  return links.map((pathname) => {
    return <div><Link href={pathname}>{pathname}</Link></div>
  })
}
