import {useRouter} from "next/router";

export default function ManualLinks({links}) {
  const {push} = useRouter()

  return links.map((pathname) => {
    return <div><a href={pathname} onClick={e => {
      e.preventDefault()
      push(pathname)
    }
    }>{pathname}</a></div>
  })
}
