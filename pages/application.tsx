import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';


const RemoteApp = dynamic(() => import('remote2/RemoteApp'), { ssr: false })

export default function Application() {
    const router = useRouter();
  return (
    <>
      <RemoteApp prefix={'application'} />
    </>
  )
}
